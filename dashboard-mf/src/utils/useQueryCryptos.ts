import { useQuery } from "react-query";
import { CoinFullInfo } from "../types";

async function fetchCryptos(page: number, count: number) {
    const response = await fetch(`https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${page}&per_page=${count}&order=market_cap_desc`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`
        }
    });
    const cryptos = await response.json()
    return cryptos;
};

export function useQueryCryptos(page: number, count: number) {
    const query = useQuery<CoinFullInfo[]>(['cryptos', page, count], () => fetchCryptos(page, count))
    return query;
}



