class LS {
	// help functions to get and set data at LS
	getData(name){
		let data;
		if(localStorage.getItem(name) === null){
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data){
		localStorage.setItem(name, JSON.stringify(data))
	}

	// add task to LS
	addTask(task){
		// set data to the LS
		let tasks;
		if(localStorage.getItem("tasks") === null){
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}
		tasks.push(task);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		// log to console that task is added to LS
		task.addedToLS();
	}
	// SIIN JÄI MIDAGI POOLELI!!!!
	deleteTask(e){
		// get task name
		let task = e.target.parentElement.firstChild;
		// delete task value from visual by UI object
		ui.deleteTask(task);
		// change task element content before deleting from LS
		task = task.textContent;
		// delete task value from LS by LS object
		ls.deleteTask(task);
	}
}