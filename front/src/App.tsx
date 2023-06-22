import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState<File | null>();
  const [name, setName] = useState("");
  const mint = async () => {
    if (file != null && name != "") {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      const result = await axios.post("/testPinata", formData);
      console.log(result);
    }
  };
  return (
    <div className="App">
      <input
        type={"file"}
        onChange={(e) => {
          const file = e.target.files && e.target.files[0];
          setFile(file);
        }}></input>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}></input>
      <button
        onClick={() => {
          mint();
        }}>
        nft minting
      </button>
    </div>
  );
}

export default App;
