import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll  from "react-infinite-scroll-component";


// let myStylee ={
//     backgroundColor : "black",
//     color : "white",
//     border : "solid 1px white"
//   }
  


const News =(props)=> {

   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState(true)
   const[page,setPage]=useState(1)  
   const[totalResults,settoTalResults]=useState(0)


    const capitalizeFirstletter =(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    

    useEffect(()=>{
        document.title=`${capitalizeFirstletter(props.category)}-News Base`;
    updateNews()
    //eslint-disable-next-line
    },[])


     const updateNews= async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        settoTalResults(parsedData.totalResults)
        setLoading(false)
        
     }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        settoTalResults(parsedData.totalResults)
    }

        return (
            <div className='container my-3 '>
                <h2 className='text-center' style={{marginTop : '55px'}}>Top Headlines-{capitalizeFirstletter(props.category)}</h2>
                 {loading && <Spinner />}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className="container">


         
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4 my-1" key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} 
                            imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-dark" style={myStylee} disabled={this.state.page <= 1} onClick={this.onPrevclick}>&larr; Previous</button>
                    <button type="button" className="btn btn-outline-dark" style={myStylee} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.onNextclick}>Next &rarr;</button>
                </div> */}

            </div>
        )
    
}



News.defaultProps ={
    country : 'in',
    pageSize : 6,
    category : 'general'
}

News.propTypes ={
    contry : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}



export default News
