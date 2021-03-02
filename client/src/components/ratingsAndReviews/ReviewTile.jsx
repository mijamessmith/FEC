import React from 'react';
import SingleStar from './SingleStar.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render (){
    let review = this.props.review;
    return (
      <div className='review-tile' style={reviewTileStyle}>
        <h1>_______________________________</h1>
        <SingleStar rating={review.rating}/>
        <h5>{review.summary}</h5>
        <h6>{review.body}</h6>
        <h6>{review.date}</h6>
        <h6>{review.reviewer_name}</h6>
        <button>report</button>
        <button>mark helpful</button>
        <h6>{review.helpful}</h6>
        <h6>{review.helpfulness}</h6>
        {/* <img>If images</img> */}
        <h1>_______________________________</h1>
      </div>
  )}
}


const reviewTileStyle = {
  backgroundColor: 'yellow'
}

export default ReviewTile;