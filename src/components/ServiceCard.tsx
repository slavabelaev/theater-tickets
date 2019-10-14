import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import FavoriteButton from "./FavoriteButton";
import ShareButton from "./ShareButton";
import CommentsButton from "./CommentsButton";
import OrderForm from "../forms/OrderForm";

interface OrderDialogProps {
    open: boolean;
    onClose: VoidFunction
}

function OrderDialog(props: OrderDialogProps) {
    const { open, onClose } = props;

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <DialogContent>
                <OrderForm />
            </DialogContent>
        </Dialog>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {},
        media: {
            height: 0,
            paddingTop: '80%', // 16:9
        },
        button: {
            marginLeft: 'auto'
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export interface ServiceCardProps {
    title: string;
    image: string;
    date: string;
}

export function ServiceCard(props: ServiceCardProps) {
    const [isOpenDialog, setOpenDialog] = React.useState(false);
    const classes = useStyles();

    const toggleDialogState = () => {
        setOpenDialog(!isOpenDialog);
    };

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
                    title={props.title}
                    subheader={props.date}
                />
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Paella dish"
                />
                <CardActions disableSpacing>
                    <FavoriteButton />
                    <ShareButton />
                    <CommentsButton />
                    <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={toggleDialogState}
                        className={classes.button}
                    >
                        Заказать билеты
                    </Button>
                </CardActions>
            </Card>
            <OrderDialog onClose={toggleDialogState} open={isOpenDialog} />
        </React.Fragment>
    );
}

export default ServiceCard;
