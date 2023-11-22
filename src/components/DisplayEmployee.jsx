import PropTypes from 'prop-types';

function DisplayEmployee({ employee }) {
  return (
    <div>
      <h2>Employee Information</h2>
      <p>Gender: {employee.gender}</p>
      <p>Name: {employee.name.title} {employee.name.first} {employee.name.last}</p>
      <p>Email: {employee.email}</p>
      <p>Location: {employee.location.street.number} {employee.location.street.name}, {employee.location.city}, {employee.location.postcode}, {employee.location.state}, {employee.location.country}</p>
      <img src={employee.picture.medium} alt="Employee" />
    </div>
  );
}
DisplayEmployee.propTypes = {
    employee: PropTypes.shape({
      gender: PropTypes.string,
      name: PropTypes.shape({
        title: PropTypes.string,
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      email: PropTypes.string,
      location: PropTypes.shape({
        street: PropTypes.shape({
          number: PropTypes.number,
          name: PropTypes.string,
        }),
        city: PropTypes.string,
        postcode: PropTypes.number,
        country: PropTypes.string,
        state: PropTypes.string,

      }),
      picture: PropTypes.shape({
        medium: PropTypes.string,
      }),
    }),
  };

export default DisplayEmployee;