import { Context } from '../../modal/ModalProvider';
import './Form.css';

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

export default function Form({book, updateState, isNew}){

    const [identifier, setIdent] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const contextValue = useContext(Context);

    useEffect(() => {
        setIdent(book.identifier);
        setTitle(book.title);
        setPrice(book.price);
    }, [updateState]);

    const postOrPatch = () => {


        const preUrl = 'http://localhost:8080/';
        axios({
            method: (isNew ? 'POST' : 'patch'),
            url: (isNew ? preUrl+'addbook' : preUrl+'updatebook'),
            data: {
                id: book.id,
                identifier: identifier,
                title: title,
                price: price
            }
        }).then((res) => {
            console.log(res);
            contextValue.setUpdateBooks(!contextValue.updateBooks);
        });
    }

    return (
        <Context.Consumer>
        {(context) => {
            return (
                <div className="form">
                    <div className='lableRow'>
                        <label>Identifier</label>
                        <input type='text' value={identifier} onInput={e => {
                            setIdent(e.target.value);
                        }}/>
                        <label>Title</label>
                        <input type='text' value={title} onInput={e => {
                            setTitle(e.target.value);
                        }}/>
                        <label>Price</label>
                        <input type='text' value={price} onInput={e => setPrice(e.target.value)}/>
                    </div>
                    <button className='delete-btn btn' onClick={() => context.setModalActive(false)}>Cancel</button>
                    <button className='edit-btn btn' onClick={() => {
                        context.setModalActive(false);
                        postOrPatch();
                    }}>Apply</button>
                </div>
            )
        }}
    </Context.Consumer>
    )
}