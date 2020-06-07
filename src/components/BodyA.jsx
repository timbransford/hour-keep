import React from "react";

function BodyA() {
  return (
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-8 col-md-10 top-image">
            <img class="app-image img-responsive" alt="ship on dock" 
              src="https://res.cloudinary.com/hblxshr0j/image/upload/v1591473551/hour-keep/Ship_jvkrjc.jpg" />
            <div class="carousel-caption">
              <p><span class="app-name-text">Got Your Hours?</span><br/>
              is a new app built with<br/><span class="underline">dockworkers</span> in mind.
              </p>
              
            </div>
          </div>
        </div>
        <div class="row body-text">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-8 col-md-10">
              <p>You will be amazed at how simple it is to use.  Track your
                paycheck and benefit hours quickly and securely. 
               Be one of the first to find how <span class="app-name-text">Got Your Hours?</span> life.</p>
          </div>
        </div>
      </div>
      );
}

export default BodyA;
