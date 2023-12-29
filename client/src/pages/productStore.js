import ticket from "../components/img/ticket.jpg";
import greenShirt from "../components/img/green-shirt.jpg";
import whiteShirt from "../components/img/white-shirt.jpg";
import greenVShirt from "../components/img/green-shirt-v.jpg";
import whiteVShirt from "../components/img/white-shirt-v.jpg";
import greenHoodie from "../components/img/green-hoodie.jpg";
import whiteHoodie from "../components/img/white-hoodie.jpg";

const productsArray = [
     {
          id: "1",
          title: "Ticket",
          image: ticket,
          price: 50.00
     },
     {
          id: "2",
          title: "Shirt (Green)",
          image: greenShirt,
          price: 30.00
     },
     {
          id: "3",
          title: "Shirt (White)",
          image: whiteShirt,
          price: 30.00
     },
     {
          id: "3",
          title: "V-Neck Shirt (Green)",
          image: greenVShirt,
          price: 30.00
     },
     {
          id: "4",
          title: "V-Neck Shirt (White)",
          image: whiteVShirt,
          price: 30.00
     },
     {
          id: "5",
          title: "Hoodie (Green)",
          image: greenHoodie,
          price: 45.00
     },
     {
          id: "6",
          title: "Hoodie (White)",
          image: whiteHoodie,
          price: 45.00
     },
]

function getProductData(id) {
     let productData = productsArray.find(product => product.id === id)

     if (productData === undefined) {
          console.log("Product data does not exist for ID: " + id);
          return undefined;
     }

     return productData;
}

export { productsArray, getProductData };