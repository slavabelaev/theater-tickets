import React from 'react';
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import SwipeableDrawer, {SwipeableDrawerProps} from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import {USE_TERMS_PAGE_ROUTE_PATH} from "../../pages/UseTermsPage";
import {HOME_PAGE_ROUTE_PATH} from "../../pages/HomePage";

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

interface ListItemLink {
    title: string;
    to: string;
}

interface LayoutDrawer extends SwipeableDrawerProps {
}

export function LayoutDrawer(props: LayoutDrawer) {
    const mainMenuLinks: ListItemLink[] = [
        { title: 'Главная', to: HOME_PAGE_ROUTE_PATH },
        { title: 'Проверка билета', to: '' },
    ];
    const footerMenuLinks: ListItemLink[] = [
        { title: 'Условия использования', to: USE_TERMS_PAGE_ROUTE_PATH }
    ];
    const classes = useStyles();
    const { onClose } = props;

    const renderListItem = (item: ListItemLink) => (
        <ListItem
            button
            component={Link}
            to={item.to}
            onClick={onClose}
            key={item.to}
        >
            <ListItemText primary={item.title} />
        </ListItem>
    );

    const renderList = (items: ListItemLink[]) => (
        <List component="nav" aria-label="drawer navigation">
            {items.map(renderListItem)}
        </List>
    );

    return (
        <SwipeableDrawer {...props}>
            <div className={classes.container}>
                {renderList(mainMenuLinks)}
                <footer className={classes.footer}>
                    <Divider />
                    {renderList(footerMenuLinks)}
                </footer>
            </div>
        </SwipeableDrawer>
    );
}

export default LayoutDrawer;
