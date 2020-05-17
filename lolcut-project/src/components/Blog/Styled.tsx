import styled from "styled-components";

export const BlogMain = styled.div`
    > main {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #f8f9fa;

        .post-wrapper {
            padding: 5% 5.3% 10% 5%;
            display: flex;
            width: 72%;
            flex-wrap: wrap;
            > div {
                padding: 0 0.81% 3%; 0;
            }
        }
        .line {
            background-color: #e9ecef;
            height: 1px;
        }
        > aside {
            position: fixed;
            left: 81%;
            display: flex;
            width: 13%;
            height: 900px;
            align-items: center;

            > div {
                width: 100%;
                height: 78%;
                .notice-wrapper {
                    > span {
                        display: block;
                        padding: 0 0 3% 1%;
                        font-size: 17px;
                    }
                    .notice {
                        width: 98%;
                        > a {
                            display: block;
                            padding: 7% 0 3% 1%;
                            font-size: 20px;
                            line-height: 27px;
                        }
                        > span {
                            display: block;
                            padding: 0 0 2% 1%;
                            color: #495057;
                            font-size: 13px;
                        }
                    }
                }
                .tag-wrapper {
                    > span {
                        display: block;
                        padding: 30% 0 3% 1%;
                        font-size: 17px;
                    }
                    > ul {
                        > li {
                            display: block;
                            padding: 7% 0 0 1%;
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
`;