import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-grid gap3">
        <h2>Dr. Office's Office</h2>
      <Link to="/">Home</Link>
      <Link to="/appointment/new">New Appointment</Link>
      <Outlet></Outlet>
    </div>
  );
}
