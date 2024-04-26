let $ = document
let app = $.getElementById('writer')


var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter
.typeString('. Experience. Live.')
.pauseFor(3000)
.deleteAll()
.typeString(' is our life')
.pauseFor(3000)
.deleteAll()
.typeString('. It’s what we do.')
.pauseFor(3000)

.start()