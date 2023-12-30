import ticket from "../components/img/ticket.jpg";
import greenShirt from "../components/img/green-shirt.jpg";
import whiteShirt from "../components/img/white-shirt.jpg";
import greenVShirt from "../components/img/green-shirt-v.jpg";
import whiteVShirt from "../components/img/white-shirt-v.jpg";
import greenHoodie from "../components/img/green-hoodie.jpg";
import whiteHoodie from "../components/img/white-hoodie.jpg";

// Conference Hoodie (White) Key: price_1OS3M5BvXyDWVtmIhdSMDPOO
// Conference Hoodie (Green) Key: price_1OS3LmBvXyDWVtmIrhn21QO0

// Conference V-Neck Shirt (White) Key: price_1OS3LKBvXyDWVtmIUvplYWK9
// Conference V-Neck Shirt (Green) Key: price_1OS3KvBvXyDWVtmIGe6dU8Bm

// Conference Shirt (White) Key: price_1OS3KfBvXyDWVtmI1TyKMtSC
// Conference Shirt (Green) Key: price_1OS3KOBvXyDWVtmIY5xHf4xZ

// Ticket Key: price_1OSpe8BvXyDWVtmI6n85uySt

const productsArray = [
     {
          id: "price_1OSpe8BvXyDWVtmI6n85uySt",
          title: "Ticket",
          image: ticket,
          price: 50.00
     },
     {
          id: "price_1OS3KOBvXyDWVtmIY5xHf4xZ",
          title: "Shirt (Green)",
          image: greenShirt,
          price: 30.00
     },
     {
          id: "price_1OS3KfBvXyDWVtmI1TyKMtSC",
          title: "Shirt (White)",
          image: whiteShirt,
          price: 30.00
     },
     {
          id: "price_1OS3KvBvXyDWVtmIGe6dU8Bm",
          title: "V-Neck Shirt (Green)",
          image: greenVShirt,
          price: 30.00
     },
     {
          id: "price_1OS3LKBvXyDWVtmIUvplYWK9",
          title: "V-Neck Shirt (White)",
          image: whiteVShirt,
          price: 30.00
     },
     {
          id: "price_1OS3LmBvXyDWVtmIrhn21QO0",
          title: "Hoodie (Green)",
          image: greenHoodie,
          price: 45.00
     },
     {
          id: "price_1OS3M5BvXyDWVtmIhdSMDPOO",
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