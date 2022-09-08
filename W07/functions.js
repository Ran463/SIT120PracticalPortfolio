// Globally registered conponent
Vue.component('click-counter', {
  template:
    '<button @click="count++"> You have clicked me {{count}} times.</button>',
  data() {
    return {
      count: 0,
    };
  },
});

// Locally registered component
let itemComponent = {
  template: `<li><slot></slot></li>`,
};

let itemListComponent = {
  template: `
    <div class = "shopping-list">
      <h4>List of Items</h4>
      <ul>
        <item v-for="item in items"> {{item}}</item>
      </ul>
    </div>`,
  components: {
    item: itemComponent,
  },
  data() {
    return {
      items: ['Milk', 'Bread', 'Eggs', 'Biscuits', 'Yogurt', 'Ice Cream'],
    };
  },
};

new Vue({
  el: '#buttonCounter',
});

new Vue({
  el: '#app',
  components: {
    'shopping-list': itemListComponent,
  },
});
