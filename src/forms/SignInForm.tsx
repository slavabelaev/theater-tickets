import React from "react";
import {useHistory} from "react-router-dom";
import {Link as StyledLink} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {IconButton} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import {SIGN_UP_PAGE_ROUTE_PATH, RECOVERY_PAGE_ROUTE_PATH} from "../pages/SwipeablePage";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(2)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    recoveryLink: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&>svg': {
            marginRight: theme.spacing(1)
        }
    }
}));

interface SignInFormState {
    login: string;
    password: string;
}

export interface SignInFormProps {
    onSignUp?: VoidFunction;
    onRecovery?: VoidFunction;
}

export function SignInForm(props: SignInFormProps) {
    const classes = useStyles();
    const history = useHistory();
    const {onSignUp, onRecovery} = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const [values, setValues] = React.useState<SignInFormState>({
        login: '',
        password: ''
    });

    const handleSignUp = onSignUp || (() => history.push(SIGN_UP_PAGE_ROUTE_PATH));
    const handleRecovery = onRecovery || (() => history.push(RECOVERY_PAGE_ROUTE_PATH));

    const handleChange = (prop: keyof SignInFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography
                component="h1"
                variant="h5"
            >
                Вход
            </Typography>
            <Typography
                component="p"
                variant="subtitle1"
            >
                Используйте свой аккаунт
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
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-adornment-password"
                            fullWidth
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            label="Пароль"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="toggle password visibility"
                                            onClick={handleShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            <Tooltip
                                                placement="left"
                                                title={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </Tooltip>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledLink
                            className={classes.recoveryLink}
                            onClick={handleRecovery}
                        >
                            <SettingsBackupRestoreIcon />
                            Забыли пароль?
                        </StyledLink>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            color="primary"
                            onClick={handleSignUp}
                        >
                            Создать аккаунт
                        </Button>
                    </Grid>
                    <Grid item xs={6} component={Box} display="flex" justify="flex-end">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default SignInForm;
