import React from 'react';
import Grid from "@material-ui/core/Grid";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function () {
    const services = [1,2,3,4,5,6,7,8];
    const renderItem = () => (
        <Grid item xl={4} lg={3} md={4} sm={2} xs={1}>
            <ServiceCard />
        </Grid>
    );

    return (
        <Grid container spacing={3}>
            {services.map(renderItem)}
        </Grid>
    );
}
