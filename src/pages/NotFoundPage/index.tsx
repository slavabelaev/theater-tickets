import React from "react";
import { ReactComponent as Error404 } from './404.svg';
import {Container, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const NOT_FOUND_PAGE_ROUTE_PATH = "/not-found";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            marginTop: theme.spacing(2)
        }
    })
);

export function NotFoundPage() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
    <Error404 />
    <Typography variant="h4" className={classes.title}>
        Это ошибка
    </Typography>
    <Typography variant="subtitle1">
        Запрошенная станица не найдена
    </Typography>
    </Container>
);
}

export default NotFoundPage;
