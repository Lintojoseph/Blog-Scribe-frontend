import React  from "react";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import MainArticle from '../../components/MainArticle/MainArticle'
import SinglePost from "../../components/CommentSection/comments";

function Displaypage(){
    return(
        <React.Fragment>
            <HomeNavbar />
            <MainArticle />
            
        </React.Fragment>
    )
}

export default Displaypage