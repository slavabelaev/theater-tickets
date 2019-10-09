import React, {ReactNode} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Hidden from "@material-ui/core/Hidden";

import LayoutAppBar from "./LayoutAppBar";
import LayoutBottomNavigation from "./LayoutBottomNavigation";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

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
            <Hidden only={['xl', 'lg', 'md', 'sm']}>
                <LayoutBottomNavigation />
            </Hidden>
        </React.Fragment>
    );
}
