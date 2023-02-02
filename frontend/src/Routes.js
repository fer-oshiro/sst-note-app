import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<UnauthenticatedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<AuthenticatedRoute />}>
        <Route path="/notes/new" element={<NewNote />} />
        <Route path="/notes/:id" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
