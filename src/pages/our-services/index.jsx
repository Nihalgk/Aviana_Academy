import React from "react";
import { Navbar14 } from "./components/Navbar14";

import { Layout410 } from "./components/Layout410";
import { Cta31 } from "./components/Cta31";
import { Faq14 } from "./components/Faq14";

import { Footer1 } from "./components/Footer1";

export default function Page() {
    return (
        <div>
            <Navbar14 />

            <Layout410 />
            <Faq14 />
            <Cta31 />

            <Footer1 />
        </div>
    );
}
