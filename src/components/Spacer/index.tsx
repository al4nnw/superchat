export default function Spacer(props: { height?: number; width?: number }) {
	return <div style={{ width: props.width, height: props.height }}></div>;
}
