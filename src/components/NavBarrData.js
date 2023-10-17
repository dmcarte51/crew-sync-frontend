import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavBarrData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Calendar",
        path: "/cal",
        icon: <AiIcons.AiFillCalendar />,
        cName: "nav-text",
    },
        {
        title: "Register",
        path: "/reg",
        icon: <AiIcons.AiFillAlert />,
        cName: "nav-text",
    },
]