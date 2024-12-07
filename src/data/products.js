// data/products.js
let products = [
    {
      id: 1,
      name: "Ciotola Acciaio per Sapone da Barba",
      price: "31.00€",
      description: "Ciotola in acciaio inox perfetta per un'esperienza di rasatura di qualità.",
      image: "/product.png",
      stock: 10,
    },
    {
      id: 2,
      name: "Rasoio Dritto",
      price: "12.00€",
      description: "Rasoio professionale per una rasatura precisa e confortevole.",
      image: "/product.png",
      stock: 15,
    },
    {
      id: 3,
      name: "Forbici e Pettine",
      price: "13.00€",
      description: "Set forbici e pettine ideale per rifinire e modellare i capelli.",
      image: "/product.png",
      stock: 20,
    },
  ];
  
  export const getProducts = () => products;
  
  export const addProduct = (newProduct) => {
    const productWithId = { id: products.length + 1, ...newProduct };
    products = [...products, productWithId];
  };
  
  export const updateProduct = (id, updatedFields) => {
    products = products.map((product) =>
      product.id === id ? { ...product, ...updatedFields } : product
    );
  };
  