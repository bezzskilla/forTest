import { useActions } from "../../hooks/useActions";
import { useDebounce } from "../../hooks/useDebounce";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState();
  const { changeSearchFilter } = useActions();
  const debounceValue = useDebounce(searchInput, 750);
  const navigate = useNavigate();

  const onChange = (value) => {
    setSearchInput(value.target.value);
    navigate({
      pathname: "/products",
      search: `?search=${value.target.value}`,
    });
  };

  useEffect(() => {
    if (debounceValue) changeSearchFilter(debounceValue);
  }, [changeSearchFilter, debounceValue]);

  return (
    <div className="header__center search">
      <input
        name="search"
        label="Поиск продуктов?"
        type="text"
        className="search"
        onChange={onChange}
      />
    </div>
  );
};

export { SearchInput };
