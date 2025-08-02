import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import './Content.css';


const Content = () => {

    const  [items,setitems]=useState([
        {
            id:1,
            cheked:true,
            item:"Practice coding"
        },
        {
            id:2,
            cheked:false,
            item:"play carrom"
        },{
            id:3,
            cheked:true,
            item:"study to exam"
        }
    ]);

/* 
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
 */
    /*  const handleClick = (name)=>{
         console.log(`Thanks ${name}`)
 
     }
     const handleClick2 = (name)=>{
         console.log(`Thanks ${name}`)


          <p> Welcome {name}</p>
            <button onClick={handlenamecheck}>Click</button><br></br>
            <button onClick={decrement}>-</button><br></br>
            <span>{count}</span><br></br>
            <button onClick={increment}>+</button>
 
     } */

            const handlecheck=(id)=>{
                    const listitems=items.map((item)=>item.id===id?{...item,cheked:!item.cheked}:item)
                    setitems(listitems)
                    }

                const handledelete=(id)=>{
                    const listitems=items.filter((item)=>item.id
                    !==id)
                    setitems(listitems)
                }
    return (
        <main>
            <ul>
                {items.map((item)=>(
                    <li className="item" key={item.id}>
                        <input type="checkbox" checked={item.cheked} onChange={()=>handlecheck(item.id)}></input>
                        <label>{item.item}</label>
                        <FaTrashAlt role='button' tabIndex="0" onClick={()=>handledelete(item.id)}/>
                    </li>
                ))}
            </ul>
           
        </main>
    )


}

export default Content