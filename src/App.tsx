import React, { useState } from 'react';
import { PageTitle } from './components/PageTitle';
import { Rating, RatingValueType } from './components/rating/Rating';
import { Accordion } from './components/accardion/Accordion';
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/accardion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/OnOff/UncontrolledOnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState(false)
  const [count, setCount] = useState(0)
  const accordionHandler = () => {
    setAccordionCollapsed(!accordionCollapsed)
  }

  return (
    <div>
      <PageTitle title={"This is APP component"} />

      <h2>Accardion</h2> <span>on li click times: {count}</span>
      <Accordion titleValue={"--Users--"}
        clickOnLiElement={() => setCount(count + 1)}
        collapsed={accordionCollapsed}
        onClick={accordionHandler}
        items={
          [
            { value: 1, title: "user 1" },
            { value: 2, title: "user 2" },
            { value: 3, title: "user 3" },
            { value: 4, title: "user 4" }
          ]
        } />

      <br />
      <hr />
      <br />

      <h2>Rating</h2>
      <Rating value={ratingValue} onClick={setRatingValue} />

      <br />
      <hr />
      <br />

      <h2>OnOff</h2>
      <OnOff on={switchOn} onClick={setSwitchOn} />

      <br />
      <hr />
      <br />

      <h2>Uncontrolled Accardion</h2>
      <UncontrolledAccordion titleValue={"--Users--"} />

      <br />
      <hr />
      <br />

      <h2>Uncontrolled Rating</h2>
      <UncontrolledRating />
      <UncontrolledRating />

      <br />
      <hr />
      <br />

      <h2>Uncontrolled OnOff</h2>
      <UncontrolledOnOff />

    </div>
  );
}

export default App;
