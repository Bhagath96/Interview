import React,{ useEffect,useState } from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../component/header.js';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';


const useStyles = makeStyles(() => ({
    appBar: {
      backgroundColor:"#fff",
    },
    hero: {
      
       width:"-webkit-fill-available",
       height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"20px"
       
      },
       
  }));
  
 function DetailedPage(props) {
    const [filterdData,setFilterdData] = useState('');    
    const [filterdImgUrl,setFilterdImgUrl] = useState("");    
    const [filterdTitle,setFilterdTitle] = useState("");    
    const [filterdDiscription,setFilterdDiscription] = useState("");    
    const classes = useStyles();

    function clearstates() 
  {
    setFilterdData('') 
    setFilterdImgUrl("") 
    setFilterdTitle('') 
    setFilterdDiscription('') 
  }
 async function fetchData(id)  {
   await clearstates();
     const DetailedData = props.news.filter((data) => {       
        return data.publishedAt == id; 
    });  
         await setFilterdData(DetailedData);  
         console.log(DetailedData) 
        setFilterdImgUrl(DetailedData[0].urlToImage)
        setFilterdTitle(DetailedData[0].title)
        setFilterdDiscription(DetailedData[0].description)                               
    }
    useEffect(() => { 
        var id="";
        console.log(props.match.params.id)
        //  id=props.location.query.id         
         id=props.match.params.id         
        fetchData(id);                   
        }, []);
  return (               
                  <div >
                  <Header/>
                  <img src={filterdImgUrl} className={classes.hero}></img>
               
                  <Container maxWidth="lg">
                  <Grid container spacing={3}>      
                  <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} spacing={12}>
                  <h1>{filterdTitle}</h1>
                  </Grid>
                  </Grid>     
                  <Grid container spacing={3}>      
                  <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} spacing={12}>
                  <h1>{filterdDiscription}</h1>
                  </Grid>
                  </Grid>              
                </Container>                         
               
              </div>   
   
  );
}
const mapStateToProps = state => ({
    news: state.news.items,  
  });
  
  export default connect(mapStateToProps)(DetailedPage);
