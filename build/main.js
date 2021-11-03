class OttoRelease extends HTMLElement {
	connectedCallback() {
		var colorClass = this.getAttribute('color-class');
		var title = this.getAttribute('title');
		var cover = this.getAttribute('cover');
		var spotify = this.getAttribute('spotify');
		var tidal = this.getAttribute('tidal');
		var apple = this.getAttribute('apple');
		var align = this.getAttribute('align');

		if (align == 'left') {
			this.innerHTML = `
<figure class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-10 transform origin-top-left">
	<span class="md:w-1/4 transform md:transform-none origin-top-left">
		<img class="w-full" src="${cover}" alt="${title}">
	</span>

	<figcaption class="flex items-center justify-center w-full py-20 md:w-1/4 ${colorClass} transform md:transform-none origin-bottom-left md:py-0">
		<ul class="flex flex-col space-y-5 lg:space-y-7 2xl:space-y-9">
			<li class="h-6 lg:h-10 2xl:h-16">
				<a class="block h-full" href="${spotify}" target="_blank">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 27" fill-rule="evenodd"><use xlink:href="#listen-on-spotify"/></svg>
				</a>
			</li>

			<li class="h-6 lg:h-10 2xl:h-16">
				<a class="block h-full" href="${tidal}" target="_blank">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 27" fill-rule="evenodd"><use xlink:href="#listen-on-tidal"/></svg>
				</a>
			</li>

			<li class="h-6 lg:h-10 2xl:h-16" target="_blank">
				<a class="block h-full" href="${apple}">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 27" fill-rule="evenodd"><use xlink:href="#listen-on-apple-music"/></svg>
				</a>
			</li>
		</ul>
	</figcaption>
</figure>`;
		} else {
			this.innerHTML = `
<figure class="flex flex-col md:flex-row-reverse md:space-x-reverse lg:space-x-reverse xl:space-x-reverse 2xl:space-x-reverse space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-10 transform origin-bottom-left">
	<span class="block w-full md:w-2/4 ${colorClass} transform md:transform-none origin-top-left">
		<img class="w-full" src="${cover}" alt="${title}">
	</span>

	<figcaption class="flex items-center justify-center w-full py-20 md:w-2/4 ${colorClass} transform md:transform-none origin-bottom-left md:py-0">
		<ul class="flex flex-col space-y-6 lg:space-y-8 2xl:space-y-10">
			<li class="h-10 lg:h-14 2xl:h-20">
				<a class="block h-full" href="${spotify}" target="_blank">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 27" fill-rule="evenodd"><use xlink:href="#listen-on-spotify"/></svg>
				</a>
			</li>

			<li class="h-10 lg:h-14 2xl:h-20">
				<a class="block h-full" href="${tidal}" target="_blank">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 27" fill-rule="evenodd"><use xlink:href="#listen-on-tidal"/></svg>
				</a>
			</li>

			<li class="h-10 lg:h-14 2xl:h-20" target="_blank">
				<a class="block h-full" href="${apple}">
					<svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 27" fill-rule="evenodd"><use xlink:href="#listen-on-apple-music"/></svg>
				</a>
			</li>
		</ul>
	</figcaption>
</figure>`;
		}
	}
}

window.customElements.define('otto-release', OttoRelease);

class OttoEvent extends HTMLElement {
	connectedCallback() {
		var month = this.getAttribute('month');
		var date = this.getAttribute('date');
		var time = this.getAttribute('time');
		var place = this.getAttribute('place');

		this.innerHTML = `
<li class="h-20 md:h-32 lg:h-44 xl:h-60 2xl:h-72 text-beige">
	<svg class="h-full overflow-visible" viewBox="0 0 386 200">
		<rect class="fill-current" x="0" y="0" width="180" height="150"/>
		<rect class="stroke-current fill-transparent stroke-6" x="3" y="153" width="174" height="44"/>
		<text class="font-bold fill-current text-sienna" x="90px" y="72px" text-anchor="middle" alignment-baseline="central" style="font-size:146px;">${date}</text>
		<text class="uppercase fill-current" x="90px" y="173.5px" text-anchor="middle" alignment-baseline="central" style="font-size:33px;">${month}</text>
		<text class="font-normal uppercase fill-current" x="221px" y="46px" style="font-size:65px;">${place}</text>
		<text class="font-thin fill-current" x="217px" y="199px" style="font-size:176px;">${time}</text>
	</svg>
</li>`;
	}
}

window.customElements.define('otto-event', OttoEvent);
