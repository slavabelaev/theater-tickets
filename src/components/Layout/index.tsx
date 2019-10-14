import React from "react";

import LayoutAppBar from "./LayoutAppBar";

export const Layout: React.FC  = (props) => {
    return (
        <>
            <LayoutAppBar />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
