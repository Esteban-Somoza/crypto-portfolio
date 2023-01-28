import React, { useState, useContext, useRef, useEffect } from 'react'
import { tokenDataContext } from "./context/TokenEditData";
import refresh from "./functions/refresh";

import deleteToken from "./api/deleteDataBase";

import './tokenBalance.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TokenBalance(props) {
    const { tokenData, setTokenData } = useContext(tokenDataContext)
    const [rerender, setRerender] = useState(false);
    const [positive, setPositive] = useState('positive');

    useEffect(() => {
        if (props.change24hs > 0) setPositive('positive')
        else setPositive('negative')
    }, [props])


    function editToken(form) {
        form.preventDefault()
        props.editToken()
        setRerender(!rerender)
        return setTokenData(props)
    }

    function deleteTokenConfirm(form) {
        form.preventDefault()
        let confirmDelete = confirm('Are you sure you want to delete this token?')
        if (confirmDelete) {
            deleteToken({ token: props.token })
            return refresh();
        }
        else return
    }

    return (
        <div className='token'>
            <h3 className='ticker'>${props.ticker}:</h3>
            <div className='data'>
                <h5>Value held:</h5>
                <h4 className='value'>${props.value}</h4>
            </div>
            <div className='data'>
                <h5>Portion of portfolio:</h5>
                <h4 className='value'>{(props.value / props.totalValue * 100).toFixed(1)}%</h4>
            </div>
            <div className='data'>
                <h5>Amount:</h5>
                <h4 className='value'>{props.amount}</h4>
            </div>
            <div className='data'>
                <h5>Token Price:</h5>
                <h4>${props.price.toFixed(3)}</h4>
            </div>
            <div className='data'>
                <h5>24 hour change:</h5>
                <h4 className={positive}>{props.change24hs}%</h4>
            </div>
            <div className='menu'>
                <div className="tokenMenu" >
                    <button onClick={editToken} className="tokenMenuIcon"><FontAwesomeIcon icon={faPen} className="tokenMenuIcon" /></button>
                    <button onClick={deleteTokenConfirm} className="tokenMenuIcon"><FontAwesomeIcon icon={faTrash} className="tokenMenuIcon" /></button>
                </div>
                <FontAwesomeIcon icon={faPen} className="tokenMenuButton" />
            </div>
        </div>
    )
}