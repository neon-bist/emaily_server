import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Landing = (props) => {
  if (props.auth) {
    console.log(props);
    return <Redirect to="/surveys" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emaily</h1>
      <p>Collect feedbacks from the users!</p>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Landing);
