import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import moment from "moment";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Diversity1 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
// import { Link } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Event = (props) => {
  let { state } = useLocation();
  //   console.log("passedProps", state);
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* <Grid item xs={12}> */}
        {/* <Grid container> */}
        {/* <Grid item> */}
        <Grid item xs={12}>
          {/* <div
                  style={{
                    marginTop: "1%",
                    marginLeft: "1%",
                    marginBottom: "1%",
                    textTransform: "uppercase",
                  }}
                > */}
        </Grid>
        <Box
          component="img"
          sx={{
            height: 1 / 2,
            width: 1,
            maxHeight: { xs: 500, md: 500 },
            maxWidth: { xs: 500, md: 1000 },
          }}
          alt="event-image"
          src={state.info.image[0].contentUrl}
        />
        <Grid item xs={12}>
          <Card>
            {/* <div
                  style={{
                    marginTop: "1%",
                    marginLeft: "1%",
                    marginBottom: "1%",
                    textTransform: "uppercase",
                  }}
                >
 </div> */}{" "}
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            {state.info.name}
          </Typography>

          <Typography gutterBottom variant="h6" backgroundColor="paper">
            {moment(state.info.startDate).dayOfYear() ==
            moment(state.info.endDate).dayOfYear()
              ? //   ? // todo: if only shartdate is availabl
                moment(state.info.startDate).format("DD.MM.YYYY")
              : moment(state.info.startDate).format("DD.MM.YYYY") +
                " - " +
                moment(state.info.endDate).format("DD.MM.YYYY")}
          </Typography>
          <Divider sx={{ mt: "40px" }} />
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom variant="h5">
            Beschreibung
          </Typography>

          <Typography gutterBottom variant="subtitle1" mb={2}>
            {state.info.description.replace(/(<([^>]+)>)/gi, "")}
          </Typography>
          <Divider sx={{ mt: "40px" }} />
          <Typography gutterBottom variant="h5">
            <br /> Veranstaltungsort
          </Typography>
          <Typography variant="subtitle1">
            {state.info.location[0].name}
            <br />
            {state.info.location[0].address.streetAddress}
            <br />
            {state.info.location[0].address.postalCode}{" "}
            {state.info.location[0].address.addressLocality}
          </Typography>
        </Grid>
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};

export default Event;
