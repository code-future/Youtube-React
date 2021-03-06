import React from 'react';

export default class VideoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var props = this.props;
    return (
      <div className="card">
         <div className="card-image waves-effect waves-block waves-light">
           <img className="activator" src={""} />
         </div>
         <div className="card-content">
           <span className="card-title activator grey-text text-darken-4">{""}<i className="material-icons right">more_vert</i></span>
           <p><a href={""}>Watch Now</a></p>
         </div>
         <div className="card-reveal">
           <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
           <p>Here is some more information about this product that is only revealed once clicked on.</p>
         </div>
       </div>
      )
  }
}