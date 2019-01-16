var vm = new Vue({
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
    methods: {
        resize: function () {
            // 错误的方式，不会触发视图更新
            this.books.length = 1;
            // 使用splice去调整数组长度
            this.books.splice(0);
        },
        splice: function(){
            var indexToReplace = 0;
            var newBook = {
                title: 'New Entertaining Kids Book',
                price: 4.99,
                id: 0,
                genres: ['kids', 'fiction']
            };
            this.books.splice(indexToReplace, 1, newBook); // 第二种触发视图更新的方法。
        },
        set: function () {
          var indexToReplace = 0;
          var newBook = {
              title: 'Newer Entertaining Kids Book',
              price: 4.99,
              id: 0,
              genres: ['kids', 'fiction']
          };
          Vue.set(this.books, indexToReplace, newBook); // 第一种触发视图更新方法，使用Vue.set,等同于vm.$set
        },
        teenFilter: function () {
            this.books = this.books.filter(book => {
                return (
                    book.genres.findIndex( genre => {
                        return genre === 'teen';
                    }) >= 0
                )
            })
        }
    },
    template: `
      <ul>
        <li v-for="book in books" :key="book.id">
          <p><strong>Id:</strong> {{ book.id }}<p>
          <p><strong>Title:</strong> {{ book.title }}</p>
          <p>
            <strong>Genres:</strong>
            <span v-for="(genre, index) in book.genres">
                {{genre}} 
                <span v-if="index < book.genres.length -1">, </span>
            </span>
          </p>
        </li>
      </ul>
    `
})