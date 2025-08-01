import React from 'react'
import { useState } from 'react'

const Content = () => {


    const [name, newname] = useState('Mani')
    function handlenamecheck() {
        const names = ['Mani', 'Prabhu', 'Prasath', 'Dhiwa', 'Pradeep']
        const int = Math.floor(Math.random() * 5)

        return newname(names[int])
    }

    const [count, setCount] = useState(99);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    /*  const handleClick = (name)=>{
         console.log(`Thanks ${name}`)
 
     }
     const handleClick2 = (name)=>{
         console.log(`Thanks ${name}`)
 
     } */
    return (
        <main>
            <p> Welcome {name}</p>
            <button onClick={handlenamecheck}>Click</button><br></br>
            <button onClick={decrement}>-</button><br></br>
            <span>{count}</span><br></br>
            <button onClick={increment}>+</button>
        </main>
    )


}

export default Content