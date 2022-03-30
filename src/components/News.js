import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './spinner.js';

export class News extends Component {

capitalize=(s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}

constructor(props)
  {
    super(props);
     //making states here 
     this.state={
        articles:[],
        page:1,
        totalResult:300,
        loading:false
     }
     document.title=this.capitalize(this.props.category);
  }
  async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6da38163c5e748be8b1bb169905dc057&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedata=await data.json();
      this.setState({articles:parsedata.articles,totalResult:parsedata.totalResults,loading:false});
  }
  handlepreviousclick=async()=>{
    
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6da38163c5e748be8b1bb169905dc057&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedata=await data.json();
        this.setState({articles:parsedata.articles});
        this.setState({
            page:this.state.page-1,
            loading:false
        })
    
  

  }
  handlenextclick=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize))
    {

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6da38163c5e748be8b1bb169905dc057&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles});
    this.setState({
        page:this.state.page+1,
        loading:false
    })
  }

  }

  render() {
    {
     return (
         <>
        <div className="container my-3 mx-3">
          {this.state.loading&&<Spinner/>}
         <h1 className="text-center mx-3 my-3">News-Top {this.capitalize(this.props.category)} HeadLines</h1>
  

         <div className="row">
         {!this.state.loading&&this.state.articles.map((element)=>{return <div className="col-md-4" key={element.url}><NewsItem title={element.title} discription={element.description?element.description.slice(0,60):""} imageurl={element.urlToImage} newsurl={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/></div>})}     
        </div> 
        </div>
        <div className="container d-flex justify-content-between">
          <button  disabled={this.state.page<=1} type="button" onClick={this.handlepreviousclick} className="btn btn-dark">&laquo; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)} type="button"  onClick={this.handlenextclick} className="btn btn-dark">Next &raquo;</button>

        </div>

        </>
    
    )
  }
}
}

export default News

