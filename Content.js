import React from 'react'


const Content = () => {
    function handlenamecheck() {
        const names = ['Mani', 'Prabhu', 'Prasath', 'Dhiwa', 'Pradeep']
        const int = Math.floor(Math.random() * 5)
        return names[int]
    }

    const handleClick = (name)=>{
        console.log(`Thanks ${name}`)

    }
    const handleClick2 = (name)=>{
        console.log(`Thanks ${name}`)

    }
    return (
        <main>
            <p onDoubleClick={()=>handleClick2('Prabhu')}> Welcome {handlenamecheck()}</p>
            <button onClick={()=>handleClick('Mani')}>Click</button></main>
    )


}

export default Content