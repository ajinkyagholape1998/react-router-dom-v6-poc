import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxDemo() {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state);
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "SET_NAME",
            payload: event.target.value
        })
    }

    return (
        <div>
            <p>Redux Demo</p>
            <input
                autoFocus={true}
                type={"text"}
                onChange={handleOnChange}
                value={state.name} />
        </div>
    )
}

export default ReduxDemo