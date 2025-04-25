import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <section className={classes.banner}>
                <div className={classes.content}>
                    <p className={classes.title}>Комплексные <br/> IT-услуги</p>
                    <p className={classes.description}>Обеспечьте бесперебойную работу <br/> офисной техники и программ
                    </p>
                    <button>ПОДРОБНЕЕ</button>
                </div>
                <img src="/aition/img/bug.png" alt=""/>
            </section>
            <section className={classes.aboutUs}>
                <h1>О НАС</h1>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <img src="/aition/img/1.png" alt=""/>
                        <h3>РЕШАЕМ ПРОБЛЕМЫ <br/> ЗА 25 МИНУТ</h3>
                        <hr/>
                        <p>Решаем 80% <br/> стандартных проблем <br/> онлайн за 25 минут</p>
                    </div>
                    <div className={classes.card}>
                        <img src="/aition/img/2.png" alt=""/>
                        <h3>БОГАТЫЙ ОПЫТ <br/> РЕШЕНИЯ ЗАДАЧ</h3>
                        <hr/>
                        <p>За всё время мы решали <br/> самые разные <br/> технические проблемы</p>
                    </div>
                    <div className={classes.card}>
                        <img src="/aition/img/3.png" alt=""/>
                        <h3>3 ГОДА<br/> НА РЫНКЕ</h3>
                        <hr/>
                        <p>Предлагаем <br/> качественные услуги в <br/> IT-сфере уже 3 года</p>
                    </div>
                    <div className={classes.card}>
                        <img src="/aition/img/4.png" alt=""/>
                        <h3>ЭКСТРЕННЫЕ<br/> ВЫЕЗДЫ</h3>
                        <hr/>
                        <p>Поможем вам в любое <br/> время, работаем <br/> круглосуточно</p>
                    </div>
                </div>
            </section>

            <section className={classes.services}>
                <h1>КОГДА НУЖНЫ IT-УСЛУГИ?</h1>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 1.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>ПРОБЛЕМЫ С <br/> ТЕХНИКОЙ</h2>
                        <p className={classes.desc}>Проблемы с офисной техникой встречаются каждый день, и мы их быстро
                            решаем.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 2.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>СПЕЦИАЛИСТА НЕТ <br/> НА МЕСТЕ</h2>
                        <p className={classes.desc}>Мы поможем, если вам нужен срочный ремонт при отсутствии штатного
                            мастера.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 3.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>ЗАМЕНА МАСТЕРА</h2>
                        <p className={classes.desc}>Если ваш специалист ушёл в отпуск, мы выделим нашего мастера на
                            время.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 4.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>ПОСТОЯННЫЕ УСЛУГИ</h2>
                        <p className={classes.desc}>Профессиональный специалист в штате — это дорого, поэтому мы можем
                            заменить его.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 5.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>РАЗРАБОТКА ПРОГРАММ- <br/>НОГО ОБЕСПЕЧЕНИЯ</h2>
                        <p className={classes.desc}>Проблемы с офисной техникой встречаются каждый день, и мы их быстро
                            решаем.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 6.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>ВЫПУСК КОММЕРЧЕСКИХ <br/> ЭЦП</h2>
                        <p className={classes.desc}>Наши специалисты проконсультируют и помогут выбрать ЭЦП под ваши
                            нужды.</p>
                    </div>
                </div>
                <div className={classes.points}>
                    <img className={classes.imagePoint} src="/aition/img/image 7.png" alt="error"/>
                    <div className={classes.text}>
                        <h2>ПРОГРАММА «ГРАНД- <br/>СМЕТА», ВЕРСИЯ 2023.1</h2>
                        <p className={classes.desc}>Стационарный вариант программы. Устанавливается с диска. Мобильный
                            вариант программы. Запускается с ключа защиты.</p>
                    </div>
                </div>
                <button className={classes.btn}>ЗАКАЗАТЬ</button>
            </section>

            <section className={classes.packageOfServices}>
                <h1>ЧТО ВХОДИТ В ПАКЕТ УСЛУГ</h1>
                <div className={classes.packageBlock}>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 1.png" alt="error"/>
                        <h4>РЕМОНТ НЕИСПРАВНОСТЕЙ</h4>
                        <p className={classes.descPackega}>Решим проблемы не только с ПО, но и с "железом", вам нужно
                            лишь связаться с нами.</p>
                    </div>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 2.png" alt="error"/>
                        <h4>ПРОВЕРКА НА ВИРУСЫ И ЧИСТКА</h4>
                        <p className={classes.descPackega}>Проведём персональную проверку компьютеров на наличие вирусов
                            и их удаление при нахождении.</p>
                    </div>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 3.png" alt="error"/>
                        <h4>КОНСУЛЬТАЦИИ ДЛЯ СОТРУДНИКОВ</h4>
                        <p className={classes.descPackega}>Проконсультируем ваших сотрудников по теме работы программ и
                            использования техники.</p>
                    </div>
                </div>
                <div className={classes.packageBlock}>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 4.png" alt="error"/>
                        <h4>ОБНОВЛЕНИЕ КОМПЬЮТЕРА</h4>
                        <p className={classes.descPackega}>Заменим компоненты и составляющие вашей техники, сделав её
                            более продвинутой.</p>
                    </div>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 5.png" alt="error"/>
                        <h4>ОПТИМИЗАЦИЯ ПРОИЗВОДИТЕЛЬНОСТИ</h4>
                        <p className={classes.descPackega}>Обновим и оптимизируем работу как программ, так и самой
                            техники, путём замены составляющих.</p>
                    </div>
                    <div className={classes.package}>
                        <img className={classes.imagePackage} src="/aition/img/package 6.png" alt="error"/>
                        <h4>ДИАГНОСТИКА КОМПЬЮТЕРА</h4>
                        <p className={classes.descPackega}>Диагностика любого указанного вами компьютера, его ОС и
                            составляющих компьютера.</p>
                    </div>
                </div>
                <button className={classes.btnTwo}>ЗАКАЗАТЬ</button>
            </section>
            <div className={classes.special_suggestion}>
                <h1>10% СКИДКА ТОЛЬКО СЕЙЧАС</h1>
                <p>Решайте проблемы вашей техники с нашей <br/> помощью. Только сегодня скидка в 10% на <br/> установку
                    нового ПО!</p>
                <button>ЗАКАЗАТЬ</button>
            </div>
            <h1 className={classes.buy_orders}>ЗАКАЗАТЬ УСЛУГИ</h1>
            <div className={classes.orders}>
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
                    width="1440" height="450" style={{border: 0, margin: '410px 0 0 -60px '}} allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
};

export default MainPage;