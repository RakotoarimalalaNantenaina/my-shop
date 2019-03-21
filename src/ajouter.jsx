import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, produit: '', prix: '', description: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.produit || !user.prix || !user.description) return
        
        if(isNaN(user.prix)){
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = 'Entrer un nombre'
			}else{
					var yes = document.getElementById('erreur')
					yes.innerHTML = "";
					props.addUser(user)
          setUser(initialFormState)	
          
          
			}
			}}
		>		<center className="tableau">

          <table>
            <tbody>
              <tr>
                <td><label id="nom">Produit &nbsp;&nbsp;</label></td>
                <td><input type="text" name="produit" value={user.produit} onChange={handleInputChange} /></td>
              </tr><br/>
              <tr>
                <td><label id="nom">Prix</label></td>
                <td><input id="inputprix" type="text" name="prix" value={user.prix} onChange={handleInputChange} />
                <p id="erreur"></p>
                </td>
              </tr>
              <tr>
                <td><label id="nom">Description</label></td>
                <td><textarea  name="description" value={user.description} onChange={handleInputChange} /></td>
              </tr>
              <tr>
                <td></td>
                <td><label id="fichier" >File<input type="file" name="file"/></label></td>
              </tr>
            </tbody>
            </table>
            <button id="boutton" className="btn btn-primary btn-lg">Ajouter</button>
    </center>
		</form>

	)
}	
export default AddUserForm;