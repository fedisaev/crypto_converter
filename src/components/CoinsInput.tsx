import {FC, ChangeEvent, useCallback} from 'react';
import {Dropdown, DropdownButton, DropdownMenu, DropdownMenuItem, Group, MyInput} from "../styled/coinsInputCss";
import {TbCaretUpDownFilled} from 'react-icons/tb';
import {useFetchCrypto} from "../hooks/useFetchCrypto";
import {CoinsInputProps} from "../types/props";
import {Coin} from "../types/types";

const CoinsInput: FC<CoinsInputProps> = ({amount, currency, image, isOpen, onAmountChange, onCurrencyImageClick, setIsOpen}) => {

    const {cryptoDataAll} = useFetchCrypto();

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onAmountChange(Number(e.target.value));
    }, [onAmountChange]);

    const handleIsOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [setIsOpen]);

    return (
        <>
            <Group>
                <MyInput type="number" value={amount} onChange={handleInputChange} min={1}/>
                <Dropdown>
                    <DropdownButton onClick={handleIsOpen}>
                        <div>
                            <div><img width='30px' src={image} alt=""/></div>
                            {currency}
                        </div>
                        <TbCaretUpDownFilled size='30'/>
                    </DropdownButton>
                    {isOpen && (
                        <DropdownMenu>
                            {cryptoDataAll.map((coin: Coin) => (
                                <DropdownMenuItem key={coin.fullName}
                                                  onClick={() => onCurrencyImageClick(coin.name, coin.fullName, coin.imageUrl)}
                                >
                                    <img width='30px' src={coin.imageUrl} alt={coin.fullName}/>
                                    <span>{coin.name}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenu>
                    )}
                </Dropdown>
            </Group>
        </>
    );
};

export default CoinsInput;
