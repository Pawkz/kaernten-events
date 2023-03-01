import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3">In Bearbeitung...</Typography>
      <Typography variant="h6">Das ist die Home-Ansicht.</Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Daten zu den Events können Sie unter den Reiter "Veranstaltungen"
        einsehen.
      </Typography>
      <Button component={Link} to="/events" variant="contained">
        Zu den Events
      </Button>
    </Box>
  );
}
