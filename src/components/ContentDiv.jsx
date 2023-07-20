import React, { useState } from 'react';
import './Main.css';
import faqs from '../Datas.json';
import arrowDown from '../images/icon-arrow-down.svg';

const ContentDiv = () => {
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const handleQuestionClick = (id) => {
    setExpandedQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='main-content'>
      <div className="faq-div">
        <div className="faq-head">
          <h1>FAQ</h1>
        </div>
        <div className="faq-questions">
          {faqs.map((data) => (
            <span key={data.id} className={`ques ${expandedQuestionId === data.id ? 'expanded' : ''}`}>
              <p className='ques-main' onClick={() => handleQuestionClick(data.id)}>
                <span className="word-break">{data.ques}</span>
                <span className="arrow">
                  <img src={arrowDown} alt="Arrow down" />
                </span>
              </p>
              <div className={`ans ${expandedQuestionId === data.id ? 'show' : 'hide'}`}>
                <p>{data.ans}</p>
              </div>
              <span className={`line ${expandedQuestionId === data.id ? 'line-expanded' : ''}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentDiv;
