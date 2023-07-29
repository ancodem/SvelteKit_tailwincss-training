<script lang="ts">
	let input = '';

	$: qrImageUrl = `https://chart.apis.google.com/chart?cht=qr&chl=${input
		.split('')
		.join('+')}&chs=248`;

	async function getImg() {
		const img = fetch(qrImageUrl);
		console.log(img);
	}
</script>

<section class="bg-white shadow-xl flex flex-col gap-2 p-6 h-[700px] w-[400px] rounded-3xl">
	<div class="flex flex-col gap-3">
		<div class="bg-blue-500 rounded-lg shadow-xl border border-white">
			<img src={qrImageUrl} class="fill-inherit opacity-70 h-96 rounded-lg" alt="qrcode" />
		</div>
		<h2 class="text-center text-2xl font-bold mt-5">
			Improve your front-end skills by building projects
		</h2>
		<p class="w-72 mx-auto text-center text-lg text-slate-400">
			Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
		</p>
	</div>
	<div class="flex gap-2 items-center">
		<input
			placeholder="Enter your text"
			class="h-14 rounded-md p-2 text-lg shadow-lg w-full active:border active:border-blue-400"
			bind:value={input}
		/>
		<a
			download
      on:click={getImg}
			target="_blank"
			title="QR-code"
			href={qrImageUrl}
			class="bg-blue-300 p-4 rounded-lg hover:bg-blue-400 duration-500 active:bg-blue-500 shadow-lg border border-white"
		>
			DOWNLOAD
		</a>
	</div>
</section>
