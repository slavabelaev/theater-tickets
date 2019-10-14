import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {createStyles, makeStyles, Theme, Toolbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Collapse from "@material-ui/core/Collapse";

export interface CommentProps {
    fullName: string;
    avatarUrl: string;
    text: string;
    createdAt: Date;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            minHeight: theme.spacing(6),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(8),
            }
        },
        showFullTextButton: {
            marginLeft: 'auto'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        createdAt: {
            opacity: .5,
            fontSize: theme.typography.fontSize
        }
    })
);

export function Comment({
    fullName,
    avatarUrl,
    text,
    createdAt
}: CommentProps) {
    const classes = useStyles();
    const [showFullText, setShowFullText] = React.useState(false);
    const toggleShowFullText = () => setShowFullText(!showFullText);

    const header = (
        <div className={classes.header}>
            <div>{fullName}</div>
            <div className={classes.createdAt}>{createdAt.toDateString()}</div>
        </div>
    );
    return (
        <article>
            <ListItem component="div" alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={fullName} src={avatarUrl} />
                </ListItemAvatar>
                <Collapse in={showFullText} collapsedHeight="130px">
                    <ListItemText
                        primary={header}
                        secondary={text}
                    />
                </Collapse>
            </ListItem>
            <Toolbar component="footer" className={classes.toolbar}>
                <Button
                    startIcon={<ThumbUpIcon />}
                >
                    100
                </Button>
                <Button
                    startIcon={<ThumbDownIcon />}
                >
                    10
                </Button>
                <Button
                    className={classes.showFullTextButton}
                    onClick={toggleShowFullText}
                >
                    {showFullText ? 'Свернуть' : 'Читать дальше'}
                </Button>
            </Toolbar>
        </article>
    );
}

export default Comment;
