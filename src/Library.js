import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'


class Library extends Component{

  static defaultProps ={
    books:[
      {'title':'Tahoe tales','author':'Chet'}
    ]
  }
  state = {
    open:true,
    bookmark:true,
    hiring:false,
    data:[],
    loading:false
  }

  componentDidMount(){
    //console.log("The component is mounted");
    this.setState({loading:true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
          .then(data => data.json())
          .then(data =>this.setState({data,loading:false}))
  }
  componentDidUpdate(){
    console.log("The component is updated");
  }
  toggleOpenClose = () =>{
    this.setState(prevState =>({
      open:!prevState.open
    }))
  }
  render(){
    const { books } = this.props
  return(
    <div>
    <h1>The Library is {this.state.open?"open":"closed"}</h1>
    <h2>{this.state.hiring?<Hiring />:<NotHiring />}</h2>
    {this.state.loading
      ?"loading..."
      :<div>
        {this.state.data.map(product => {
          return(
            <div key = {product.id}>
              <h3>Library Product of the week</h3>
              <h4>{product.name}</h4>
              <img alt = {product.name} src ={product.image} height ={100}/>
            </div>
          )
        })}
      </div>}

    <button onClick = {this.toggleOpenClose}>Change State</button>
      <p>Welcome to Library</p>
      {books.map(
        (book,i) => <Book
                key = {i}
                title = {book.title}
                author ={book.author}
                pages = {book.pages}
                bookmark ={this.state.bookmark}
                />
      )}
    </div>
  )
}
}

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  bookmar: PropTypes.bool
}

export default Library
