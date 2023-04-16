import React from "react";

export const Rate = ({rate}) => {
  const { currentRate, maxRate} = rate
  
  if (currentRate && maxRate) {
   
    let goldStars, halfStar, greyStars 

    if (Number.isInteger(maxRate - currentRate)) {
      goldStars = currentRate 
      greyStars = maxRate - currentRate
    } else {
      goldStars = Math.floor(currentRate) 
      halfStar = 1
      greyStars = maxRate - goldStars - halfStar
    }
    

    const tempArray = []
    
      for (let i = 0; i < goldStars; i++) {
        tempArray.push("./images/star-gold.png")
      }
      for (let i = 0; i < halfStar; i++) {
        tempArray.push("./images/star-half.png")
      }
      for (let i = 0; i < greyStars; i++) {
        tempArray.push("./images/star.png")
      }
  

    return (
      <div>
        {tempArray.map(item => (
          <img src={item} alt="" widt="20" height="20"/>   
        )
        )}
      </div>
    )
  }
}
