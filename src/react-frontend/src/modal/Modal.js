import React from 'react';
import './Modal.css'
import { Context } from './ModalProvider';

export default function Modal(){
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div className={context.modalActive ? "modal active" : "modal"} onClick={() => context.setModalActive(false)}>
                        <div className={context.modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                            {context.children}
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}