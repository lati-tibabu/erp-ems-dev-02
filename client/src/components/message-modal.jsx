import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from 'react-router-dom';

const MessageModal = (props) => {
    const navigate = useNavigate();
    
    const handleCloseButton = () => {
        navigate(props.navigateTo)
    }

    return (
        <div 
            style={{position: 'absolute', top:'0', left: '0', backdropFilter:'blur(3px)', background: '#4d4d4da4'}} 
            className='w-100p h-100p p-10 flex-row justify-center align-center'
            >
            <div 
                className='back-color-white w-30p p-10 br-10px'
                style={{minHeight: '100px'}}
            >
                {/* Closing button */}
                <div className="w-100p flex-row justify-end pr-10">
                    <FontAwesomeIcon 
                        icon='fa-solid fa-xmark' 
                        style={{cursor: 'pointer'}}
                        onClick={handleCloseButton}
                        className="close-btn p-5 w-20px h-20px br-20px color-black"
                        />
                </div>
                <div>
                    {/* Modal Main Message */}
                    <div className='w-100p flex-column justify-center align-center'>
                        {(props.succesful)&&
                            <div className='back-color-green100 w-50px h-50px br-50px flex-row justify-center align-center'>
                                <FontAwesomeIcon icon='fa-solid fa-check' className='font-3xl color-white' />
                            </div>
                        }
                        <h3>
                            {/* Modal Message */}
                            {props.message_title}
                        </h3>
                    </div>
                    {/* Modal body message */}
                    <div>
                        <p>
                            {/* This is the modals message */}
                            {props.message}
                        </p>
                    </div>
                </div>

            </div>
            <style>
                {
                    `
                        .close-btn:hover{
                            transition: 300ms;
                            background: #00000022;
                        }
                    `
                }
            </style>
        </div>
        )
}

export default MessageModal;