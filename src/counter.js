import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(4)
    const [user, setUser] = useState("shoshi")

    const onAdd1 = () => {
        setCounter(counter + 1);
        if (counter + 1 > 10) {
            setUser("Jack")
        }
    }

    return (
        <div className='container'>
            <h2>Counter {user} : {counter}</h2>

            <button onClick={onAdd1}>add1</button>
            <button onClick={()=>{
                setCounter(counter-5)
                if (counter-5 < 10) {
                    setUser("Shoshi")
                }
            
            }}
            
        >reduce 5</button>

        </div>
    )
}

export default Counter