app.component('review-lijst',{
    props:{
        reviews:{
            type: Array,
            required:true
        }
    },
    template:`
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                {{ review.name }} gaf {{ review.rating }} sterren <br>
                "{{review.review}}"
            </li>
        </ul>
    </div>
    `
})