import "./App.css";
import Screen from "./components/Screen";

function App() {
  const screenClass =
    "w-3/5 m-auto mt-14 h-full rounded-3xl bg-[#8F8F8F]   p-4 flex flex-col justify-between screen ";
  return (
    <div>
      <Screen screen={screenClass} />
    </div>
  );
}

export default App;
