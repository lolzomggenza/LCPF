import styled from "styled-components";

export const Post = styled.div`
    border: 1px solid red;
    > main {
        width: 820px;
        margin: 4rem auto 0;
        border: 1px solid blue;
        > div:first-child {
            h1 {
                margin-bottom: 1rem;
                font-size: 3rem;
                color: #343A40;
                letter-spacing: 0.125rem;
            }
            p {
                margin-bottom: 2.5rem;
                font-size: 0.925rem;
                span {
                    font-weight: bold;
                }
            }
        }
        > div:nth-child(2) {
            img {
                width: 100%;
                height: 100%;
            }
        }
        > div:nth-child(3) {

        }
    }
    @media all and (max-width: 768px) { /* 화면이 768이하일 때 적용 될 스타일 */
        > main {
            width: auto;
        }
    }
`;