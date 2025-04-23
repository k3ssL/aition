import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.container}>
            <img src="/img/logo.png" alt="logo" />
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? classes.active_link : ''}
                >
                    Главная
                </NavLink>
                <NavLink
                    to="/registration"
                    className={({ isActive }) => isActive ? classes.active_link : ''}
                >
                    Регистрация
                </NavLink>
                <NavLink
                    to="/authorization"
                    className={({ isActive }) => isActive ? classes.active_link : ''}
                >
                    Авторизация
                </NavLink>
                <NavLink
                    to="/catalog"
                    className={({ isActive }) => isActive ? classes.active_link : ''}
                >
                    Каталог
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
