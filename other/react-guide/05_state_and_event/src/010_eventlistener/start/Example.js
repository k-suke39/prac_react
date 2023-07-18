const Example = () => {
  const eventHandler = () => {
    alert("クリックされました");
  };
  return (
    <>
      <button onClick={eventHandler}>クリックしてね</button>
      <button>クリックしてね</button>
    </>
  );
};

export default Example;
