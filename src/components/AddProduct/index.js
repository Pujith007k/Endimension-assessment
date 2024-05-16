import {Component} from 'react'
import {Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import ProductsDataContext from '../../context/ProductsContext'

import './index.css'



class AddProduct extends Component{
    state={category:'',name:'',description:'',price:''}

  

    onChangeCategory=event=>{
        this.setState({category:event.target.value})
    }

    onChangeName=event=>{
        this.setState({name:event.target.value})
    }

    onChangeDescription=event=>{
        this.setState({description:event.target.value})
    }

    onChangePrice=event=>{
        this.setState({price:event.target.value})
    }
   

    render(){
        const {category,name,description,price}=this.state
        return(
        <ProductsDataContext.Consumer>
    {value => {
       const {productsData,editProductsData} = value
       
       const submitForm=event=>{
        event.preventDefault()
        const {category,name,description,price}=this.state
        const newProduct={
             id: uuidv4(),
            Category:category,
            Name:name,
            Description:description,
            Price:price,
        }
       editProductsData([...productsData,newProduct])
       console.log(editProductsData)

    }



       return(
            <div className="mainContainer">
            <form className="addProductContainer" onSubmit={submitForm}>
                <h1>Add Product</h1>
                <div className="inputContainer">
                <label htmlFor='categories' className="label">Category</label>
                <select id="categories" className="input" onChange={this.onChangeCategory} value={category}>
                    <option selected="selected">Select</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Books">Books</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Beauty">Beauty</option>
                </select>
                </div>
                <div className="inputContainer">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" className="input" onChange={this.onChangeName} value={name}/> 
                </div>
                <div className="inputContainer">
                    <label htmlFor='description' className="label">Description</label>
                    <textarea rows="10" columns="30" id="description" className="input" onChange={this.onChangeDescription} value={description}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="price" className="label">Price</label>
                    <input type="text" id="price" className="input" onChange={this.onChangePrice} value={price}/> 
                </div>
                <Link to="/" className="link">
            <button type="submit" className="addProductButton">Add Product</button>
            </Link>
            </form>
        </div>
        )
    }}
        </ProductsDataContext.Consumer>
        )

    }
}

export default AddProduct
