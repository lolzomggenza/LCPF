import styled from "styled-components";

interface navProps {
    focusNav: boolean;
}

export const Header = styled.div`
    height: 4rem;
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        margin: 0 auto;
        background-color: #F8F9FA;
        > a svg {
            width: 6rem;
            height: 2.5rem;
            letter-spacing: -4px;
            font-size: 2.5rem;
            cursor: pointer;
            > g {
                transform: translate(-0.5rem, 1rem);
            }
        }
        > ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #F8F9FA;
            > * {
                margin: 0 0.8rem;
            }
            .header-search {
                padding: 0.8rem;
                border-radius: 50%;
                cursor: pointer;
            }
            .header-search:hover {
                transition: 50ms ease;
                background-color: #f9f9f9;
            }
            button {
                width: 8rem;
                padding: 0.5rem;
                border: 1px solid rgb(52, 58, 64);
                border-radius: 2rem;
                font-weight: bold;
                background-color: white;
                transition: 150ms ease;
                font-size: 0.8rem;
                cursor: pointer;
            }
            button:hover {
                color: #fff;
                background-color: #343A40;
            }
            .header-user {
                width: 5rem;
                position: relative;
                cursor: pointer;
                img {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                }
                .header-user-nav {
                    position: absolute;
                    top: 4rem;
                    left: -6rem;
                    display: flex;
                    box-shadow: 0 0 0.5rem #f0f0f0;
                    background-color: white;
                    transform: translateY(-11rem);
                    z-index: ${(p: navProps) => p.focusNav ? 100 : -1};
                    li {
                        width: 8rem;
                        padding: 1rem;
                        cursor: pointer;
                    }
                    li:hover {
                        transition: 50ms ease-in-out;
                        background-color: #f9f9f9;
                    }
                }
                .focused {
                    transform: translateY(0);
                    transition: 0.5s;
                }
            }
            .header-user:hover svg {
                transform: scale(1.2);
                transition: 1s;
            }
        }
    }
    @media all and (max-width: 768px) { /* 화면이 768이하일 때 적용 될 스타일 */
        header {
            min-width: 400px;
            button {
                display: none;
            }
        }
    }
    @media all and (min-width: 789px) and (max-width: 1024px) {
        header {
            width: 788px;
        }
    }
    @media all and (min-width: 1025px) and (max-width: 1326px) {
        header {
            width: 1024px;
        }
    }
    @media all and (min-width: 1327px) and (max-width: 1732px) {
        header {
            width: 1326px;
        }
    }
    @media all and (min-width: 1733px) {
        header {
            width: 1732px;
        }
    }
`;




// 945 768 media