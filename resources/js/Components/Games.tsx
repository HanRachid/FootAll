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
            <div className="w-40 flex justify-center font-bold">
                {day + " " + game}
            </div>
        );
    }
    return <div className="w-40 flex justify-center font-bold">{game}</div>;
}

export default function Games() {
    return (
        <div className="w-screen flex justify-start items-center bg-slate-800 h-40 text-white">
            {days.map(([day, games]: [string, string[]]) =>
                games.map((game: string, index: number) =>
                    showGames(index, day, game)
                )
            )}
        </div>
    );
}
