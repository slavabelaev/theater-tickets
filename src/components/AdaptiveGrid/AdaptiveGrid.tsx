import React, {ReactNode} from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";

type renderItem = (index: number) => ReactNode;

interface AdaptiveGridProps {
    itemCount: number;
    renderItem: renderItem;
}

export default function(props: AdaptiveGridProps) {
    const theme = useTheme();
    const isLargeScreenSize = useMediaQuery(theme.breakpoints.up(720));
    const spacing = isLargeScreenSize ? 3 : 2;

    const renderItem = (item: null, index: number) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
            {props.renderItem(index)}
        </Grid>
    );

    return (
        <div style={{padding: theme.spacing(spacing)}}>
            <Grid container spacing={spacing}>
                {Array(props.itemCount).fill(null).map(renderItem)}
            </Grid>
        </div>
    );
}
