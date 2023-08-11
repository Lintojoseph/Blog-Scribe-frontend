import React  from "react";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import Displayarticle from '../../components/Displayarticle/Displayarticle'

function Displaypage(){
    return(
        <React.Fragment>
            <HomeNavbar />
            <Displayarticle />
        </React.Fragment>
    )
}

export default Displaypage