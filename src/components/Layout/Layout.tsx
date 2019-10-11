import React, {ReactNode} from 'react';

import LayoutAppBar from "./LayoutAppBar";

interface LayoutProps {
    children: ReactNode
}

export default function(props: LayoutProps) {
    return (
        <React.Fragment>
            <LayoutAppBar />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}
