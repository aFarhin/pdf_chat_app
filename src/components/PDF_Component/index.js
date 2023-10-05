import React, { useState } from "react";
import "./styles.css";
import Loader from "../Loader";
import { useNavigate } from "react-router";

function PDFComponent() {
  const [fileTitle, setFileTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  function handleFileChange(event) {
    const file = event.target.files[0];
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const title = file ? file.name : "";
      setFileTitle(title);
    }, 2000);
  }
  const hadnleUploadClick = ()=>{
    if(fileTitle.length > 0) {
      navigate('/upload-pdf-get-answer/get-your-answer')
    }else{
      alert('Select PDF First')
    }
  }
  return (
    <div className="pdf-container">
      <h2>Upload PDF to get Answer from PDF through Chat</h2>
      <div className="label-container">
        <div className="loader-container">
          {loading ? <Loader /> : <label htmlFor="pdf-input">Select PDF</label>}
        </div>
        <input
          type="file"
          id="pdf-input"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {fileTitle && <p>File Title: {fileTitle}</p>}
      </div>
      <button onClick={()=>{hadnleUploadClick()}}>Upload PDF</button>
    </div>
  );
}

export default PDFComponent;
