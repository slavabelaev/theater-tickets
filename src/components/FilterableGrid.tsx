import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import AdaptiveGrid from "./AdaptiveGrid";
import ServiceCard from "./ServiceCard";
import FiltersForm from "../forms/FiltersForm";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";

import PERFORMANCES from "../repositories/performances.json";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          position: 'relative'
        },
        drawer: {
          width: 280
        },
        fab: {
            position: 'fixed',
            right: theme.spacing(2),
            bottom: theme.spacing(2),
        }
    })
);

export function FilterableGrid() {
    const classes = useStyles();
    const [showFilter, setShowFilters] = React.useState(false);
    const renderItem = (index: number) => <ServiceCard {...PERFORMANCES[index]} />;

    const handleToggleFilters = () => setShowFilters(!showFilter);

    const drawer = (
        <Drawer
            anchor="right"
            open={showFilter}
            onClose={handleToggleFilters}
        >
            <div style={{width: 280, padding: 16}}>
                <FiltersForm />
            </div>
        </Drawer>
    );

    return (
        <div className={classes.root}>
            <AdaptiveGrid
                itemCount={10}
                renderItem={renderItem}
            />
            {drawer}
            <Tooltip title="Фильтры">
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.fab}
                    onClick={handleToggleFilters}
                >
                    <FilterListIcon />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default FilterableGrid;
