import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrScanner = () => {
  const [scannedResult, setScannedResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScannedResult(data);
    }
  };

  const handleError = (err) => {
    console.error("Error:", err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "80%", margin: "0 auto" }}
      />
      {scannedResult && <p>Scanned result: {scannedResult}</p>}
    </div>
  );
};

export default QrScanner;
