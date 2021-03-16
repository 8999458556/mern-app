import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@material-ui/core"

const Blogs = ()=>{

    return(
        <>
        <div><Header/></div>
        <div className="card-box">
          <Card style={{maxWidth:400,margin:15}}>
              <CardActionArea style={{backgroundColor:"whitesmoke"}}>
              <CardMedia image="H:\Online courses\New folder\React_js\mern\mern-app\src\logo.svg" title="maharastra strinkg out "/>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">The growing spread hitting maharashtra</Typography>
                  <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic
                       typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem</Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button color="primary">Share</Button>
                  <Button color="primary">Read more</Button>
              </CardActions>
          </Card>
          <Card style={{maxWidth:400,margin:15}}>
          <CardActionArea style={{backgroundColor:"whitesmoke"}}>
          <CardMedia/>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">The Sypmtoms that you should be following to stop spread</Typography>
                  <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic
                       typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem</Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button color="primary">Share</Button>
                  <Button color="primary">Read more</Button>
              </CardActions>
          </Card>
          <Card style={{maxWidth:400,margin:15}}>
          <CardActionArea style={{backgroundColor:"whitesmoke"}}>
          <CardMedia/>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">The Best santizers available in market</Typography>
                  <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic
                       typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem</Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
              <Button color="primary">Share</Button>
                  <Button color="primary">Read more</Button>
              </CardActions>
          </Card>

        </div>
        <div style={{position:"fixed",bottom:0,width:"100%"}}>
            <Footer/>
        </div>
        
        </>
    )

}
export default Blogs;
