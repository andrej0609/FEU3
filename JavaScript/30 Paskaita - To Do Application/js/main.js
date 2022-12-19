class Task {
  constructor(task) {// Konstruktorius
    this.task = task;// Priskiriu klasės kintamajam "task" parametro reikšmę
    this.isDone = false; // Priskiriu klasės kintamajam "isDone" reikšmę "false"
  }
}

class TaskList {
  constructor() {// Konstruktorius
    this.tasks = [];// Sukuriu tuščią sąrašą "tasks"
  }

  addTask(task) {// Metodas, kuris prideda naują užduotį į sąrašą
    this.tasks.push(task); // Į sąrašą "tasks" pridedame naują "Task" klasės objektą
  }

  removeTask(task) {// Metodas, kuris pašalina užduotį iš sąrašo
    this.tasks = this.tasks.filter((t) => t.task !== task); // Filtruojame sąrašą "tasks" ir iš jo pašalinam objektus, kurių kintamasis "task" yra lygus parametrui "task"
  }

  toggleTask(task) {// Metodas, kuris pakeičia užduoties būseną iš "atlikta" į "neatlikta" ir atvirkščiai
    this.tasks = this.tasks.map((t) => {// Mape peržiūrime visus sąrašo "tasks" elementus ir jei rastas objektas, kurio kintamasis "task" yra lygus parametrui "task", pakeičiame jo kintamojo "isDone" reikšmę
      if (t.task === task) {
        t.isDone = !t.isDone;
      } 
      return t;
    });
  }
}

const taskList = new TaskList();// Sukuriu "TaskList" klasės objektą

const addTask = () => {// Funkcija, kuri prideda naują užduotį
  const input = document.getElementById("input");  // Gauname formos lauką "input"
  const task = input.value; // Gauname lauko reikšmę
  if (task) { // Tikriname ar laukas nėra tuščias
    taskList.addTask(new Task(task)); // Pridedame naują užduotį į sąraš
    input.value = "";// Išvalome formos lauką "input"
    renderTasks();// Atnaujiname sąrašą
  } else {
    alert("Please enter a task"); // Jei laukas tuščias, išvedame įspėjimą
  }
};

const removeTask = (task) => {// Funkcija, kuri pašalina užduotį iš sąrašo
  taskList.removeTask(task);// pašalinam užduotį iš sąrašo
  renderTasks(); // Atnaujiname sąraš
};

const toggleTask = (task) => {
  // Funkcija, kuri pakeičia užduoties būseną iš "atlikta" į "neatlikta" ir atvirkščiai
  taskList.toggleTask(task);// Pakeičiame užduoties būseną
  renderTasks();  // Atnaujiname sąrašą
};

const renderTasks = () => {// Funkcija, kuri atnaujina sąrašo vaizdavimą
  const tasks = document.getElementById("tasks"); // Gauname elementą su id "tasks"
  tasks.innerHTML = "";// Išvalome elemento turinį
  taskList.tasks.forEach((task) => { // Peržiūrime visus sąrašo elementus
    const div = document.createElement("div"); // Sukuriu naują elementą "div"
    div.className = "task";  // Priskiriu elementui "task" klasę
    // Įterpiame elemento turinį
    div.innerHTML = `  
      <div class="task-text ${task.isDone ? "done" : ""}">${task.task}</div>
    
      <div class="task-buttons">
        <button class="done" onclick="toggleTask('${task.task}')">
          <i class="fa fa-check" style="font-size:20px;"></i>
        </button>
        <button class="edit" onclick="editTask('${task.task}')">
          <i class="fa fa-pencil" style="font-size:20px;"></i>
        </button>
        <button class="delete" onclick="removeTask('${task.task}')">
          <i class="fa fa-trash" style="font-size:20px;"></i>
        </button>
      </div>
    `;
    tasks.append(div);
  });
};

const editTask = (task) => {
  // Funkcija, kuri redaguoja užduotį
  const input = document.getElementById("input");  // Gauname formos lauką "input"
  input.value = task; // Priskiriu laukui "input" užduoties teksto reikšmę
  removeTask(task);// pašalinam užduotį iš sąrašo
};

const add = document.getElementById("add");
// Gauname mygtuką "Pridėti" su id "add"
add.addEventListener("click", addTask);// Pridedame mygtukui "Pridėti" paspaudimo įvykį, kuris kviečia funkciją "addTask"


const input = document.getElementById("input");// Gauname formos lauką "input" su id "input"
input.addEventListener("keyup", (e) => {// Pridedame formos laukui "input" įvykį "keyup", kuris kviečia funkciją "addTask" jei paspaustas "Enter" klavišas
  if (e.key === "Enter") {
    addTask();
  }
});


renderTasks();
// Atnaujiname sąrašą



