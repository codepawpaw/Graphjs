function Graph(){
	this.nodes = [];
	this.addNode = addNode;

	function addNode(name){
		node = new Node(name);
		this.nodes.push(node);
		return node;
	}

};
exports.Graph = Graph;

function Node(name){
	this.name = name;
	this.adjList = [];
	this.addEdge = addEdge;

	function addEdge(neighbour){
		this.adjList.push(neighbour);	
	}
};
exports.Node = Node;


function dfs(graph){
	stack = [];
	traversedNodes = [];
	traversedNodes.push(graph.nodes[0]);
	marked = {};

	while(traversedNodes.length > 0){
		var currentNode = traversedNodes.pop();
		stack.push(currentNode);
		if(marked[currentNode.name] == false){
			marked[currentNode.name] = true;
		}
		if(Object.keys(marked).length != graph.nodes.length){
			for(var i = currentNode.adjList.length - 1; i >= 0; i--){
				if(marked[currentNode.adjList[i].name] != true){
					traversedNodes.push(currentNode.adjList[i]);
					marked[currentNode.adjList[i].name] = true;
				}
			}
		}
	}

	return stack;
}
exports.dfs = dfs;

function bfs(graph){
	stack = [];
	traversedNodes = [];
	traversedNodes.push(graph.nodes[0]);
	marked = {};

	while(traversedNodes.length > 0){
		var currentNode = traversedNodes.shift();
		marked[currentNode.name]=true;
		if(marked[currentNode.name] == false){
			stack.push(currentNode);
		}
		if(Object.keys(marked).length != graph.nodes.length){
			for (var i = 0; i < currentNode.adjList.length; i++){
				if(marked[currentNode.adjList[i].name]!=true){
					traversedNodes.push(currentNode.adjList[i]);
					marked[currentNode.adjList[i].name]=true;
				}
			}
		}			
	}

	return stack;
}
exports.bfs = bfs;

