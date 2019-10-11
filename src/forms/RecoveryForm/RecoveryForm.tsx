import React from "react";
import {useHistory} from 'react-router-dom';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {SIGN_IN_PAGE_ROUTE_PATH} from "../../pages/SwipeablePage";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(2)
    },
    description: {
      textAlign: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
}));

interface RecoveryFormState {
    login: string;
}

interface RecoveryFormProps {
    onSignIn?: VoidFunction;
}

export default function(props: RecoveryFormProps) {
    const classes = useStyles();
    const history = useHistory();
    const {onSignIn} = props;
    const [values, setValues] = React.useState<RecoveryFormState>({
        login: '',
    });

    const handleSignIn = onSignIn || (() => history.push(SIGN_IN_PAGE_ROUTE_PATH));

    const handleChange = (prop: keyof RecoveryFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <SettingsBackupRestoreIcon />
            </Avatar>
            <Typography
                component="h1"
                variant="h5"
            >
                Восстановление доступа
            </Typography>
            <Typography
                component="p"
                variant="subtitle1"
                className={classes.description}
            >
                Укажите данные указанные при регистрации
            </Typography>
            <form noValidate className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="login"
                            label="Телефон или адрес эл. почты"
                            name="login"
                            autoComplete="login"
                            value={values.login}
                            onChange={handleChange('login')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            color="primary"
                            onClick={handleSignIn}
                        >
                            Войти
                        </Button>
                    </Grid>
                    <Grid item xs={6} component={Box} display="flex" justify="flex-end">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Подтвердить
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
