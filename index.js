import $ from 'jquery';
import Mustache from 'mustache';

// console.log('Hello its working');

// const tasks = [];
// const template = $('#tasks-template').html();

// $('#tasksModule')
//   .find('button')
//   .on('click', function() {
//     tasks.push(
//       $('#tasksModule')
//         .find('input')
//         .val()
//     );
//     $('#tasksModule')
//       .find('input')
//       .val('');

//     const data = {
//       tasks: tasks
//     };

//     $('#tasksModule')
//       .find('ul')
//       .html(Mustache.render(template, data));
//   });

(function() {
  const tasks = {
    tasks: ['Go to mall'],
    init: function() {
      this.cacheDOM();
      this.bindAllEvents();
      this.render();
    },
    cacheDOM: function() {
      this.$element = $('#tasksModule');
      this.$button = this.$element.find('button');
      this.$input = this.$element.find('input');
      this.$ul = this.$element.find('ul');
      this.template = this.$element.find('#tasks-template').html();
    },
    // Only part touching the DOM
    render: function() {
      const data = {
        tasks: this.tasks
      };

      console.log(data);
      this.$ul.html(Mustache.render(this.template, data));
    },

    bindAllEvents: function() {
      // Not good practice to write function inside event binders
      this.$button.on('click', this.addTask.bind(this));
    },

    addTask: function() {
      this.tasks.push(this.$input.val());
      this.render();
    }
  };

  tasks.init();
})();

// Object literal pattern
// const myModule = {
//     name: "Nana",
//     age: 27,
//     sayName: function() {
//         alert(this.name)
//     },
//     setName: function(newName) {
//         this.name = newName;
//     }
// }

// myModule.setName('kofi')
// myModule.sayName()
