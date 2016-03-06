var sys = arbor.ParticleSystem(1000, 600, 0.6);
sys.parameters({
    gravity: true
});
sys.renderer = Renderer("#viewport");

// Course Nodes
var node61a = sys.addNode('61a', {
    label: "CS 61A",
    color: "LightCoral",
    shape: "dot",
    mass: .25
})
var node61b = sys.addNode('61b', {
    label: "CS 61B",
    color: "LightCoral",
    shape: "dot",
    mass: .25
})
var node61c = sys.addNode('61c', {
    label: "CS 61C",
    color: "LightCoral",
    shape: "dot",
    mass: .25
})
var node70 = sys.addNode('70', {
    label: "CS 70",
    color: "LightCoral",
    shape: "dot",
    mass: .25
})
var node160 = sys.addNode('160', {
    label: "CS 160",
    color: "LightSeaGreen",
    shape: "dot",
    mass: .25
})
var node161 = sys.addNode('161', {
    label: "CS 161",
    color: "LightSeaGreen",
    shape: "dot",
    mass: .25
})
var node170 = sys.addNode('170', {
    label: "CS 170",
    color: "LightSeaGreen",
    shape: "dot",
    mass: .25
})
var node184 = sys.addNode('184', {
    label: "CS 184",
    color: "Orchid",
    shape: "dot",
    mass: .25
})
var node188 = sys.addNode('188', {
    label: "CS 188",
    color: "Orchid",
    shape: "dot",
    mass: .25
})
var node189 = sys.addNode('189', {
    label: "CS 189",
    color: "Orchid",
    shape: "dot",
    mass: .25
})
// Core Courses
sys.addEdge(node61a, node61b, { directed: true })
sys.addEdge(node61b, node61c, { directed: true })
sys.addEdge(node61a, node61c, { directed: true })
// Theory Courses
sys.addEdge(node70, node170, { directed: true })
sys.addEdge(node61b, node170, { directed: true })
// Software Courses
sys.addEdge(node61b, node160, { directed: true })
sys.addEdge(node61c, node161, { directed: true })
sys.addEdge(node70, node161, { directed: true })
// Application Courses
sys.addEdge(node61b, node188, { directed: true })
sys.addEdge(node70, node188, { directed: true })
sys.addEdge(node188, node189, { directed: true })
sys.addEdge(node61b, node184, { directed: true });