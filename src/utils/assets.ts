// 拿到 /assets/images下的所有png,jpg,gif,svg图片
const imageModules = import.meta.glob('@/assets/images/**/*.{png,jpg,gif,svg}', { eager: true, import: 'default' })

/**
 * 获取 /assets/images 下的静态资源
 * @param url ../assets/images + url
 * @returns 静态资源路径
 */
export const getAssetsFile = (path: string) => {
  // 验证path参数，防止路径遍历攻击
  if (!/^\/[^\/]+/.test(path)) {
    console.error('提供的路径无效')
    return undefined
  }

  // 构建完整的图片路径
  const imagePath = `/src/assets/images${path}`

  // 检查图片路径在imageModules中是否存在
  if (imageModules.hasOwnProperty(imagePath)) {
    return imageModules[imagePath] as string
  } else {
    console.log(`找不到路径的图像: ${imagePath}`)
    return undefined
  }
}
