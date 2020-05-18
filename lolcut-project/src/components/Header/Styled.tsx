import styled from "styled-components";

interface navProps {
    focusNav: boolean;
}

export const Header = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    font-family: 'Noto Sans KR';
    .line {
        background-color: #e9ecef;
        height: 1px;
    }
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
    }
    > img {
        position: relative;
        width: 30px;
        height: 30px;
        padding: 0 15px 0 0;
        right: 0;
        cursor: pointer;
        z-index: ${(p: navProps) => p.focusNav ? 100 : 100};
    }
    > nav {
        /* display: $ {(p: navProps) => p.focusNav ? "flex" : "none"}; */
        display: flex;
        position: absolute;
        height: 100%;
        width: 15%;
        top: 0;
        right: 0;
        align-items: center;
        justify-content: center;
        background-color: #00000055;
        transform: ${(p: navProps) => p.focusNav ? "translateX(0)" : "translateX(100%)"};
        transition: 0.5s ease;
        z-index: 99;
        .menu-wrapper-wrapper {
            width: 80%;
            height: 70%;
            .menu-wrapper {
                padding: 0 0 40% 0;
                > span {
                    display: block;
                    padding: 0 0 3% 1%;
                    font-size: 18px;
                }
                > ul {
                    > a {
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