
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import House from "../pages/House/House";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<House></House>
            },
           

        ]
    }
]);
