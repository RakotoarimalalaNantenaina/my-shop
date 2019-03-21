import React, { useState } from 'react'
import Carte from './tables/UserTable'//fichier qui affiche les listes qui vont ajouter 
import Commentaire from './commentaire'
import AddUserForm from './ajouter'//fichier qui ajoute le formulaire d'ajout de produit
import './App.css';

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)


  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
  }
  const Data = []

  const [use, setUse] = useState(Data)

  const commentajout = user => {
		user.id = use.length + 1
		setUse([ ...use, user ])
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
        <Commentaire commentajout={commentajout}/>
      </div>
    </div>
  )
}

export default App