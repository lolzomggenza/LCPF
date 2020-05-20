import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import hambuger from './img/hambuger.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [focusNav, setFocusNav] = useState<boolean>(false);

    const toggleNav = useCallback(() => {
        setFocusNav(!focusNav);
    }, [focusNav]);

    return (
        <Styled.Header focusNav={focusNav}>
            <header>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 97"><g id="그룹_1" data-name="그룹 1"><text id="lcplog" fill="#343a40" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="54">LCP.BLOG</tspan></text></g></svg>
                </Link>
                <div/>
            </header>
            <img src={hambuger} alt="Menu" onClick={toggleNav}/>
            <nav className={focusNav ? "header-user-nav focused" : "header-user-nav"}>
                <div className="menu-wrapper-wrapper">
                    <div className="menu-wrapper">
                        <span>TODO</span>
                        <div className="line"/>
                        <ul>
                            <Link to="/"><li>내 투두 보기</li></Link>
                        </ul>
                    </div>
                    <div className="menu-wrapper">
                        <span>블로그</span>
                        <div className="line"/>
                        <ul>
                            <Link to="/blog"><li>블로그 메인</li></Link>
                            <Link to="/post"><li>글 등록하기</li></Link>
                        </ul>
                    </div>
                    <div className="menu-wrapper">
                        <span>설정</span>
                        <div className="line"/>
                        <ul>
                            <Link to="/blog"><li>계정</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </Styled.Header>
    )
}

export default Header