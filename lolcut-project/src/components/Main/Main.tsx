import React, { useState } from 'react';
import * as Styled from './Styled';
import { Header } from '../Header';



interface Props {

}

const Main: React.FC<Props> = () => {
    return (
        <Styled.Main>
            <Header />
        </Styled.Main>
    )
}

export default Main;