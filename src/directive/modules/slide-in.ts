import type { DirectiveBinding } from 'vue'
// 距离视口底部的距离
const DISTANCE = 200
// 动画持续时间
const DURATION = 1000
// 动画集合
const animationMap = new WeakMap() //不使用map避免内存泄漏
/**
 * 监听元素是否进入视口
 * @param el
 * @param binding
 */
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    // 判断目标元素是出现在上视口还是下视口  可重复触发
    if (entry.boundingClientRect.top > entry.rootBounds!.top) {
      // 找出这个元素对应的动画
      const animation = animationMap.get(entry.target)
      if (animation) {
        // entry.target.getAnimations()[0].play() // 这个方法可以获取所有的动画
        // 播放该元素的动画
        animation.play()
      }
    }
  }
})

/**
 * 判断元素是否在视口下方
 * @param el
 * @returns
 */
function isBelowViewport(el: HTMLElement) {
  //判断是否在视口下方
  const rect = el.getBoundingClientRect()
  return rect.top > window.innerHeight
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (!isBelowViewport(el)) return

    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
          opacity: 0,
        },
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
      ],
      {
        duration: binding.arg || DURATION,
        easing: 'ease',
      },
    )
    animation.pause()
    animationMap.set(el, animation)
    ob.observe(el)
  },
  unmounted(el: HTMLElement) {
    //卸载时候取消监听
    ob.unobserve(el)
  },
}