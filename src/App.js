import { useEffect, useState } from "react";
import "./App.css";
import Capture from "./components/Capture";

function App() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [text1, setText1] = useState("Text1");
  const [text2, setText2] = useState("Text2");

  const onFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onTextTopInputChange = (event) => {
    setText1(event.target.value);
  };

  const onTextBottomInputChange = (event) => {
    setText2(event.target.value);
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="App">
      <header className="App-header">
        {preview ? (
          <Capture img={preview} textTop={text1} textBottom={text2} />
        ) : (
          <h2>Import an image first</h2>
        )}
        <input type={"file"} onChange={onFileInputChange} />

        <input
          type={"text1"}
          placeholder="Input top text"
          onChange={onTextTopInputChange}
        />
        <input
          type={"text2"}
          placeholder="Input bottom text"
          onChange={onTextBottomInputChange}
        />
      </header>
    </div>
  );
}

export default App;
