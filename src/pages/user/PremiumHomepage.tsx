import Premiumhome from '../../components/Premium/premiumhome';
import UserHeader from '../../components/UserHeader/UserHeader'
import Footer from "../../components/Userfooter/Userfooter";
import React  from "react";

function PremiumHomepage(){
    return(
        <React.Fragment>
            <UserHeader />
            <Premiumhome />
            <Footer />


        </React.Fragment>
    )
}

export default PremiumHomepage