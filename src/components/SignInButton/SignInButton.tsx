import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import {ButtonProps} from "@material-ui/core/Button";
import SwipeableForm from "../../forms/SwipeableForm";

export default function (props: ButtonProps) {
    const [open, setOpen] = React.useState(false);
    const {onClick, ...otherProps} = props;
    const toggleOpen = () => setOpen(!open);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        toggleOpen();
        if (onClick) onClick(event);
    };

    const dialog = (
        <Dialog
            maxWidth="xs"
            scroll="body"
            open={open}
            onClose={toggleOpen}
        >
            <SwipeableForm animateHeight />
        </Dialog>
    );

    return (
        <React.Fragment>
            <Button {...otherProps} onClick={handleClick}>
                Войти
            </Button>
            {dialog}
        </React.Fragment>
    );
}
