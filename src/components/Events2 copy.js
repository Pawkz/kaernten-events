// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonBase } from '@material-ui/core';
// import useStyles from "../styles";
// import {Link} from "react-router-dom";
// import { generatePath } from "react-router";

// export default function Events() {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch(
//       "https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image&page%5Bnumber%5D=2&page%5Bsize%5D=25&token=9962098a5f6c6ae8d16ad5aba95afee0"
//     );
//     const data = await response.json();
//     // console.log("res:", response);
//     // console.log("data:", data);
//     // console.log("data2:", data.links);
//     // console.log("data3:", data["@context"]);
//     // console.log("data4:", data["@graph"]);
//     setUser(data["@graph"]);
//   };
//   const classes = useStyles();

//   return (
//     <div className="Cards" >
//     <CssBaseline />
//        <Container className={classes.cardGrid} maxWidth="md" style={{paddingTop: "2%"}}>
//            <Grid container spacing={4}>
//                {allCompanyInfos.allCompanyDescriptions.map((info)=> (
//                    <Grid item xs={12} sm={6} md={4} key= {info.id}>
//                            <Card  className={classes.card}>
//                                <CardMedia                                            /*Selfclosing Arrgument*/
//                                    className={classes.cardMedia}
//                                    image= {info.fotos[0]}
//                                    titel="Image title"
//                                    onClick={() => handleClickButton(info.id)}
//                                    component={Link} to={generatePath("/company/:id", {id: info.id})}
//                                />
//                                <ButtonBase
//                                    onClick={() => handleClickButton(info.id)}
//                                    component={Link} to={generatePath("/company/:id", {id: info.id})}
//                                >
//                                    <CardContent className={classes.cardContent}>
//                                        <Typography gutterBottom variant="h5">
//                                            {info.name}
//                                        </Typography>
//                                        <Typography>
//                                            {info.straße}
//                                        </Typography>
//                                        <Typography>
//                                            {info.plz} {info.stadt}
//                                        </Typography>
//                                    </CardContent>
//                                </ButtonBase>
//                                {/* <CardActions>
//                                    <Button onClick={() => handleClickButton(info.id)}
//                                            component={Link} to={generatePath("/company/:id", {id: info.id})}
//                                            size="small"
//                                            color="primary">
//                                                View
//                                    </Button>
//                                </CardActions> */}
//                            </Card>
//                    </Grid>
//                ))}
//                {cards.map((card) => (
//                    <Grid item key ={card} xs={12} sm={6} md={4}>
//                        <Card className={classes.card}>
//                            <CardMedia                                            /*Selfclosing Arrgument*/
//                                className={classes.cardMedia}
//                                image="https://source.unsplash.com/random"
//                                titel="Image title"
//                            />
//                            <CardContent className={classes.cardContent}>
//                                <Typography gutterBottom variant="h5">
//                                    Heading
//                                </Typography>
//                                <Typography>
//                                    this is a media card. You can use this section to describe the content
//                                </Typography>
//                            </CardContent>
//                            <CardActions>
//                                <Button size="small" color="primary">View</Button>
//                                <Button size="small" color="secondary">Edit</Button>
//                            </CardActions>
//                        </Card>
//                    </Grid>
//                ))}
//            </Grid>
//    </Container>
// </div>
//   );
// }
