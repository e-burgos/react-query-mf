import { useQuery } from "react-query";
import { CoinFullInfo } from "../types";

async function fetchCryptos(page: number, count: number) {
    const response = await fetch(`https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${page}&per_page=${count}&order=market_cap_desc`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key": "26496942d1msh975fcb8f3965c14p19bfb9jsnce8c17126755"
        }
    });
    const cryptos = await response.json()
    return cryptos;
};

export function useQueryCryptos(page: number, count: number) {
    const query = useQuery<CoinFullInfo[]>(['cryptos', page, count], () => fetchCryptos(page, count))
    return query;
}



