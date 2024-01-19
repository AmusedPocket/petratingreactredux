import {useState} from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating)
  console.log("disabled is", disabled)
  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={activeRating}
        onChange={onChange}
      />
      <div className="rating-input">
        <div className={activeRating >= 1 ? "filled" : "empty"} onMouseEnter={()=>{if(!disabled) setActiveRating(1)}} onMouseLeave={() => {if(!disabled) setActiveRating(rating)}}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 2 ? "filled" : "empty"} onMouseEnter={()=>setActiveRating(2)} onMouseLeave={() => setActiveRating(rating)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 3 ? "filled" : "empty"} onMouseEnter={()=>setActiveRating(3)} onMouseLeave={() => setActiveRating(rating)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 4 ? "filled" : "empty"} onMouseEnter={()=>setActiveRating(4)} onMouseLeave={() => setActiveRating(rating)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 5 ? "filled" : "empty"} onMouseEnter={()=>setActiveRating(5)} onMouseLeave={() => setActiveRating(rating)}>
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
