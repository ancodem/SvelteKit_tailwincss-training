<script lang="ts">
	type Operator = '+' | '-' | 'x';
	let count = '_';
	let operator = '';
	let result = 0;

	const perform = {
		'+': (x: number, y: number) => x + y,
		'-': (x: number, y: number) => x - y,
		x: (x: number, y: number) => x * y
	};

	function click(value: string) {
		return () => {
			switch (value) {
				case 'RESET':
					count = '_';
					operator = '';
					result = 0;
					break;
				case '-':
				case '+':
				case 'x':
					if (operator && count !== '_') {
						result = perform[operator as Operator](result, +count);
					}
					operator = value;
					break;
				case '=':
					if (result) count = String(result);
					break;
				default:
					if (count === '_') count = '';
					if (result) {
						count = result + value;
					} else {
						count += value;
					}
			}
		};
	}

	const buttons = [
		{
			value: '7',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '8',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '9',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: 'DEL',
			color: 'bg-slate-600 text-white',
			handleClick: click
		},
		{
			value: '4',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '5',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '6',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '+',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '1',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '2',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '3',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '-',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '.',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '0',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: '/',
			color: 'bg-white',
			handleClick: click
		},
		{
			value: 'x',
			color: 'bg-white',
			handleClick: click
		}
	];
</script>

<section
	class="bg-slate-600 shadow-xl flex flex-col items-center gap-4 p-6 h-5/6 w-8/12 rounded-3xl"
>
	<div
		class="bg-slate-800 w-11/12 h-1/6 mt-2 rounded-lg p-1 px-4 text-white font-bold text-[60pt] text-right overflow-scroll"
	>
		{count}
	</div>
	<div class="bg-slate-800 w-11/12 h-4/6 rounded-lg grid grid-cols-4 gap-1">
		{#each buttons as { value, color, handleClick }}
			<button
				on:click={handleClick(value)}
				class="{color}  p-2 m-3 text-center rounded-md h-4/6 w-10/12 self-start text-[20pt] font-bold"
				>{value}</button
			>
		{/each}
	</div>
	<div class="flex gap-4 w-10/12">
		<button
			on:click={click('RESET')}
			class="bg-amber-300 p-2 m-3 text-center rounded-md h-4/6 w-10/12 self-start text-[20pt] font-bold"
			>RESET</button
		>
		<button
			on:click={click('=')}
			class="bg-amber-300 p-2 m-3 text-center rounded-md h-4/6 w-10/12 self-start text-[20pt] font-bold"
			>=</button
		>
	</div>
</section>
