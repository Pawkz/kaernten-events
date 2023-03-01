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
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Diversity1 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { generatePath } from "react-router";
// import { Link } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
// import Event from "./components/Event";
import CircularProgress from "@mui/material/CircularProgress";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // setLoading(false);
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
    let momentDate1 = moment(data["@graph"][1].startDate);

    let momentDate2 = moment(data["@graph"][1].endDate);

    // let momentDate2 = moment(data["@graph"][1].endDate).format("DD.MM.YYYY");

    console.log("moment", momentDate1.day() == momentDate2.day());
    console.log("moment2", momentDate1.day());
    setLoading(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const StyledCardActionArea = styled(CardActionArea)(
    ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
`
  );

  const handleClickButton = (id) => console.log(id);
  return (
    // <CssBaseline />
    <div>
      <Container maxWidth="lg" sx={{ paddingTop: "2%" }}>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          marginBottom="25px"
          marginTop="25px"
        >
          Hier finden Sie zukünftige Veranstaltungen in Kärnten
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          marginBottom="50px"
        >
          Von Kultur bis zu Sport
          <br />
          In Kärnten ist für jeden etwas dabei!
        </Typography>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress sx={{ alignItems: "center" }} />
            <Box height="55vh"></Box>
          </Box>
        ) : (
          <Box sx={{ width: "100%", backgroundColor: "transparent" }}>
            <Grid
              container
              rowSpacing={5}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {events.map((info) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      maxWidth: 360,
                      height: "100%",
                      boxShadow: 3,
                      marginTop: "20px",
                    }}
                  >
                    <StyledCardActionArea
                      component={Link}
                      to="/event"
                      state={{ info }}
                    >
                      {events && events.length > 0 && (
                        <CardMedia
                          component="img"
                          height="250"
                          //image="https://plus.unsplash.com/premium_photo-1661692866327-42ec6441827b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          image={info.image[0].contentUrl}
                          alt="event-image"
                          onClick={() => handleClickButton(info["@id"])}
                          // component="img"

                          // component={Link}
                          to="/event"
                          state={{ info }}
                        />
                      )}
                      <ButtonBase
                        onClick={() => handleClickButton(info.id)}
                        component={Link}
                        to="/event"
                        state={{ info }}
                      >
                        {/* <Link to="/event" state={{ info }}>
                        test
                      </Link> */}

                        <CardContent sx={{ background: "none" }}>
                          <Typography gutterBottom variant="h10">
                            <FmdGoodIcon
                              sx={{ fontSize: 18, marginRight: 0.5 }}
                            />
                            {events &&
                              events.length > 0 &&
                              /* {user[0].location[0].address.postalCode +
               " " + */
                              // info[0].location[0].address.streetAddress //+
                              // ", " +
                              info.location[0].name}
                            {/* onClick={() => handleClickButton(info["@id"])} */}
                            {/* component={Link} to=
                        {generatePath("/event/:id", { id: info.id })} */}
                          </Typography>
                          {console.log("info", info.location[0].name)}

                          <Typography variant="body2" color="text.secondary">
                            {events &&
                            events.length > 0 &&
                            /* {user[0].location[0].address.postalCode +
               " " + */
                            moment(info.startDate).dayOfYear() ==
                              moment(info.endDate).dayOfYear()
                              ? //   ? // todo: if only shartdate is availabl
                                moment(info.startDate).format("DD.MM.YYYY")
                              : moment(info.startDate).format("DD.MM.YYYY") +
                                " - " +
                                moment(info.endDate).format("DD.MM.YYYY")}

                            {/* : moment(events[0].startDate).format("DD.MM.YYYY") */}
                            {console.log(
                              "dateDiff",
                              moment(info.startDate).day() ==
                                moment(info.endDate).day()
                            )}
                          </Typography>

                          <Typography variant="h6" color="text.primary">
                            {events && events.length > 0 && info.name}
                          </Typography>
                          {/* <Typography variant="h6" color="">
                        {events &&
                          events.length > 0 &&
                          info.description.replace(/(<([^>]+)>)/gi, "")}
                      </Typography> */}
                        </CardContent>
                      </ButtonBase>
                    </StyledCardActionArea>
                  </Card>
                </Grid>
              ))}

              {/* <Item>1</Item>

            <Grid xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid xs={6}>
              <Item>4</Item>
            </Grid> */}
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
}
