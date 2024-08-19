import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(localStorage.getItem("feedback-counter")) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const updateFeedback = (feedbackType) => {
    console.log("click", feedbackType);
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    setShowFeedback(true);
    setShowReset(true);
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

    setShowFeedback(false);
    setShowReset(false);
  };

  useEffect(() => {
    localStorage.setItem("feedback-counter", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showReset={showReset}
      />

      {!showFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      )}
    </>
  );
}
