import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconHome,
    IconSun,
    IconMoon,
    IconUsersGroup,
    IconCalendarEvent,
    IconPhone,
    IconInfoCircle
} from "@tabler/icons-react";

export function Navbar() {
    const theme = useSelector((state: any) => state.theme.theme);
    const dispatch = useDispatch();

    const iconColor = theme === "dark" ? "text-white" : "text-black"; // Dynamic icon color

    const links = [
        {
            title: "Home",
            icon: <IconHome className={`h-full w-full ${iconColor}`} />,
            href: "/",
        },
        {
            title: "Events",
            icon: <IconCalendarEvent className={`h-full w-full ${iconColor}`} />,
            href: "/hackathon",
        },
        {
            title: "Team",
            icon: <IconUsersGroup className={`h-full w-full ${iconColor}`} />,
            href: "#",
        },
        {
            title: "About",
            icon: <IconInfoCircle className={`h-full w-full ${iconColor}`} />,
            href: "#about",
        },
        {
            title: "Contact",
            icon: <IconPhone className={`h-full w-full ${iconColor}`} />,
            href: "#contact",
        }
    ];

    return (
        <div className={`fixed bottom-0 w-full flex justify-between items-center z-50 p-2 md:justify-center bg-transparent`}>
            <div className="md:hidden ml-4">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className={`p-2 rounded-full bg-transparent flex items-center justify-center border-none`}
                >
                    {theme === "dark" ? (
                        <IconSun className={`h-5 w-5 ${iconColor}`} />
                    ) : (
                        <IconMoon className={`h-5 w-5 ${iconColor}`} />
                    )}
                </button>
            </div>

            <div className="mr-4 md:mr-0">
                <FloatingDock
                    desktopClassName="bg-transparent"
                    items={links}
                />
            </div>

            <div className="hidden md:block absolute bottom-4 right-4">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className={`p-2 rounded-full bg-transparent flex items-center justify-center border-none`}
                >
                    {theme === "dark" ? (
                        <IconSun className={`h-5 w-5 ${iconColor}`} />
                    ) : (
                        <IconMoon className={`h-5 w-5 ${iconColor}`} />
                    )}
                </button>
            </div>
        </div>
    );
}