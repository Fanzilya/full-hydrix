import "./index.scss"
import './index.css'

import { configure } from 'mobx';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './routers/app-router';


configure({ enforceActions: 'never', });

export function Index() {
  return (
    <>
      <ToastContainer position='bottom-right' />
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default Index;