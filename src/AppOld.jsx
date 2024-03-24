import styles from './App.module.scss'
import {Details} from "./Details.tsx";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Header from "./Header.tsx";
import {useAuth} from "./hooks/usAuth.ts";

const MENU = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    }
]

const isAuth = true;
const role = 'admin'


export function AppOld(){
    const {isLoggedIn, setIsLoggedIn} = useAuth();

    const [details, setDetails] = useState({
        isLoading : true,
        title: 'useEffect',
        description: 'Hello',
        buttonText: 'Click',
        count: 0
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDetails(prev => ({ ...prev, isLoading: false}))
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }
    }, []);

    useEffect(() => {
        setDetails(prev => ({
            ...prev,
           count: prev.count + 1,
           description: 'title has changed ' + prev.count + ' raz',
        }))
    }, [details.title]);

    const imageRef = useRef(null);

    const onClick = () => {
        if (!imageRef.current) return;

        imageRef.current.style.borderRadius = '20px'
        imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .5)'
    }

    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(10);
    const result = useMemo(() => {
        return count * multiplier;
    }, [count, multiplier])

    const handleLoading = useCallback(() => {
        setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
    }, [])

    return <div className={styles.layout}>
        <img ref={imageRef} src='/email.png' width={200} alt='/email.png'/>

        <br/>

         <button onClick={onClick}>Change Image</button>

        <div> Результат: {result}</div>
        <button onClick={() => setCount(prev => prev + 1)}>Увеличить счётчик</button>
        <button onClick={() => setMultiplier(prev => prev + 10)}>Увеличить множитель</button>

        <div>
        {
            MENU.map(item => (<span key={item.link}>{item.name}</span>))
        }
        </div>

        <div>{isAuth ? 'Авторизирован' : (role === 'admin' ? 'Admin' : 'Войдите в систему!')}</div>

        {details.isLoading && <p>Loading...</p>}
        <Details
            details={details}
            setDetails={setDetails}
            handleLoading={handleLoading}
        />

        <div>
            <Header/>
            <br/>
            {
                isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>
                        Выйти из системы
                    </button> :
                    <button onClick={() => setIsLoggedIn(true)}>
                        Войти
                    </button>
            }
        </div>
    </div>
}