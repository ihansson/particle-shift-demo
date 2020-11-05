export default function renderBanner(canvasRef){

  const canvas = canvasRef.current
  const context = canvas.getContext('2d')

  const scene = ParticleShift.Scene.create({
    selector: '#banner',
    particle_size: 2,
    particle_type: 'circ',
    step_width: 6,
    draw_width: 768,
    draw_height: 190
  })

  scene.canvas = canvas
  scene.context = context

  let mousepos = {x:0, y:0}

  canvas.addEventListener('mousemove', function(e){
    mousepos = {x: e.clientX, y: e.clientY}
  })

  const sphere = ParticleShift.Body.create({
    x: 500,
    y: 300,
    radius: 50,
    force: -0.75,
    update: function(scene, ctx){
      let scenePos = scene.canvas.getBoundingClientRect();
      let x = mousepos.x - scenePos.left
      let y = mousepos.y - scenePos.top
      this.x = ((x / scene.draw_multiplier) * scene.canvas.width / scene.canvas.clientWidth)
      this.y = ((y / scene.draw_multiplier) * scene.canvas.width / scene.canvas.clientWidth)
    },
    draw: function(scene, ctx){

    }
  })

  const screen1 = ParticleShift.Screen.create(scene, {
    bodies: [sphere],
    render: function(scene, ctx){
      ctx.font = '160px Lexend Deca'
      ctx.fillStyle = 'black';
      ctx.fillText('Particle', 80, 135)
    }
  })

  const screen2 = ParticleShift.Screen.create(scene, {
    bodies: [sphere],
    render: function(scene, ctx){
      ctx.fillText('Shift.js', 110, 135)
    }
  })

  function play1(){
    scene.play_screen(screen1)
    window.setTimeout(function(){
      play2()
    },3000)
  }

  function play2(){
    scene.play_screen(screen2)
    window.setTimeout(function(){
      play1()
    },3000)
  }

  play1()

}