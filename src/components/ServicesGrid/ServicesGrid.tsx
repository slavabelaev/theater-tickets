import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import ServiceCard from "../ServiceCard/ServiceCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //padding: theme.spacing(2),
        }
    })
);

export default function () {
    const classes = useStyles();
    const services = [1,2,3,4,5,6,7,8];

    const theme = useTheme();
    const isLargeScreenSize = useMediaQuery(theme.breakpoints.up(720));
    const spacing = isLargeScreenSize ? 3 : 2;

    const renderItem = (item: number, index: number) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
            <ServiceCard />
        </Grid>
    );

    return (
        <div
            className={classes.root}
            style={{padding: theme.spacing(spacing)}}
        >
            <Grid container spacing={spacing}>
                {services.map(renderItem)}
            </Grid>
        </div>
    );
}
