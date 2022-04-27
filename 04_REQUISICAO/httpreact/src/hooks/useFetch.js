import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //Exercicio 5
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  //console.log(callFetch);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }); //config
      setMethod(method); //method
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      }); //config
      setMethod(method); //method
      setItemId(data); //itemId
    }
  };

  // GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json); //data
      } catch (error) {
        setError("Houve algum problema na requisição!");
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  //Exercicio 5
  //POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);

        json = await res.json();
      } else if (method === "DELETE") {
        let deleteUrls = `${url}/${itemId}`;

        const res = await fetch(deleteUrls, config);

        json = await res.json();
      }
      setCallFetch(json); //callFetch
    };
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, loading, error };
};
