import React,{ useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../component/header.js';
import NewsCard from '../component/NewsCard.js';
import Container from '@material-ui/core/Container';
import api from '../controllers/apiController.js';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/postActions';
 

 function Home(props) {
    const [newsData, setNewsData] = useState('');    
    useEffect(() => {  
        async function loadData(){        
            await  props.fetchNews();                           
            }  
           loadData()   
           console.log(props.history)        
        }, []);

  useEffect(() => { 
            setNewsData(props.news)                       
            }, [props.news]);
         
  const datsas =props.news.map(Data => {                           
    return (
      <NewsCard Data={Data} />      
    )
  })  

    return (
    <div >
  <Header/>
    <Container maxWidth="lg">
      <Grid container spacing={3}>      
          {datsas}
        </Grid>                          
      </Container>
        </div>                      
        );
       } 
  const mapStateToProps = state => ({
    news: state.news.items,  
  });
  
  export default connect(mapStateToProps, { fetchNews })(Home);