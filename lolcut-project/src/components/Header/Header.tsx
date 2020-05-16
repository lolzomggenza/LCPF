import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import userPreview from './img/userPreview.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [focusNav, setFocusNav] = useState<boolean>(false);

    const toggleNav = useCallback(() => {
        setFocusNav(!focusNav);
    }, [focusNav]);

    return (
        <Styled.Header>
            <header>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 97"><g id="그룹_1" data-name="그룹 1"><text id="lcplog" fill="#343a40" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="54">LCP.BLOG</tspan></text></g></svg>
                </Link>
                <ul>
                    <Link to="/search">
                        <div className="header-search">
                            <svg width="17" height="17" viewBox="0 0 17 17"><path fillRule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clipRule="evenodd"></path></svg>
                        </div>
                    </Link>
                    <button>새 글 작성</button>
                    <div className="header-user" onClick={toggleNav}>
                        <img src={userPreview} alt="userPreview" />
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="3em" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                        <nav className={focusNav ? "header-user-nav focused" : "header-user-nav"}>
                            <ul>
                                <Link to="/blog"><li>내 블로그</li></Link>
                                <Link to="/setting"><li>설정</li></Link>
                                <li>로그아웃</li>
                            </ul>
                        </nav>
                    </div>
                </ul>
            </header>
        </Styled.Header>
    )
}

export default Header