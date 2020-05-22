import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let booklist = [
  {"title":"The sun rises","author":"Ernest Hemingway","pages":200},
  {"title":"Shakespear","author":"William","pages":1000},
  {"title":"The sun rises","author":"Ernest Hemingway","pages":200}
]

// let booklist = {}

// class FavouriteColorForm extends Component{
//   state:{value:''}
//
//   newColor = e => {
//     this.setState({value : e.target.value})
//   }
//
//   submit = e => {
//     console.log(`New Color : ${this.state.value}`)
//     e.preventDefault()
//   }
//
//   render(){
//     return(
//       <form onSubmit ={this.submit} >
//         <label>Favourite Color:
//           <input type = "color" onChange ={this.newColor} />
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
//
// }



render(
  // <Library />,
  <Library books = {booklist}/>,
  // <FavouriteColorForm />,
  document.getElementById('root')
)
