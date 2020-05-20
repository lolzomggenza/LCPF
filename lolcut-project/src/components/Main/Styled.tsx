import styled, { keyframes } from "styled-components";
import link_img from './img/link.png'
import summary_img from './img/summary.png'

interface CircleProps {
    circleRound: number;
    percent: number;
};

export const Main = styled.div`
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 15rem auto 17rem;
    }
    > div.page-1-arrow {
        display: flex;
        justify-content: center;
        margin: 0 auto 10rem;
        > img {
            width: 4rem;
            height: 4rem;
        }
    }
    > div.page-2-wrapper {
        margin: 6rem auto 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 1800px;
        > div.page-2-h1 {
            display: flex;
            width: 40%;
            justify-content: center;
            margin: 0 auto 2rem;
            > img {
                width: 100%;
                height: 100%;
            }
        }
        > div.page-2-input-wrapper-wrapper {
            width: 50%;
            > div {
                margin: 0 auto 1rem;
                display: flex;
                align-items: center;
                > img {
                    width: 30%;
                    height: 100%;
                    margin: 0 1rem 0;
                }
                > img.link-img {
                    width: 20%;
                    height: 100%;
                    margin: 0 1rem 0;
                }
                > input {
                    width: 370%;
                    height: 100%;
                    background-color: #f8f9fa;
                    border: none;
                    color: orange;
                    font-size: 19px;
                }
                > input::placeholder {
                    font-size: 1rem;
                }
            }
        }
    }
    @media all and (max-width: 768px) { /* 화면이 768이하일 때 적용 될 스타일 */
        main {
            width: auto;
        }
        div.page-2-wrapper {
            width: auto;
        }
    }
    @media all and (min-width: 789px) and (max-width: 1024px) {
        main {
            width: 788px;
        }
        div.page-2-wrapper {
            width: 788px;
        }
    }
    @media all and (min-width: 1025px) and (max-width: 1326px) {
        main {
            width: 1024px;
        }
        div.page-2-wrapper {
            width: 1024px;
        }
    }
    @media all and (min-width: 1327px) and (max-width: 1732px) {
        main {
            width: 1326px;
        }
        div.page-2-wrapper {
            width: 1326px;
        }
    }
    @media all and (min-width: 1733px) {
        main {
            width: 1732px;
        }
        div.page-2-wrapper {
            width: 1732px;
        }
    }
`;

const smoothCircle = (circleRound: number, percent: number) => keyframes`
    from {
        stroke-dashoffset: ${circleRound};
    }
    to {
        stroke-dashoffset: ${(circleRound - (circleRound * percent) / 100)};
    }
`

export const CircleWrap = styled.div`
    position: relative;
    width: 150px;
    text-align: center;
    svg {
        width: 150px;
        transform: rotate(-90deg);
        circle {
            width: 100%;
            height: 100%;
            fill: none;
            stroke-width: 1rem;
            stroke-linecap: round;
        }
        circle:nth-child(2) {
            stroke-dasharray: ${(p: CircleProps) => p.circleRound};
            stroke-dashoffset: ${(p: CircleProps) => (p.circleRound - (p.circleRound * p.percent) / 100)};
            animation: ${(p: CircleProps) => smoothCircle(p.circleRound, p.percent)} 900ms ease normal forwards running;
        }
    }
    h2 {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }
    button {
        padding: 0.25rem 1rem;
        border: 0;
        border-radius: 2rem;
        font-size: 1rem;
        transition: 50ms ease-in-out;
        outline: none;
        cursor: pointer;
    }
    &:nth-child(4) circle {
        stroke: #00FCA3;
    }
    &:nth-child(3) circle {
        stroke: #1A99AA;
    }
    &:nth-child(2) circle {
        stroke: #ECD06F;
    }
    &:nth-child(1) circle {
        stroke: #DF6C4F;
    }
`;