# Graphjs

Simple library for graph.

Now only there DFS(Depth First Search) and BFS(Breadth First Search)

# Installation

npm install graph-node

# Usage

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

var dfsTraversed = graphs.dfs(graph); // returns a dfs traversal of graph

var bfsTraversed = graphs.bfs(graph); // returns a bfs traversal of graph