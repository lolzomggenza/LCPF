import styled, { keyframes } from "styled-components";

interface CircleProps {
    circleRound: number;
    percent: number;
};

export const Main = styled.div`
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 4rem auto 0;
        > div {
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
        }
        > div:nth-child(4) {
            circle {
                stroke: #00FCA3;
            }
        }
        > div:nth-child(3) {
            circle {
                stroke: #1A99AA;
            }
        }
        > div:nth-child(2) {
            circle {
                stroke: #ECD06F;
            }
        }
        > div:nth-child(1) {
            circle {
                stroke: #DF6C4F;
            }
        }
    }
    @media all and (max-width: 768px) { /* 화면이 768이하일 때 적용 될 스타일 */
        main {
            min-width: 400px;
        }
    }
    @media all and (min-width: 789px) and (max-width: 1024px) {
        main {
            width: 788px;
        }
    }
    @media all and (min-width: 1025px) and (max-width: 1326px) {
        main {
            width: 1024px;
        }   
    }
    @media all and (min-width: 1327px) and (max-width: 1732px) {
        main {
            width: 1326px;
        }
    }
    @media all and (min-width: 1733px) {
        main {
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
    svg {
        circle:nth-child(2) {
            stroke-dasharray: ${(p: CircleProps) => p.circleRound};
            stroke-dashoffset: ${(p: CircleProps) => (p.circleRound - (p.circleRound * p.percent) / 100)};
            animation: ${(p: CircleProps) => smoothCircle(p.circleRound, p.percent)} 900ms ease normal forwards running;
        }
    }
`;