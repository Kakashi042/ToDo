import React, { useState } from 'react'

const NewTodoForm = ({onSubmit}) => {
    
    const [newItem, setNewItem] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(newItem==='') return
    
    // setTodos((curr)=>{
    //     return[
    //       ...curr, {id:crypto.randomUUID(), title:newItem, completed:false}
    //     ]
    // })
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input type='text' id='item' value={newItem} onChange={(e)=>setNewItem(e.target.value)}></input>
    </div>
    <button className='btn'>Add</button>
  </form>
  )
}

export default NewTodoForm