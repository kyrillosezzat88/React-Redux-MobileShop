import pro1 from '../img/product-1.png'
import pro2 from '../img/product-2.png'
import pro3 from '../img/product-3.png'
import pro4 from '../img/product-4.png'
import pro5 from '../img/product-5.png'
import pro6 from '../img/product-6.png'
import pro7 from '../img/product-7.png'
import pro8 from '../img/product-8.png'
import { stat, exists } from 'fs';


const initState ={
    Products:[
        {id:1, name:'Google pexil-Black', price:50 , img:`${pro1}`,quantity:0,subtotal:50,madeBy:'Google', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:2, name:'Samsung s7', price:15,img:`${pro2}`,quantity:0,subtotal:15,madeBy:'Samsung' , info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:3, name:'Htc Desier', price:25,img:`${pro3}`,quantity:0,madeBy:'Htc', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:4, name:'Htc', price:110,img:`${pro4}`,quantity:0,madeBy:'Htc', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:5, name:'Htc', price:210,img:`${pro5}`,quantity:0,madeBy:'Samsung', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:6, name:'Iphone s5', price:220,img:`${pro6}`,quantity:0,madeBy:'Apple', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:7, name:'Iphone S6', price:310,img:`${pro7}`,quantity:0,madeBy:'Apple', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:8, name:'Iphone 4 ', price:110,img:`${pro8}`,quantity:0,madeBy:'Apple', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
    ],
    addproducts:[],
   
    total:0
}

const rootReducer =(state=initState , action)=>{
    if(action.type === 'ADD_TO_CART'){
        let cartList = state.Products.find(product=>{
            return action.id === product.id
        });
        let addedprod = [...state.addproducts , cartList];
      
        let exit_product = state.addproducts.find(item => action.id === item.id);
        if(exit_product){
            cartList.quantity += 1;
            return{
                ...state,
                total: state.total + cartList.price
            }
        } else{
            cartList.quantity = 1;
            return{
                ...state,
                addproducts:addedprod,
                total: state.total + cartList.price
            }
        }
    }
    if(action.type === 'ADD_QUANTITY'){
        let cartList = state.Products.find(product=>product.id === action.id);
        cartList.quantity += 1
        console.log(cartList)
    let newtotal = state.total + cartList.price
    console.log(newtotal)
        return{
            ...state,
            total:newtotal
        }
    }
    if(action.type === 'SUB_QUANTITY'){
        let carlist = state.Products.find(pro => pro.id === action.id)
        if(carlist.quantity === 1){
            let new_pro = state.addproducts.filter(pro => pro.id !== action.id)
            let newtotal = state.total - carlist.price
            return{
                ...state,
                addproducts:new_pro,
                total:newtotal
            }
        } else{
            carlist.quantity -= 1
            let newtotal = state.total - carlist.price
            return{
                ...state,
                total:newtotal
            }
        }
    }
    if(action.type === 'DELETE_PRODUCT'){
        let itemToRemove = state.addproducts.find(item=> action.id === item.id)
        let new_items = state.addproducts.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove);
        return{
            ...state,
            addproducts:new_items,
            total:newTotal
        }
    }
    return state;
}

export default rootReducer;