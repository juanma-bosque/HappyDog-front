import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/actionCreator";

export default function Log({ userLog }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/entrar");
  };

  const handleRegister = () => {
    navigate("/registrarse");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <>
      {!userLog && (
        <>
          <Dropdown>
            <Dropdown.Toggle
              variant="ligth"
              className="border"
              id="dropdown-basic"
            >
              INGRESAR
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogin}>Ingresá</Dropdown.Item>
              <Dropdown.Item onClick={handleRegister}>Registrate</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}

      {userLog && (
        <>
          <Dropdown>
            <Dropdown.Toggle
            className="border border-danger"
              variant="light"
              id="dropdown-basic"
              onClick={handleLogout}
            >
              SALIR
            </Dropdown.Toggle>
          </Dropdown>
        </>
      )}
    </>
  );
}

Log.propTypes = {
  userLog: PropTypes.bool.isRequired,
};
