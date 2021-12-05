import * as React from 'react';
import { useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';

type Props = {
    title: string;
};

const FetchData = ({ title }: Props) => {
    const [getInfo, setGetInfo] = useState<any>([]);
    const { data, loading, error, setReload } = useFetch();

    useEffect(() => {
        if(data) {
            setGetInfo(data.drinks)
        };
    }, [data])

    return (
        <div className='border-2 border-solid border-red-200 border-r-8 rounded-lg p-3 text-center'>
            { error ? (
                <p>Upps, we have a error...</p>
            ) : loading ? (
                <p>Searching Drinks...</p>
            ) : data ? (
                <div className="flex flex-col items-center justify-center">
                    <p>{title}</p>
                    <div className="flex flex-row items-center justify-center">
                        <div className="shadow-inner m-5 rounded-lg flex justify-center align-middle max-w-md">
                            <img className='rounded-lg' src={getInfo[0].strDrinkThumb} alt={getInfo[0].strDrink}/>
                        </div>
                        <div className="shadow-inner m-5 p-3 rounded-lg flex justify-start items-start max-w-lg flex-col">
                            <p>Name: {getInfo[0].strDrink}</p>
                            <p>Type: {getInfo[0].strAlcoholic}</p>
                            <p>Category: {getInfo[0].strCategory}</p>
                            <em className="text-left text-sm mt-5">Instructions: {getInfo[0].strInstructions}</em>
                            <button
                                onClick={() => setReload(true)}
                                className='bg-green-500 rounded-lg p-2 text-white mt-5'
                            >More Drinks!</button>
                        </div>
                    </div>
                </div>    
            ): null}
        </div>
    )
};
export default FetchData;
