import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './components/User';
import Edit from './components/Edit';
import Add from './components/Add';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
