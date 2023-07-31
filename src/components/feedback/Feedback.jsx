import React, { useState } from 'react';
import './feedback.css';
import SectionContainer from 'components/section/SectionContainer';
import Statistics from 'components/feedback/statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

const FeedBack = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handlerState = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <SectionContainer title="Please leave feedback" name="feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={handlerState}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        feedback={countPositiveFeedbackPercentage()}
      />
    </SectionContainer>
  );
};

export default FeedBack;
