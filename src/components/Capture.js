import React, { useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import "../Custom.css";

const exportAsImage = async (el, imageFileName) => {
  const canvas = await html2canvas(el);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};
const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

const Capture = ({ img, textTop, textBottom, color }) => {
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          width: 500,
          height: 800,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <p className="memeText memeTextTop" style={{ color: color }}>
          {textTop}
        </p>
        <p className="memeText memeTextBottom" style={{ color: color }}>
          {textBottom}
        </p>
      </div>
      <button onClick={() => exportAsImage(ref.current, "test")}>
        Download
      </button>
    </>
  );
};

export default Capture;
