import "./App.css";
import Screen from "./components/Screen";

function App() {
  const screenClass =
    "w-2/5 m-auto mt-14 h-full rounded-3xl bg-purple   p-4 flex flex-col justify-between ";
  return (
    <div>
      <Screen screen={screenClass} />
    </div>
  );
}

export default App;
