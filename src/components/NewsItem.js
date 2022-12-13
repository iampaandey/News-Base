
import React from 'react'

let myStyle ={
    backgroundColor : "#ab000d",
    color : "white",
    border : "solid 1px white",
  }
  let myStylee ={
    backgroundColor : "black",
    color : "white",
    border : "solid 1px white"
    
  }
  
const NewsItem =(props) => {
        let { title, description, imageUrl, newsUrl,source,date} =props
        return (
            <div className='my-3'>
                <span class="badge bg-danger">{source}</span>
                <div className="card"style={myStyle}>
                    <img src={imageUrl?imageUrl: "https://images.indianexpress.com/2022/04/anti-encroachment-drive-3-1-2.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>Published on {new Date(date).toDateString()}</small></p>
                        <a href={newsUrl}  rel="noreferrer"  target="_blank" className="btn brn-sm btn-primary" style={myStylee}>Read More</a>
                    </div>
                </div>
            </div>
        )

}

export default NewsItem
