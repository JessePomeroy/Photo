<script lang="ts">
	// State for mobile menu toggle
	let isMenuOpen = false;
	// Navigation items array - easy to modify/maintain
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Portfolio', href: '/portfolio' },
		{ name: 'Book', href: '/booking' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<!-- Main header element - fixed at the top -->
<header class="fixed top-0 z-50 w-full">
	
	<nav class="">
		<!-- Flex container for logo and nav -->
		<div class="flex items-center justify-between">
			<!-- Logo/Brand link -->
			<a href="/" class="text-xl font-bold"> angel's rest </a>

			<!-- Desktop Navigation - hidden on mobile (md:flex) -->
			<div class="hidden gap-10 md:flex">
				{#each navigation as item (item.href)}
					<a href={item.href} class="text-gray-600 transition-colors hover:text-black">
						{item.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button - hidden on desktop (md:hidden) -->
			<button
				class="md:hidden"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				aria-label="Toggle menu"
			>
				<!-- Hamburger icon -->
				<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen
							? 'M6 18L18 6M6 6l12 12' // X icon when menu is open
							: 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation - shows when isMenuOpen is true -->
		{#if isMenuOpen}
			<div class="w-full pt-4 pb-3 md:hidden">
				<!-- Flex column for mobile menu items -->
				<div class="flex flex-col items-end space-y-4">
					{#each navigation as item (item.href)}
						<!-- on:click event to close mobile menu on click -->
						<a
							href={item.href}
							class="text-gray-600 transition-colors hover:text-black"
							on:click={() => (isMenuOpen = false)}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>

<!-- Spacer to prevent content from hiding under fixed header -->
<div class="h-30"></div>

<!--
Tailwind classes explained:
- fixed: Position fixed on screen
- w-full: Width 100%
- top-0: Position at top of screen
- z-50: High z-index to stay above other content
- bg-white/80: White background with 80% opacity
- backdrop-blur-sm: Slight blur effect behind header
- container: Max-width container
- mx-auto: Center horizontally
- px-4: Padding left/right
- py-4: Padding top/bottom
- flex: Flexbox layout
- items-center: Vertical center alignment
- justify-between: Space between items
- hidden: Hide element
- md:flex: Display flex on medium screens and up
- space-x-8: Horizontal spacing between items
- space-y-4: Vertical spacing between items
-->
