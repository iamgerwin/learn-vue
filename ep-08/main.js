Vue.component('task-list', {
    template: '<div><li v-for="task in tasks"> {{task.description}} </li></div>',
    data() {
        return {
            tasks: [
                { description: "Go to sleep.", complete: true },
                { description: "Go to gym.", complete: true },
                { description: "Go to werk.", complete: true },
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root',

});