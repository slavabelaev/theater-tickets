import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    withPadding?: boolean,
    onSubmit?: VoidFunction,
    onCancel?: VoidFunction
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(2),
            [theme.breakpoints.up(720)]: {
                margin: theme.spacing(3)
            }
        },
        actions: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: theme.spacing(1),
            [theme.breakpoints.up(720)]: {
                marginTop: theme.spacing(2)
            }
        },
        cancelButton: {
            marginRight: theme.spacing(1)
        }
    })
);

export const Form: React.FC<FormProps> = (props) => {
    const classes = useStyles();
    const {children, className, withPadding, onCancel, onSubmit, ...otherProps} = props;
    const propClassName = className ? className + ' ' : '';
    const rootClassName = withPadding ? classes.root : '';
    return (
        <form {...otherProps} className={`${propClassName}${rootClassName}`}>
            {children}
            <footer className={classes.actions}>
                <Button
                    color="primary"
                    className={classes.cancelButton}
                    onClick={onCancel}
                >
                    Отмена
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                >
                    Отправить
                </Button>
            </footer>
        </form>
    )
}

export default Form;
