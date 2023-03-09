import "./App.css";
import { FooterProject } from "./components/Footer/Footer";
import { FormAuthorization } from "./components/FormAuthorization/FormAuthorization";
import { HeaderProject } from "./components/Header/Header";
import { ModalPortal } from "./components/ModalPortal/ModalPortal";
import { useActions } from "./hooks/useActions";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { changeModalState } = useActions();
  const modalOpen = useSelector((state) => state.modalOpen);

  const location = useLocation();

  const TOKEN = localStorage.getItem("token");

  if (TOKEN && location.pathname === "/") {
    return <Navigate to="/products" />;
  }

  return (
    <>
      <ModalPortal isOpen={modalOpen}>
        <FormAuthorization />
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            changeModalState(false);
            navigate("/signup");
          }}
        >
          Зарегестрироваться
        </Button>
      </ModalPortal>

      <HeaderProject />
      <Outlet />
      <FooterProject />
    </>
  );
}

export { App };
