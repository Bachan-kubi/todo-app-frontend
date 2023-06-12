import axios from 'axios';

const baseURl = 'http://localhost:5000';

const getAllTodo = (setTodo)=>{
    axios.get(baseURl).then(({data})=>{
        console.log(data);
        setTodo(data);
    })
};

// add todo 
const addTodo = (text, setText, setTodo)=>{
    axios.post(`${baseURl}/save`, {text}).then((data)=>{
        if(!text){
            alert('Please input data');
            return;
        } else{
        console.log(data);
        setText('');
        getAllTodo(setTodo);
        }
    })
    .catch(err=>console.log(err))
};
// update todo 
const updateTodo = (textId, text, setText, setTodo, setIsUpdating)=>{
    axios.post(`${baseURl}/update`, {_id: textId, text}).then((data)=>{
        console.log(data);
        setText('');
        setIsUpdating(false);
        getAllTodo(setTodo);
    })
    .catch(err=>console.log(err));
};
const deleteTodo = (_id, setTodo)=>{
    axios.post(`${baseURl}/delete`, {_id}).then((data)=>{
        console.log(data);
        getAllTodo(setTodo);
    })
    .catch(err=>console.log(err));
};


export {getAllTodo, addTodo, updateTodo, deleteTodo};