import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/user/User'
import { addNumberAction, changeValueAction, clearNumberAction,  } from '../../redux/actions'



const UserPage = () => {

    const dispatch = useDispatch()
    const {value, numbers} = useSelector(state=> state.inputReducer)



    const onChange = (e)=>{
        dispatch(changeValueAction(e.target.value))
    }
    const onAdd = () =>{
        dispatch(addNumberAction())
    }
    const onClear = () =>{
        dispatch(clearNumberAction())
    }
    return (
        <>
            <input type="number" onChange={onChange} value={value} placeholder="number"/>
            <button onClick={onAdd}>Add</button>
            <button onClick={onClear}>Clear</button>
            <ul>
                {numbers.map((number, index)=>
                    <User key ={index} user={number}/>)}
            </ul>
        </>
    )
}

export default UserPage