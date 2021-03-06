import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const formatSpots = (spot) => {
    let spotsText = "";
    if(spot === 0) {
      spotsText += "no spots remaining";
    } else if (spot === 1) {
      spotsText += "1 spot remaining";
    } else {
      spotsText += `${spot} spots remaining`
    }
    return spotsText;
  };

  const dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": props.selected,
      "day-list__item--full": props.spots === 0
    }
  );

  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}