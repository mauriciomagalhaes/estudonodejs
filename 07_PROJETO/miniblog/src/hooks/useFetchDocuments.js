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

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // Deal Memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return;

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let qry;

                qry = await query(collectionRef, orderBy("createdAt", "desc"));

                await onSnapshot(qry, (QuerySnapshot) => {
                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });
                setLoading(false);
            } catch (error) {
                setError(error.message);
                console.log(error);
                setLoading(false);
            }
        }
        loadData();
    }, [docCollection, search, uid, cancelled]);
    //console.log(documents);
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};
