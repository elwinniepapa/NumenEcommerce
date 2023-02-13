// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, getDoc, doc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7VvRzJypreMiyW_Dct1Iqzkz2tRkOif0",
    authDomain: "numenecommerce-a72e2.firebaseapp.com",
    projectId: "numenecommerce-a72e2",
    storageBucket: "numenecommerce-a72e2.appspot.com",
    messagingSenderId: "831805861306",
    appId: "1:831805861306:web:e68e28bf0181a5639e8183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar Firestore

// CRUD
// CREATE READ UPDATE DELETE
// Operaciones basicas para hacer en una BD

export const addBDD = async () => { //async le decis que es consulta asincronica
    const promise = await fetch("./json/products.json") //await que la linea de la derecha es asincronica    
    const products = await promise.json() //es asincronica, no se cuanto va a llevar realizarla
    products.forEach(async (prod) => {
        await addDoc(collection(db, 'productos'), {            
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img,
            alt: prod.alt,
            cuotas: prod.cuotas,
            envio: prod.envio
        })
    })
    console.log(products)
}

export const getProducts = async () => {
    const items = await getDocs(collection(db, 'productos'))
    const products = items.docs.map( prod => {
        return { ...prod.data(), id: prod.id } //me permite transformar el objeto en array, con el operador pre hago una copia
    })
    return products
}

export const getProduct = async (id) => {
    const item = await getDoc(doc(db, 'productos', id))
    const product = { ...item.data(), id: item.id }
    return product
}
