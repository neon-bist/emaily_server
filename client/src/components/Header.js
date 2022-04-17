import { connect } from "react-redux";

const Header = (props) => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Emaily</a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
