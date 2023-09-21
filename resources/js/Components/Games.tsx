import React, { ReactElement } from "react";
import ApplicationLogo from "./ApplicationLogo";
const days: [string, string[]][] = [
    ["oct 11", ["A", "B", "C"]],
    ["oct 12", ["D", "E"]],
    ["oct 13", ["F"]],
];

function showGames(index: number, day: string, game: string): ReactElement {
    if (index === 0) {
        return (
            <React.Fragment key={game}>
                <div className="w-40 h-full flex justify-center items-center font-bold border-l-2 border-x-sky-600">
                    {day}
                </div>
                <div className="w-40 h-full flex justify-center items-center font-bold">
                    {game}
                </div>
            </React.Fragment>
        );
    }
    return (
        <div
            key={game}
            className="w-40 h-full flex justify-center items-center font-bold"
        >
            {game}
        </div>
    );
}

export default function Games(): React.JSX.Element {
    return (
        <div className="w-screen flex justify-start items-center bg-slate-800 h-40 text-white ">
            {days.map(([day, games]: [string, string[]]) =>
                games.map((game: string, index: number) =>
                    showGames(index, day, game)
                )
            )}
        </div>
    );
}
