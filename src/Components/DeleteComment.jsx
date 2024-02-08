import { useEffect, useState } from "react";
import { deleteComment } from "./api";


export default function DeleteComment({ comment_id }) {

    useEffect(() => {
        deleteComment(comment_id)
    })


    return (
        <>
        </>

    )
}