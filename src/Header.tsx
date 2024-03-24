import {useAuth} from "./hooks/usAuth.js";

function Header() {
    const {isLoggedIn} = useAuth();

    return (
        <div>
            <h1>{isLoggedIn ? 'Привет!' : 'Сначала войдите'}</h1>
        </div>
    );
}

export default Header;