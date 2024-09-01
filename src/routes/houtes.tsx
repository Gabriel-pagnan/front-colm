import { RouteObject } from "react-router-dom";
import { PathEnum } from "../shared/enums/paths.enum";
import { Departments } from "../pages/Department";
import { NotFound } from "../pages/NotFound";
import { Questionary } from "../pages/Questionary";
import { User } from "../pages/User";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Result from "../pages/Result";

export const Routes: RouteObject[] = [
    {
        path: PathEnum.HOME,
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: PathEnum.DEPARTMENT,
        element: <Departments />,
        errorElement: <NotFound />
    },
    {
        path: PathEnum.QUESTIONARY,
        element: <Questionary />,
        errorElement: <NotFound />
    },
    {
        path: PathEnum.USER,
        element: <User />,
        errorElement: <NotFound />
    },
    {
        path: PathEnum.RESULT,
        element: <Result />,
        errorElement: <NotFound />
    }
]

export const NotLoggedRoutes: RouteObject[] = [
    // {
    //     path: PathEnum.LOGIN,
    //     element: <Login />,
    // },
    {
        path: PathEnum.REGISTER,
        element: <Register />,
    },
]