import { ThemeProvider } from 'styled-components'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Post } from './pages/Post'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path=":issueNumber" element={<Post />} />
    </Route>
  )
)

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
