import {FC} from "react";
import styled from 'styled-components';

const ErrorH2 = styled.h2`
  text-transform: uppercase;
  color: #ff0000;
`;

const FetchError: FC = () => {
    return (
        <ErrorH2>Error has occurred!</ErrorH2>
    );
};

export default FetchError;