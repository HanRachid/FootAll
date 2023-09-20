import React from "react";

export default function Nav() {
    const routes = [
        ["News", "/news"],
        ["Schedule", "/schedule"],
        ["Standings", "/standings"],
        ["Clips", "/Clips"],
    ];
    const main = [
        ["Language", "#"],
        ["Login", "/login"],
    ];

    return (
        <>
            <nav className="flex sm:justify-between items-center space-x-4 p-4 h-16 bg-black">
                <div>
                    {routes.map(([title, url]) => (
                        <a
                            href={url}
                            className="rounded-lg px-3 py-2 text-slate-500  text-lg hover:bg-slate-400 hover:text-slate-900 font-[900]"
                        >
                            {title}
                        </a>
                    ))}
                </div>
                <div>
                    {main.map(([title, url]) => (
                        <a
                            href={url}
                            className="rounded-lg px-3 py-2 text-slate-500 font-extrabold hover:bg-slate-400 hover:text-slate-900"
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}
