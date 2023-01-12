import React, { useState, useEffect } from 'react';
const SmallText = (props) => {
  const [newCount, setNewCount] = useState(100);

  useEffect(() => {
    console.log('mount small');
    return () => {
      console.log('unmount small');
    }

  }, []);

  return (
    <>
      <button
        onClick={() => { props.setClickCount(props.clickCount + 1) }}
      >
        Paspaudei {props.clickCount} kartu
      </button><br />
      <small>{props.text}</small><br />
      <button
      onClick={() => { setNewCount(newCount + 1) }}
      >
        Šio komponento counteris: {newCount}
      </button>
    </>
  );
}

export default SmallText;