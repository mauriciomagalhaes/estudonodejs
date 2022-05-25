import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    QuerySnapshot,
} from "firebase/firestore";
import { querystring } from "@firebase/util";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // Deal Memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        if (cancelled) return;

        setLoading(true);

        const collectionRef= await collection(db, docCollection);

        try {
            let qry;

            qry = await query(collectionRef, orderBy("createdAt", "desc"))

            await onSnapshot(qry, (QuerySnapshot)=>{
                QuerySnapshot.docs.map((doc) =>({
                    id: doc.id,
                    ...doc.data(),
                }))
            })
            setLoading(false)
        } catch (error) {
            console.log(erro)
            setError(error.message)
            setLoading(false)
        }
        
    }, [docCollection, search, uid, cancelled]);

    return documents, loading, error;
};