import React from 'react';

import { useState } from "react";

export const Context = React.createContext();

export default function ModalProvider(props){
    const [modalActive, setModalActive] = useState(false);

    const [children, setChildren] = useState();

    const [updateBooks, setUpdateBooks] = useState();

    const [updateState, setUpdateState] = useState();

    return (
        <Context.Provider value={
            {
                modalActive: modalActive, 
                setModalActive: setModalActive,
                children: children,
                setChildren: setChildren,

                updateBooks: updateBooks,
                setUpdateBooks: setUpdateBooks,

                updateState: updateState,
                setUpdateState: setUpdateState

            }
        }>{props.children}</Context.Provider>
    )
}