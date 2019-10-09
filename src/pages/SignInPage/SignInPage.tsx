import React from 'react';
import Container from "@material-ui/core/Container";
import SignInForm from "../../forms/SignInForm/SignInForm";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

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
        <Container className={classes.root}>
            <SignInForm />
        </Container>
    )
}
