import Head from 'next/head'
import { useRef, useEffect } from 'react';
import Layout from '../components/Layout'
import Example from '../components/Example'
import renderBanner from '../lib/renderBanner'
import renderWithFont from '../lib/renderWithFont'

export default function Home() {

  const canvasRef = useRef(null)

  const code = 'console.log("test")';

  useEffect(renderWithFont(renderBanner, canvasRef), [])

  return (
    <Layout>
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
              title="Basic"
              description="The scene in particle shift represents the canvas for the particle system and is used to controlled what is drawn and when. The most important properties of the scene are the particle_size and step_width which will control the level of detail of the particle system."
              code={code} 
              />

            <Example 
              title="Basic 2"
              code={code} 
              />

            <Example 
              title="Basic 3"
              code={code} 
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

    </Layout>
  )
}
