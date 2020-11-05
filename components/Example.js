import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Example(props) {
	return (
	<article>

		<h2>{props.title}</h2>

		{props.description && 
			<p className="margin">{props.description}</p>
		}

		<div className="margin example"></div>

		<SyntaxHighlighter language="javascript">
		{props.code}
		</SyntaxHighlighter>

		<a className="btn alt" href="#">Play</a> <a className="btn" href="#">Code</a>

	</article>
	);
}