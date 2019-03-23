// const store = Redux.createStore(reducer)

// function reducer(state = 0, action){
// 	switch (action.type) {
// 		case "inc":
// 			return state += 1;
// 			break;
// 		case "dec":
// 			return state -= 1;
// 			break;
// 		default:
// 		return state;
// 	}
// }
// store.subscribe(() => count.innerText = store.getState());

// inc.addEventListener("click", () => store.dispatch({type: "inc"}));
// dec.addEventListener("click", () => store.dispatch({type: "dec"}));







// todo section


// const obj = {
// 	add: function(){
// 		console.log("add")
// 	}
// 	remove: function(){
// 		console.log("remove")
// 	}
// }

let inputVal;
let id;
const store = Redux.createStore(reducer);

function reducer(state = [], action){
	switch (action.type) {
		case "add":
			return [...state].concat({todo: inputVal, status: false});
			break;
		case "remove":
			return [...state].filter((v,i) => !(i == id));
			break;
		default:
			return state;
			break;
	}
}

store.subscribe(() => store.getState().map((obj, i) => {
	ul.innerHTML += 
	`<li class="list" data-id="${i}">
		<span>${obj.todo}</span>
		<button class="remove" data-id="${i}">Remove</button>
	</li>`
}));
	
function addTodo(){
	if(input.value.trim()){
		ul.innerHTML = "";
		inputVal = input.value;
		store.dispatch({type: "add"})
		input.value = "";
	}
}

document.body.addEventListener("click", (e) => {
	if(e.target.className == "remove"){
		ul.innerHTML = "";
		id = e.target.dataset.id;
		store.dispatch({type: "remove"});
	}
})

function handleEnter(e){
	if(input.value.trim() && e.keyCode == 13){
		addTodo()
	}
}

input.addEventListener("keyup", handleEnter);
add.addEventListener("click", addTodo);