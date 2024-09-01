import React, { useEffect } from 'react';
import { BrowserRouter, createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import type { Router as RemixRouter } from '@remix-run/router';
import { NotLoggedRoutes, Routes } from './routes/houtes';
import { DrawerProvider } from './shared/context/DrawerContext';
import { getAuthorizationToken, verifyLoggedIn } from './shared/connections/auth';
import { request } from 'http';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { useRequests } from './shared/hooks/useRequests';
import { AppRoutes } from './routes';
import Login from './pages/Login';
import { AuthProvider } from './shared/context/AuthContext';

// const routes: RouteObject[] = [...NotLoggedRoutes];
// const routesLoggedIn: RouteObject[] = [...Routes].map((route) => ({
//   ...route,
//   loader: verifyLoggedIn
// }));

// const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])

function App() {
  // const { setUser } = useGlobalReducer();
  // const { request } = useRequests();

  // useEffect(() => {
  //   const token = getAuthorizationToken();
  //   if (token) {
  //     request(URL_USER, MethodsEnum.GET, setUser);
  //   }
  // }, []);

  return (
    <>
      {/* <DrawerProvider>
        <RouterProvider router={router} />
      </DrawerProvider> */}
      <AuthProvider>
          <Login>
            <DrawerProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </DrawerProvider>
          </Login>
      </AuthProvider>
    </>
  );
}

export default App;
