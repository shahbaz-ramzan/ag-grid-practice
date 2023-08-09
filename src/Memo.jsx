import React from 'react'
import { useMemo, useState } from 'react'

function Memo() {

    const [state, setState] = useState(0)


    let fun = useMemo(() => {
        console.log("render")
        return Math.random
    }, [])
    fun()


    return (
        <div>Memo

            <h1>{state}</h1>
            <button onClick={() => setState(state + 1)}>Inc</button>
        </div>
    )
}

export default Memo