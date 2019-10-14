import React from "react";
import {useLocation, useHistory} from "react-router";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SwipeableForm from "../forms/SwipeableForm";

export const SIGN_IN_PAGE_ROUTE_PATH = "/sign-in";
export const SIGN_UP_PAGE_ROUTE_PATH = "/sign-up";
export const RECOVERY_PAGE_ROUTE_PATH = "/recovery";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 'calc(100vh - 64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(3),
            }
        }
    })
);

export function SwipeablePage() {
    const classes = useStyles();
    const { pathname } = useLocation();
    const history = useHistory();
    let initialIndex;

    switch (pathname) {
        case RECOVERY_PAGE_ROUTE_PATH: initialIndex = 0; break;
        case SIGN_IN_PAGE_ROUTE_PATH: initialIndex = 1; break;
        case SIGN_UP_PAGE_ROUTE_PATH: initialIndex = 2; break;
    }


    return (
        <Container className={classes.root} maxWidth={'xs'}>
            <SwipeableForm
                initialIndex={initialIndex}
                onSignIn={() => history.push(SIGN_IN_PAGE_ROUTE_PATH)}
                onSignUp={() => history.push(SIGN_UP_PAGE_ROUTE_PATH)}
                onRecovery={() => history.push(RECOVERY_PAGE_ROUTE_PATH)}
            />
        </Container>
    )
}

export default SwipeablePage;
