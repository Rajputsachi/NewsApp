import React, { Component } from 'react';



export class NewsItem extends Component {
  render() {
 
    let {title,discription,imageurl,newsurl,time,author,source}=this.props;
    return (
    <div className="my-3 mx-3">
      <span className="badge rounded-pill bg-danger">{source==null?"UnKnown":source}</span>

        <div className="card" >
           <img src={imageurl?imageurl:"https://images.hindustantimes.com/tech/img/2022/03/20/1600x900/iPHone_13_Green_1646763116759_1647788232256.jpg"} className="card-img-top" alt="null"/>
           <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{discription}...</p>
           <div className="card-footer text-muted my-3 text-danger"><p className="text-danger">By {author==null?"unknown":author} on {new Date(time).toGMTString()}</p></div>

           <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div>
      
      </div>
    )
  }
}

export default NewsItem
