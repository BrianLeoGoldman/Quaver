import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"


export const useOrders = (email) => {

    const [ orders, setOrders ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
      setLoading(true)
      // 1. Set up a reference (sync)
      const ordersRef = collection(db, "orders")
      const q = query(ordersRef, where("client.email", "==", email))
      // 2. Consume the reference (async)
      getDocs(q)
          .then((res) => {
              const docs = res.docs.map((doc) => {
                  return {
                      ...doc.data(),
                      id: doc.id
                  }
              })
              setOrders(docs)
          })
          .catch((err) => {
              console.log(err)
          })
          .finally(() => {
              setLoading(false)
          })
    }, [email])

    return( { loading, orders} )
    
}