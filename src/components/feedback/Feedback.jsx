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
    };
    this.handlerState = this.handlerState.bind(this);
  }
  handlerState(state) {
    this.setState(prevState => ({
      // el state entre [] parapoder cambiarlo por good, neutral o bad segun el q le pasen
      [state]: prevState[state] + 1,
    }));
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <SectionContainer title="Please leave feedback" name="feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handlerState}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          feedback={this.countPositiveFeedbackPercentage()}
        />
      </SectionContainer>
    );
  }
}
