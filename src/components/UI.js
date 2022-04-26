import React, { Component } from "react"
import Cell from "./Cell"
import img from "../logo.png"

class UI extends Component{
    render() {
        return (
            <div className="footer">
                <img className="logo" src={img} alt="logo img"></img>
                <div className="ui">
                    <Cell text="1"></Cell>
                    <Cell text="2"></Cell>
                    <Cell text="3"></Cell>
                    <Cell text="4"></Cell>
                    <Cell text="5"></Cell>
                    <Cell text="6"></Cell>

                </div>

                <button className="button">INSTALL</button>
                
            </div>

        )
    }
}
export default UI;
