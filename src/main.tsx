import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AuthProvider} from "./AuthContext.tsx";
import App from "./App.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed tro find root element")

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <div>404</div>
    },
    {
        path: "/about-us",
        element: <div>About us</div>
    }
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)