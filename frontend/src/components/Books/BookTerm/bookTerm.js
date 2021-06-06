import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BookTerm = (props) => {

    const [copies, updateCopies] = useState(props.term.availableCopies)

    const decrementCounter = (id) => {
        if(copies === 0 )
            return
        updateCopies(copies - 1);
    }

    return(
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                    onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info ml-2"}
                    onClick={() => props.onEdit(props.term.id)}
                    to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button className={"btn btn-success ml-2"}
                    onClick={() => decrementCounter(props.term.id)}>
                    Mark As Taken
                </button>
            </td>
        </tr>
    )
}

export default BookTerm