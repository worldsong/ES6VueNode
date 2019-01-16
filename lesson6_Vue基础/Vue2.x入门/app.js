var app = new Vue({
    el: '#app',
    data: {
        yes: true,
        no: false
    },
    template: `
            <div>
                    <template v-if="no">
                         <h1>Don't Show!</h1>
                         <h1>It's a secret!</h1>
                    </template>
                    <template v-if="yes">
                         <h1>Show!</h1>
                         <h1>We like to Share!</h1>
                    </template>
            </div>                    
            `
})
