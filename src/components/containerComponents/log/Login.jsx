import Style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { userLog } from "../../../redux/actions/actionCreator";
import { Navigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const userLogg = useSelector((state) => state.userLogged.logged);
  const logError = useSelector((state) => state.logError);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userLog({ email, password }));
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const handleBlockedNavigation = (event) => {
      event.preventDefault();
    };
    window.addEventListener("popstate", handleBlockedNavigation);
    return () => {
      document.body.style.overflowY = "auto";

      window.removeEventListener("popstate", handleBlockedNavigation);
    };
  }, []);

  if (userLogg) {
    return <Navigate to="/" />;
  }

  return (
    !userLogg && (
      <div
        className={`container-fluid  `}
        style={{ backgroundColor: "rgb(247, 249, 250)" }}
      >

        <div className={`row justify-content-center ${Style.loginContainer}`}>
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
    
                <div className="row">
                  <div className="col-lg-6 d-flex bg-login-image">
                    <img
                      src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710649100/happydog/veez7lqfqp79tq2ugpmi.png"
                      alt="loginImage"
                      className="img-fluid "
                      style={{ height: "450px", width: "430px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pe-5 pt-4">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-5">Bienvenido !</h1>
                      </div>
                      <form className="user" onSubmit={onSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="mb-4 form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Ingrese dirección de e-mail..."
                            name="email"
                            value={email}
                            onChange={onChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className=" mb-4 form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Contraseña"
                            name="password"
                            value={password}
                            onChange={onChange}
                          />
                        </div>
                        <div className="form-group"></div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block mb-4"
                        >
                          Ingresar
                        </button>
                        <div style={{ height: "10px" }}>
                          {logError && (
                            <p>
                              {logError?.response?.data?.error}
                           
                            </p>
                          )}
                          </div>
                        <hr />

                      </form>
                      <div className="text-center">
                        <Link className="small text-decoration-none" to="/">
                          Menú principal
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link
                          className="small text-decoration-none"
                          to="/registrarse"
                        >
                          Creá una cuenta!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
