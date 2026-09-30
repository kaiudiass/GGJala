import React from 'react';
import styles from './QuestionThread.module.css';

const QuestionThread = ({ question, sellerName }) => {
  return (
    <div className={styles.questionThread}>
      <div className={styles.questionItem}>
        <div className={styles.questionAvatar}>{question.userAvatar}</div>
        <div className={styles.questionContent}>
          <div className={styles.questionHeaderRow}>
            <span className={styles.questionName}>{question.userName}</span>
            <span className={styles.questionTime}>{question.time}</span>
          </div>
          <p className={styles.questionText}>
            {question.text}
          </p>
        </div>
      </div>
      
      {question.answer && (
        <div className={styles.answerItem}>
          <div className={styles.answerAvatar}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified</span>
          </div>
          <div className={styles.questionContent}>
            <div className={styles.questionHeaderRow}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className={styles.answerName}>{sellerName}</span>
                <span className={styles.answerBadge}>Vendedor</span>
              </div>
              <span className={styles.answerTime}>{question.answer.time}</span>
            </div>
            <p className={styles.answerText}>
              {question.answer.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionThread;
