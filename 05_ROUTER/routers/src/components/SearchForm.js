import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState();

  const [searchParam] = useSearchParams();

  const url = "https://localhost:3000/";

  const handleSubmit = (e) => {
    e.preventEvent();
  };

  return <div>SearchForm</div>;
};

export default SearchForm;
