# Graphjs
Javascript library that contain some graph function


Example usage :

var graphs = require('graph-node');

var graph = new graphs.Graph(); // creates a graph

var node1=graph.addNode("A"); // creates a node

var node2=graph.addNode("B"); // creates a node

var node3=graph.addNode("C"); // creates a node

var node4=graph.addNode("D"); // creates a node

var node5=graph.addNode("E"); // creates a node

node1.addEdge(node2);       

node1.addEdge(node3);

node1.addEdge(node4);

node2.addEdge(node5);

node3.addEdge(node5);

node4.addEdge(node5);

var dfsTraversedNodes= graphs.dfs(graph); // returns a dfs traversal of graph

var bfsTraversedNodes= graphs.bfs(graph);

console.log(dfsTraversedNodes);

console.log(bfsTraversedNodes);