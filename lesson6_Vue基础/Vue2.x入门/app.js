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
        }
    }
})