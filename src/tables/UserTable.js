import React from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Img from 'react-image'
import 'bootstrap/dist/css/bootstrap.min.css';


const Carte = props => (

	
	<section className="my-5">
			<div className="row view-group" id="colonne"> 
					{props.users.length > 0 ? (
		
					props.users.map(user => (
			
			<div key={user.id} class="item col-xs-4 col-lg-4">
  
  		<div className="card card-cascade narrower card-ecommerce">

			<div class="view view-cascade overlay">
          <Img src="images/im.jpg" class="card-img-top" alt="simple photo"/>
        </div>
	
			<div className="card-body card-body-cascade">

					<h6>Nom Produit  &nbsp;<span id="nomproduit">{user.produit}</span></h6>
	 
	  			<p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; {user.description} </p>
					<span className="spanprix">
		  			<strong>Prix: </strong> {user.prix}
					</span><br/>

					<span class="float-right">
              <a data-toggle="tooltip" data-placement="top" title="J'adore">
                <i class="fas fa-shopping-cart grey-text ml-3"> <Img id="icone" src="images/coeur.jpg"/></i>
              </a>
							<a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                <i class="fas fa-shopping-cart grey-text ml-3"></i>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Commentaire">
                <i class="commentaire">Comments</i>
              </a>
            </span>
	  	<div className="card-footer px-1">
			
	  </div>
	</div>
	
  </div>
 </div>
	
		))
	) : (
		<div></div>
	)}
</div>	
	</section>
)

export default Carte