app.component('review-form',{
    template:`
       <form class="review-form" @submit.prevent="onSubmit">
            <h3>Laat een review achter</h3>
            <label class="form-label">Naam:</label>
            <input class="form-control" id="name" type="text" v-model="name">
              <label class="form-label">Review:</label>
             <textarea class="form-control" name="review" id="review" v-model="review"></textarea>
                <label class="form-label">Rating:</label>
                <select class="form-select" name="rating" id="rating" v-model.number="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              
                </select>
            <button class="btn btn-success" type="submit" value="submit">Submit</button>
        </form>     
    `,
    data(){
        return{
            name:'',
            review:'',
            rating:null
        }
    },
    methods:{
        onSubmit(){
            console.log("oki")
            let productReview={
                name: this.name,
                review:this.review,
                rating:this.rating,
            }
            this.$emit('toevoegenreview',productReview)
            this.name=''
            this.review=''
            this.rating=null
        }
    }


})