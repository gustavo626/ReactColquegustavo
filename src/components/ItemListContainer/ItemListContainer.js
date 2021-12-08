import React, { useContext,useEffect, useState } from 'react'
import { useParams  } from 'react-router'
import { pedirDatos } from '../..helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../Firebase/Config'

export const  ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])


    const { catId } = useParams () 
    

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where('category', '==', catId) )

        getDocs(q)
            .then((collection) =>{
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(items)
                setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    return (
        <>
        {
            loading
            ? <Loader/>
            : <ItemList productos={productos}/>
        }
        </>
    )
}

