"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div className="justify-end items-center">
            <div className="cursor-pointer flex text-xs" style={darkMode ? { display: "none" } : { display: "flex" }} onClick={() => setDarkMode(!darkMode)}>
                <MoonIcon width={15} className="mr-1" />Dark Mode
            </div>
            <div className="cursor-pointer flex text-xs" style={!darkMode ? { display: "none" } : { display: "flex" }} onClick={() => setDarkMode(!darkMode)}>
                <SunIcon width={15} className="mr-1" />Light mode
            </div>
        </div >
    )
}

export default ThemeSwitcher;