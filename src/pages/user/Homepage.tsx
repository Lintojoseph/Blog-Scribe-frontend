import HomeNavbar from "../../components/HomeNavbar/HomeNavbar"
import React  from "react";
import Category from "../../components/CategoriesArticle/categoriesArticle";
import Display from "../../components/Displayarticle/Displayarticle";

function Homepage(){
    const isPremiumUser = true;
    return(
        <React.Fragment>
            <HomeNavbar />
            <Category />
            <Display selectedCategory={null} isPremiumUser={isPremiumUser} />

        </React.Fragment>

    )
}
export default Homepage