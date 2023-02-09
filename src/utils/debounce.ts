export default function debounce(func: Function, timeout = 1000) {
	let timer: string | number | NodeJS.Timeout | undefined;
	if (!timer) {
		func();
	}
	console.log("fddf");
	timer = setTimeout(() => {
		clearTimeout(timer);
		timer = undefined;
	}, timeout);
}
