import greenShirt from "../components/img/green-shirt.jpg";

const productsArray = [
     {
          id: "1",
          title: "Ticket",
          price: 50.00
     },
     {
          id: "2",
          title: "Green Shirt",
          image: greenShirt,
          price: 30.00
     },
     {
          id: "3",
          title: "White Shirt",
          price: 30.00
     },
     {
          id: "3",
          title: "Green V Shirt",
          price: 30.00
     },
     {
          id: "4",
          title: "White V Shirt",
          price: 30.00
     },
     {
          id: "5",
          title: "Green Hoodie",
          price: 45.00
     },
     {
          id: "6",
          title: "White Hoodie",
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