import React from 'react';
import { PageTitle } from './components/PageTitle';
import { Rating } from './components/accardion/rating/Rating';
import { Accardion } from './components/accardion/Accardion';
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccardion } from "./components/accardion/UncontrolledAccardion";
import { UncontrolledRating } from "./components/accardion/rating/UncontrolledRating";

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"} />

      <h2>Article 1</h2>
      <Accardion titleValue={"--Menu--"} collapsed={true} />
      <Rating value={3} />

      <br />
      <hr />
      <br />

      <h2>Article 2</h2>
      <Accardion titleValue={"--Users--"} collapsed={false} />
      <Rating value={4} />

      <div>
        <h3>test</h3>
        <Rating value={0} />
        <Rating value={1} />
        <Rating value={2} />
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} />
      </div>

      <br />
      <hr />
      <br />

      <OnOff />
      <OnOff />

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
