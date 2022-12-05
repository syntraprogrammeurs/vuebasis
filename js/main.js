const app = Vue.createApp({
    data(){
        return {
            product: 'Gsm oplader',
            merk: 'White Label',
            prijs : 50,
            beschrijving:'Gsm oplader draadloos',
            /*image : './images/img.png',*/
            /*inVoorraad: 2,*/
            productDetails:["universeel","smartphone", "1 aansluiting", "inclusief kabel", "draadloos"],
            soorten:[
                {
                    soortId:1,
                    kleur:"red",
                    image:'./images/img2.png',
                    aantal:20,
                },
                {
                    soortId:2,
                    kleur:"green",
                    image:'./images/img.png',
                    aantal:0
                }
            ],
            winkelwagen:0,
            selectedProduct:0,
        }
    },
    methods:{
        addToCart(){
            //this.winkelwagen+=1
            this.winkelwagen++
        },
        updateImageandStock(index){
            this.selectedProduct = index-1
        }
    },
    computed:{
        title(){
            return this.product + ' ' + this.merk
        },
        image(){
            return this.soorten[this.selectedProduct].image;
        },
        inVoorraad(){
          return this.soorten[this.selectedProduct].aantal;
        }

    }
})