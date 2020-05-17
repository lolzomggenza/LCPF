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
                    stroke-width: 6px;
                    stroke-linecap: round;
                }
            }
            h2 {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 1.5rem;
            }
            p {
                font-size: 1.25rem;
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