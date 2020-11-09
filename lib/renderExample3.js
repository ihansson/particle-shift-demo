export function renderExample3(canvasRef, id){

  const canvas = canvasRef.current
  const context = canvas.getContext('2d')

  const scene = ParticleShift.Scene.create({
    selector: '#'+id,
    particle_size: 2,
    particle_type: 'circ',
    step_width: 6,
    draw_width: 700,
    draw_height: 250
  })

  scene.canvas = canvas
  scene.context = context

  canvas.scene = scene

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
      ctx.fillStyle = 'white';
      ctx.fillText('Example', 25, 180)
    }
  })

  const screen2 = ParticleShift.Screen.create(scene, {
    bodies: [sphere],
    render: function(scene, ctx){
      ctx.font = '145px Georgia'
      ctx.fillStyle = 'white';
      ctx.fillText('Text Swap', 25, 170)
    }
  })

  canvas.screens = [screen1, screen2]

}

export var renderExample3Code = `const scene = ParticleShift.Scene.create({
  selector: '#canvas',
  particle_size: 2,
  particle_type: 'circ',
  step_width: 6,
  draw_width: 700,
  draw_height: 250
})

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
    ctx.fillStyle = 'white';
    ctx.fillText('Example', 25, 180)
  }
})

const screen2 = ParticleShift.Screen.create(scene, {
  bodies: [sphere],
  render: function(scene, ctx){
    ctx.font = '145px Georgia'
    ctx.fillStyle = 'white';
    ctx.fillText('Text Swap', 25, 170)
  }
})`