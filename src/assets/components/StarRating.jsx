const StarRating = ({ rating, maxRating = 5, textSize='xl'}) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={`text-yellow-400 text-${textSize}`}>★</span>
        ))}
        {hasHalfStar && (
          <span className={`text-yellow-400 text-${textSize} relative`}>
            <span className="absolute" style={{ width: '50%', overflow: 'hidden' }}>★</span>
            <span className={`text-white text-${textSize}`}>★</span>
          </span>
        )}
      </div>
    );
  };
  
  export default StarRating;