import Head from 'next/head'
import { useRef, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../components/layout'


export default function Home() {

  const canvasRef = useRef(null)

  const code = 'console.log("test")';

  useEffect(() => {

    var f = new FontFace("LexendDeca", 'url(https://fonts.gstatic.com/s/lexenddeca/v3/K2F1fZFYk-dHSE0UPPuwQ5qnJy8.woff2)');

    f.load().then(function() {

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

    });

  }, [])

  return (
    <Layout>
      <Head>
        <title>Particle Shift - JavaScript library for creation particle transitions</title>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script crossOrigin="true" src="https://cdn.jsdelivr.net/gh/ihansson/particle-shift@1.0.1/dist/particle-shift.min.js"></script>
      </Head>

      <div className="container">

        <main>

          <div className="grid">

            <canvas id="banner" ref={canvasRef} />

            <header className="intro">

              <h1 className="title">
                Particle Shift Demo <br/>(under construction until nov 9)
              </h1>

              <p className="description margin">
                Particle shift is a library for creating animations with simple particle systems. Can be used to transition between any scene drawn onto a 2d canvas context, whether it be text, images, svgs, or just drawn shapes.
              </p>

              <div>
                <a className="btn" href="https://github.com/ihansson/particle-shift">Github</a> <a className="btn" href="https://ianhan.com/">Ian Hansson</a>
              </div>

            </header>

            <article>

              <h2>Basic Example</h2>

              <p className="margin">The scene in particle shift represents the canvas for the particle system and is used to controlled what is drawn and when. The most important properties of the scene are the particle_size and step_width which will control the level of detail of the particle system.</p>

              <div className="margin example"></div>

              <SyntaxHighlighter language="javascript">
                {code}
              </SyntaxHighlighter>

              <a className="btn alt" href="#">Play</a> <a className="btn" href="#">Code</a>

            </article>

            <article>

              <h2>Basic Example</h2>

              <p className="margin">The scene in particle shift represents the canvas for the particle system and is used to controlled what is drawn and when. The most important properties of the scene are the particle_size and step_width which will control the level of detail of the particle system.</p>

              <div className="margin example"></div>

              <a className="btn alt" href="#">Play</a> <a className="btn" href="#">Code</a>

            </article>

            <article>

              <h2>Basic Example</h2>

              <p className="margin">The scene in particle shift represents the canvas for the particle system and is used to controlled what is drawn and when. The most important properties of the scene are the particle_size and step_width which will control the level of detail of the particle system.</p>

              <div className="margin example"></div>

              <a className="btn alt" href="#">Play</a> <a className="btn" href="#">Code</a>

            </article>

          </div>

        </main>

        <footer>
          <a
            href="https://ianhan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; 2020 Ian Hansson
          </a>
        </footer>

      </div>

    </Layout>
  )
}
