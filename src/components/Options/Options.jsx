import css from "./Options.module.css";

export default function Options({ updateFeedback, resetFeedback, showReset }) {
  return (
    <div className={css.options}>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {showReset > 0 && (
        <button
          className={css.button}
          type="button"
          onClick={() => resetFeedback("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
}
