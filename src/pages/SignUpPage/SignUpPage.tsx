import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SignUpForm from "../../forms/SignUpForm/SignUpForm";
import SwipeableForm from "../../forms/SwipeableForm/SwipeableForm";

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

export default function () {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className={classes.root}>
            {/*<SignUpForm />*/}
            <SwipeableForm />
        </Container>
    )
}
