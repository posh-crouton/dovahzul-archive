(() => {
	let scrollDepth = 0;
	document.addEventListener("scroll", (event) => {
		let config = window.nav_scroll_ads_config || {id: false, header: false};
		if (!config.id || !config.header) {
			return;
		}
		let currentScrollDepth = window.pageYOffset || document.documentElement.scrollTop;
		let header = document.getElementById(config.header);
		let pushdownHeight = hasTopAd(config.id);
		if (header) {
			header.style.transition = "top 0.2s ease";
			if (pushdownHeight) {
				if (currentScrollDepth < scrollDepth) {
					header.style.top = pushdownHeight + "px";
					header.classList.add("down");
				} else if (currentScrollDepth > scrollDepth) {
					header.style.top = "";
					header.classList.remove("down");
				}
			} else {
				header.style.top = "";
				header.classList.remove("down");
			}
		}
		let primis = document.querySelector('body .primis-player div[id*="primis_playerSekindoSPlayer"][style*="overflow: hidden"][style*="position: fixed"]');
		if (primis) {
			primis.style.transition = "top 0.2s ease";
			if (pushdownHeight) {
				let body = document.querySelector("body");
				if (body) {
					if (currentScrollDepth < scrollDepth) {
						body.classList.add("pushdown")
					} else if (currentScrollDepth > scrollDepth) {
						body.classList.remove("pushdown")
					}
				}
			}
		}
		scrollDepth = currentScrollDepth <= 0 ? 0 : currentScrollDepth;
	}, false);
	function hasTopAd(id) {
		let pushdown = document.getElementById(id);
		if (pushdown) {
			return pushdown.offsetHeight;
		}
		return false;
	}
})();