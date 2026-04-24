import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/actionCreator";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Style from "./Register.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const registerState = useSelector((state) => state.registerState);

  registerState.data?.error && setErrorMessage(registerState.data.error);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordValidate: "",
  });

  const { name, email, password, passwordValidate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ name, email, password, passwordValidate }));

    setFormData({
      name: "",
      email: "",
      password: "",
      passwordValidate: "",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 6000);

    return () => clearTimeout(timer);
  }, [errorMessage]);

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

  useEffect(() => {
    if (registerState === true) {
      navigate("/entrar");
    }
  }, [registerState, navigate]);

  return (
    <div className={Style.registerContainer}>
      <div
        className={`container-fluid  `}
        style={{ backgroundColor: "rgb(247, 249, 250)" }}
      >
        <div className=" row justify-content-center">
          <div className=" col-xl-10 col-lg-12 col-md-9 py-5 ">
            <div className="card o-hidden border-0 shadow-lg  ">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-5 d-none d-lg-block bg-register-image">
                    <img
                      src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710649108/happydog/for7tackfqs0aid4kzp0.png"
                      alt="imageRegister"
                      className="img-fluid "
                      style={{ height: "450px", width: "430px" }}
                    />
                  </div>
                  <div className="col-lg-7">
                    <div className=" ps-4 pt-4 pe-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 ">Creá una cuenta!</h1>
                      </div>
                      <form className="user" onSubmit={onSubmit}>
                        <div className="form-group row">
                          <div className="col-sm-12  mb-sm-0">
                            <input
                              type="text"
                              className=" mb-3 form-control form-control-user"
                              id="examplename"
                              placeholder="Nombre Completo"
                              name="name"
                              value={name}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="mb-3 form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={onChange}
                          />
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-6  mb-sm-0">
                            <input
                              type="password"
                              className="mb-3  form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Contraseña"
                              name="password"
                              value={password}
                              onChange={onChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleRepeatPassword"
                              placeholder="Repetir contraseña"
                              name="passwordValidate"
                              value={passwordValidate}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block mt-2 mb-4"
                        >
                          REGISTRESE
                        </button>

                        <div style={{ height: "10px" }}>
                          {registerState !== true && registerState !== "" && (
                            <>{registerState.response.data?.error}</>
                          )}
                        </div>
                      </form>
                      <hr />

                      <div className="text-center mt-5">
                        <Link className="small text-decoration-none" to="/">
                          Menú principal
                        </Link>
                      </div>

                      <div className="text-center">
                        <Link className="small text-decoration-none" to="entrar">
                          Ya tienes una cuenta? Acreditate!
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
    </div>
  );
};

export default RegisterPage;
