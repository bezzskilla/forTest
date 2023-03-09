/* eslint-disable func-names */
import { useNavigate } from "react-router-dom";
import { Spinner } from "../Components/Spinner/Spinner";
import { Button } from "antd";

export const withQuery = (WrappedComponent) =>
  function ({ isLoading, isError, error, refetch, ...rest }) {
    const navigate = useNavigate();
    const goBackHandler = () => {
      navigate(0 ?? "/");
    };
    if (isError) {
      return (
        <div>
          <p>Ошибка: {error.message}</p>

          <Button onClick={refetch} type="primary">
            Повторить запрос
          </Button>
          <Button onClick={goBackHandler} type="primary">
            Вернуться
          </Button>
        </div>
      );
    }

    if (isLoading) return <Spinner />;

    return <WrappedComponent {...rest} />;
  };
