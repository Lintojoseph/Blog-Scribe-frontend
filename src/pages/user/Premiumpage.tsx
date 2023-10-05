import Premium from "../../components/Premium/Premium"
import UserHeader from '../../components/UserHeader/UserHeader'
import Footer from "../../components/Userfooter/Userfooter";
import React  from "react";

function Premiumpage(){
    return(
        <React.Fragment>
            <UserHeader />
            <Premium />
            <Footer />


        </React.Fragment>
    )
}

export default Premiumpage