import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.container}>
            <img src={'/img/logo.png'} alt={'logo'}/>
            <nav>
                <a href="">Главная</a>
                <a href="">Регистрация</a>
                <a href="">Авторизация</a>
                <a href="">Каталог</a>
            </nav>
        </div>
    );
};

export default Header;