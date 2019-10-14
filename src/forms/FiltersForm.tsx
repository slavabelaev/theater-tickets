import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {KeyboardDatePicker} from "@material-ui/pickers";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const theaters: Choice[] = [
    {label: 'Мастерская Петра Фоменко', value: '1'},
    {label: 'Театр сатиры', value: '2'},
    {label: 'Театр им. Вахтангова', value: '3'},
    {label: 'МХТ им. Чехова', value: '4'},
    {label: 'Театр им. Моссовета', value: '5'},
    {label: 'Содружество актеров Таганки', value: '6'},
    {label: 'Театр им. Пушкина', value: '7'},
    {label: 'Театриум на Серпуховке', value: '8'},
    {label: 'МДМ', value: '9'},
    {label: 'РАМТ', value: '10'},
];

const genres: Choice[] = [
    {label: 'Комедия', value: '1'},
    {label: 'Мюзикл', value: '2'},
    {label: 'Балет', value: '3'},
    {label: 'Драма', value: '4'},
    {label: 'Опера', value: '5'},
    {label: 'Детям', value: '6'}
];

const ratings: Choice[] = [
    {label: 'Низкий', value: '2'},
    {label: 'Средний', value: '3'},
    {label: 'Высокий', value: '4'},
];

interface Choice {
    label: string;
    value: string;
}

interface MultipleChoiceControlProps {
    name: string;
    label: string;
    choices: Choice[];
}

const useMultipleChoiceControlStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
    })
);

function MultipleChoiceControl(props: MultipleChoiceControlProps) {
    const classes = useMultipleChoiceControlStyles();
    const {label, name, choices} = props;
    const [value, setValue] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string[]);
    };

    const handleClear = () => setValue([]);

    const renderChoice = (choice: Choice) => (
        <MenuItem key={choice.value} value={choice.value}>
            <Checkbox checked={value.indexOf(choice.value) > -1} />
            <ListItemText primary={choice.label} />
        </MenuItem>
    );

    const clearButton = (
        <IconButton
            edge="end"
            aria-label="clear filter"
            onClick={handleClear}
        >
            <ClearIcon />
        </IconButton>
    );

    return (
        <div className={classes.root}>
            <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor={name}>
                    {label}
                </InputLabel>
                <Select
                    multiple
                    value={value}
                    onChange={handleChange}
                    labelWidth={label.length * 10}
                    inputProps={{
                        name: name,
                        id: name,
                        placeholder: 'Все'
                    }}
                    renderValue={value => `Выбрано ${(value as string[]).length}`}
                    MenuProps={MenuProps}
                >
                    {choices.map(renderChoice)}
                </Select>
            </FormControl>
            {value.length ? clearButton : null}
        </div>
    );
}

function DatePicker() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <KeyboardDatePicker
            fullWidth
            id="date-picker-dialog"
            label="Дата с"
            format="MM/dd/yyyy"
            variant="inline"
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
    );
}

export function FiltersForm() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <DatePicker />
            </Grid>
            <Grid item xs={12}>
                <DatePicker />
            </Grid>
            <Grid item xs={12}>
                <MultipleChoiceControl
                    label="Театр"
                    name="theater"
                    choices={theaters}
                />
            </Grid>
            <Grid item xs={12}>
                <MultipleChoiceControl
                    label="Жанры"
                    name="genre"
                    choices={genres}
                />
            </Grid>
            <Grid item xs={12}>
                <MultipleChoiceControl
                    label="Рейтинг"
                    name="rating"
                    choices={ratings}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    Применить
                </Button>
            </Grid>
        </Grid>
    );
}

export default FiltersForm;
