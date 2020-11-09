export function renderExample1(canvasRef, id){

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

  const screen1 = ParticleShift.Screen.create(scene, {
    render: function(scene, ctx){
      ctx.font = '160px Lexend Deca'
      ctx.fillStyle = 'white';
      ctx.fillText('Example', 25, 180)
    }
  })

  const screen2 = ParticleShift.Screen.create(scene, {
    render: function(scene, ctx){
      ctx.font = '145px Georgia'
      ctx.fillStyle = 'white';
      ctx.fillText('Text Swap', 25, 170)
    }
  })

  canvas.screens = [screen1, screen2]

}

export var renderExample1Code = `const scene = ParticleShift.Scene.create({
  selector: '#canvas',
  particle_size: 2,
  particle_type: 'circ',
  step_width: 6,
  draw_width: 700,
  draw_height: 250
})

const screen1 = ParticleShift.Screen.create(scene, {
  render: function(scene, ctx){
    ctx.font = '160px Lexend Deca'
    ctx.fillStyle = 'white';
    ctx.fillText('Example', 25, 180)
  }
})

const screen2 = ParticleShift.Screen.create(scene, {
  render: function(scene, ctx){
    ctx.font = '145px Georgia'
    ctx.fillStyle = 'white';
    ctx.fillText('Text Swap', 25, 170)
  }
})`