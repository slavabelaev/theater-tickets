import React from "react";
import Dialog, {DialogProps} from "@material-ui/core/Dialog";
import OrderForm from "../forms/OrderForm";
import Button, {ButtonProps} from "@material-ui/core/Button";

interface OrderButtonProps extends ButtonProps{
    DialogProps?: DialogProps
}

export function OrderButton({DialogProps, ...buttonProps}: OrderButtonProps) {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => setOpen(!open);

    const dialog = (
        <Dialog
            {...DialogProps}
            onClose={toggleOpen}
            aria-labelledby="order-dialog"
            open={open}
        >
            <OrderForm withPadding />
        </Dialog>
    );

    const button = (
        <Button
            {...buttonProps}
            variant={"outlined"}
            color={"primary"}
            onClick={toggleOpen}
        >
            Заказать билеты
        </Button>
    );

    return (
        <>
            {button}
            {dialog}
        </>
    );
}

export default OrderButton;
