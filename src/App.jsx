import {useEffect, useState} from 'react';
import styles from './App.module.scss'
import {Link, useNavigate} from "react-router-dom";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setTodos(data);
        }
        fetchData();
    }, []);

    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/about-us')
    // }, []);

    return (
        <div className={styles.layout}>
            <Link to='/about-us'>Go to about-us</Link>
            <button onClick={()=>navigate('/about-us')}>Click to go to about-us</button>

            <ul>
                {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    );
}

export default App;