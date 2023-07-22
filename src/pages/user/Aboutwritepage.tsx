import React  from "react";
import UserHeader from '../../components/UserHeader/UserHeader'
import Aboutwrite from '../../components/Aboutwrite/Aboutwrite'
import Aboutwriteone from '../../components/Aboutwrite/Aboutwriteone'
import Footer from "../../components/Userfooter/Userfooter";

function aboutwritepage(){
    return(
        <React.Fragment>
            <UserHeader />
            <Aboutwrite />
            <Aboutwriteone />
            <Footer />


        </React.Fragment>

    )

}
export default aboutwritepage