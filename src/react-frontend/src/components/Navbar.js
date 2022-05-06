import './Navbar.css'

import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../modal/ModalProvider'

import Form from './ecForm/Form';

export default function Navbar(){

    const contextValue = useContext(Context);

    return (
        <nav>
            <ul className='nav__menu'>
                <li>
                    <a href='/'>Home</a>
                    <a href='/books'>Books</a>
                    <Routes>
                        <Route path='/books' element={<a className="clickable" onClick={() => {
                            const book = {
                                id: null,
                                identifier: '',
                                title: '',
                                price: ''
                            }

                            const updstate = contextValue.updateState;
                            contextValue.setUpdateState(!updstate);
                            contextValue.setChildren(<Form book={book} updateState={!updstate} isNew={true}/>);
                            contextValue.setModalActive(true);
                        }}>Add book</a>}/>
                    </Routes>
                </li>
            </ul>
        </nav>
    )
}