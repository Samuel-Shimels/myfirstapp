function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, I'm Samuel!</h1>
      <h2>This is my first react app that display current date time from branch. It is {currDate.toLocaleDateString()} and time is  {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;