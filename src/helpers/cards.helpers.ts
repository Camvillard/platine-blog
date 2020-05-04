import { themeColors } from "../theme/theme"
import IconMusic from "../components/Icons/IconMusic.component"

const { aqua, brightYellow, brightBlue, lightPink } = themeColors
const colors = [aqua, brightYellow, brightBlue, lightPink]

export const setColorBackground = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export const setIconBackground = (color: string) => {
  const selectedColors = []
  colors.forEach(c => {
    if (c !== color) {
      selectedColors.push(c)
    }
  })
  return selectedColors[Math.floor(Math.random() * selectedColors.length)]
}
