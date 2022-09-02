// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate Raitings
  let average =
    feedback.reduce((act, sum) => {
      return act + sum.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   FeedbackStats: PropTypes.array.isRequired,
// }; //? No longer needed because of Context

export default FeedbackStats;
