import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    width: 20rem;
    height: 22rem;
    flex-direction: column;

    > a.img-wrapper {
        width: 100%;
        height: 45%;
        > div {
            position: relative;
            padding-top: 50%;
            > img {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
            }
        }
    }
    > div.title-wrapper {
        display: flex;
        width: 100%;
        height: 45%;
        flex-direction: column;
        > a {
            display: flex;
            flex-direction:column;
            height: 80%;
            .title {
                padding: 25px 0 10px 13px;
                font-size: 16px;
                font-weight: bold;
            }
            .sub-title {
                font-size: 14px;
                padding: 0 15px 0 10px;
                margin: 0;
                line-height: 20px;
            }
        }
        > div {
            > span {
                font-size: 13px;
                padding: 0 0 0 10px;
            }
        }
    }
    > div.line {
        height: 1px;
        background-color: #f8f9fa;
    }
    > div.sub-information-wrapper {
        width: 100%;
        height: 10%;
        > a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            > span {
                padding: 0 0 0 12px;
                font-size: 13px;
            }
        }
    }
`;