import { useQuery } from "react-query";
import { CoinFullInfo } from "../types";

async function fetchCryptoById(id: string) {
    const response = await fetch(`https://coingecko.p.rapidapi.com/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`
        }
    });
    const crypto = await response.json();
    return crypto;
};

export function useQueryCryptoById(id: string) {
    const query = useQuery<CoinFullInfo>(['cryptos', id], () => fetchCryptoById(id));
    const allLinks = query.data?.links;
    const images = query.data?.image;
    const data = query.data;
    const loading = query.isLoading;
    const error = query.error;
    return { data, loading, images, error, allLinks };
}



