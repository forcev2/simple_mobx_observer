export function createProductStore() {
  return {
    products: [],
    addProduct(product) {
      //console.log(product, this.notes)
      this.products.push(product)
    },
    removeProduct(id) {
      this.products = this.products.filter(product => product.id !== id)
    }
  }
}