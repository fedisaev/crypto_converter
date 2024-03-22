import {FC, useCallback, useEffect, useState} from "react";
import {ArrowsMainPage, PMainPage, WrapperMainPage} from "../styled/mainPageCss";
import CoinsInput from "./CoinsInput";
import {GoArrowSwitch} from "react-icons/go";
import {useFetchCrypto} from "../hooks/useFetchCrypto";
import {format} from "../helpers/helpers";

const MainPage: FC = () => {

    const [amount1, setAmount1] = useState<number>(1);
    const [amount2, setAmount2] = useState<number>(1);
    const [currency1, setCurrency1] = useState<string>('ETH');
    const [currency2, setCurrency2] = useState<string>('BTC');
    const [image1, setImage1] = useState<string>("https://www.cryptocompare.com/media/37746238/eth.png");
    const [image2, setImage2] = useState<string>("https://www.cryptocompare.com/media/37746251/btc.png");
    const [fullName1, setFullName1] = useState<string>('Ethereum');
    const [fullName2, setFullName2] = useState<string>('Bitcoin');
    const [isOpen1, setIsOpen1] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const {cryptoDataAll} = useFetchCrypto();

    useEffect(() => {
        if (cryptoDataAll.length > 0) {
            handleAmount1Change(1);
        }
    }, [cryptoDataAll]);

    const handleAmount1Change = useCallback((amountFirst: number): void => {
        setAmount2(Number(format(amountFirst * (cryptoDataAll.find(coin => coin.name === currency1)?.price || 0) / (cryptoDataAll.find(coin => coin.name === currency2)?.price || 1))));
        setAmount1(amountFirst);
    }, [cryptoDataAll, currency1, currency2]);

    const handleAmount2Change = useCallback((amountSecond: number): void => {
        setAmount1(Number(format(amountSecond * (cryptoDataAll.find(coin => coin.name === currency1)?.price || 0) / (cryptoDataAll.find(coin => coin.name === currency2)?.price || 1))));
        setAmount2(amountSecond);
    }, [cryptoDataAll, currency1, currency2]);

    const handleCurrencyImageOne = useCallback((name: string, fullName: string, img: string): void => {
        setAmount2(Number(format(amount1 * (cryptoDataAll.find(coin => coin.name === currency2)?.price || 0) / (cryptoDataAll.find(coin => coin.name === name)?.price || 1))));
        setCurrency1(name);
        setImage1(img);
        setIsOpen1(false);
        setFullName1(fullName);
    }, [amount1, cryptoDataAll, currency2]);

    const handleCurrencyImageTwo = useCallback((name: string, fullName: string, img: string): void => {
        setAmount1(Number(format(amount2 * (cryptoDataAll.find(coin => coin.name === currency1)?.price || 0) / (cryptoDataAll.find(coin => coin.name === name)?.price || 1))));
        setCurrency2(name);
        setImage2(img);
        setIsOpen2(false);
        setFullName2(fullName);
    }, [amount2, cryptoDataAll, currency1]);

    const handleChangePlace = useCallback((): void => {
        const tempCurrency: string = currency1;
        setCurrency1(currency2);
        setCurrency2(tempCurrency);

        const tempImage: string = image1;
        setImage1(image2);
        setImage2(tempImage);

        const tempFullName: string = fullName1;
        setFullName1(fullName2);
        setFullName2(tempFullName);

        setAmount2(Number(format(amount1 * (cryptoDataAll.find(coin => coin.name === currency2)?.price || 0) / (cryptoDataAll.find(coin => coin.name === currency1)?.price || 1))));
    }, [amount1, currency1, currency2, fullName1, fullName2, image1, image2, setIsOpen1, setIsOpen2, cryptoDataAll]);


    return (
        <>
            <WrapperMainPage>
                <CoinsInput amount={amount1}
                            currency={currency1}
                            image={image1}
                            isOpen={isOpen1}
                            onAmountChange={handleAmount1Change}
                            onCurrencyImageClick={handleCurrencyImageOne}
                            setIsOpen={setIsOpen1}
                />
                <ArrowsMainPage>
                    <GoArrowSwitch size='30' onClick={handleChangePlace}/>
                </ArrowsMainPage>
                <CoinsInput amount={amount2}
                            currency={currency2}
                            image={image2}
                            isOpen={isOpen2}
                            onAmountChange={handleAmount2Change}
                            onCurrencyImageClick={handleCurrencyImageTwo}
                            setIsOpen={setIsOpen2}
                />
            </WrapperMainPage>
            <PMainPage>{amount1} {fullName1} = {amount2} {fullName2}</PMainPage>
        </>
    );
};

export default MainPage;