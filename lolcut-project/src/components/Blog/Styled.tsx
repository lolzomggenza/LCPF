import styled from "styled-components";

export const BlogMain = styled.div`
    > main {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        margin: auto;
        padding-top: 2rem;
        background-color: #f8f9fa;
        .post-wrapper {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            > div {
                padding: 1rem;
            }
        }
        .line {
            background-color: #e9ecef;
            height: 1px;
        }
        > aside {
            right: 0;
            display: flex;
            width: 15rem;
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
    @media all and (max-width: 788px) { /* 화면이 768이하일 때 적용 될 스타일 */
        > main {
            min-width: 400px;
            .post-wrapper {
                justify-content: center;
            }
            .card-wrapper {
                width: auto;
            }
            aside {
                display: none;
            }
        }
    }
    @media all and (min-width: 789px) and (max-width: 1024px) {
        > main {
            width: 788px;
            .post-wrapper {
                justify-content: center;
            }
            .card-wrapper {
                width: auto;
            }
            aside {
                display: none;
            }
        }
    }
    @media all and (min-width: 1025px) and (max-width: 1326px) {
        > main {
            width: 1024px;
        }   
    }
    @media all and (min-width: 1327px) and (max-width: 1732px) {
        > main {
            width: 1326px;
        }
    }
    @media all and (min-width: 1733px) {
        > main {
            width: 1732px;
        }
    }
`;