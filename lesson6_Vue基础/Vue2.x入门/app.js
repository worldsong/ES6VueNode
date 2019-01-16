var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                title: 'Entertaining Kids Book',
                price: 4.99,
                id: 0,
                genres: ['kids', 'fiction']
            },
            {
                title: 'Teen Drama',
                price: 5.99,
                id: 1,
                genres: ['teen', 'fiction']
            },
            {
                title: 'Boring Facts',
                price: 6.99,
                id: 2,
                genres: ['adult', 'non-fiction']
            },
            {
                title: 'Overly Complex Story',
                price: 7.99,
                id: 3,
                genres: ['adult', 'fiction']
            },
            {
                title: 'Facts for Teens',
                price: 3.99,
                id: 4,
                genres: ['teen', 'non-fiction']
            }
        ]
    },
    template: `
            <div>
                 <ul>
                     <li v-for="book in books" :key="book.id">
                        <p><Strong>Id: </Strong> {{ book.id }}</p>
                        <p><Strong>Title: </Strong> {{ book.title }}</p>
                        <p><Strong>Price: </Strong> {{ book.price }}</p>
                        <p><Strong>Genres: </Strong> <span v-for="genre in book.genres">{{genre}}</span></p>
                     </li>
                </ul>   
            </div>                    
            `
})
