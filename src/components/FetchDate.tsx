import {FC} from "react";
import {FetchDateP} from "../styled/fetchDateCss";
import {formattedDate} from "../constants/constants";

const FetchDate: FC = () => {
    return (
        <FetchDateP>Данные носят ознакомительный характер {formattedDate}</FetchDateP>
    );
};

export default FetchDate;