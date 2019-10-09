import React, {ReactNode} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LayoutAppBar from "./LayoutAppBar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

interface LayoutProps {
    children: ReactNode
}

export default function(props: LayoutProps) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <LayoutAppBar />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}
