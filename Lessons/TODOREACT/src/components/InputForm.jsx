
function Input({newTodo , setNewTodo , onSubmit}){
    
    return (
       
        <>
        <input className="input" type="text" value={newTodo} onChange ={(e)=>setNewTodo(e.target.value)} />

        <button className="submit" onClick={onSubmit}>Add Item</button>

        </>

    )

}

export default Input;