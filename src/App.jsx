import { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  onLeaveFeedback = (scoreName) => {
    this.setState((prevState) => {
      const oldValue = prevState[scoreName];
      return {
        [scoreName]: oldValue + 1,
      };
    });
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
    const statistics = total ? (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positiveFeedback={positivePercentage}
      />
    ) : (
      <Notification message="No feedback given" />
    );
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>{statistics}</Section>
      </>
    );
  }
}

export default App;
