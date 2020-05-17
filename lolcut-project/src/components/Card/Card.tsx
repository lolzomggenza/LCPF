import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import { Link } from 'react-router-dom';

const Card: React.FC = () => {
    return (
        <Styled.Card>
            <a href="" className="img-wrapper">
                <div>
                    <img src="https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg"/>
                </div>
            </a>
            <div className="title-wrapper">
                <a href="">
                    <span className="title">✏️ 안녕하세요</span>
                    <span className="sub-title">안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지
                    ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                    </span>
                </a>
                <div>
                    <span>2020년 5월 17일</span>
                </div>
            </div>
            <div className="line"/>
            <div className="sub-information-wrapper">
                <a href="">
                    <span>재민이가 씀</span>
                </a>
            </div>
        </Styled.Card>
    )
}

export default Card