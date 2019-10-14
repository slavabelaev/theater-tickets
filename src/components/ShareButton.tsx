import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "@material-ui/core/Tooltip";
import ShareIcon from "@material-ui/icons/Share";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    VKShareButton,
    OKShareButton,
    ViberShareButton,
    EmailShareButton,
    CommonShareButtonProps,
} from "react-share";

interface ShareDrawerItemProps {
    title: string;
    button: any
}
const ShareDrawer = (props: CommonShareButtonProps) => {
    const items: ShareDrawerItemProps[] = [
        { title: 'Facebook', button: FacebookShareButton},
        { title: 'Twitter', button: TwitterShareButton},
        { title: 'WhatsApp', button: WhatsappShareButton},
        { title: 'Viber', button: ViberShareButton},
        { title: 'Telegram', button: TelegramShareButton},
        { title: 'VK', button: VKShareButton},
        { title: 'OK', button: OKShareButton},
        { title: 'Email', button: EmailShareButton},
    ];

    const renderItem = (item: ShareDrawerItemProps) => (
        <ListItem button component={item.button} {...props}>
            <ListItemText primary={item.title} />
        </ListItem>
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        opened: {
            color: 'red'
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                maxWidth: 360,
                margin: 'auto',
                left: 0,
                right: 0,
                bottom: 0,
                position: 'absolute'
            },
        }
    })
);

export function ShareButton() {
    const [open, setOpenState] = React.useState(false);
    const classes = useStyles();

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setOpenState(!open);
    };

    const className = open ? classes.opened : undefined;

    const drawer = (
        <Drawer
            anchor={'bottom'}
            open={open}
            onClose={toggleDrawer}
            PaperProps={{
                style: {
                    maxWidth: 360,
                    margin: 'auto',
                    borderRadius: '4px 4px 0 0'
                }
            }}
        >
            <ShareDrawer url={'https://yandex.com/'} />
        </Drawer>
    );

    return (
        <React.Fragment>
            <Tooltip title="Поделиться">
                <IconButton
                    className={className}
                    onClick={toggleDrawer}
                >
                    <ShareIcon />
                </IconButton>
            </Tooltip>
            {drawer}
        </React.Fragment>
    );
}

export default ShareButton;
