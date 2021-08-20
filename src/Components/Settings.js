import React from 'react'
import "./Settings.css"

const Settings = ({top}) => {


    return (
        <div className="settingsCont" style={{ marginLeft: "50%" , marginTop: top }}>
          <div className="settingsIcons">
            <div className="settingsUser">
            <i className="far fa-user-circle" style={{
              color: "#707070",
              fontSize: "2em",
            }}></i>
            </div>
            <div className="settingsUser">
            <i className="fas fa-cog" style={{
              color: "#707070",
              fontSize: "2em",
            }}></i>
            </div>
            <div className="settingsBag">
            <i className="fas fa-shopping-bag" style={{
              color: "white",
              fontSize: "2em",
            }}></i>
            </div>
          </div>
        </div>
    )
}



export default Settings
