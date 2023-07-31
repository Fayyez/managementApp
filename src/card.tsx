import './card.css'

export interface propertyProps {
    _id:number
    name: string //is the title of property card
    city:string
    assigned: "residential"|"commmercial"
    address: string
    dimensions?: number[]
    isRented?:boolean
    ownerId?:any
    tenantId?:any
    imagePath?:string
  }
  
  const allProperties: propertyProps[]=[];
  allProperties.push({_id:1,name:'flat',assigned:"commmercial", city:'lahore',address:'123 street'})
  allProperties.push({_id:2,name:'house',assigned:"commmercial", city:'lahore',address:'123'})
  allProperties.push({_id:3,name:'annexy',assigned:"commmercial", city:'lahore',address:'123'})
  
function Listing () {
    return (
        <>
  x          <h2>Property:</h2>
            {
                
                allProperties.map((card: any) => {

                    return (
                        <>    
                            <div className='property-card' key={card} >
                            <div className="row g-1">
                                <div className="col-md-4">
                                    <img src="src/assets/sampleImg.jpeg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{card.name}</h4>
                                    <h5 className="card-subtitle mb-2 text-muted">{card.city}</h5>
                                    <p className="card-type">Type: <small className="text-muted">{card.assigned}</small></p>
                                    <p className="card-address">Address: <small className="text-muted">{card.address}</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </>
                    )
                })  
            }
            
        </>
    )
}

export default Listing

// <h3>ID: {individualData._id}</h3>
//                             <h4>Title: {individualData.title}</h4>
//                             <h4>Assigned: {individualData.assigned}</h4>
//                             <button>Update</button>
//                             <button>Delete</button>