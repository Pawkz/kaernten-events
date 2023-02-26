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
import Container from "@mui/material/Container";
import moment from "moment";
import { Diversity1 } from "@mui/icons-material";
export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image,location&token=9962098a5f6c6ae8d16ad5aba95afee0"
    );
    const data = await response.json();
    // console.log("res:", response);
    console.log("data:", data);
    // console.log("data2:", data.links);
    // console.log("data3:", data["@context"]);

    console.log("data4:", data["@graph"][0].location[0].address.postalCode);
    setEvents(data["@graph"]);
    console.log(events);
    // console.log("address", user.location.address.postalCode);  // geht nicht so !

    console.log("imgsrc", data["@graph"][1].image[1]);

    console.log("date", data["@graph"][0].startDate);
    // let date = new Date(data["@graph"][0].startDate);
    let momentDate = moment(data["@graph"][0].startDate).format("DD.MM.YYYY");
    console.log("moment", momentDate);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    // <CssBaseline />
    <div>
      {events && events.length > 0}
      <Container maxWidth="xl">
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              {/* {events.map()} */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  {events && events.length > 0 && (
                    <CardMedia
                      component="img"
                      height="250"
                      //image="https://plus.unsplash.com/premium_photo-1661692866327-42ec6441827b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      image={events[0].image[0].contentUrl}
                      alt="event image"
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h8" component="div">
                      {events &&
                        events.length > 0 &&
                        /* {user[0].location[0].address.postalCode +
              " " + */
                        events[0].location[0].address.streetAddress +
                          ", " +
                          events[0].location[0].address.addressLocality}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {events &&
                        events.length > 0 &&
                        /* {user[0].location[0].address.postalCode +
              " " + */
                        // moment(events[0].startDate).isSame(events[0].endDate)
                        //   ? // todo: if only shartdate is availabl
                        moment(events[0].startDate).format("DD.MM.YYYY") +
                          " - " +
                          moment(events[0].endDate).format("DD.MM.YYYY")}

                      {/* : moment(events[0].startDate).format("DD.MM.YYYY") */}
                    </Typography>

                    <Typography variant="h6" color="">
                      {events && events.length > 0 && events[1].name}
                    </Typography>
                    <Typography variant="h6" color="">
                      {events &&
                        events.length > 0 &&
                        events[1].description.replace(/(<([^>]+)>)/gi, "")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Item>1</Item>
            </Grid>
            <Grid xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid xs={6}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
