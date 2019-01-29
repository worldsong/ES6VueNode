var app = new Vue({
    el: '#app',
    data: {
        inputs: {
            text: '',
            numberAsString: 0,
            numberAsNumber: 0,
            password: '',
            checkbox: false,
            checkboxes: [],
            radios: '',
            radiosPreset: 'rollout',
            radiosDynamic: '',
            radiosDynamicOptions: [
                {
                    label: 'Blue',
                    value: 'Light'
                },
                {
                    label: 'Red',
                    value: 'Dark'
                }
            ],
            file: ''
        },
        fileName: '',
        text:'',
        select: ''
    },
    methods: {
        fileChanged: function () {
            this.fileName = event.target.files[0].name;
        }
    }
})