Vue.component('ger-message', {
    props: ['title', 'body'],
    template: '<article class="message" v-show="isVisible"> <div class="message-header"> {{title}}  <button type="button" @click="isVisible = false">x</button> </div> <div class="message-body"> {{body}} </div> </article>',
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {

    }
});


new Vue({
    el: '#root',

});