import 'bootstrap'
import React from 'react'

export interface propertyProps {  //template for property object
  _id: number;
  name: string; //is the title of property card
  city: string;
  assigned: "residential" | "commmercial";
  address: string;
  dimensions?: number[];
  isRented?: boolean;
  ownerId?: any;
  tenantId?: any;
  imagePath?: string;
}
// --------------------------------------------------------
const allProperties: propertyProps[] = []; //temp array to store dummy property data
const dummyImg = "./assets/sampleImg.PNG";
//dummy data for testing =>
allProperties.push({
  _id: 1,
  name: "flat",
  assigned: "commmercial",
  city: "lahore",
  address: "123 street",
  imagePath: "./assets/sampleImg.PNG",
});
allProperties.push({
  _id: 2,
  name: "house",
  assigned: "commmercial",
  city: "lahore",
  address: "123",
  imagePath: dummyImg,
});
allProperties.push({
  _id: 3,
  name: "annexy",
  assigned: "commmercial",
  city: "lahore",
  address: "123",
  imagePath: dummyImg,
});
// ------------------------------------------------------
function Listing() {
  // a propertyProps array is to added as a parameter
  //
  //I tried to do it myself but it was throwing an error msg:
  //  "allProperties: propertyProps[] cannot be assigned to { props: propertyProps[] & IntrinsicAttributes }" (a ts error)
  //
  return (
    <>
       <h2>Property:</h2>
      {allProperties.map((card: propertyProps) => {
        //create a card for each item of allProperties[]

        return (
          //*************single card component**************
          <>
            <div className="property-card" key={card._id} >
              <div className="row g-1">
              <i className="fa fa-search"></i>
              <i className="fa fa-search"></i>
                <div className="col-md-4">
                <i className="bi bi-search"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{card.name}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">
                      {card.city}
                    </h5>
                    <p className="card-type">
                      Type:{" "}
                      <small className="text-muted">  <i className="bi bi-search"></i>{card.assigned}</small>
                    </p>
                    <p className="card-address">
                    <i className="bi bi-search"></i>
                      Address:{" "}
                      <small className="text-muted">{card.address}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );//***********************************************/
      })}
    </>
  );
}

export default Listing;
