import React from "react";




const Header = () => {
    return (
        <div>
            <div className="header-1">
              <a href=" " className="logo"><i class="fas fa-gift"></i>Delivery</a>
      
            <form action="" className="search-box-container">
               <input type="search" id="search-box" placeholder="search here"></input>
               <label for="search-box" class="fas fa-search"></label>
            </form>
           </div>
        </div>
    )
}

export default Header