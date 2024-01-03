import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,discription,imageUrl,newsUrl}=this.props
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem;"}}>
  <img src={!imageUrl?"https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAzMTkxMDA1MzU5NjQ1ODc4/qb_startsit_video_week17.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
