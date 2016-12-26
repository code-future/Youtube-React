import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'searchInput': ''
    }
    this.onInputChange = this.onInputChange.bind(this); //we need to call this to bind onInputChange 
    this.handleSubmit = this.handleSubmit.bind(this);
 }
  onInputChange(event) {
    this.setState({
      searchInput: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    //What needs to happen here?
  }
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                  <input id="search" value={this.state.searchInput} onChange={this.onInputChange} type="search" required />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
      )
  }
}