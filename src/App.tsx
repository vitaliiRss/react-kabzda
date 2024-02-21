import React, { useState } from 'react';
import { PageTitle } from './components/PageTitle';
import { Rating, RatingValueType } from './components/accardion/rating/Rating';
import { Accardion } from './components/accardion/Accardion';
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccardion } from "./components/accardion/UncontrolledAccardion";
import { UncontrolledRating } from "./components/accardion/rating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/OnOff/UncontrolledOnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState(false)

  const accordionHandler = () => {
    setAccordionCollapsed(!accordionCollapsed)
  }

  return (
    <div>
      <PageTitle title={"This is APP component"} />

      <h2>Article 1</h2>
      <Accardion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={accordionHandler} />
      <Rating value={ratingValue} onClick={setRatingValue} />

      <br />
      <hr />
      <br />

      <h2>Article 2</h2>
      <Accardion titleValue={"Users"} collapsed={accordionCollapsed} onClick={accordionHandler} />
      <Rating value={ratingValue} onClick={setRatingValue} />

      <br />
      <hr />
      <br />

      <OnOff on={switchOn} onClick={setSwitchOn} />
      <h2>Uncontrolled OnOff</h2>
      <UncontrolledOnOff onChange={setSwitchOn} />

      <br />
      <hr />
      <br />

      <h2>Uncontrolled Accardion</h2>
      <UncontrolledAccardion titleValue={"--Users--"} />
      <UncontrolledAccardion titleValue={"--Menu--"} />

      <br />
      <hr />
      <br />

      <h2>Uncontrolled Rating</h2>
      <UncontrolledRating />
      <UncontrolledRating />

      <br />
      <hr />
      <br />

    </div>
  );
}

export default App;
