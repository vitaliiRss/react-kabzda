import React from 'react';

type RaringPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({ value }: RaringPropsType) {
  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  if (props.selected === true) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }
}
