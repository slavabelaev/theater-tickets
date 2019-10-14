import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {IconButtonProps} from "@material-ui/core/IconButton";

export interface LikeButtonProps extends IconButtonProps {
    initialCount?: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          display: 'flex',
          alignItems: 'center'
        },
        counter: {
            fontSize: theme.typography.button.fontSize
        }
    })
);

export function LikeButton({initialCount = 100, ...buttonProps}: LikeButtonProps) {
    const classes = useStyles();
    const [active, setActive] = React.useState(false);
    const toggleActive = () => setActive(!active);
    return (
        <div className={classes.root}>
            <IconButton
                {...buttonProps}
                color={active ? 'primary' : undefined}
                onClick={toggleActive}
            >
                <ThumbUpIcon />
            </IconButton>
            <span className={classes.counter}>
                {active ? initialCount + 1 : initialCount}
            </span>
        </div>
    )
}

export default LikeButton;
