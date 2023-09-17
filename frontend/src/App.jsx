import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
