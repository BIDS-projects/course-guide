var sys = arbor.ParticleSystem(1000, 100, 0.7);
var sys = arbor.ParticleSystem();
sys.parameters({repulsion:1000, stiffness:900, gravity:true, dt:0.015});
sys.renderer = Renderer("#viewport");

// Course Nodes
var node_ds8 = sys.addNode('da8', {
    label: "DS 8",
    color: "Dodgerblue",
    shape: "dot",
    mass: .25,
    link: "http://data8.org"
});
var node_cs61a = sys.addNode('61a', {
    label: "CS 61A",
    color: "LightCoral",
    shape: "dot",
    mass: .25,
    link: "http://cs61a.org/"
});
var node_cs61b = sys.addNode('61b', {
    label: "CS 61B",
    color: "LightCoral",
    shape: "dot",
    mass: .25,
    link: "http://cs61b.ug/sp16/"
});
var node_cs61c = sys.addNode('61c', {
    label: "CS 61C",
    color: "LightCoral",
    shape: "dot",
    mass: .25,
    link: "http://inst.eecs.berkeley.edu/~cs61c/sp16/"
});
var node_cs70 = sys.addNode('70', {
    label: "CS 70",
    color: "LightCoral",
    shape: "dot",
    mass: .25,
    link: "http://inst.eecs.berkeley.edu/~cs70/sp16/"
});

var node_stat20 = sys.addNode('20', {
    label: "STAT 20",
    color: "LimeGreen",
    shape: "dot",
    mass: .25
});
var node_stat133 = sys.addNode('133', {
    label: "STAT 133",
    color: "LimeGreen",
    shape: "dot",
    mass: .25
});
var node_stat134 = sys.addNode('134', {
    label: "STAT 134",
    color: "LimeGreen",
    shape: "dot",
    mass: .25
});
var node_stat135 = sys.addNode('135', {
    label: "STAT 135",
    color: "LimeGreen",
    shape: "dot",
    mass: .25
});
var node_stat154 = sys.addNode('154', {
    label: "STAT 154",
    color: "LimeGreen",
    shape: "dot",
    mass: .25
});

var node_math53 = sys.addNode('53', {
    label: "Math 53",
    color: "LightSeaGreen",
    shape: "dot",
    mass: .25
});
var node_math54 = sys.addNode('54', {
    label: "Math 54",
    color: "LightSeaGreen",
    shape: "dot",
    mass: .25
});
var node_cs186 = sys.addNode('186', {
    label: "CS 186",
    color: "Orchid",
    shape: "dot",
    mass: .25
});
var node_cs189 = sys.addNode('189', {
    label: "CS 189",
    color: "Orchid",
    shape: "dot",
    mass: .25
});
var node_cs188 = sys.addNode('188', {
    label: "CS 188",
    color: "Orchid",
    shape: "dot",
    mass: .25
});

// Core Courses
sys.addEdge(node_ds8, node_cs61a, { weight: 3 });
sys.addEdge(node_ds8, node_cs61b, { weight: 3 });
sys.addEdge(node_cs61a, node_cs61b, { directed: true, weight: 3 });
// Math Courses
// Stats direction
sys.addEdge(node_ds8, node_stat20, { weight: 3 });
sys.addEdge(node_ds8, node_stat134, { weight: 3 });
sys.addEdge(node_stat133, node_stat135, { weight: 3 });
sys.addEdge(node_stat20, node_stat135, { weight: 3 });
sys.addEdge(node_stat134, node_stat135, { weight: 3, directed: true });
sys.addEdge(node_math53, node_stat154, { directed: true, weight: 3 });
sys.addEdge(node_math54, node_stat154, { directed: true, weight: 3 });
sys.addEdge(node_stat135, node_stat154, { directed: true, weight: 3 });


// CS direction

sys.addEdge(node_cs61b, node_cs61c, { directed: true, weight: 3 });
sys.addEdge(node_cs61b, node_cs186, { directed: true, weight: 3 });
sys.addEdge(node_cs61c, node_cs186, { directed: true, weight: 3 });
sys.addEdge(node_cs61b, node_cs188, { directed: true, weight: 3 });
sys.addEdge(node_math53, node_cs189, { directed: true, weight: 3 });
sys.addEdge(node_math54, node_cs189, { directed: true, weight: 3 });
sys.addEdge(node_cs70, node_cs189, { directed: true, weight: 3 });
sys.addEdge(node_cs188, node_cs189, { directed: true, weight: 3 });

// Proximity tweak
sys.addEdge(node_math53, node_math54, { weight: 3, color: 'transparent' });
sys.addEdge(node_stat133, node_stat134, { weight: 3, color: 'transparent' });
sys.addEdge(node_stat20, node_stat134, { weight: 3, color: 'transparent' });
sys.addEdge(node_stat20, node_stat154, { weight: 3, color: 'transparent' });
sys.addEdge(node_stat133, node_stat154, { weight: 3, color: 'transparent' });
sys.addEdge(node_cs61a, node_cs70, { weight: 3, color: 'transparent' });
sys.addEdge(node_cs61b, node_cs70, { weight: 3, color: 'transparent' });
sys.addEdge(node_cs61a, node_cs61c, { weight: 3, color: 'transparent' });
sys.addEdge(node_cs186, node_cs188, { weight: 3, color: 'transparent' });
sys.addEdge(node_cs186, node_cs189, { weight: 3, color: 'transparent' });