import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imgurl?"https://img.freepik.com/free-photo/city-blue-sky_1417-1867.jpg":imgurl} href={newsurl} alt='cricket news'/>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button href={newsurl} className="btn btn-primary">read more...</button>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems

