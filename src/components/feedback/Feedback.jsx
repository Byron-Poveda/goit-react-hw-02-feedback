import React, { Component } from 'react';
import './feedback.css';
import SectionContainer from 'components/section/SectionContainer';
import Statistics from 'components/feedback/statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      feedback: 0,
    };
    this.handlerState = this.handlerState.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
  }
  handlerState(state) {
    this.setState(prevState => ({
      // el state entre [] parapoder cambiarlo por good, neutral o bad segun el q le pasen
      [state]: prevState[state] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }
  countTotalFeedback() {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  }
  countPositiveFeedbackPercentage() {
    this.setState(prevState => ({
      feedback: Math.round((prevState.good / prevState.total) * 100),
    }));
  }
  render() {
    const { good, neutral, bad, total, feedback } = this.state;

    return (
      <SectionContainer title="Please leave feedback" name="feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handlerState}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          feedback={feedback}
        />
      </SectionContainer>
    );
  }
}
