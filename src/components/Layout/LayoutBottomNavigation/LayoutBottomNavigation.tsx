import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";

import {HOME_PAGE_ROUTE_PATH} from "../../../pages/HomePage";
import {FAVORITE_PAGE_ROUTE_PATH} from "../../../pages/FavoritesPage";
import {SEARCH_PAGE_ROUTE_PATH} from "../../../pages/SearchPage";

const useLayoutBottomNavigationStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0
    },
});

export  default function() {
    const classes = useLayoutBottomNavigationStyles();
    const [value, setValue] = React.useState(0);

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
