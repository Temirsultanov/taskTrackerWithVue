const app = {
    data () {
        return {
            tasks : JSON.parse(localStorage.getItem("tasks")) || [
                {
                    id: 1,
                    title: "Click on the cross to remove",
                    completed: false,
                },
                {
                    id: 2,
                    title: "Click on the checkmark to complete",
                    completed: false,
                },
                {
                    id: 3,
                    title: "Welcome to app!🤪",
                    completed: true,
                }
            ],
            inputTask: "",
        }
    },
    methods: {
        addNewTask (evt) {
            evt.preventDefault();
            if (this.inputTask.trim() !== "") {
                this.tasks.push({
                    id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
                    title: this.inputTask,
                    completed: false,
                })
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
                this.inputTask = "";
            }
        },
        completeTask (index, evt) {
            this.tasks[index]["completed"] = !this.tasks[index]["completed"];
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        },
        deleteTask (index, evt) {
            this.tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        },
    },
}
Vue.createApp(app).mount("#app");