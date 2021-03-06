import axios from 'axios';
import React from 'react';

const DeleteButton = props => {
    const { id } = props;
    const {removeFromDom } = props;
    const { name } = props

    const onClickHandler = e => {
        axios.delete('/api/shelter/' + id)
            .then(response => {
                console.log(response);
                removeFromDom(id);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div id="button">
            <button onClick={onClickHandler}>delete</button>
        </div>
    )
}

export default DeleteButton;