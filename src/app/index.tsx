import "./index.scss"
import './index.css'

import { configure } from 'mobx';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './routers/app-router';
import { AuthProvider } from "@/entities/user/context";


configure({ enforceActions: 'never', });

export function Index() {
  return (
    <>
      <AuthProvider>
        <ToastContainer position='bottom-right' />
        <RouterProvider router={AppRouter} />
      </AuthProvider>
    </>
  );
}

export default Index;