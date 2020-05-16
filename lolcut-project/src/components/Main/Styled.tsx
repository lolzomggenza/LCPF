import styled from "styled-components";

export const Main = styled.div`
    main {
        border: 1px solid red;
        margin: 0 auto;
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