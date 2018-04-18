var app = new Vue ({
 el: '#app',
 data: {
  product: "Socks",
  image: "img/socks1.png",
  altText: "A pair of socks",
  inStock: false,
  inventory: 89,
  onSale: "On Sale!", //through v-show
  details: [ "80% cotton", "20% polyester", "Gender-neutral" ],
  variants: [
   {
    variantId: 2234,
    variantColor: "green",
    variantImage: "img/sock1.jpg"
   },
   {
    variantId: 2235,
    variantColor: "blue",
    variantImage: "img/sock2.jpg"
   }
  ],
  sizes: ["s", "m", "l", "xl", "xxl", "xxx"],
  cart: 0
 },
 methods: {
  addToCart() {
   this.cart += 1
  },
  updateProduct(variantImage) {
   this.image = variantImage
  },
  reUpdateProduct() {
   this.image = "img/socks1.png"
  }
 }
});