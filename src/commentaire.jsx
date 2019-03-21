import React, { useState } from 'react'
import './App.css';


const Commentaire = () => {

  const Data = []

  const [use, setUse] = useState(Data)

  const commentajout = user => {
		user.id = use.length + 1
		setUse([ ...use, user ])
  }

	const initialFormState = { id: null, commentaire: ''}
	const [ usere, setUserse ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUserse({ ...usere, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
                if (!usere.commentaire ) return
					commentajout(usere)
					setUserse(initialFormState)	
			}}
		>	

          <table id="tablecommentaire">
            <tbody>
              <tr>
                <td><input type="text" name="commentaire" value={usere.commentaire} onChange={handleInputChange} />
                &nbsp;<button className="btn btn-primary btn-lg">Comment</button>
                </td>
              </tr><br/>
            </tbody>
            </table>
           
              <table><hr id="ligne"/>
                {use.length > 0 ? (
                    use.map(usere => (
                      <tbody>
                    <tr key={usere.id}>
                    <td id="tdcomment"><div id="word">{usere.commentaire}</div></td>
                  </tr><hr id="ligne"/>
                    </tbody>  
              ))
            ) : (
              <tr>
                <td></td>
              </tr>
            )}
                </table>
     

		</form>
	)
}
export default Commentaire;