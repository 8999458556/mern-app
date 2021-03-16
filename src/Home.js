import React, { useEffect, useRef, useState } from "react"
import{Link} from "react-router-dom"
import {Button, FormControl, MenuItem, Select,InputLabel, Card, CardContent, CardActions, Table, TableRow, TableCell, TableBody,TableHead} from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"
import axios from "axios"
import "./sty.css"
import {Bar,HorizontalBar,Line} from "react-chartjs-2"
import {MapContainer as Map,TileLayer,Popup,Marker,Circle,useMapEvents} from "react-leaflet"




const Home=()=>{     
const [states,setStates]=useState([]);
const[full,setfull]=useState([])
const [world,setWorld] = useState();
const [stateTime,setTime]=useState([])
const [line,setLine]=useState([])
const[data,setData]=useState({
    state:"",
    cases:"",
    active:"",
    todayActive:"",
    recovered:"",
    todayDeaths:"",
    todayCases:"",
    todayRecovered:""
})

useEffect(()=>{
    //ithe code here only once when the app cloads not the second time
    
    const getCon =()=>{
        axios.get("http://disease.sh/v3/covid-19/gov/IN").then(
            (res)=>{
                const count2 = res.data.states.map((states)=>({state:states.state}))
                setfull(res.data.states)
                setStates(count2)
            }
            
            )
            axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history").then(res=>{
               let count3 = res.data.data.history.map((day)=>({dates: day.day,states:day.statewise}))
               setTime(count3)
            })   
    }
     getCon() 
     
},[])

const [position,setPos]= useState([28.64,77.21]) 
const[pos,setPos1] = useState([])
useEffect(()=>{
    axios.get("http://localhost:5000/position").then(res=>{

    var position_data  = res.data.map((pos1)=>({
        state:pos1.State.Name,
        lat:pos1.latitude,
        log:pos1.longitude,
    })
    
        
        )
    setPos1(position_data)


})
    
},[])
const [zoom,setZoom]=useState(7) 
function Mark(){
    const map = useMapEvents({
        handleFlyto() {
          map.flyTo(position,20,{duration:2})
        },
      })
      return (
      <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>)
    } 
    
const handleChange=(e)=>{

    let count4 = stateTime.map((states)=>(states.states))
    var state;
    let total= [];
    for (var i = 0;i<count4.length;i++){
        let co = count4[i].map(q=>{
            if(q.state === e.target.value){
               state = q.state
               total.push(q.active)
            }
            })
    }
    pos.map(state=>{
        if(state.state === e.target.value){
            setPos([state.lat,state.log])
            setZoom(30)
        }

    })
    console.log(position)

    let dat = stateTime.map((day)=>(day.dates))
    setLine({...line,state:state,dates:dat,cases:total}) 

axios.get(`http://disease.sh/v3/covid-19/gov/IN`).then(res=>{

res.data.states.map((s)=>{  
    if(s.state === e.target.value){
        setWorld(s)
        setData({...data,state:s.state,cases:s.cases,active:s.active,recovered:s.recovered,deaths:s.deaths,todayActive:s.todayActive,todayCases:s.todayCases
         ,todayDeaths:s.todayDeaths,todayRecovered:s.todayRecovered
        })

    }
})



})}

const stateByTime = {
    labels: line.dates,
    datasets: [
      {
        label: "Active cases",
        borderWidth:1,
        data: line.cases,
        borderColor: "black",
        fill: false
      }
    ]
  }

const data2 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Active",
            data:full.map(res=>res.active),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: 'black',
        }
    ]
    
}
const data3 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Recoverd",
            data:full.map(res=>res.recovered),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: 'black',
        }
    ]
    
    
}
const data4 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Deaths",
            data:full.map(res=>res.deaths),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: "black",
        }
    ]
    
}
const data5 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Total Cases",
            data:full.map(res=>res.cases),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: "black",
        }
    ]
    
}
const data6 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Today Active",
            data:full.map(res=>res.todayActive),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: "black",
        }
    ]
    
}
const data7 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Today Recovered",
            data:full.map(res=>res.todayRecovered),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: "black",
        }
    ]
    
}
const data8 = {
    labels: states.map(res=>res.state),
    datasets:[
        {
            label:"Today Deaths",
            data:full.map(res=>res.todayDeaths),
            barThickness: 6,
            backgroundColor: 'red',
            borderColor: "black",
        }
    ]
    
}
    return(
        <>
    <div className="home">

        <div><Header/></div>
        <div className="det">
           
            <FormControl classname="con_drop">
                <div className="heading-bar">
                <div style={{position:"relative",left:"2.5cm"}}><h1>COVID-19 Tracker</h1></div> 
                <div style={{position:"relative",left:"7cm"}}><Select variant="outlined" value={world} onChange={handleChange} className="drop">   
                {
                    states.map((res)=>(
                        <MenuItem value={res.state} className="sel"> {res.state} </MenuItem>                            
                   
                    ))
                }
                </Select> <h2>Select State</h2>   </div>
                </div>
                <div className="total">
                    <h1>Coronavirus Cases :</h1><br/>
                    <h3 style={{fontSize:30}}>{data.cases}</h3>
                  

                </div>
                <div className="card">
                <Card className="cards">
                    <CardContent>
                        <h3 style={{fontWeight:"bold"}}>Active</h3><br/>
                        <p>{data.active}</p>
                    </CardContent>
                    <CardActions>
                        <Button>Learn more</Button>
                    </CardActions>
                </Card>
                <Card className="cards">
                    <CardContent>
                    <h3 style={{fontWeight:"bold"}}>Recovered.</h3><br/>
                        <p>{data.recovered}</p>
                    </CardContent>
                    <CardActions>
                        <Button>Learn more</Button>
                        </CardActions>
                </Card>
                <Card className="cards">
                    <CardContent>
                        <h3>Deaths.</h3><br/>
                        <p>{data.deaths}</p>
                    </CardContent>
                    <CardActions>
                        <Button>Learn more</Button>
                        </CardActions>
                </Card>
                </div>
            </FormControl>
        </div>
        <div className="charts">
            <div className="map">
                <h1 style={{textAlign:"center"}}>Get to know on Map</h1>
                
               
                <Map center={position} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Mark/>
    <Circle center={position} radius={1000} fillColor="red" />
  </Map>

            </div>
            <div className="dt2">
            <Table className="table">
                     <TableHead>        
                    <TableRow >                        
                        <TableCell style={{fontWeight:"bolder",fontSize:22}}>State/UT</TableCell>
                        <TableCell style={{fontWeight:"bolder",fontSize:22}}>{data.state}</TableCell>
                    </TableRow>
                    </TableHead> 
                    <TableBody> 
                    <TableRow  className="tr">                        
                        <TableCell>Cases</TableCell>
                        <TableCell>{data.cases}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>TodayActive</TableCell>
                        <TableCell>{data.todayActive}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>Active</TableCell>
                        <TableCell>{data.active}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>TodayRecoverd</TableCell>
                        <TableCell>{data.todayRecovered}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>Recovered</TableCell>
                        <TableCell>{data.recovered}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>TodayDeaths</TableCell>
                        <TableCell>{data.todayDeaths}</TableCell>
                    </TableRow>
                    <TableRow  className="tr">                        
                        <TableCell>Deaths</TableCell>
                        <TableCell>{data.deaths}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div style={{width:"17cm",height:"19cm",marginTop:"0.3cm",marginLeft:"-1.5cm"}}>
        <Line
          data={stateByTime}
          options={{
            title:{
              display:true,
              text:'Active cases in state',
              fontSize:20
            },

          }}
        />
      </div>
            </div>
           

        </div>

        <div style={{width:"30cm",height:"20cm",marginTop:"16cm",marginLeft:"5cm",padding:20}}>
            <h1 style={{textAlign:"center"}}>Cases by States</h1>

            <Bar
            data={data5}
            width={100}
            height={40}
            options={{
              maintainAspectRatio: false,
            }}

            />
        </div>
        <div style={{display:"flex",flexDirection:"row",padding:10}}>
            <div style={{width:"15cm",height:"15cm",padding:10}}>
            <h2 style={{textAlign:"center"}}>Active cases by states</h2>
            <HorizontalBar
           data={data2}
           width={101}
           height={50}
           options={{
             maintainAspectRatio: false,
           }}
           
           
           />
           </div>
           <div style={{width:"15cm",height:"15cm",padding:10}}>
               <h2 style={{textAlign:"center"}}>Recoverd cases by states</h2>
            <HorizontalBar
            data={data3}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}/>
            </div>
             <div style={{width:"15cm",height:"15cm"}}>
             <h2 style={{textAlign:"center"}}>Death cases by states</h2>
    <HorizontalBar data={data4}
             width={100}
             height={50}
             options={{
               maintainAspectRatio: false,
             }}/></div>
        </div>
        <div style={{display:"flex",flexDirection:"row",padding:10,marginTop:"1cm"}}>
            <div style={{width:"15cm",height:"15cm",padding:10}}>
            <h2 style={{textAlign:"center"}}>Todays Active cases by states</h2>
            <HorizontalBar
           data={data6}
           width={101}
           height={50}
           options={{
             maintainAspectRatio: false,
           }}
           
           
           />
           </div>
           <div style={{width:"15cm",height:"15cm",padding:10}}>
               <h2 style={{textAlign:"center"}}>Todays Recoverd cases by states</h2>
            <HorizontalBar
            data={data7}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}/>
            </div>
             <div style={{width:"15cm",height:"15cm"}}>
             <h2 style={{textAlign:"center"}}>Todays Death cases by states</h2>
    <HorizontalBar data={data8}
             width={100}
             height={50}
             options={{
               maintainAspectRatio: false,
             }}/></div>
        </div>

        <div>
            <Footer/>
        </div>

    </div>  

    </>

    )

}
export default Home;