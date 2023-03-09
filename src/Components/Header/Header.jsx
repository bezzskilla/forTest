import { useActions } from "../../hooks/useActions";
import Button from "../ui/Button";
import styles from "./style.module.css";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const HeaderProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logOutUser, changeModalState } = useActions();

  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    if (!TOKEN && location.pathname !== "/signup") {
      changeModalState(true);
      navigate("/");
    }
  }, [navigate, location.pathname, changeModalState]);

  return (
    <header className={styles.Header}>
      <a href="/products">
        <Button variant="primary">Продукты</Button>
      </a>
      <a href="/user">
        <Button variant="primary">Личный кабинет</Button>
      </a>
      <a href="/cart">
        <Button variant="primary">Корзина</Button>
      </a>
      <Button onClick={handleLogOut} variant="primary">
        Выход
      </Button>
    </header>
  );
};
