import React  from "react";
import UserHeader from '../../components/UserHeader/UserHeader'
import Banner from '../../components/Banner/Banner'
import Category from "../../components/CategoriesArticle/categoriesArticle";
import Display from "../../components/Displayarticle/Displayarticle";
function Landingpage(){
    const isPremiumUser = true;
    return(
        <React.Fragment>
            <UserHeader />
            <Banner />
            <Category />
            <Display selectedCategory={null} isPremiumUser={isPremiumUser}  />

        </React.Fragment>
    )
}
export default Landingpage