import React from 'react' 

const Commentaireajout = props => (
    
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Commentaire</th>
      </tr>
    </thead>
    <tbody>
      {props.use.length > 0 ? (
        props.use.map(user => (
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
    </tbody>
  </table>
)
export default Commentaireajout;