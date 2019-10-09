import React from 'react';
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import SwipeableDrawer, {SwipeableDrawerProps} from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import {USE_TERMS_PAGE_ROUTE_PATH} from "../../../pages/UseTermsPage";
import {HOME_PAGE_ROUTE_PATH} from "../../../pages/HomePage";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '280px'
        },
        footer: {
            marginTop: 'auto'
        }
    })
);

export default function(props: SwipeableDrawerProps) {
    const classes = useStyles();
    const { onClose } = props;
    return (
        <SwipeableDrawer {...props}>
            <div className={classes.container}>
                <List component="nav" aria-label="drawer navigation">
                    <ListItem
                        button
                        component={Link}
                        to={HOME_PAGE_ROUTE_PATH}
                        onClick={onClose}
                    >
                        <ListItemText primary="Главная" />
                    </ListItem>
                </List>
                <footer className={classes.footer}>
                    <Divider />
                    <List component="nav" aria-label="drawer footer">
                        <ListItem
                            button
                            component={Link}
                            to={USE_TERMS_PAGE_ROUTE_PATH}
                            onClick={onClose}
                        >
                            <ListItemText primary="Условия использования" />
                        </ListItem>
                    </List>
                </footer>
            </div>
        </SwipeableDrawer>
    );
}
