import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrScanner = () => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "user" }} // Use front camera
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default QrScanner;
