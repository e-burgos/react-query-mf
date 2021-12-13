import React, { useState, useEffect } from 'react';

export function useFetch() {
    const url = 'https://thecocktaildb.com/api/json/v1/1/random.php';
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(true);

    useEffect(() => {
    if(reload){
        setLoading(true);
        fetch(url).then(res => {
            if(res.ok){
                return res.json();
            } throw res;
        })
        .then(data => {setData(data)})
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
            setReload(false);
        });
    }    
    },[reload])

    return {data, loading, error, setReload};
};

