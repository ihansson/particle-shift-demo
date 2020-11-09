export default function ParticleshiftCanvas(props) {
	return (
		<div className="margin example">
			<canvas id={props.id} ref={props.canvasRef} />
		</div>
	)
}