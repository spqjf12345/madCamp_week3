const initialData = {
	tasks: {
		'task-1': { id: 'task-1', isDone: false, content: 'Happy Coding!' },
		'task-2': { id: 'task-2', isDone: false, content: '과제하기' },
		'task-3': { id: 'task-3', isDone: false, content: '몰입캠프 지원하기' },
		'task-4': { id: 'task-4', isDone: false, content: '텀블러 사기' },
		'task-5': { id: 'task-5', isDone: false, content: '설거지 하기' },
		// 'task-6': { id: 'task-6', isDone: false, content: 'good' }
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
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
	columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;
