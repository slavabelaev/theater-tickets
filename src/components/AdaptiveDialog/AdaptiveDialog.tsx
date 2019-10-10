import React from 'react';
import {createStyles, makeStyles, Theme, useTheme, useMediaQuery} from "@material-ui/core";
import Dialog, {DialogProps} from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialogContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
            [theme.breakpoints.up(720)]: {
                padding: theme.spacing(3),
            },
        },
        actions: {
            marginLeft: 'auto'
        }
    })
);

interface AdaptiveDialogProps extends DialogProps {
    actions?: React.ReactNode;
}

export default function (props: AdaptiveDialogProps) {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const { open, onClose, children, actions } = props;

    const appBar = (
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={onClose as VoidFunction}
                    aria-label="close"
                >
                    <ArrowBackIcon />
                </IconButton>
                <div className={classes.actions}>
                    {actions}
                </div>
            </Toolbar>
        </AppBar>
    );

    return (
        <Dialog
            {...props}
            scroll="body"
            fullScreen={fullScreen}
            open={open}
            onClose={onClose}
        >
            {fullScreen ? appBar : null}
            <div className={classes.dialogContent}>
                {children}
            </div>
        </Dialog>
    );
}
