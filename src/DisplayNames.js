import React, {Component} from 'react'

class DisplayNames extends Component{
  render(){
    const profiles = this.props.profiles
    const users = this.props.users
    const movies = this.props.movies
  return(
  	/*
      Without this '(', JS will automatically put a ';' after the `return`
      keyword.
      */
    
        <ul>
          <h2>Favorite Movies</h2>

          {/*
          For each object in the profiles array, make a list of JSX elements.
          The map function returns a new array, which will
          only have list elements in it. React will automatically know how to
          render an array of JSX objects.
          */}
          {profiles.map(profile => {
            const userName = users[profile.userID].name;
            const favMovieName = movies[profile.favoriteMovieID].name;

            return (
              /*
              You need to include the `key` property every time you create list
              elements in React. The key property is necessary because it enables
              React to perform reconciliation
              (https://reactjs.org/docs/reconciliation.html)
              */
              <li key={profile.id}>
                {/* If the syntax below looks unfamiliar, please take the following
              course:
              https://www.udacity.com/course/es6-javascript-improved--ud356
                */}
                <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
              </li>
            );
          })}
        </ul>
  )
  }
}

export default DisplayNames