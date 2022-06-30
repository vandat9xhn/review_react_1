import styled from "styled-components";

//
interface Btn36pxType {
    height?: number | string;
    bg?: string;
}

export const Btn = styled.button<Btn36pxType>`
    height: ${(props) => (props.height ? props.height : "36px")};
    padding: 0 16px;
    border-radius: 6px;
    background-color: ${(props) => props.bg};

    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
`;

export const BtnBlue = styled(Btn)`
    background-color: blue;
`;
