import HomeNavbar from "../../components/HomeNavbar/HomeNavbar"
import React  from "react";
import Category from "../../components/CategoriesArticle/categoriesArticle";
import Display from "../../components/Displayarticle/Displayarticle";

function Homepage(){
    return(
        <React.Fragment>
            <HomeNavbar />
            <Category />
            <Display selectedCategory={null}  />

        </React.Fragment>

    )
}
export default Homepage