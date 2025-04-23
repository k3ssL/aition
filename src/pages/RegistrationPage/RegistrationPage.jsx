import classes from './RegistrationPage.module.css'

const RegistrationPage = () => {
    return (
        <div className={classes.container}>
            <form>
                <h1>Регистрация</h1>
                <input type="text" placeholder={'Имя'}/>
                <input type="text" placeholder={'Фамилия'}/>
                <input type="email" placeholder={'Эл.почта'}/>
                <input type="text" placeholder={'Телефон'}/>
                <input type="password" placeholder={'Пароль'}/>
                <input type="password" placeholder={'Подтверждение пароля'}/>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegistrationPage;