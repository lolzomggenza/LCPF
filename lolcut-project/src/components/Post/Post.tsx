import React from 'react';
import * as Styled from './Styled';
import Header from '../Header/Header';

interface Props {

}

const Post: React.FC<Props> = () => {
    return (
        <Styled.Post>
            <Header />
            <main>
                <div>
                    <h1>제목제목제목</h1>
                    <p><span>글쓴이</span> ·  2020년 5월 18일</p>
                </div>
                <div>
                    <img src="http://via.placeholder.com/150" alt="thumpNail" />
                </div>
                <div className="post-wrapper">
                    여기에 .md 올라오면 파싱해서 하는 거 배워야 함
                </div>
            </main>
        </Styled.Post>
    )
}

export default Post