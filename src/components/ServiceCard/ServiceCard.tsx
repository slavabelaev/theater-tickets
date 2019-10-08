import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {DialogContent} from "@material-ui/core";

import FavoriteButton from "../FavoriteButton";
import ShareButton from "../ShareButton";
import OrderForm from "../../forms/OrderForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {},
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        button: {
            marginLeft: 'auto'
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function() {
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
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <FavoriteButton />
                    <ShareButton />
                    <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={toggleDialogState}
                        className={classes.button}
                    >
                        Заказать
                    </Button>
                </CardActions>
            </Card>
            <OrderDialog onClose={toggleDialogState} open={isOpenDialog} />
        </React.Fragment>
    );
}

const useOrderDialogStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

export interface OrderDialogProps {
    open: boolean;
    onClose: VoidFunction
}

function OrderDialog(props: OrderDialogProps) {
    const classes = useOrderDialogStyles();
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
