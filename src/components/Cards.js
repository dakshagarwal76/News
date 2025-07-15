import React, { Component, Fragment } from 'react'

export default class Cards extends Component {
articles =[]

constructor(){
  super();
  this.state={
    article: this.articles,
    page:1,
    country: "in",
    text:""
  }
};



async componentDidMount(){
  let url= `https://newsapi.org/v2/top-headlines?country=${this.state.country}&q=${this.state.text}&page=${this.state.page}&pagesize=16&apiKey=0efcd080f27b40c69fffbdbdfed8e664` ;
  let data = await fetch(url);
  let parsedData =await data.json()
  this.setState({article : parsedData.articles})
};

anews=(newsmode)=>{
  if (newsmode==="us"){
    this.setState({country: "us",page:1},()=>this.componentDidMount())
  }
  else if(newsmode==="ca"){
    this.setState({country:"ca",page:1},()=>this.componentDidMount())
  }
  else if (newsmode==="at"){
    this.setState({country:"at",page:1},()=>this.componentDidMount())
  }
  else if (newsmode==="de"){
    this.setState({country:"de",page:1},()=>this.componentDidMount())
  }
};

usanews=()=>{
  this.setState({country: "us",page:1},()=>this.componentDidMount())
  console.log(this.state.country)
};

canadanews=()=>{
 this.setState({country:"ca",page:1},()=>this.componentDidMount())
};

austrianews=()=>{
  this.setState({country:"at",page:1},()=>this.componentDidMount())
 };

 germanynews=()=>{
  this.setState({country:"de",page:1},()=>this.componentDidMount())
 };


backbutton= ()=>{
  this.setState({page: this.state.page -1},()=>this.componentDidMount())
};

nextbutton= ()=>{
  this.setState({page:(this.state.page)+1},()=>this.componentDidMount())
};



 texthandle=(event)=>{
  this.setState({text:(event.target.value)})
};

search=(event)=>{
  this.setState({text:event.target.value},()=>this.componentDidMount())
};

  render(){
    return (<>
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            International
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={this.usanews} href="/">USA</a></li>
            <li><a className="dropdown-item" onClick={this.austrianews} href="/">Austria</a></li>
            <li><a className="dropdown-item" onClick={this.canadanews} href="/">Canada</a></li>
            <li><a className="dropdown-item" onClick={this.germanynews} href="/">Germany</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" value={this.state.text} onChange={this.texthandle} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={this.search} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
        </div>
        <div className="cards-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {this.state.article.map((element)=>{
            return( <>
            <Fragment key={element.url}>
            <div className="card my-3 md-4 mx-3 " style={{width: "18rem"}}>
            <img src={element.urlToImage} className="card-img-top" alt="Unavailable"/>
            <div className="card-body"/>
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text"> {element.description}</p>
            <p>By: {element.author || "Anonymous" }</p>
            <a href={element.url} className="btn btn-dark" >Read</a>
            </div>
            </Fragment>
            </>
            )})}
        </div>
         <div className="d-flex justify-content-around">
         <button type="button" disabled={this.state.page<=1} onClick={this.backbutton} className="btn btn-dark">Back</button>
         <button type="button" onClick={this.nextbutton} className="btn btn-dark">Next</button> 
         </div>
         <div className='container'>
         <button type="button" onClick={this.usanews} className="btn btn-info mx-5">USA NEWS</button>
         <button type="button" onClick={this.canadanews} className="btn btn-info mx-5">Canada NEWS</button>
         <button type="button" onClick={this.germanynews} className="btn btn-info mx-5">Germany NEWS</button>
         <button type="button" onClick={this.austrianews} className="btn btn-info mx-5">Austria NEWS</button>
         </div>
         </>
            )}}