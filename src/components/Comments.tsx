import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {Comment, CommentProps} from "./Comment";

export interface CommentsProps {
    items: CommentProps[]
}

export function Comments({ items }: CommentsProps) {
    const renderItem = (item: CommentProps, index: number) => (
        <div key={`divider-${index}`}>
            <Comment {...item} />
            {index < items.length - 1 ? <Divider /> : null}
        </div>
    );

    return (
        <List component="div">
            {items.map(renderItem)}
        </List>
    );
}

export default Comments;
