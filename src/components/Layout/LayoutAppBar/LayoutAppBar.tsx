import React, {MouseEventHandler} from 'react';
import {Link, useHistory} from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Slide from '@material-ui/core/Slide';
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

import LayoutDrawer from "../LayoutDrawer";

import {HOME_PAGE_ROUTE_PATH} from "../../../pages/HomePage";
import {FAVORITE_PAGE_ROUTE_PATH} from "../../../pages/FavoritesPage";
import * as H from "history";

interface HideOnScrollProps {
    children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
    const { children } = props;
    const trigger = useScrollTrigger({ target: window });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

interface LayoutAppBar {
    onDrawerOpen: MouseEventHandler
}
const useMobileStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1, 2),
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            zIndex: theme.zIndex.appBar,
            left: 0,
            right: 0,
            top: 0
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        spacing: {
            paddingTop: 64
        }
    }),
);

function MobileAppBar(props: LayoutAppBar) {
    const classes = useMobileStyles();
    const { onDrawerOpen } = props;
    return (
        <React.Fragment>
            <HideOnScroll>
                <Paper className={classes.root}>
                    <IconButton
                        className={classes.iconButton}
                        aria-label="menu"
                        onClick={onDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Paper>
            </HideOnScroll>
            <div className={classes.spacing} />
        </React.Fragment>
    );
}

const useSearchAppBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center'
        },
        actions: {
            display: 'flex',
            marginLeft: 'auto'
        },
        searchInput: {
            fontSize: theme.typography.h6.fontSize,
            width: '100%',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    })
);

interface SearchAppBarProps {
    onClose?: React.MouseEventHandler,
    onSubmit?: FunctionStringCallback
}

function SearchAppBar(props: SearchAppBarProps) {
    const classes = useSearchAppBarStyles();
    const { onClose, onSubmit } = props;
    const enterKeyCode = 13;
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode !== enterKeyCode) return;
        const query = (event.target as HTMLInputElement).value;
        if (onSubmit) onSubmit(query);
    };

    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" onClick={onClose}>
                    <ArrowBackIcon />
                </IconButton>
                <InputBase
                    className={classes.searchInput}
                    placeholder="Спектакли, артисты"
                    autoFocus
                    onKeyUp={handleKeyUp}
                />
                <div className={classes.actions}>
                    <IconButton edge="end" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

const useDesktopStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
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
        actions: {
            display: 'flex',
            marginLeft: 'auto'
        },
        spacing: {
            paddingTop: 64
        },
    })
);

function DesktopAppBar(props: LayoutAppBar) {
    const classes = useDesktopStyles();
    const { onDrawerOpen } = props;
    const [showSearch, setShowSearch] = React.useState<boolean>(false);
    const history = useHistory();

    const handleToggleSearch = () => setShowSearch( !showSearch);
    const handleSearchSubmit = (query: string) => {
        if (!query) return;
        history.push(`/search?q=${query}`);
        setShowSearch(false);
    };

    const renderSearchAppBar = () => (
        <SearchAppBar
            onClose={handleToggleSearch}
            onSubmit={handleSearchSubmit}
        />
    );

    const renderAppBar = () => (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={classes.menuButton}
                    onClick={onDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    <Link to={HOME_PAGE_ROUTE_PATH} className={classes.titleLink}>Билеты в театр</Link>
                </Typography>
                <div className={classes.actions}>
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
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="search"
                        color="inherit"
                        onClick={handleToggleSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );

    return (
        <React.Fragment>
            {showSearch ? renderSearchAppBar() : renderAppBar()}
            <div className={classes.spacing} />
        </React.Fragment>
    );
}


export default function() {
    const [open, setOpenState] = React.useState(false);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            (
                (event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift'
            )
        ) return;

        setOpenState(!open);
    };

    const appBarProps: LayoutAppBar = {
        onDrawerOpen: toggleDrawer
    };

    return (
        <React.Fragment>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
                <MobileAppBar {...appBarProps} />
            </Hidden>
            <Hidden only={'xs'}>
                <DesktopAppBar {...appBarProps} />
            </Hidden>
            <LayoutDrawer
                open={open}
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
            />
        </React.Fragment>
    );
}
