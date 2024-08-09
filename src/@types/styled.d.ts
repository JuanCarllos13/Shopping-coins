// styled.d.ts
import 'styled-components'
import theme from '../Theme/index'

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}