import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Github, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ButtonChangeTheme from "./ButtonChangeTheme";
import LanguageSwicht from "../blocks/LanguageSwicht";
import { cn } from "../../../lib/utils";

const Navblock = () => {
    const { i18n, t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    const navItems = [
        { path: '/docs', label: t('navbar.docs') },
        { path: '/components', label: t('navbar.components') },
        { path: '/blog', label: t('navbar.blog') },
        { path: '/playground', label: t('navbar.playground') },
    ];

    const activeClass = "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 dark:from-orange-400 dark:via-red-400 dark:to-orange-300";
    const inactiveClass = "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white";

    return (
        <nav className="p-4 transition-all duration-300 backdrop-blur-lg bg-transparent">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div>
                    <Link to="/" className="flex items-center text-xl font-bold" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img
                                src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746028694/logoCuboDifuminado_jwvegu.png"
                                className="h-10"
                                alt="Logo"
                            />
                            <span className="text-2xl font-semibold text-gray-900 dark:text-white ml-1">Cubex<span className="mask-linear-from-neutral-800">UI</span></span>
                        </motion.div>
                    </Link>
                </div>

                <div className="flex items-center flex-row w-auto">
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    cn("text-sm font-medium transition-colors", isActive ? activeClass : inactiveClass)
                                }
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => window.open("https://github.com/Ismael-Rvas/Cubex-UI", "_blank")}
                            className="p-2 ml-3 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 hidden sm:block"
                        >
                            <Github className="w-4 h-4" />
                        </button>
                        <LanguageSwicht />
                        <ButtonChangeTheme />

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#070707] p-4 flex flex-col items-start gap-6 transition-all duration-300">
                    <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-700 dark:text-gray-200 text-3xl">
                        <X />
                    </button>

                    <Link to="/" className="flex items-center" onClick={() => {
                        toggleMenu();
                        window.scrollTo(0, 0);
                    }}>
                        <img
                            src="https://res.cloudinary.com/ismaelrvas/image/upload/v1746028694/logoCuboDifuminado_jwvegu.png"
                            className="h-10"
                            alt="Logo"
                        />
                        <span className="text-2xl font-semibold text-gray-900 dark:text-gray-200 ml-1">Cubex<span className="mask-linear-from-neutral-800">UI</span></span>
                    </Link>

                    <div className="flex flex-col gap-4 w-full">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                    toggleMenu();
                                    window.scrollTo(0, 0);
                                }}
                                className={({ isActive }) =>
                                    cn("text-xl font-bold transition-colors", isActive ? activeClass : inactiveClass)
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navblock;