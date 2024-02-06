import React from 'react';
import { PageTitle }  from './components/PageTitle';
import { Rating } from './components/Rating';
import { Accardion } from './components/Accardion';

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"}/>

      <h2>Article 1</h2>
      <Accardion titleValue={"--Menu--"} collapsed={true} />
      <Rating value={3}/>

      <br />
      <hr />
      <br />

      <h2>Article 2</h2>
      <Accardion titleValue={"--Users--"} collapsed={false}/>
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
    </div>
  );
}

export default App;
