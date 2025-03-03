import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import 'antd/dist/reset.css';
import './index.css'
import { persistor, store } from './redux/store.ts'
import router from './routes/routes.tsx'
import { Toaster } from 'sonner'
import { HelmetProvider } from 'react-helmet-async'
const theme = {
  token: {
    colorPrimary: '#3B82F6',
    colorLink: '#F97316',
  },
};
createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider theme={theme}>
        <HelmetProvider>
        <RouterProvider router={router} />
        </HelmetProvider>
      </ConfigProvider>
    </PersistGate>
    <Toaster position='top-center' duration={1500} />
  </Provider>
)
