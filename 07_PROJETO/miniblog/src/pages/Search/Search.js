import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Search = (search) => {
    const { documents: posts, loading } = useFetchDocuments("posts", search);

    return (
        <div>
            <h2>Search</h2>${console.log(search)};
        </div>
    );
};

export default Search;
