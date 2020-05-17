import styled from "styled-components";

export const Main = styled.div`
    main {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        border: 1px solid red;
        div {
            width: 150px;
            height: 150px;
            circle {
                width: 100%;
                height: 100%;
                fill: none;
                stroke-width: 4px;
                stroke-linecap: round;
                transform: translate(5px, 5px);
            }
            circle:first-child {
                stroke: #191919;
            }
        }
    }
    @media all and (max-width: 768px) { /* 화면이 768이하일 때 적용 될 스타일 */
        main {
            width: calc(100% - 2rem);
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