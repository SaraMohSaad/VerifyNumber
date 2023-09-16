import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes';

function App() {
  const user = null;

  const routes = Object.keys(ROUTES).reduce<
     {
        path?: string;
        element: JSX.Element;
     }[]
  >((prev, route) => {
     const restrictedPage = !(ROUTES as any)[route].public && !user;

     if (restrictedPage) {
      //return prev;
     }

     const Element = (ROUTES as any)[route].component;

     return prev.concat({
        path: (ROUTES as any)[route].path,
        element: <Element />,
     });
  }, []);

  routes.push({
     element: <Navigate to={ROUTES.Home.path} replace />,
     path: '*',
  });

  const router = createBrowserRouter(routes);

  return (
     <>
        <RouterProvider router={router} />
     </>
  );
}

export default App;
