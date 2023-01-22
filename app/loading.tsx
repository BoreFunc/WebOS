import { useState } from "react";
import Head from "./head";

export default function Loading() {
    // Loading animation
    return <>
        <Head />
        <html>
            <body>
                <div>Loading WebOS ...</div>
                <div className="animeContainer">
                    
                </div>
            </body>
        </html>
    </>
}  