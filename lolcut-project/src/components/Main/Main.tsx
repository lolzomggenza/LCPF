import React, { useState } from 'react';
import * as Styled from './Styled';
import { Header } from '../../components';

interface Props {

}

const Main: React.FC<Props> = () => {
    return (
        <Styled.Main>
            <Header />
            <main>

            </main>
        </Styled.Main>
    )
}

export default Main;