
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './Components/GetUser/User';
import { AddUser } from './Components/AddUser/AddUser';
import { EditUser } from './Components/UpdateUser/UpdateUser';

function App() {

    const route = createBrowserRouter([
      {
        path: "/",
        element: <User />,
      },
      {
        path: "/add",
        element: <AddUser />,
      },
      {
        path: "/edit/:id",
        element: <EditUser />,
      }
    ])

  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
