import "./App.css"
import useCountry from "./custom-hooks/useCountry"

function App() {
  const [ error, country] = useCountry('Pakistan')
  console.log("country: ", country, "error: ", error)
  return (
    <div>

    </div>
  );
}

export default App;
