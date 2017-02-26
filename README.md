# Graphjs
Javascript library that contain some graph function


Example usage :

var graph = require('graph-node');

graph = new graph.Graph(); // creates a graph
node1=graph.addNode("A"); // creates a node
node2=graph.addNode("B"); // creates a node
node3=graph.addNode("C"); // creates a node
node4=graph.addNode("D"); // creates a node
node5=graph.addNode("E"); // creates a node
node1.addEdge(node2);       
node1.addEdge(node3);
node1.addEdge(node4);
node2.addEdge(node5);
node3.addEdge(node5);
node4.addEdge(node5);
var dfsTraversedNodes=dfs(graph); // returns a dfs traversal of graph
var bfsTraversedNodes=bfs(graph);

console.log(dfsTraversedNodes);
console.log(bfsTraversedNodes);