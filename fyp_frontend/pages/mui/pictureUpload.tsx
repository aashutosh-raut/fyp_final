import React, { useState } from "react";
import { useUploadPictureMutation } from "../../generated/graphql";

const App = () => {
  const [file, setFile] = useState<File>();

  const [, uploadPicture] = useUploadPictureMutation();

  const onFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    if (file) {
      const imgUrl = await uploadPicture({
        file,
      });
      console.log(imgUrl);
    }
  };

  const fileData = () => {
    if (file) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {file.name}</p>

          <p>File Type: {file.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h3>File Upload using React!</h3>
      <div>
        <input type="file" onChange={(e) => onFileChange(e)} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {fileData()}
    </div>
  );
};

export default App;
