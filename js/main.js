const app = Vue.createApp({
    data(){
        return{
            /*winkelwagen:0*/
            winkelwagen:[],
            gold:false,
        }
    },
    methods:{
        updateWinkelwagen(id){
            /*this.winkelwagen++*/
            this.winkelwagen.push(id)
        }
    }
})