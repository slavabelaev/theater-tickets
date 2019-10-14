import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Drawer, {DrawerProps} from "@material-ui/core/Drawer";
import AdaptiveGrid from "./AdaptiveGrid";
import ServiceCard from "./ServiceCard";
import FiltersForm from "../forms/FiltersForm";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";

import PERFORMANCES from "../repositories/performances.json";

function DrawerWithFilters(props: DrawerProps) {
    return (
        <Drawer anchor="right" {...props}>
            <div style={{width: 280, padding: 16}}>
                <FiltersForm />
            </div>
        </Drawer>
    );
}

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

    return (
        <div className={classes.root}>
            <AdaptiveGrid
                itemCount={1}
                renderItem={renderItem}
            />
            <DrawerWithFilters
                open={showFilter}
                onClose={handleToggleFilters}
            />
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
