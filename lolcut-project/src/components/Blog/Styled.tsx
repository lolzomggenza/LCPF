import styled from "styled-components";

export const BlogMain = styled.div`
    > main {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #f8f9fa;

        .post-wrapper {
            padding: 5% 3% 10% 5%;
            display: flex;
            width: 72%;
            flex-wrap: wrap;
            > div {
                padding: 0 0.81% 3%; 0;
            }
        }
        > aside {
            width: 20%;
            height: 900px;
            background-color: red;
        }
    }
`;