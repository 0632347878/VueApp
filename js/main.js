var app = new Vue ({
 el: '#app',
 data: {
  product: "Socks",
  brand: 'Vue Mastery',
  // image: "img/socks1.png", // changed on computed
  altText: "A pair of socks",
  // inStock: true,  // changed on computed
  inventory: Infinity,
  onSale: "On Sale!", //through v-show
  details: [ "80% cotton", "20% polyester", "Gender-neutral" ],
  variants: [
   {
    variantId: 2233,
    variantColor: "#51d524",
    variantImage: "img/socks1.png",
    variantQuantity: 10
   },
   {
    variantId: 2234,
    variantColor: "green",
    variantImage: "img/sock1.jpg",
    variantQuantity: 0
   },
   {
    variantId: 2235,
    variantColor: "blue",
    variantImage: "img/sock2.jpg",
    variantQuantity: 10
   }
  ],
  sizes: ["s", "m", "l", "xl", "xxl", "xxx"],
  cart: 0,
  h3Color: '#000',
  styleObject: {
   color: 'red',
   fontSize: '16px'
  },
  activeClass: true,
  errorClass: false,
  isActive: true,
  activeClassName: 'active',
  selectedVariant: 0
 },
 methods: {
  addToCart() {
   this.cart += 1
  },
  removeFromCart() {
   if(this.cart <= 0) {
    this.cart = 0;
   }
   else {
    this.cart -= 1
   }
  },
  updateProduct(index) {
   this.selectedVariant = index;
  },
  // returnImage() {
  //   const imageRefer = document.getElementById('product-image');
  //   imageRefer.setAttribute("src", this.variants[0].variantImage);
  // }
  animatedBtn(event) {
   let eventAlias = event.target ;
   eventAlias.className += " btn--animate";
   setTimeout(function(){
    eventAlias.className = eventAlias.className.replace("btn--animate", ""); }, 1000);
  }
 },
 computed: {
  title() {
   return this.brand + ' ' + this.product
  },
  image() {
   return this.variants[this.selectedVariant].variantImage
  },
  inStock() {
   return this.variants[this.selectedVariant].variantQuantity
  }
 }
});
Vue.config.devtools = true;