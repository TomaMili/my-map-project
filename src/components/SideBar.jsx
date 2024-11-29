import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import SideBarFooter from "./SideBarFooter";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* Renders child routes here */}
      <Outlet />

      <SideBarFooter />
    </div>
  );
}

export default SideBar;
