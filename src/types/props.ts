import {Dispatch, SetStateAction} from "react";

export interface CoinsInputProps {
    amount: number;
    currency: string;
    image: string;
    isOpen: boolean;
    onAmountChange: (amount: number) => void;
    onCurrencyImageClick: (name: string, fullName: string, img: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}