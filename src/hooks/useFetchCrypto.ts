import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {api_key, base_url, image_url} from "../constants/constants";
import {CryptoData} from "../types/types";

interface FetchCryptoState {
    cryptoDataAll: CryptoData[];
    loading: boolean;
    error: string;
}

export const useFetchCrypto = (): FetchCryptoState => {

    const [cryptoDataAll, setCryptoDataAll] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data}: AxiosResponse = await axios.get(`${base_url}&api_key=${api_key}`);
                const filteredData = data.Data.filter(item => item.CoinInfo.Name === 'BTC' || item.CoinInfo.Name === 'ETH' || item.CoinInfo.Name === 'USDT');
                const coins: CryptoData[] = filteredData.map(coin => {
                    return {
                        name: coin.CoinInfo.Name,
                        fullName: coin.CoinInfo.FullName,
                        imageUrl: `${image_url}${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE,
                    };
                });
                setCryptoDataAll(coins);
                setLoading(false);
            } catch (error) {
                setError("An error occurred while fetching data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {cryptoDataAll, loading, error};
};
