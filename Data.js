const Data = (props) => {
  // retrieves array data from App.js
  function RandomNum() {
    const rand = Math.floor(Math.random() * 3) + 0;
    if (rand === 2) {
      // if Prime for Study add note
      return `${props.status[rand]} 💡 (Gear up with your best equipment!)`;
    } else {
      return props.status[rand];
    }
  }

  return (
    <ul>
      {props.data.map((body) => (
        <li key={body.id}>{`${body.emoji} ${body.name} ${RandomNum()} `}</li>
      ))}
    </ul>
  );
};
