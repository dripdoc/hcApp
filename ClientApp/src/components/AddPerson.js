import React, { Component } from 'react';

export class AddPerson extends Component {
    displayName = AddPerson.name

  constructor(props) {
    super(props);
      this.state = {
           personData: {
              firstName: "",
              lastName: "",
              streetAddress: "",
              age: "",
              interests: "",
              pictureUrl: "",
          },
          response: ""
         };
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleInterestsChange = this.handleInterestsChange.bind(this);
      this.handlePictureURLChange = this.handlePictureURLChange.bind(this);
      this.handleStreetAddressChange = this.handleStreetAddressChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
      
    handleAgeChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    age : value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handleStreetAddressChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    streetAddress: value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handleLastNameChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    lastName: value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handleFirstNameChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    firstName: value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handleInterestsChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    interests: value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handlePictureURLChange(event) {
        let value = event.target.value;
        this.setState(
            prevState => ({
                personData: {
                    ...prevState.personData,
                    pictureURL: value
                }
            }),
            () => console.log(this.state.personData)
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        let personData = this.state.personData;
        let bodyText = JSON.stringify(personData)

        fetch("/api/persons", {
            method: "POST",
            body: bodyText,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });

    }


    
  render() {


      return (
          <div>

              <h1>Persons</h1>
              <p>Add A person</p>
              <form onSubmit={this.handleSubmit} >
                  <textarea required="true" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                  <textarea required="true" className="form-control" value={this.state.lastName} onChange={this.handleLastNameChange} />
                  <input type='number' required="true" className="form-control" value={this.state.age} onChange={this.handleAgeChange} />
                  <textarea required="true" className="form-control" value={this.state.streetAddress} onChange={this.handleStreetAddressChange} />
                  <textarea required="true" className="form-control" value={this.state.interests} onChange={this.handleInterestsChange} />
                  <textarea required="false" className="form-control" value={this.state.pictureUrl} onChange={this.handlePictureURLChange} />
                  <input className="form-control" type="submit" value="Submit" />

              </form>
              Respsone: {this.state.response}
          </div>
      );
  }
}
