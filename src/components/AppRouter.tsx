import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "../hook/useTypedSelector";
import Event from "../pages/Event";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Event />} />
      <Route path="*" element={<Event />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
