import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class PersonList extends React.Component {
  state = {
    persons: [],
  };

  // Fetch data from the API on component mount
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Container className="mt-4">
        <h2 className="text-center text-success mb-4">User List</h2>
        {this.state.persons.map((person, index) => (
          <Card key={index} className="mb-3 bg-info text-white">
            <Card.Body>
              <div className="d-flex">
                <img
                  src={person.picture.large}
                  alt={person.name.first}
                  className="rounded-circle me-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h4>
                    {person.name.title} {person.name.first} {person.name.last}
                  </h4>
                  <p>
                    <strong>User Name:</strong> {person.login.username}
                  </p>
                  <p>
                    <strong>Gender:</strong> {person.gender.toUpperCase()}
                  </p>
                  <p>
                    <strong>Time Zone Description:</strong>{" "}
                    {person.location.timezone.description}
                  </p>
                  <p>
                    <strong>Address:</strong> {person.location.street.number}{" "}
                    {person.location.street.name}, {person.location.city},{" "}
                    {person.location.state}, {person.location.postcode}
                  </p>
                  <p>
                    <strong>Email:</strong> {person.email}
                  </p>
                  <p>
                    <strong>Birth Date and Age:</strong>{" "}
                    {new Date(person.dob.date).toLocaleDateString()} (
                    {person.dob.age})
                  </p>
                  <p>
                    <strong>Phone:</strong> {person.phone}
                  </p>
                </div>
              </div>
              <Button variant="primary" className="mt-3">
                Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default PersonList;
