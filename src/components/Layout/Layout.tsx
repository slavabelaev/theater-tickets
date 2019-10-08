import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SwipeableDrawer, {SwipeableDrawerProps} from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from "@material-ui/core/Hidden";
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';

import {HOME_PAGE_ROUTE_PATH} from "../../pages/HomePage";
import {FAVORITE_PAGE_ROUTE_PATH} from "../../pages/FavoritesPage";
import {USE_TERMS_PAGE_ROUTE_PATH} from "../../pages/UseTermsPage";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {SEARCH_PAGE_ROUTE_PATH} from "../../pages/SearchPage";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center'
        },
        toolbarTitle: {
            display: 'flex',
            alignItems: 'center'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        titleLink: {
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': {
                opacity: .8
            },
            transition: '280ms'
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            '&:active': {
                backgroundColor: fade(theme.palette.common.white, 0.20),
            },
            width: '100%',
            maxWidth: 480,
            transition: '280ms',
            marginLeft: 'auto',
            marginRight: theme.spacing(1)
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(1.5, 1.5, 1.5, 7),
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

interface LayoutProps {
    children: ReactNode
}

export default function(props: LayoutProps) {
    const classes = useStyles();
    const [open, setOpenState] = React.useState(false);

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

    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarTitle}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            onClick={toggleDrawer}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to={HOME_PAGE_ROUTE_PATH} className={classes.titleLink}>Билеты в театр</Link>
                        </Typography>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Спектакли, артисты"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="favorites"
                            color="inherit"
                            component={Link}
                            to={FAVORITE_PAGE_ROUTE_PATH}
                        >
                            <Badge badgeContent={4} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
            />
            <main>
                {props.children}
            </main>
            <Hidden only={['xl', 'lg', 'md']}>
                <LayoutBottomNavigation />
            </Hidden>
        </React.Fragment>
    );
}

const useDrawerStyles = makeStyles((theme: Theme) =>
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

function Drawer(props: SwipeableDrawerProps) {
    const classes = useDrawerStyles();
    return (
        <SwipeableDrawer {...props}>
            <div className={classes.container}>
                <List component="nav" aria-label="drawer navigation">
                    <ListItem
                        button
                        component={Link}
                        to={HOME_PAGE_ROUTE_PATH}
                        onClick={props.onClose}
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
                            onClick={props.onClose}
                        >
                            <ListItemText primary="Условия использования" />
                        </ListItem>
                    </List>
                </footer>
            </div>
        </SwipeableDrawer>
    );
}

const useBottomNavigationStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0
    },
});

function LayoutBottomNavigation() {
    const classes = useBottomNavigationStyles();
    const [value, setValue] = React.useState(0);
    const handleChanged = () => console.log('changed');

    window.removeEventListener('hashchange', handleChanged);
    window.addEventListener('hashchange', handleChanged);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Главная"
                icon={<HomeIcon />}
                component={Link}
                to={HOME_PAGE_ROUTE_PATH}
            />
            <BottomNavigationAction
                label="Сохраненое"
                icon={<FavoriteIcon />}
                component={Link}
                to={FAVORITE_PAGE_ROUTE_PATH}
            />
            <BottomNavigationAction
                label="Поиск"
                icon={<SearchIcon />}
                component={Link}
                to={SEARCH_PAGE_ROUTE_PATH}
            />
        </BottomNavigation>
    );
}
