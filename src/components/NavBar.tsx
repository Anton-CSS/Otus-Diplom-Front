import React, { FC } from "react";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hook/useActions";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { logout, setReg } = useActions();
  const { isAuth, user, reg } = useTypedSelector((state) => state.auth);

  return (
    <header className="header">
      <div className="header__wrap">
        {isAuth ? (
          <>
            <div className="user__name">{user.username}</div>
            <div className="user__logout" onClick={() => logout()}>
              Выйти
            </div>
          </>
        ) : (
          <div className="user__menu">
            {!reg ? (
              <span
                className="user__login"
                onClick={() => {
                  navigate("/registration");
                  setReg(!reg);
                }}
              >
                Register
              </span>
            ) : (
              <span
                className="user__login"
                onClick={() => {
                  navigate("/login");
                  setReg(!reg);
                }}
              >
                Login
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
