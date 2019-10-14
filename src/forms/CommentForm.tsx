import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Form, FormProps} from "./Form";

interface CommentFormProps extends FormProps {
    autoFocus?: boolean
}

export function CommentForm(props: CommentFormProps) {
    const {autoFocus, ...otherProps} = props;
    return (
        <Form {...otherProps}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoFocus={autoFocus}
                        id="outlined-multiline-static"
                        label="Ваш отзыв"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Form>
    );
}

export default CommentForm;
