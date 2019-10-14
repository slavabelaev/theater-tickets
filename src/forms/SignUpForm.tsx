import React from "react";
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import {IconButton} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import {SIGN_IN_PAGE_ROUTE_PATH} from "../pages/SwipeablePage";

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
}));

export interface SignUpFormProps {
    onSignIn?: VoidFunction;
}

export function SignUpForm(props: SignUpFormProps) {
    const classes = useStyles();
    const history = useHistory();
    const {onSignIn} = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSignIn = onSignIn || (() => history.push(SIGN_IN_PAGE_ROUTE_PATH));

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Создайте аккаунт
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="firstName"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="Имя"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            label="Фамилия"
                            name="lastName"
                            autoComplete="lastName"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Телефон или адрес эл. почты"
                            name="email"
                            autoComplete="email"
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
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Я хочу получать уведомления и новости"
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
                    <Grid item xs={6} component={Box} display="flex" justifyContent="flex-end">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Создать
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default SignUpForm;
