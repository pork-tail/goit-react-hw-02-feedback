import { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addGoodFeedback = () => {
    this.setState((prevState) => {
      const { good } = prevState;
      return {
        good: good + 1,
      };
    });
  };

  addNeutralFeedBack = () => {
    this.setState((prevState) => {
      const { neutral } = prevState;
      return {
        neutral: neutral + 1,
      };
    });
  };

  addBadFeedback = () => {
    this.setState((prevState) => {
      const { bad } = prevState;
      return {
        bad: bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = total ? Math.round((good / total) * 100) : 0;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            addGoodFeedback={this.addGoodFeedback}
            addNeutralFeedBack={this.addNeutralFeedBack}
            addBadFeedback={this.addBadFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              countPositiveFeedbackPercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
