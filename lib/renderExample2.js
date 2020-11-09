export function renderExample2(canvasRef, id){

  const canvas = canvasRef.current
  const context = canvas.getContext('2d')

  const scene = ParticleShift.Scene.create({
    selector: '#'+id,
    particle_size: 3,
    particle_type: 'rect',
    step_width: 5,
    draw_width: 700,
    draw_height: 250
  })

  scene.canvas = canvas
  scene.context = context

  canvas.scene = scene

  var img1 = new Image();

  img1.onload = function () {

    const screen1 = ParticleShift.Screen.create(scene, {
      render: function(scene, ctx){
        ctx.font = '150px Lexend Deca'
        var grd = ctx.createLinearGradient(0, 0, scene.draw_width, 0);
        grd.addColorStop(0, "#5433FF");
        grd.addColorStop(0.5, "#20BDFF");
        grd.addColorStop(1, "#A5FECB");
        ctx.fillStyle = grd;
        ctx.fillText('Gradient', 35, 180)
      }
    })

    const screen2 = ParticleShift.Screen.create(scene, {
      render: function(scene, ctx){
        ctx.drawImage(img1, 220, 0, scene.draw_height, scene.draw_height);
      }
    })

    canvas.screens = [screen1, screen2]

  };

  img1.src = 'firefox.svg';

}

export var renderExample2Code = `const scene = ParticleShift.Scene.create({
  selector: '#canvas',
  particle_size: 3,
  particle_type: 'rect',
  step_width: 5,
  draw_width: 700,
  draw_height: 250
})

var img1 = new Image();

img1.onload = function () {

  const screen1 = ParticleShift.Screen.create(scene, {
    render: function(scene, ctx){
      ctx.font = '150px Lexend Deca'
      var grd = ctx.createLinearGradient(0, 0, scene.draw_width, 0);
      grd.addColorStop(0, "#5433FF");
      grd.addColorStop(0.5, "#20BDFF");
      grd.addColorStop(1, "#A5FECB");
      ctx.fillStyle = grd;
      ctx.fillText('Gradient', 35, 180)
    }
  })

  const screen2 = ParticleShift.Screen.create(scene, {
    render: function(scene, ctx){
      ctx.drawImage(img1, 220, 0, scene.draw_height, scene.draw_height);
    }
  })

};

img1.src = 'firefox.svg';`