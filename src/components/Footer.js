import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#ff9800",
        position: "relative",
        left: 0,
        bottom: 0,
      }}
    >
      <footer>
        <Typography varinat="h6" align="center" gutterBottom marginTop="50px">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Hier soll der "Footer" implementiert werden
        </Typography>
      </footer>
    </div>
  );
}
