import classes from './CatalogPage.module.css'

const CatalogPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.filters}>
                <div className={classes.filters_item}>Телефоны</div>
                <div className={classes.filters_item}>Ноутбуки</div>
                <div className={classes.filters_item}>Комплектующие ПК</div>
                <div className={classes.filters_item}>Принтеры</div>
            </div>
            <div className={classes.cards}>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
                <div className={classes.card_item}>
                    <img src={"/aition/img/ipho.png"} alt={""}/>
                    <h3>Iphone 16</h3>
                    <p>150.000₽</p>
                    <button>В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;