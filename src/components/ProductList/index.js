import React, { useState } from 'react';
import {Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Popup from 'reactjs-popup'
import './index.css'
import { Table } from 'antd'; 
import ProductsDataContext from '../../context/ProductsContext'





const ProductList=()=>{
        const[productsList,setProductsList]=useState()
        const [edit, setEdit] = useState(null); 

        const columns = [ 
        { 
            title: 'Name', 
            dataIndex: 'Name', 
            key: 'Name', 
            sorter: (a, b) => a.Name > b.Name, 
            sortDirections: ["descend"], 
        }, 
        { 
            title: 'Category', 
            dataIndex: 'Category', 
            key: 'Category',
            sorter: (a, b) => a.Category > b.Category, 
            sortDirections: ["ascend","descend",], 
        }, 
          { 
            title: 'Description', 
            dataIndex: 'Description', 
            key: 'Description', 
        },
         { 
            title: 'Price', 
            dataIndex: 'Price', 
            key: 'Price', 
            sorter: (a, b) => a.Price> b.Price, 
            sortDirections: ["ascend","descend"], 
        },
        { 
            key: "action", 
            title: "Actions", 
            
            render: (record) => {
               
            return ( 
        <> 
            <div className="flex">
                 <Popup modal trigger={
                                <CiEdit 
                                style={{ color: "blue", height:"20px" ,width:"20px",margin:"8px"}} 
                
                 /> 
                   }
                >                
                {close =>{ 
                    
                    return(
                        <div className="popupEditContainer">
                            <form>
                                <div className="NameContainer">
                                    <label htmlFor='categories' className="label">Category</label>
                                    <select id="categories" className="input" name="Category" value={edit?.Category} onChange={(e) => { setEdit((pre) => { return { ...pre, Category: e.target.value }; }); }}  >
                                        <option selected="selected">Select</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Books">Books</option>
                                        <option value="Home & Kitchen">Home & Kitchen</option>
                                        <option value="Beauty">Beauty</option>
                                    </select>
                                </div>
                                <div className="NameContainer">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input type="text" id="name" name="Name" className="input" value={edit?.Name} onChange={(e) => { setEdit((pre) => { return { ...pre, Name: e.target.value }; }); }} /> 
                    
                                </div>
                                <div className="descriptionContainer">
                                    <label htmlFor='description' className="label">Description</label>
                                    <input type="textarea" rows="10" columns="30" name="Description" id="description" className="input" value={edit?.Description} onChange={(e) => { setEdit((pre) => { return { ...pre, Description: e.target.value }; }); }}/>
                                </div>
                                <div className="priceContainer">
                                    <label htmlFor="price" className="label">Price</label>
                                    <input type="text" id="price" className="input" name="Price" value={edit?.Price} onChange={(e) => { setEdit((pre) => { return { ...pre, Price: e.target.value }; }); }}/> 
                                </div>

                            </form>


                                <div className="buttonContainer">
                                    <button type="button" className="cancel-button" onClick={() => close()}>Cancel</button>
                                    <button type="button" className="save-button"  onClick={() => {Edit(record);close()}} >Save</button>
                                </div>
                        </div>
                    )}}
                </Popup>  
            
               
            <Popup modal trigger={
                        <RiDeleteBin5Line 
                          style={{ color: "red" ,height:"20px" ,width:"20px",margin:"8px"}} 
                        /> 
                       }
            >                
                {close => (
                        <div className="popup-container">
                                <p>Are you sure you want to delete this?</p>
                        <div className="buttonContainer">
                            <button type="button" className="trigger-button" onClick={() => close()}>Close</button>
                            <button type="button" className="delete-button"  onClick={() => {Delete(record) ;close()}} >Delete</button>
                        </div>
                    </div>
               )}
               </Popup> 

            </div> 
        </> 
        ); 
        }, 
    }, 
    ]
       const Edit=(record)=>{
         setProductsList((prevState => {
            return productsList.map(eachItem => {
        if (eachItem.id === record.id) {
         return edit; 
        } else { 
            return eachItem; 
        } 
      })
       }))
        setEdit(null)
       }
      
       const Delete = (record) => { 
            setProductsList((prevState)=>{return productsList.filter((eachItem) => record.id !== eachItem.id)
            })
        }

        
    
       
        return (
            <ProductsDataContext.Consumer>
    {value => {
       const {productsData} = value
       
       setProductsList(productsData)
       return(
        
            <div>
                <h1 className="mainHeading"><span className="firstName">Endimension</span> <span className="lastName">Assessment</span></h1>
                <Table dataSource={productsList} columns={columns} pagination={{ pageSize: 10, total: 50, showSizeChanger: false }} /> 
                <Link to="/addProduct" className="linkProduct">
                <button type="button" className="createProduct">Create New Product</button>
                </Link>
            </div>
        )
        
     }}

    </ProductsDataContext.Consumer>
    )
       }

export default ProductList