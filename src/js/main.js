window.$ = window.jQuery = require('jquery'); // Include jQuery
require('semantic-ui/dist/semantic.js'); // Include Semantic UI JS

import Vue from 'vue'
import App from './components/App.vue'

new Vue({
    el: 'body',
    components: { App }
});
