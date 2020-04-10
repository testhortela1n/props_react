import React, {Component} from 'react'

class DisplayNames extends Component {
    render(){
        console.log('Props', this.props) //return the profiles array
        return(
          //<p>{this.props.users[2].name}  {this.props.profiles[0].id} {this.props.movies[1].name} </p>
          <ul>
            {this.props.profiles.map( contact => (
             <li key={contact.id}>
              <p>{contact.id}</p>
            </li>
       ))}
  	   </ul>
		)
	}
}

export default DisplayNames