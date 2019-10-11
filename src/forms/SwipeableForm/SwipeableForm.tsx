import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import {BoxProps} from "@material-ui/core/Box";

import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import RecoveryForm from "../RecoveryForm/RecoveryForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        view: {
            padding: theme.spacing(2),
            [theme.breakpoints.up(720)]: {
                padding: theme.spacing(3),
            }
        }
    })
);

const RECOVERY_FORM_INDEX = 0;
const SIGN_IN_FORM_INDEX = 1;
const SIGN_UP_FORM_INDEX = 2;

interface SwipeableFormProps {
    initialIndex?: number;
    onSignIn?: VoidFunction;
    onSignUp?: VoidFunction;
    onRecovery?: VoidFunction;
    animateHeight?: boolean;
}

export default function (props: SwipeableFormProps) {
    const classes = useStyles();
    const {initialIndex, onSignIn, onSignUp, onRecovery, animateHeight} = props;
    const [index, setIndex] = React.useState(initialIndex !== undefined ? initialIndex : 1);

    const handleSignIn = () => {
        setIndex(SIGN_IN_FORM_INDEX);
        if (onSignIn) onSignIn();
    };
    const handleSignUp = () => {
        setIndex(SIGN_UP_FORM_INDEX);
        if (onSignUp) onSignUp();
    };
    const handleRecovery = () => {
        setIndex(RECOVERY_FORM_INDEX);
        if (onRecovery) onRecovery();
    };

    const View = (props: BoxProps) => (
        <div className={classes.view}>
            {props.children}
        </div>
    );

    return (
        <SwipeableViews index={index} animateHeight={animateHeight}>
            <View>
                <RecoveryForm
                    onSignIn={handleSignIn}
                />
            </View>
            <View>
                <SignInForm
                    onSignUp={handleSignUp}
                    onRecovery={handleRecovery}
                />
            </View>
            <View>
                <SignUpForm
                    onSignIn={handleSignIn}
                />
            </View>
        </SwipeableViews>
    );
}
