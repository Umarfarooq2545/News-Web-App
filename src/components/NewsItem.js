import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <div style={{display:'flex',
                        right:'0',
                        position:'absolute',
                        justifyContent:'flex-end'}}>
          <span className="badge rounded-pill bg-danger">
              {source}
          </span>
          </div>
          <img src={imageUrl?imageUrl:"https://cdn.cnn.com/cnnnext/dam/assets/220805020340-02-thailand-bar-fire-080522-exlarge-169.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                
          </div>
        </div>
      </div>
      
    )
  }
}

export default NewsItem
