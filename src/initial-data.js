const initialData = {
	tasks: {
		'task-1': { id: 'task-1', isDone: false, content: 'Take out the garbage' },
		'task-2': { id: 'task-2', isDone: false, content: 'Grow plants' },
		'task-3': { id: 'task-3', isDone: false, content: 'Happy Coding!' },
		'task-4': { id: 'task-4', isDone: false, content: 'work all day' },
		'task-5': { id: 'task-5', isDone: false, content: 'hi' },
		'task-6': { id: 'task-6', isDone: false, content: 'good' }
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5','task-6']
		},
		'column-2': {
			id: 'column-2',
			title: 'In Progress',
			taskIds: []
		},
		'column-3': {
			id: 'column-3',
			title: 'Done',
			taskIds: []
		}
	},
	columnOrder: ['column-1', 'column-2', 'column-3'],

	//tree schema
	treeTask: {
		'type1': { id: 'tree-1', icon: '🍋'}, 
		'type2': { id: 'tree-2', icon: '🍊'}, 
		'type3': { id: 'tree-3', icon: '🍈'}, 
	},

	treeColumn: {
		'tree_column': {
			id: 'tree-column-1',
			treeTasks: ['type1', 'type2', 'type3']
		}
	}
	
	

};

export default initialData;
