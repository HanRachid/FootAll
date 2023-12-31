import ApplicationLogo from "@/Components/ApplicationLogo";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import Games from "@/Components/Games";
import Nav from "@/Components/Nav";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Home(props: any) {
    return (
        <>
            <Nav auth={props.auth}></Nav>
            <Games></Games>
        </>
    );
}
