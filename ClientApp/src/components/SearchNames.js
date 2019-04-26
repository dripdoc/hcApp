import React, { Component } from 'react';
import { FetchPersons } from './FetchPersons';

export class SearchNames extends Component {
  displayName = SearchNames.name

  constructor(props) {
    super(props);
      this.state = { persons: [], loading: true, filter : "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
      
    handleChange(event) {
        this.setState({ filter: event.target.value });
    }

    handleSubmit(event) {
        this.setState(this.state.loading : true);
        this.Fetch(this.state.filter);
        event.preventDefault();
    }
    Fetch(name) {
        fetch('api/Persons/' + name)
            .then(response => response.json())
            .then(data => {
                this.setState({ persons: data, loading: false, NameValue: "Name" });
            });
    }
    
  render() {
      let contents = this.state.loading
              ? <p><em>FilteredNames...</em></p>
            : FetchPersons.renderPersonsTable(this.state.persons);
      return (
          <div>

              <h1>Persons</h1>
              <p>Get a filtered list of persons</p>
              <form onSubmit={this.handleSubmit} >
                  <textarea required="true" class="form-control" value={this.state.filter} onChange={this.handleChange} />
               
              <input class = "form-control" type="submit" value="Submit" />
           
              </form>

              {contents}
          </div>
      );
  }
}
