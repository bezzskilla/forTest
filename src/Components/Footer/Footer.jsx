import style from "./style.module.css";

export const FooterProject = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__group}>
          <div className={style.footer__links}>
            <a href="tel:74959999999">+7 (495) 999-99-99</a>
          </div>
        </div>
        <div className={style.footer__group}>
          <div className={style.footer__links}>
            <a href="/">Вернуться наверх</a>
          </div>
        </div>
        <div className={style.footer__links}>
          <a href="/">Контакты</a>
        </div>
      </div>
      <div className={style.footer__copyright}>Amaizing magazine</div>
    </footer>
  );
};
