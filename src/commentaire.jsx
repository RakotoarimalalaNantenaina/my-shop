import React, { useState } from 'react'



const Commentaire = props => {

	const Data = []

	const [use, setUse] = useState(Data)

  const commentajout = user => {
		user.id = use.length + 1
		setUse([ ...use, user ])
  }


	const initialFormState = { id: null, commentaire: ''}
	const [ user, setUsers ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUsers({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
                if (!user.commentaire ) return
					commentajout(user)
					setUsers(initialFormState)	
			}}
		>	<center className="tableau">

          <table>
            <tbody>
              <tr>
                <td><input type="text" name="commentaire" value={user.commentaire} onChange={handleInputChange} /></td>
              </tr><br/>
            </tbody>
            </table>
            <button className="btn btn-primary btn-lg">Comment</button>

						{use.length > 0 ? (
        use.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.commentaire}</td>
          </tr>
					
        ))
      ) : (
        <tr>
          <td>aucune commentaire</td>
        </tr>
      )}
					
    </center>

		</form>
	)
}
export default Commentaire;