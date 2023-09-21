import { Link } from "@inertiajs/react";
import React from "react";

export default function Nav(props: any): React.JSX.Element {
    function navMenu(): React.JSX.Element {
        const routes: [string, string][] = [
            ["Home", "/"],
            ["News", "/news"],
            ["Schedule", "/schedule"],
            ["Standings", "/standings"],
            ["Clips", "/Clips"],
        ];

        const main: [string, string, ("post" | "get")?][] = [["Language", "#"]];

        if (props.auth.user === null) {
            main.push(["Login", "/login"]);
            main.push(["Register", "/register", "get"]);
        } else {
            main.push(["Logout", "/logout", "post"]);
        }

        return (
            <nav className="flex sm:justify-between items-center space-x-4 p-4 h-16 bg-black">
                <div>
                    {routes.map(([title, url]) => (
                        <Link
                            href={url}
                            key={title}
                            className="rounded-lg px-3 py-2 text-slate-300  text-lg hover:bg-slate-400 hover:text-slate-900 font-[900]"
                            as="button"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center">
                    {props.auth.user === null ? null : (
                        <div className="rounded-lg px-3 py-2 font-extrabold bg-slate-400 text-slate-900">
                            {props.auth.user.name}
                        </div>
                    )}
                    {main.map(([title, url, method]) => (
                        <Link
                            href={url}
                            method={method}
                            key={title}
                            className="rounded-lg px-3 py-2 text-slate-300 font-extrabold hover:bg-slate-400 hover:text-slate-900"
                            as="button"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </nav>
        );
    }

    return <>{navMenu()}</>;
}
