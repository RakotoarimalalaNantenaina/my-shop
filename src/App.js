import React, { useState } from 'react'
import Carte from './tables/UserTable'
import './App.css';

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
	}

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <AddUserForm addUser={addUser} />
        </div><br></br>
        <div className="flex-large">
          <Carte users={users} />
        </div>
      </div>
    </div>
  )
}

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
		>		<center>

          <table className="tableau">
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
                <td><input id="image" type="file"/></td>
              </tr><br/>
              <tr>
                <td></td>
                <td><button id="boutton" className="btn btn-primary btn-lg">Ajouter</button></td>
              </tr>
            </tbody>
            </table>
    </center>
		</form>

	)
}	

export default App