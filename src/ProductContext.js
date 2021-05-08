import React from 'react'
import { createProductStore } from './productStore'
import { useLocalStore } from 'mobx-react'

const ProductContext = React.createContext(null)

export const ProductsProvider = ({children}) => {
  const productStore = useLocalStore(createProductStore);

  return <ProductContext.Provider value={productStore}>
    {children}
  </ProductContext.Provider>
}

export const useProductStore = () => React.useContext(ProductContext)