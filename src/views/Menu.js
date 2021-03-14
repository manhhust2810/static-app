import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from "react-router-dom";
import { 
    BsFillBarChartFill,
    BsFillPieChartFill  
} from "react-icons/bs";

const menus = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Display",
        to: "/display",
        exact: false
    },
    {
        name: "List",
        to: "/todolist",
        exact: false
    },
    {
        name: "Manage",
        to: "/usermanager",
        exact: false
    },
    {
        name: "Transcript",
        to: "/transcript",
        exact: false
    },
    {
        name: "Statistical",
        to: "/statistical",
        exact: false
    },
    {
        name: "Color",
        to: "/color",
        exact: false
    },
    {
        name: "Covid 19",
        to: "/covid19",
        exact: false
    },
    {
        name: "World Cup",
        to: "/worldcup",
        exact: false
    },
    {
        name: "Blockchain",
        to: "/blockchain",
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route 
            path={to} 
            exact = {activeOnlyWhenExact} 
            children={(match) => {
            const active = match ? "item-active" : "";
            return (
                <li>
                    <NavLink 
                        to={to} 
                        className="navlink"
                        activeClassName={`${active}`}
                        exact
                        data-toggle="navlink"
                        >
                        {label}
                        <span className={(label==="Statistical") ? "caret" : ""}>
                        </span>
                        {(label==="Statistical")
                        ?
                        (<ul className="sub-menu">
                            <li>
                                <a 
                                    href="#"
                                    className="text-color-dropdown">
                                Line Chart
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-color-dropdown">
                                Column <BsFillBarChartFill />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#"
                                    className="text-color-dropdown">
                                Pie <BsFillPieChartFill />
                                </a>
                            </li>
                        </ul>)
                        :
                        (<></>)}
                    </NavLink>
                </li>
            )}}/>)
};

class Menu extends Component {

    showMenus = (menus) => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.name} 
                        to={menu.to} 
                        activeWhenOnlyExact={menu.exact} 
                    />)
            })
        }
        return result;
    }

    render()
    {
        return(
            <nav id="menu" className="fixed-top">
            <ul>
              {/* <li>
              <NavLink
                className="navlink"
                // id="home-tab"
                // data-toggle="tab1"
                activeClassName="item-active"
                exact
                to="/">
                Home
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="display-tab"
                // data-toggle="tab2"
				        activeClassName="item-active"
                to="/display">
                Display
              </NavLink>
              </li>
              <li><NavLink
                className="navlink"
                // id="todo-tab"
                // data-toggle="tab3"
                activeClassName="item-active"
                to="/todolist">
                List
              </NavLink></li>
              <li><NavLink
                className="navlink"
                // id="manage-tab"
                // data-toggle="tab4"
                activeClassName="item-active"
                to="/usermanager">
                Manage
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/table">
                Table
              </NavLink>
              </li>
            
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/chart">
                Chart
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/color">
                Color
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/covid19">
                Covid 19
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/worldcup">
                World Cup
              </NavLink>
              </li>
              <li>
              <NavLink
                className="navlink"
                // id="table-tab"
                // data-toggle="tab5"
                activeClassName="item-active"
                to="/blockchain">
                Blockchain
              </NavLink>
              </li>
              <li>
              <input 
                id="cell" 
                placeholder="Search..."
              />
              </li> */}
              {/* <MenuLink label="Home" to="/" activeWhenOnlyExact={true} />
              <MenuLink label="Display" to="/display" activeWhenOnlyExact={false} />
              <MenuLink label="List" to="/list" activeWhenOnlyExact={false} />  
              <MenuLink label="Manage" to="/manage" activeWhenOnlyExact={false} />  
              <MenuLink label="Table" to="/table" activeWhenOnlyExact={false} />  
              <MenuLink label="Chart" to="/chart" activeWhenOnlyExact={false} />  
              <MenuLink label="Color" to="/color" activeWhenOnlyExact={false} />  
              <MenuLink label="Covid 19" to="/covid19" activeWhenOnlyExact={false} />  
              <MenuLink label="World cup" to="/worldcup" activeWhenOnlyExact={false} />  
              <MenuLink label="Blockchain" to="/blockchain" activeWhenOnlyExact={false} /> */}
              {this.showMenus(menus)}
              <input 
                id="cell" 
                placeholder="Search..."
              />
            </ul>
          </nav>
        //   {/* <nav>
        //   <ul>
        //     <li>
        //       <NavLink
        //         className="navlink"
        //         // id="home-tab"
        //         // data-toggle="tab1"
        //         to="/">
        //         Home
        //       </NavLink>
        //     </li>
        //     <li>
        //       <NavLink
        //         className="navlink"
        //         // id="display-tab"
        //         // data-toggle="tab2"
        //         to="/display">
        //         Display
        //       </NavLink>
        //     </li>
        //     <li>
        //       <NavLink
        //         className="navlink"
        //         // id="todo-tab"
        //         // data-toggle="tab3"
        //         to="/todolist">
        //         To do
        //       </NavLink>
        //     </li>
        //     <li>
        //       <NavLink
        //         className="navlink"
        //         // id="manage-tab"
        //         // data-toggle="tab4"
        //         to="/usermanager">
        //         User Manager
        //       </NavLink>
        //     </li>
        //     <li>
        //       <NavLink
        //         className="navlink"
        //         // id="table-tab"
        //         // data-toggle="tab5"
        //         to="/table">
        //         Table
        //       </NavLink>
        //     </li>
        //   </ul>
        //   </nav> */}
        );
    }
}

export default Menu;