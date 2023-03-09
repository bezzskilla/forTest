import ReactDOM from "react-dom";
import style from "./modal.module.css";

function ModalContent({ children }) {
  return <div className={style.modal_content}>{children}</div>;
}

export const ModalPortal = function ({ children, isOpen = false }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={style.modal_wrapper}>
      <ModalContent>{children}</ModalContent>
    </div>,
    document.getElementById("modal-root")
  );
};
