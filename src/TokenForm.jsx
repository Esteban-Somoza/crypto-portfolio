import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import { tokenDataContext } from "./context/TokenEditData";
import postDataBase from "./api/postDataBase";
import editDataBase from "./api/editDataBase";

import validateTokenOnApi from "./validations/validateTokenOnApi";
import validateTokenOnDatabase from "./validations/validateTokenOnDatabase";

import './form.css'

import clearForm from "./functions/clearForm";

export default function TokenForm({ visibility, changeVisibility, isNewToken, tokenDatabase, data, tokenList }) {
    const { register, watch, formState: { errors }, handleSubmit, reset } = useForm();
    const { tokenData, setTokenData } = useContext(tokenDataContext)
    const [suggestions, setSuggestions] = useState([])
    const [val, setVal] = useState('')

    let classes = `${visibility} tokenForm`

    useEffect(() => {
        reset()
    }, [visibility])

    function search(e) {
        let list = []
        if (e.target.value != '') {
            list = tokenList.filter(t => t.startsWith(e.target.value))
        }  
        setVal(e.target.value)
        return setSuggestions(list)
    }

    function setOption(option) {
        console.log(option.target.innerHTML);
        setVal(option.target.innerHTML)
        return setSuggestions([])
    }

    function cancel(e) {
        e.preventDefault();
        changeVisibility()
        setTokenData({})
        return clearForm();
    }

    function submit(data) {
        console.log(data);
        isNewToken ? postDataBase(data) : editDataBase(data)
        return window.location.reload();
    }


    return (
        <div className={classes}>
            <form onSubmit={handleSubmit(submit)} id='form'>
                <h2 className='total'>{isNewToken ? 'Add Token:' : 'Edit Token:'}</h2>
                <label htmlFor="text">Token Name</label>
                <br />
                <div className='input'>
                    <input type="text" value={isNewToken ? val : data.token}  autoComplete="off" readOnly={!isNewToken ? true : false}
                        {...register("token", {
                            required: true,
                            validate: {
                                api: value => validateTokenOnApi(value, tokenList),
                                database: value => {
                                    if (isNewToken) {
                                        let validation = validateTokenOnDatabase(value, tokenDatabase)
                                        return validation
                                    } else return true
                                }
                            },
                            onChange: e => search(e)
                        })}
                        aria-invalid={errors.token ? "true" : "false"}
                        placeholder='ethereum' />

                    {suggestions &&
                        <div className='suggestions'>
                            {suggestions && suggestions.map(
                                (option, i) =>
                                    <div key={i} className='option'
                                        onClick={setOption}
                                    >{option}</div>)
                            }
                        </div>
                    }

                    {errors.token?.type === 'required' && <p role="alert">Token name is required. (Ej: 'bitcoin')</p>}
                    {errors.token?.type === 'api' && <p role="alert">This token name doesn't match with Coingecko's API</p>}
                    {errors.token?.type === 'database' && <p role="alert">You already added this token</p>}
                    <br />
                </div>

                <label htmlFor="text">Token Ticker</label>
                <br />

                <input onChange={search} type="text" defaultValue={isNewToken ? undefined : data.ticker}
                    {...register("ticker", { required: true })}
                    aria-invalid={errors.ticker ? "true" : "false"}
                    placeholder='ETH' />

                {errors.ticker?.type === 'required' && <p role="alert">Token ticker required. (Ej: 'BTC')</p>}

                <br />
                <label htmlFor="text" >Amount</label>

                <br />
                <input type="number" step="0.001" defaultValue={isNewToken ? undefined : data.amount}
                    {...register("amount", {
                        required: true, validate: {
                            positiveNumber: value => {
                                return parseFloat(value) > 0;
                            }
                        }
                    })}
                    aria-invalid={errors.amount ? "true" : "false"}
                    placeholder='0.5' />

                {errors.amount?.type === 'required' && <p role="alert">Amount is required</p>}
                {errors.amount?.type === 'positiveNumber' && <p role="alert">Must be positive number</p>}

                <br />

                <button type='submit'>{isNewToken ? 'New Token' : 'Edit Token'}</button>
                <button className='cancel' onClick={cancel}>X</button>
            </form>
        </div>
    )
}
