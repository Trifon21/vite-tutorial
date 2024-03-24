import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AuthProvider} from "./AuthContext.jsx";
import App from "./App.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)