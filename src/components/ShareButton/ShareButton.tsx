import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/Share';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
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
} from 'react-share';

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

export default function () {
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

    return (
        <React.Fragment>
            <IconButton
                className={className}
                onClick={toggleDrawer}
            >
                <ShareIcon />
            </IconButton>
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
        </React.Fragment>
    );
}

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
