import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import ServiceCard from "../ServiceCard/ServiceCard";
import PERFORMANCES from "../../repositories/performances.json";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //padding: theme.spacing(2),
        }
    })
);

interface Performance {
    title: string;
    image: string;
    date: string;
}

export default function () {
    const classes = useStyles();

    const theme = useTheme();
    const isLargeScreenSize = useMediaQuery(theme.breakpoints.up(720));
    const spacing = isLargeScreenSize ? 3 : 2;

    const renderItem = (item: Performance, index: number) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
            <ServiceCard {...item} />
        </Grid>
    );

    return (
        <div
            className={classes.root}
            style={{padding: theme.spacing(spacing)}}
        >
            <Grid container spacing={spacing}>
                {PERFORMANCES.slice(0, 10).map(renderItem)}
            </Grid>
        </div>
    );
}
