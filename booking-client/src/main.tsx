import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import { router } from './routes';
import { store } from './rtk-app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
