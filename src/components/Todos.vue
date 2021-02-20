<template>
  <div
    id="todos"
    class="relative text-xs sm:text-lg flex flex-col bg-white dark:bg-gray-900 mb-auto"
  >
    <div
      class="absolute -top-24 right-0 mx-12 sm:mx-24 md:mx-40 lg:mx-64 left-0  bg-white dark:bg-gray-800 flex  justify-center items-center shadow-xl rounded-lg py-3 "
    >
      <button class=" focus:outline-none">
        <svg
          @click="addTodo"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current bg-gradient-to-r  from-blue-400 hover:from-purple-600 hover:to-blue-400 via-blue-500 to-purple-600 text-white  w-6 h-6 ml-3 rounded-full p-1"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          />
        </svg>
      </button>
      <input
        type="text"
        class="w-full px-10  focus:outline-none py-2 dark:bg-gray-800 "
        placeholder="Create a new todo..."
        @keydown.enter.prevent="addTodo"
        v-model="newTodo.taskDescription"
      />
    </div>
    <draggable v-model="todos" @start="drag = true" @end="drag = false">
      <Todo
        v-for="todo in todos"
        :key="todo.index"
        :todo="todo"
        @removeTodo="removeTodo"
        @DoneTodo="todoDone"
      />
    </draggable>
    <div
      class="p-5 bg-white dark:bg-gray-800 text-gray-400 flex justify-between items-center shadow-xl rounded-sm  relative -top-5"
    >
      <p class="hover:text-gray-600">{{ todoListLength }} tasks left</p>
      <FilteredTodos :class="[width < 460 ? 'hidden' : 'block']"
        @showAll="showAll"
        @showActive="showActive"
        @showCompleted="showCompleted"
        :isAllClicked="isAllClicked"
        :isActiveClicked="isActiveClicked"
        :isCompletedClicked="isCompletedClicked"
        @width="getWidth"
      />
      <button
        @click="clearCompleted"
        class=" hover:text-gray-600 focus:outline-none"
      >
        Clear Completed
      </button>
    </div>
    <FilteredTodos :class="[width > 460 ? 'hidden' : 'block']" 
      class="p-5 bg-white dark:bg-gray-800 my-0 flex justify-evenly items-center shadow-xl rounded-sm "
        @showAll="showAll"
        @showActive="showActive"
        @showCompleted="showCompleted"
        :isAllClicked="isAllClicked"
        :isActiveClicked="isActiveClicked"
        :isCompletedClicked="isCompletedClicked"
        @width="getWidth"
      />
      <p style="margin: 0 auto" class=" text-sm md:text-lg text-gray-600">Drag and drop to reorder list</p>
  </div>
</template>
<script>
import Todo from "./Todo";
import draggable from "vuedraggable";
import FilteredTodos from "./FilteredTodos";
export default {
  components: {
    Todo,
    draggable,
    FilteredTodos,
  },
  data() {
    return {
      isAllClicked: true,
      isActiveClicked: false,
      isCompletedClicked: false,
      isClearClicked: false,
      newTodo: {},
      unfilteredTodos: null,
      width:null,
      todos: [
        {
          id: 1,
          completed: false,
          taskDescription: "Go to the supermarket",
        },
        {
          id: 2,
          completed: true,
          taskDescription: "learining code",
        },
        {
          id: 3,
          completed: false,
          taskDescription: "Buy a new macbook",
        },
        {
          id: 4,
          completed: true,
          taskDescription: "cook a meal",
        },
      ],
    };
  },
  methods: {
    getWidth(value) {
      this.width = value
    },
    clearCompleted() {
      this.isClearClicked = true;
      this.todos = this.todos.filter((todo) => {
        return todo.completed == false;
      });
      this.isClearClicked = false;
      this.isAllClicked = true;
      this.isActiveClicked = false;
      this.isCompletedClicked = false;
      return this.todos;
    },
    addTodo() {
      if (
        this.newTodo.taskDescription == "" ||
        Object.keys(this.newTodo).length === 0
      ) {
        return false;
      } else {
        this.newTodo.id = Math.random()
          .toString(20)
          .substr(2, 10);
        this.newTodo.completed = false;
        // this.todos.push(this.newTodo); // to show a new todo in the end of the list
        this.todos.splice(0, 0, this.newTodo); // if I want to show a new todo in the beggining
        if (this.unfilteredTodos !== null) {
          this.unfilteredTodos.splice(0, 0, this.newTodo);
        }
        this.newTodo = {};
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    showAll() {
      if (this.isAllClicked == false) {
        this.isAllClicked = true;
        this.isActiveClicked = false;
        this.isCompletedClicked = false;
        this.todos = this.unfilteredTodos;
        this.unfilteredTodos = null;
      }
    },
    showActive() {
      if (this.isCompletedClicked == true) {
        this.todos = this.unfilteredTodos;
      }
      this.isAllClicked = false;
      this.isActiveClicked = true;
      this.isCompletedClicked = false;
      this.unfilteredTodos = this.todos;
      this.todos = this.todos.filter((todo) => {
        return todo.completed == false;
      });
    },
    showCompleted() {
      if (this.isActiveClicked == true) {
        this.todos = this.unfilteredTodos;
      }
      this.isAllClicked = false;
      this.isActiveClicked = false;
      this.isCompletedClicked = true;
      this.unfilteredTodos = this.todos;
      this.todos = this.todos.filter((todo) => {
        return todo.completed == true;
      });
    },
    todoDone(item) {
      item.completed = !item.completed;
      let index = this.todos.findIndex((e) => {
        return e.id == item.id;
      });
      this.todos.splice(index, 1, item);
    },
  },
  computed: {
    todoListLength() {
      if (this.unfilteredTodos !== null) {
        let amoutOfOldCompleted = this.unfilteredTodos.filter((e) => {
          return e.completed == false;
        });
        return amoutOfOldCompleted.length;
      } else {
        let amoutOfCompleted = this.todos.filter((e) => {
          return e.completed == false;
        });
        return amoutOfCompleted.length; 
      }
    },
    // todoList() { // because of drag and drop component doesn't work with computed property, this is hidden and there were written more methods to 
    //   switch (true) { // make the app work as it should. 
    //     case this.isAllClicked === true:
    //       return this.todos;
    //     case this.isActiveClicked === true:
    //       var activeTodos = this.todos.filter((todo) => {
    //         return todo.completed == false;
    //       });
    //       return activeTodos;
    //     case this.isCompletedCliked === true:
    //       var completedTodos = this.todos.filter((todo) => {
    //         return todo.completed == true;
    //       });
    //       return completedTodos;
    //     case this.isClearClicked === true:
    //       return this.clearCompleted;
    //   }
    //   return this.todos;
    // },
  },
};
</script>
