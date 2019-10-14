import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import FavoriteButton from "./FavoriteButton";
import ShareButton from "./ShareButton";
import CommentsButton from "./CommentsButton";
import OrderButton from "./OrderButton";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {},
        media: {
            height: 0,
            paddingTop: '80%', // 16:9
        },
        orderButton: {
            marginLeft: 'auto'
        },
        title: {
            display: 'inline-block',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 200
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main,
        },
    }),
);

export interface ServiceCardProps {
    title: string;
    image: string;
    date: string;
}

export function ServiceCard(props: ServiceCardProps) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            9.2
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={
                        <span className={classes.title}>
                            {props.title}
                        </span>
                    }
                    subheader={props.date}
                />
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title=""
                />
                <CardActions disableSpacing>
                    <FavoriteButton />
                    <ShareButton />
                    <CommentsButton />
                    <OrderButton
                        className={classes.orderButton}
                    />
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default ServiceCard;
