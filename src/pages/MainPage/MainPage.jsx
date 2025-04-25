import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <div className={classes.special_suggestion}>
                <h1>10% СКИДКА ТОЛЬКО СЕЙЧАС</h1>
                <p>Решайте проблемы вашей техники с нашей <br/> помощью. Только сегодня скидка в 10% на <br/> установку
                    нового ПО!</p>
                <button>ЗАКАЗАТЬ</button>
            </div>
            <h1 className={classes.buy_orders}>ЗАКАЗАТЬ УСЛУГИ</h1>
            <div className={classes.orders}>
                <p style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: 15,
                    color: "#ffffff",
                    fontWeight: 400,
                    marginBottom: '40px'
                }}>Заполните данную форму и мы свяжемся с вами <br/> в скором времени и ответим на все
                    интересующие <br/> вас
                    вопросы!</p>
                <h4 style={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: 20,
                    color: "rgba(25, 0, 255, 1)",
                    fontWeight: 400
                }}>КОНТАКТЫ</h4>
                <div className={classes.wrapper}>
                    <div>
                        <div className={classes.info}>
                            <img src={"/aition/img/adress.png"} alt={""}/>
                            <p>453104, Республика Башкортостан, Стерлитамак г., Бабушкина ул., д. 100, оф. 301</p>
                        </div>
                        <div className={classes.info}>
                            <img src={"/aition/img/tele.png"} alt={""}/>
                            <p>+7(3473) 33-95-99</p>
                        </div>
                        <div className={classes.info}>
                            <img src={"/aition/img/email.png"} alt={""}/>
                            <p>info@айтион.рф</p>
                        </div>
                    </div>
                    <form className={classes.form}>
                        <h1>Оформление заказа</h1>
                        <input placeholder={'Имя'} type={'text'}/>
                        <input placeholder={'Фамилия'} type={'text'}/>
                        <input placeholder={'Телефон'} type={'text'}/>
                        <input placeholder={'E-mail'} type={'text'}/>
                        <input placeholder={'Ваш заказ'} type={'text'}/>
                        <p>Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в
                            соответствии с <br/>
                            Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
                            целей, <br/>
                            определенных в Согласии на обработку персональных данных</p>
                        <button>Отправить</button>
                    </form>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.61687559413!2d55.99334777716997!3d53.67163035033443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d8114328d87061%3A0x7c9cd3522cc1126b!2z0YPQuy4g0JHQsNCx0YPRiNC60LjQvdCwLCAxMDAsINCh0YLQtdGA0LvQuNGC0LDQvNCw0LosINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0sIDQ1MzEwNQ!5e0!3m2!1sru!2sru!4v1745561728289!5m2!1sru!2sru"
                    width="1440" height="450" style={{border:0, margin: '320px 0 0 -60px '}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
};

export default MainPage;