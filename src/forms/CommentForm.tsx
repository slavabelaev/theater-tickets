import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Form, FormProps} from "./Form";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

interface CommentFormProps extends FormProps {
    autoFocus?: boolean
}

enum Variant {
    like,
    dislike,
    none
}

function ToggleButton() {
    const [variant, setVariant] = React.useState(Variant.none);
    return (
        <ButtonGroup size="small">
            <Button
                variant={variant === Variant.like ? 'contained' : undefined}
                color="primary"
                startIcon={<ThumbUpIcon />}
                onClick={() => setVariant(Variant.like)}
            >
                Положительный
            </Button>
            <Button
                variant={variant === Variant.dislike ? 'contained' : undefined}
                color="secondary"
                startIcon={<ThumbDownIcon />}
                onClick={() => setVariant(Variant.dislike)}
            >
                Отрицательный
            </Button>
        </ButtonGroup>
    );
}

export function CommentForm(props: CommentFormProps) {
    const {autoFocus, ...otherProps} = props;
    return (
        <Form {...otherProps}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ToggleButton />
                </Grid>
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
