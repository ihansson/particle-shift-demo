import SyntaxHighlighter from 'react-syntax-highlighter';
import { useState, useRef, useEffect } from 'react';
import ParticleShiftCanvas from './ParticleShiftCanvas'
import renderWithFont from '../lib/renderWithFont'

export default function Example(props) {
	const [codeToggle, setCodeToggle] = useState(false);

	const canvasRef = useRef(null)

	useEffect(renderWithFont(props.render, canvasRef, props.id), [])

	function playScene(){

		let canvas = canvasRef.current
	    canvas.scene.play_screen(canvas.screens[0])
	    window.setTimeout(function(){
	    	canvas.scene.play_screen(canvas.screens[1])
	    },3000)

	}

	return (
	<article>

		<h2>{props.title}</h2>

		{props.description && 
			<p className="margin" dangerouslySetInnerHTML={{__html: props.description}}></p>
		}

		<ParticleShiftCanvas id={props.id} canvasRef={canvasRef} />

		<button onClick={playScene} className="btn alt" href="#">Play</button> 
		<button onClick={() => setCodeToggle(!codeToggle)} className={['btn',codeToggle ? 'active' : 'inactive'].join(' ')} href="#">Code</button>

		{codeToggle && 
			<SyntaxHighlighter language="javascript">
			{props.code}
			</SyntaxHighlighter>
		}

	</article>
	);
}