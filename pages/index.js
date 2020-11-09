import Head from 'next/head'
import { useRef, useEffect } from 'react';

import renderBanner from '../lib/renderBanner'
import renderExample1 from '../lib/renderExample1'
import renderExample2 from '../lib/renderExample2'
import renderExample3 from '../lib/renderExample3'
import renderWithFont from '../lib/renderWithFont'

import Example from '../components/Example'

export default function Home() {

  const canvasRef = useRef(null)

  const code = 'console.log("test")';

  useEffect(renderWithFont(renderBanner, canvasRef, 'banner'), [])

  return (
    <div>
      <Head>
        <title>Particle Shift - JavaScript library for creation particle transitions</title>
        <meta name="Description" content="Canvas rendering of particles and transitions between them based on text / images / svgs." />
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

            <Example 
              title="Text Transition"
              description="This basic examples creates two scenes with different text and then plays them 2000ms apart."
              code={code} 
              render={renderExample1}
              id="example-1"
              />

            <Example 
              title="SVG and Color"
              description="In this example we show that you can add anything to canvas and particle shift will transition between them. Here we have an SVG and gradient coloured text."
              code={code} 
              render={renderExample2}
              id="example-2"
              />

            <Example 
              title="Mouse Interaction"
              description="Particle shift allows for some interaction to be created with the addition of Bodies to the particle system."
              code={code} 
              render={renderExample3}
              id="example-3"
              />

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

    </div>
  )
}
