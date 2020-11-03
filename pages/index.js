import Head from 'next/head'
import { useRef, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';


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
    <div className="container">
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Lexend Deca', sans-serif;
          background: linear-gradient(to left, #dcf1f2, #f4e8e8);
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        h1,h2,h3,h4,h5,h6,p,ul {
          margin: 0;
        }

        .margin {
          margin: 1.1em 0;
        }

        .margin:first-child {
          margin-top: 0;
        }

        .margin:last-child {
          margin-bottom: 0;
        }

        .container {
          margin: 0 auto 1em;
          padding: 0 0.5em;
          max-width: 50em;
        }

        .intro {
          background: rgba(255,255,255,0.8);
          padding: 1.5em 2.4em 2em;
          border-radius: 0.5em;
          margin: 0 0 0.5em;
          box-shadow: 0 1px 1px rgba(0,0,0,0.06), 
              0 2px 2px rgba(0,0,0,0.06), 
              0 4px 4px rgba(0,0,0,0.06), 
              0 8px 8px rgba(0,0,0,0.06),
              0 16px 16px rgba(0,0,0,0.06);
        }

        article {
          padding: 2em 2.4em;
          margin: 1em 0;
        }

        article + article {
          border-top: 1px solid rgba(0,0,0,0.25);
        }

        .btn {
          display: inline-block;
          border-radius: 2em;
          padding: 0.75em 1.4em;
          background: rgba(0,0,0,0.1);
          color: inherit;
          font-size: 0.9em;
        }

        .btn.alt {
          background: #79e0b0;
        }

        .example {
          background: rgba(0,0,0,0.5);
          height: 250px;
          border-radius: 0.5em;
        }

        footer {
          text-align: center;
        }

        header a {
          color: #333;
        }

        nav a {
          display: block;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        body * {
          box-sizing: border-box;
        }

        #banner {
          width: 100%;
          margin-top: 1.5em;
        }
      `}</style>
    </div>
  )
}
