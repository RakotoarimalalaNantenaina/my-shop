import React from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { confirmAlert } from 'react-confirm-alert'; 
import Img from 'react-image'
import Coeur from './coeur'
import Commentaire from './../commentaire'
import 'bootstrap/dist/css/bootstrap.min.css';


const Carte = props => (

	<section className="my-5">
	
			<div className="row view-group" id="colonne"> 
					{props.users.length > 0 ? (
		
					props.users.map(user => (
			
			<div class="item col-xs-4 col-lg-4">
  
  		<div className="card card-cascade narrower card-ecommerce">

			<div class="view view-cascade overlay">
          <Img src="images/im.jpg" class="card-img-top" alt="simple photo"/>
        </div>
	
			<div className="card-body card-body-cascade">

					<h6 id="description">Nom Produit  &nbsp;<span id="nomproduit">{user.produit}</span></h6>
	 
	  			<p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point">{user.description}</div> </p>
					<span className="spanprix">
		  			<strong>Prix: </strong> {user.prix}
					</span><br/>

					<span class="float-right">
              
					<span class="float-right">
              <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                <i class="fas fa-shopping-cart grey-text ml-3"></i>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="J'adore">
                <i class="fas fa-share-alt grey-text ml-3"><Coeur/></i>
              </a>
							<a data-toggle="tooltip" data-placement="top" title="J'adore">
                <i class="fas fa-share-alt grey-text ml-3"></i>
              </a>
								<span id="commentaire" title="commentaire" onClick={() => {
												confirmAlert({
													customUI: ({ onClose }) => {
														return (
															<div>
																<div className="popups">
																	<button id="btnpopups" title="fermer" className="btn btn-danger" onClick={onClose}>X</button>
																	<Commentaire commentajout={props.commentajout}/>
																</div>
															
															</div>
														);
													}
												});
											
										}}>

								Comment
								</span>
            </span>
						
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