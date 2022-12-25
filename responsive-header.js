function toggle_mobile_nav ()
{
    navs = document.getElementById("not-always-visible");
    let display = navs.style.display;
    console.log(display);
    if (display=="none")
    {
        
        navs.style.display = "";
    }
    else if (display == "")
    {
        navs.style.display = "none";
    }
}

let large_header = `
<header class="header">
		<div class="headerwrapper">
			<div class="logo"><img src="logo.png" alt="" /></div>
			<div class="space-between-logo-and-nav"></div>
			<nav id="leftnav" class="nav">
				<a href="#" class="nav-center-item">Home</a>
				<a href="#" class="nav-center-item">About</a>
				<a href="#" class="nav-center-item">Contact</a>
			</nav>
			<nav id="rightnav" class="nav">
				<button class="login nav-right-item">Login</button>
				<button class="signin nav-right-item">Signin</button>
				<button class="darkmode nav-right-item">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11 3V1M11 21V19M3 11H1M21 11H19M5.34 16.66L3.93 18.07M18.07 3.93L16.66 5.34M16.66 16.66L18.07 18.07M3.93 3.93L5.34 5.34"
							stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
						<path
							d="M11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15V15Z"
							fill="black" fill-opacity="0.16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
					</svg>
				</button>
			</nav>
		</div>
	</header>
` 
let small_header = `
<header class="header-mobile">
		<div class="always-visible">
			<div class="logo-mobile"><img src="logo.png" alt="" /></div>
			<div class="logo" onclick="toggle_mobile_nav()"><img src="https://img.icons8.com/ios/50/null/menu-rounded.png" /></div>
			<script>
			</script>
		</div>

		<div class="not-always-visible" id="not-always-visible">
			<div class="space-mobile"></div>
			<a href="#" class="nav-item-mobile">Home</a>
			<a href="#" class="nav-item-mobile">About</a>
			<a href="#" class="nav-item-mobile">Contact</a>
			<button class="login nav-item-mobile">Login</button>
			<button class="signin nav-item-mobile">Signin</button>
			<button class="darkmode nav-item-mobile">
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11 3V1M11 21V19M3 11H1M21 11H19M5.34 16.66L3.93 18.07M18.07 3.93L16.66 5.34M16.66 16.66L18.07 18.07M3.93 3.93L5.34 5.34"
						stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
					<path
						d="M11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15V15Z"
						fill="black" fill-opacity="0.16" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
				</svg>
			</button>
		</div>
	</header>

`

