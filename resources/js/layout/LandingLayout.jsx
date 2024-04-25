import { Head } from "@inertiajs/react";
import React from "react";

function LandingLayout({ children }) {
    return (
        <>
            <Head>
                <title>Cardib</title>
            </Head>
            <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
                {children}
            </div>
        </>
    );
}

export default LandingLayout;
