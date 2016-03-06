(function($) {

    var Renderer = function(canvas) {
        var canvas = $(canvas).get(0);
        var ctx = canvas.getContext("2d");
        var particleSystem;

        var that = {
            init: function(system) {
                particleSystem = system
                particleSystem.screenSize(canvas.width, canvas.height)
                particleSystem.screenPadding(80)

                that.initMouseHandling()
            },

            redraw: function() {
                ctx.fillStyle = "white"
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                particleSystem.eachEdge(function(edge, pt1, pt2) {
                    // edge: {source:Node, target:Node, length:#, data:{}}
                    // pt1:  {x:#, y:#}
                    // pt2:  {x:#, y:#}

                    // draw a line from pt1 to pt2
                    ctx.strokeStyle = "rgba(0,0,0, .333)"
                    ctx.lineWidth = 2
                    ctx.beginPath()
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.stroke()
                })

                particleSystem.eachNode(function(node, pt) {
                    // node: {mass:#, p:{x,y}, name:"", data:{}}
                    // pt:   {x:#, y:#}

                    // draw a rectangle centered at pt
                    var r = 30
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, r, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = node.data.color;
                    ctx.fill();
                    ctx.fillStyle = "black";
                    ctx.textAlign = 'center';
                    ctx.font = r / 2 + "px Helvetica";
                    ctx.fillText(node.data.course, pt.x, pt.y + r / 6);
                })
            },

            initMouseHandling: function() {
                var dragged = null;
                
                var handler = {
                    clicked: function(e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null) {
                            dragged.node.fixed = true
                        }

                        $(canvas).bind('mousemove', handler.dragged)
                        $(window).bind('mouseup', handler.dropped)

                        return false
                    },
                    dragged: function(e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)

                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s)
                            dragged.node.p = p
                        }

                        return false
                    },

                    dropped: function(e) {
                        if (dragged === null || dragged.node === undefined) return
                        if (dragged.node !== null) dragged.node.fixed = false
                        dragged.node.tempMass = 1000
                        dragged = null
                        $(canvas).unbind('mousemove', handler.dragged)
                        $(window).unbind('mouseup', handler.dropped)
                        _mouseP = null
                        return false
                    }
                }

                // start listening
                $(canvas).mousedown(handler.clicked);

            },

        }
        return that
    }

    $(document).ready(function() {
        var sys = arbor.ParticleSystem(1000, 600, 0.6)
        sys.parameters({
                gravity: true
            }) 
        sys.renderer = Renderer("#viewport")


        var node61a = sys.addNode('61a', {
            course: "CS 61A",
            color: "LightCoral",
            mass: .25
        })
        var node61b = sys.addNode('61b', {
            course: "CS 61B",
            color: "LightCoral",
            mass: .25
        })
        var node61c = sys.addNode('61c', {
            course: "CS 61C",
            color: "LightCoral",
            mass: .25
        })
        var node70 = sys.addNode('70', {
            course: "CS 70",
            color: "LightCoral",
            mass: .25
        })
        var node160 = sys.addNode('160', {
            course: "CS 160",
            color: "LightSeaGreen",
            mass: .25
        })
        var node161 = sys.addNode('161', {
            course: "CS 161",
            color: "LightSeaGreen",
            mass: .25
        })
        var node170 = sys.addNode('170', {
            course: "CS 170",
            color: "LightSeaGreen",
            mass: .25
        })
        var node184 = sys.addNode('184', {
            course: "CS 184",
            color: "Orchid",
            mass: .25
        })
        var node188 = sys.addNode('188', {
            course: "CS 188",
            color: "Orchid",
            mass: .25
        })
        var node189 = sys.addNode('189', {
                course: "CS 189",
                color: "Orchid",
                mass: .25
        })
        // Core Courses
        sys.addEdge(node61a, node61b)
        sys.addEdge(node61b, node61c)
        sys.addEdge(node61a, node61c)
        // Theory Courses
        sys.addEdge(node70, node170)
        sys.addEdge(node61b, node170)
        // Software Courses
        sys.addEdge(node61b, node160)
        sys.addEdge(node61c, node161)
        sys.addEdge(node70, node161)
        // Application Courses
        sys.addEdge(node61b, node188)
        sys.addEdge(node70, node188)
        sys.addEdge(node188, node189)
        sys.addEdge(node61b, node184)

    })

})(this.jQuery)