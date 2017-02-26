function Graph(){
	this.nodes = [];
	this.addNode = addNode;

	function addNode(name){
		node = new Node(name);
		this.nodes.push(node);
		return node;
	}

}

function Node(name){
	this.name = name;
	this.adjList = [];
	this.addEdge = addEdge;

	function addEdge(neighbour){
		this.adjList.push(neighbour);	
	}
}


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



/*graph =new Graph(); // creates a graph
node1=graph.addNode("A"); // creates a node
node2=graph.addNode("B"); // creates a node
node3=graph.addNode("C"); // creates a node
node4=graph.addNode("D"); // creates a node
node5=graph.addNode("E"); // creates a node
node1.addEdge(node2);         // Adds an edge between node1 & node2
node1.addEdge(node3);
node1.addEdge(node4);
node2.addEdge(node5);
node3.addEdge(node5);
node4.addEdge(node5);
var dfsTraversedNodes=dfs(graph); // returns a dfs traversal of graph
var bfsTraversedNodes=bfs(graph);

console.log(dfsTraversedNodes);
console.log(bfsTraversedNodes);*/