import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();

    const { data, loading, error } = useFetch();

    const url = "http://localhost:3000/products?" + searchParams;

    return <div>Search</div>;
};

export default Search;
