import React from "react";
import Form, {FormProps} from "./Form";
import {Grid} from "@material-ui/core";

export interface OrderFormProps extends FormProps{}

export function OrderForm({...formProps}: OrderFormProps) {
    return (
        <Form {...formProps}>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </Form>
    );
}

export default OrderForm;
