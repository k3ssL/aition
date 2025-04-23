import classes from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={classes.container}>
            <form>
                <h1>Вход</h1>
                <input type="text" placeholder={'Логин / Эл.почта'}/>
                <input type="text" placeholder={'Пароль'}/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;