import React from "react";
import {Link, useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

import LayoutDrawer from "./LayoutDrawer";
import SignInButton from "../SignInButton";

import {HOME_PAGE_ROUTE_PATH} from "../../pages/HomePage";
import {FAVORITE_PAGE_ROUTE_PATH} from "../../pages/FavoritesPage";

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

const useStyles = makeStyles((theme: Theme) =>
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
            marginLeft: 'auto',
            alignItems: 'center'
        },
        spacing: {
            paddingTop: 64
        },
    })
);

export function LayoutAppBar() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState<boolean>(false);
    const history = useHistory();

    const handleToggleSearch = () => setShowSearch(!showSearch);
    const handleSearchSubmit = (query: string) => {
        if (!query) return;
        history.push(`/search?q=${query}`);
        setShowSearch(false);
    };
    const handleToggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            (
                (event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift'
            )
        ) return;

        setOpenDrawer(!openDrawer);
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
                    onClick={handleToggleDrawer}
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
                    <SignInButton
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </SignInButton>
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
        <>
            {showSearch ? renderSearchAppBar() : renderAppBar()}
            <div className={classes.spacing} />
            <LayoutDrawer
                open={openDrawer}
                onOpen={handleToggleDrawer}
                onClose={handleToggleDrawer}
            />
        </>
    );
}

export default LayoutAppBar;
