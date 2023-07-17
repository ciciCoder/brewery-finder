import { TooltipProvider } from './components/ui/tooltip'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
