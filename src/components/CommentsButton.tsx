import React from "react";
import {createStyles, makeStyles, useTheme, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";

import {Comments} from "./Comments";
import {CommentProps} from "./Comment";
import CommentForm from "../forms/CommentForm";

const comments: CommentProps[] = Array(10).fill({
    fullName: 'Ирина Иванова',
    avatarUrl: '',
    text: `Божественная визуальная составляющая *__* несмотря на то, что постановка была гастрольной, основная декорация и то, как на ней поставлен свет и балет это просто космос *_* Ей удалось передать и корабль, и дворец, и просто локацию, в которой акцент на актеров, а не окружение. Свечи, дым, фоновый экран, тонкая ткань на ярком свете 😍😍😍 Символизм красиво обыграли- маски на персонажах, крещение Кончиты, беседы Cочинителей.
Вокально я в восторге от Сочинителей, это просто непередаваемая мощь голосов ❤. "Ожидание Кончиты" - очень-очень больно. Нашла запись - хорошо, но и близко не передаёт атмосферу и вокал на постановке. 💔
Солисты и балет хороши. Вечная песня "Я тебя никогда не забуду" прекрасна.
На песнях с церковными мотивами и хорами я совсем не все слова разбирала - вопрос это исполнения, звукарей или моего восприятия такой музыки - неизвестно, но не критично для впечатления в целом.
Логика истории в целом складывается, вообще не имея представления о сюжете, мы с подругой все поняли и сочувствовали истории.
Минусы: актерской химии между главной парой я не поймала, момент когда ГГ приходит на важное мероприятие в его жизни пьяным - тоже не совсем понятно, да и акцент на том что ей 16, а ему 40 лет - сомнительная подробность в современных реалиях)) Однако ничто из это не остается "послевкусием", впечатление от постановки на 9/10.`,
    createdAt: new Date()
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
          justifyContent: 'space-between'
        },
        active: {
            color: theme.palette.primary.main
        }
    })
);

enum View {
    comments,
    editForm,
    hidden
}

export function CommentsButton() {
    const [view, setView] = React.useState(View.hidden);
    const theme = useTheme();
    const classes = useStyles();
    const isDrawerCloseEvent = (event: React.KeyboardEvent | React.MouseEvent) => (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
    );
    const toggleHide = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (isDrawerCloseEvent(event)) return;

        setView(view !== View.hidden ? View.hidden : View.comments);
    };
    const toggleEdit = () => {
        setView(view === View.editForm ? View.comments : View.editForm);
    };

    const drawerStyles = {
        maxWidth: 480,
        margin: 'auto',
        borderTopRightRadius: theme.shape.borderRadius,
        borderTopLeftRadius: theme.shape.borderRadius,
    };
    const commentsDrawer = (
        <Drawer
            anchor="bottom"
            open={view === View.comments}
            onClose={toggleHide}
            PaperProps={{style: drawerStyles}}
        >
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    Отзывы
                </Typography>
                <Button
                    variant="outlined"
                    onClick={toggleEdit}
                >
                    Добавить отзыв
                </Button>
            </Toolbar>
            <Comments items={comments} />
        </Drawer>
    );
    const commentFormDrawer = (
        <Drawer
            anchor="bottom"
            open={view === View.editForm}
            onClose={toggleHide}
            PaperProps={{style: drawerStyles}}
        >
            <CommentForm
                withPadding
                autoFocus
                onCancel={toggleEdit}
                onSubmit={toggleEdit}
            />
        </Drawer>
    );

    return (
        <>
            <Tooltip title="Отзывы">
                <IconButton
                    className={view !== View.hidden ? classes.active : undefined}
                    onClick={toggleHide}
                >
                    <CommentIcon />
                </IconButton>
            </Tooltip>
            {commentsDrawer}
            {commentFormDrawer}
        </>
    );
}

export default CommentsButton;
