import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
};

const deleteReduce = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "DELETED_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReduce, initialState);

    // Deal memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const deleteDocument = async (id) => {
        //console.log("Hook", document);
        checkCancelBeforeDispatch({
            type: "LOADING",
        });

        try {
            const deletedocument = await deleteDoc(doc(db, docCollection, id));

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deleteDocument,
            });
        } catch (error) {
            console.log(error);
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });
        }
    };

    useEffect(() => {
        return () => {
            setCancelled(true);
        };
    }, []);

    return { deleteDocument, response };
};
