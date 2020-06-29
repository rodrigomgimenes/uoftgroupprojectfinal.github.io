import React from "react";
import "../../css/togather.css";

// WE NEED TO MAKE SOME MODS HERE...ADD LINK INTO REACT!!

function Sidebar() {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="/assets/icons/anonymous.png" className="img-circle" alt="User" />
          </div>
          <div className="pull-left info">
            <span>Anonymous</span>
            <p><i className="fas fa-check-double text-lime"></i> Online</p>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..." />
            <span>
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN</li>
          <li className="treeview">
            <a href="/events">
              <i className="far fa-list-alt"></i>
              <span> Events</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li className="treeview">
                <a href="#">
                  . Sports
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="#">- Baseball</a></li>
                  <li><a href="#">- Basketball</a></li>
                  <li><a href="#">- Football</a></li>
                  <li><a href="#">- Hockey</a></li>
                  <li><a href="#">- Soccer</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  . Festivals
                  <span className="pull-right-container">
                    <small className="label pull-right bg-purple">soon</small>
                  </span>
                </a>
              </li>
            </ul>
          </li>       
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;

