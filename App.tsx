import theme from 'utils/theme'
import { ThemeProvider } from '@shopify/restyle'
import Navigation from 'navigation'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}
