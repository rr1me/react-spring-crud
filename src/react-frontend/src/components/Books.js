import './Books.css';
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import Form from './ecForm/Form';
import { Context } from '../modal/ModalProvider';

export default function Books(){

    const [books, setBookState] = useState();

    const [elementCount, setElementCount] = useState(0);

    const getBooks = () => {
        axios.get('http://localhost:8080/books').then((resp) => {
            setBookState(resp.data);
            setElementCount(resp.data.length);
        } );
    }

    const contextValue = useContext(Context);

    useEffect(() => {
        getBooks();
    }, [setBookState, contextValue.updateBooks]);

    const deleteBook = (id) => {
        axios.delete('http://localhost:8080/deletebook', {
            data: {
                id
            }
        }).then((res) => {
            console.log(res);
            getBooks();
        });
    };

    if (books){
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div className='tableContainer'>
                        <table className={elementCount > 0 ? 'table both-border' : 'table half-border'}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Identifier</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map(
                                        book => 
                                        <tr key = {book.id}>
                                            <td> {book.id}</td>
                                            <td> {book.identifier}</td>
                                            <td> {book.title}</td>
                                            <td> ${book.price}</td>
                                            <td>
                                                <button className='edit-btn btn' onClick={() => {
                                                    context.setModalActive(true);

                                                    const updState = context.updateState;
                                                    context.setUpdateState(!updState);
                                                    context.setChildren(<Form book={book} updateState={!updState} isNew={false}/>);
                                                }}>Edit</button>
                                                <button className='delete-btn btn' onClick={() => {
                                                    const confirm = window.confirm("Are you sure?");
                                                    confirm&&deleteBook(book.id);
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}