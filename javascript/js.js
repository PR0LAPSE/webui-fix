function runTasks() {
	// внедрение перезаписывающих стилей
	setTimeout(() => {
		const styles = `
/* стили для переопределения с высоким приорететом */

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@font-face {
  font-family: 'emodji_webui';
  src: url('/file=./extensions-builtin/fix-webui/javascript/emodjiwebui.woff2');
}
:root,
html,
body,
gradio-app,
.gradio-container {
  font-family: "Roboto Condensed", sans-serif!important;
  --body-background-fill: #0b0f19;
  transition: 0.4s !important;
}
*:focus-visible {
	outline: none!important;
}
* {
  border-radius: 0px !important;
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.gradio-group .block.gradio-gallery, 
div[id$="gallery_container"] div[id$="gallery"],
div[id$="gallery_container"] > div[id$="gallery"],
.gradio-group:first-child,
.gradio-group:last-child,
div[id$="gallery_container"]:first-child,
div[id$="gallery_container"]:last-child {
  border-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.main > .wrap > .contain > div > .tabs > .tab-nav > button {
  --padding: 0.6em;
  font-size: 101% !important;
  padding-left: var(--padding);
  padding-right: var(--padding);
}
[id*=open_folder],
[id*=save_zip] {
  display: none !important;
}
#txt2img_batch_size,
#img2img_batch_size {
  display: none !important;
}
div[id$="_batch_count"] > div.wrap > div > label > span {
  visibility: hidden!important;
  position: absolute!important;
  left: -999px!important;
}
div[id$="_batch_count"] > div > div > label > span::after {
  content: "сколько сгенерировать изображений";
  visibility: visible!important;
  position: absolute!important;
  left: 999px!important;
  min-width: 350px!important;
  max-width: 350px!important;
  width: 350px!important;
}
.secondary.tool {
  background: none!important;
  border:none!important;
}
#quicksettings {
  position: relative!important;
  margin: 45px auto 15px auto!important;
  padding: 30px!important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center!important;
  align-items: center!important;
}
#quicksettings > div,
#quicksettings > fieldset {
  height: 47px !important;
  padding: 0 !important;
  border: none!important;
  box-shadow: none!important;
  margin-right: 10px!important;
  background: rgba(0, 0, 0, 0) !important;
}
#quicksettings > div:not(#setting_sd_vae_as_default),
#quicksettings > div:not(#setting_do_not_show_images),
#quicksettings > fieldset {
  max-width: 250px;
  min-width: 250px;
  width: 250px;
}
#setting_sd_vae_as_default,
#setting_sd_vae_as_default span,
#setting_sd_vae_as_default > label,
#setting_sd_vae_as_default > label > span {
  width: 80px !important;
  max-width: 80px !important;
  min-width: 80px !important;
  line-height: 16px!important;
  top: 8px!important;
}
#setting_do_not_show_images {
  width: 46px !important;
  max-width: 46px !important;
  min-width: 46px !important;
}
#setting_do_not_show_images > label {
  top: 10px!important;
  position: relative!important;
}
#setting_do_not_show_images > label > span {
  width: 24px !important;
  height: 24px !important;
  max-width: 24px !important;
  min-width: 24px !important;
  line-height: 16px!important;
  display: inline-block !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='799.9' y1='400' y2='400' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bf3a00'/%3E%3Cstop offset='1' stop-color='%23820002'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='52' x2='748' y1='400.05' y2='400.05' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2375edfd'/%3E%3Cstop offset='.5' stop-color='%2375f2ff'/%3E%3Cstop offset='.5' stop-color='%235dd3f9'/%3E%3Cstop offset='1' stop-color='%235ddbff'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='174' x2='391' y1='261.5' y2='261.5' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffda44'/%3E%3Cstop offset='.5' stop-color='%23ffd43c'/%3E%3Cstop offset='.5' stop-color='%23ffac02'/%3E%3Cstop offset='1' stop-color='%23fa0'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' x1='300' x2='417.18' y1='369.03' y2='369.03' gradientTransform='matrix(8.66 0 0 1 -2710.2 36.44)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bf3a00'/%3E%3Cstop offset='1' stop-color='%23820002'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='799.9' height='799.9' y='.05' fill='url(%23a)' rx='77.97' ry='77.97'/%3E%3Crect width='696' height='696' x='52' y='52.05' fill='url(%23b)' rx='34.47' ry='34.47'/%3E%3Cpath fill='%2366b31b' d='M360.29 542.11 237.47 419.29c-12.08-12.08-31.32-12.08-43.4 0L52.01 561.36v155.99c0 2.05.2 4.09.61 6.14 2.86 14.12 15.15 24.57 30.09 24.57h102.35c8.19 0 15.97-3.28 21.7-9.01l153.53-153.53c12.08-12.08 12.08-31.32 0-43.4Z'/%3E%3Cpath fill='%237bd921' d='M575.23 326.97c-12.08-11.87-31.32-11.87-43.4 0L400 458.8 110.96 748.05H717.3c16.99 0 30.71-13.71 30.71-30.71v-217.6L575.24 326.97Z'/%3E%3Cpath fill='%2366b31b' d='M748 499.74v217.6c0 16.99-13.71 30.71-30.71 30.71H400V458.8l131.83-131.83c12.08-11.87 31.32-11.87 43.4 0L748 499.74Z'/%3E%3Ccircle cx='282.5' cy='261.5' r='108.5' fill='url(%23c)'/%3E%3Cpath fill='url(%23d)' d='M-112.32 379.44h1014.7v52.05h-1014.7z' transform='rotate(45 395.03 405.467)'/%3E%3C/svg%3E");
}
#quicksettings #setting_CLIP_stop_at_last_layers > input[type=range] {
  position: relative;
  top:4px!important;
}
#quicksettings #setting_sd_vae_as_default {
  position: relative;
  top:13px!important;
}
#quicksettings #setting_do_not_show_images {
  position: relative;
  top:7px!important;
}
#quicksettings #setting_CLIP_stop_at_last_layers,
#quicksettings #setting_extra_networks_default_multiplier {
  position: relative;
  top: 8px
}
#quicksettings > button:nth-child(n) {
  padding: 0 !important;
  position: relative!important;
  top: -18px!important;
  left: -5px!important;
  margin-right: 15px!important;
  --w: 20px;
  width: var(--w) !important;
  height: var(--w) !important;
  max-width: var(--w) !important;
  min-width: var(--w) !important;
}
svg#refresh {
  --s: 20px;
  width: var(--s) !important;
  height: var(--s) !important;
  max-width: var(--s) !important;
  min-width: var(--s) !important;
}
#quicksettings svg#refresh {
  --s: 20px;
  margin-top: calc(var(--s) / 2) !important;
}
.header_settings {
  width: 100%;
  text-align: center;
  position: absolute;
  top: -50px;
  margin-left:auto;
  margin-right:auto;
  z-index: 1;
  font-size: 1.5em!important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 0 !important;
  pointer-events: none!important;
  transition: 0.3s;
}

input[type="number"]:hover::-webkit-inner-spin-button,
input[type="number"]:hover::-webkit-outer-spin-button {
  opacity: 1 !important;
  pointer-events: auto !important;
}

@supports (-moz-appearance: none) {
  input[type="number"] {
    -moz-appearance: textfield!important;
    appearance: textfield!important;
  }

  input[type="number"]:hover {
    -moz-appearance: auto;
    appearance: number-spinner!important;
  }
}
div[id$="_size_toolbox"] {
  display: flex !important;
}
select[id$="_select_aspect_ratio"] {
  background-color: var(--body-background-fill) !important;
  color: var(--body-text-color) !important;
  border-color: var(--border-color-primary) !important;
}
select[id$="_select_aspect_ratio"] {
  text-align: center !important;
  font-family: emodji_webui, sans-serif !important;
}
[id$="_res_switch_btn"] {
  margin-left: 10px !important;
  position: relative !important;
  top:-10px !important;
}
div[id$="_seed_row"] svg {
  position: relative!important;
  top:-13px!important;
}
#refresh_txt2img_styles,
#refresh_img2img_styles {
  padding: 0 !important;
  height: 36px !important;
  width: 36px !important;
  max-width: 36px !important;
  min-width: 36px !important;
}
#img2img_toprow > .interrogate-col {
  gap: 14px !important;
}
#img2img_toprow > .interrogate-col > button#interrogate,
#img2img_toprow > .interrogate-col > button#deepbooru {
  --interrogate-buttons: 95px;
  height: var(--interrogate-buttons) !important;
  min-height: var(--interrogate-buttons) !important;
  max-height: var(--interrogate-buttons) !important;
}
#img2img_actions_column, #txt2img_actions_column {
  gap: 18px!important;
}
#txt2img_tools > div.form > button,
#img2img_tools > div.form > button {
  max-width: 100% !important;
}
div[id$="img_tools"] > div.form > button[id$="_extra_networks"] {
  order: 999!important;
}
div[id$="_prompt_container"] {
  gap:25px!important;
}
#txt2img_prompt textarea,
#img2img_prompt textarea {
  color: #d8ffdc!important;
  height: 93px!important;
}
#txt2img_neg_prompt textarea,
#img2img_neg_prompt textarea {
  color: #fce3e3!important;
  height: 85px!important;
}
.prompt_clear {
  fill: #ff000045;
  position: absolute;
  bottom: 7px;
  right: 7px;
  cursor: pointer;
  transition: 0.3s;
}
.prompt_clear:hover {
  fill: #ff0000e8;
}
.up_arrow {
  cursor: pointer;
  position: fixed;
  background-color: transparent;
  right: 2em;
  bottom: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
}
/* отступ для таймера */
#tabs > div:nth-child(1) {
  width: calc(100vw - 150px)!important;
}
.modalControls {
  display: flex!important;
  flex-direction: row!important;
  flex-wrap: wrap!important;
  align-content: center!important;
  justify-content: center!important;
  align-items: center!important;
  background-color: rgba(0, 0, 0, .6)!important;
  text-align: center!important;
  padding:0!important;
}
.modalClose {
	margin-left: 0!important;
}
#lightboxModal > div {
  height:58px!important;
}
#lightboxModal > div > span {
  width: 48px!important;
  height: 48px!important;
}
#lightboxModal > div > span > svg {
  color:#ffffffa1;
  fill: #ffffffa1;
  transition: 0.3s;
}
#lightboxModal > div > span > svg:hover {
  color:#ffffffcf;
  fill: #ffffffcf;
}
#script_list {
  margin-top: 1.2em!important;
}
.extra-network-cards .card{
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 768'%3E%3Cpath fill='%23acb0b1' d='M0 0h512v768H0z'/%3E%3Cg fill='none' stroke='%23646f84' stroke-linecap='round' stroke-linejoin='round' stroke-width='11.3'%3E%3Cpath d='M222.75 580.97c-68.49 67.23-187.26 18.02-186.94-79.13-.21-59.99 48.85-110.29 110.22-110.22l-16.75 1.29c68.62-11.17 131.39 46.32 126.82 115.33 0 60.87 49.35 110.22 110.22 110.22 115.4-1.31 151.61-153.77 51.6-207.64-40.35-22.62-96.64-14.13-128.38 18.25m-143.76-61.96V159.87C145.78 99 195.13 49.65 256 49.65S366.22 99 366.22 159.87v207.24'/%3E%3Cpath d='M366.22 192.65C334 211.98 296.3 223.1 256 223.1s-78-11.12-110.22-30.45m56.31-28.14a246.97 246.97 0 0 0 52.69-69.96c15.48 27.01 33.68 50.55 55.13 69.96'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.gradio-button.secondary-down:not(:empty) {
  background: transparent !important
}
.gradio-button.secondary-down .icons {
  background: #fff7001c!important;
}
* {
  --slider-background: var(	--checkbox-border-color-hover)!important;
  --slider-thumb: var(--input-border-color)!important;
  --slider-focus: var(--button-secondary-text-color)!important;
  --slider-fill-lower: var(--slider-background)!important;
  --slider-track-height: 10px!important;
  --slider-thumb-width: 20px!important;
  --slider-thumb-height: 20px!important;
  --slider-thumb-radius: 50%!important;
}
input[type=range] {
  background-color: transparent!important;
  -webkit-appearance: none!important;
}
input[type=range]:focus {
  outline: none!important;
}
input[type=range]::-webkit-slider-runnable-track {
  background: var(--slider-background)!important;
  border: 0!important;
  width: 100%!important;
  height: var(--slider-track-height)!important;
  transition: 0.4s!important;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: calc(var(--slider-thumb-height) / -4)!important;
  width: var(--slider-thumb-width)!important;
  height: var(--slider-thumb-height)!important;
  background: var(--slider-thumb)!important;
  border: 0!important;
  cursor: pointer!important;
  border-radius: var(--slider-thumb-radius)!important;
  -webkit-appearance: none!important;
  box-shadow: 0 0 10px var(--background-fill-secondary)!important;
  transition: 0.4s!important;
}
input[type=range]:hover::-webkit-slider-runnable-track {
  background: var(--slider-focus)!important;
  transition: 0.4s;
}
input[type=range]::-moz-range-track {
  background: var(--slider-background)!important;
  border: 0!important;
  width: 100%!important;
  height: var(--slider-track-height)!important;
}
input[type=range]::-moz-range-thumb {
  width: var(--slider-thumb-width)!important;
  height: var(--slider-thumb-height)!important;
  background: var(--slider-thumb)!important;
  border: 0!important;
  border-radius: var(--slider-thumb-radius)!important;
  cursor: pointer!important;
  box-shadow: 0 0 10px var(--background-fill-secondary)!important;
  transition: 0.4s!important;
}
input[type=range]::-ms-track {
  background: transparent!important;
  border-color: transparent!important;
  border-width: 0!important;
  color: transparent!important;
  width: 100%;
  height: var(--slider-track-height)!important;
}
input[type=range]::-ms-fill-lower {
  background: var(--slider-fill-lower)!important;
  border: 0!important;
}
input[type=range]::-ms-fill-upper {
  background: var(--slider-background)!important;
  border: 0!important;
}
input[type=range]::-ms-thumb {
  width: var(--slider-thumb-width)!important;
  height: var(--slider-thumb-height)!important;
  background: var(--slider-thumb)!important;
  border: 0!important;
  border-radius: var(--slider-thumb-radius)!important;
  cursor: pointer!important;
  margin-top: 0px!important;
  box-shadow: 0 0 10px var(--background-fill-secondary)!important;
  transition: 0.4s!important;
}
input[type=range]:focus::-ms-fill-lower {
  background: var(--slider-background)!important;
}
input[type=range]:focus::-ms-fill-upper {
  background: var(--slider-focus)!important;
}
@supports (-ms-ime-align:auto) {
  input[type=range] {
    margin: 0!important;
  }
}
.item.svelte-1oas11n {
  background: var(--neutral-800)
}
#colab_model_list > p > code {
  white-space: normal!important;
	border: none!important;
}
input[type=checkbox].gr-check-radio.gr-checkbox {
filter: hue-rotate(var(--hue-rotate-checkbox));
}
#color_theme {
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
select {
	background-color: var(--input-background-fill) !important;
	border-color: var(--border-color-primary) !important;
	background-image: none !important;
}
select option  {
	background-color: var(--input-background-fill) !important;
}
#color_theme:after {
	content: "˅"!important;
	position: relative!important;
	display: block!important;
	z-index: 9999!important;
	font-family: monospace !important;
	font-size: 2em !important;
	top:10px !important;
	right:30px !important;
	margin:0 !important;
	padding: 0 !important;
}
#color_theme_select {
	height: 36px !important;
	padding: 0 33px 0 10px !important;
}
.gradio-button,
.svelte-1ojmf70,
button,
.primary.svelte-1ipelgc,
.secondary.svelte-1ipelgc,
lavel,
.svelte-1p9xokt,
label.svelte-1p9xokt.svelte-1p9xokt.svelte-1p9xokt {
	transition: 0.4s !important
}
label.svelte-1p9xokt.svelte-1p9xokt.svelte-1p9xokt {
	border: none!important;
}
input[type=radio] {
	border-radius: 50% !important;
}
table td, table td, table th {
	border-color: var(--button-secondary-text-color) !important;
}
fieldset label:hover:not(.selected) {
	color: var(--neutral-900)!important;
}
.progressDiv .progress {
  background: linear-gradient(to right, var(--checkbox-border-color-hover), var(--button-primary-border-color)) !important;
  background-size: 200% 100%;
  animation: rainbow 5s ease-in-out infinite;
}
@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.dark .progressDiv {
	background: var(--button-secondary-background-fill-hover) !important;
}
.gradio-button.generate-box-interrupt,
.gradio-button.generate-box-skip {
	background: var(--button-secondary-background-fill) !important;
}
.icons svg {
	filter: brightness(0.8);
	transition: 0.2s;
}
.icons svg:hover {
	transition: 0.2s;
	filter: brightness(1);
}
.autocompleteResults {
	border-radius: 0!important;
	box-shadow: 0 0 10px #000;
}
#footer > div:nth-child(1) > a {
	padding: 0 5px
}
#settings_restart_gradio, #tab_settings > div > div.gradio-row > div:nth-child(2),
#download_localization{
  display: none;
}
#settings_submit {
  max-width: 350px;
  height: 50px;
  margin-top: 15px;
  margin-bottom: -40px;
  margin-left: auto;
  margin-right: auto;
}
[id$="_random_subseed"] > div.icons,
[id$="_reuse_subseed"] > div.icons {
  position: relative !important;
  top:-15px!important;
}
[id$="_random_subseed"] > div.icons > svg,
[id$="_reuse_subseed"] > div.icons > svg {
  transform: scale(0.7)!important
}
svg.svelte-zyxd38 {
  display:none!important;
}
#settings > div.tab-nav.scroll-hide {
  width: 200px!important;
  margin-right: 10px!important;
}
#settings > div.tab-nav.scroll-hide > button {
  padding-left: 0!important;
  padding-right: 7px!important;
}
#settings > div.tab-nav.scroll-hide > button:nth-child(even) {
  background-color: #ffffff0a!important;
  min-width: 200px!important;
}
#settings > div.tab-nav.scroll-hide > button.selected {
  background-color: #ffffff38!important;
}
#settings > div.tab-nav.scroll-hide > button:nth-last-child(2) {
  display: none;
}
		`;
		document.querySelector("body > gradio-app > div.gradio-container > style").insertAdjacentHTML("beforeend", styles);
	}, 5000);
	//перемещение вкладки настроек в конец
	setTimeout(() => {
		const NastroykiButton = document.querySelectorAll('#tabs > div.tab-nav > button');
		NastroykiButton.forEach(NastroykiButton => {
		  if (NastroykiButton.textContent.trim().toLowerCase() === 'настройки') {
			NastroykiButton.style.order = '999';
		  }
		});
		const SettingsButton = document.querySelectorAll('#tabs > div.tab-nav > button');
		SettingsButton.forEach(SettingsButton => {
		  if (SettingsButton.textContent.trim().toLowerCase() === 'settings') {
			SettingsButton.style.order = '999';
		  }
		});
	}, 2000);
	// скрипт перемещения панели быстрых настроек в самый низ перед слоем footer
	setTimeout(() => {
		const observer = new MutationObserver(function (mutationsList, observer) {
			for (const mutation of mutationsList) {
				if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
					const gradio_App = document.querySelector("body > gradio-app");
					const footer_div = document.querySelector("#footer");
					const quickSettings = document.querySelector("#quicksettings");

					if (footer_div && quickSettings) {
						const header = document.createElement('h3');
						header.classList.add('header_settings');
						header.textContent = 'быстрые настройки:';
						quickSettings.insertAdjacentHTML('afterbegin', header.outerHTML);
						footer_div.parentNode.insertBefore(quickSettings, footer_div);
						observer.disconnect();
						clearInterval(intervalId);
						return;
					}
				}
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });

		const intervalId = setInterval(function () {
			const gradio_App = document.querySelector("body > gradio-app");
			const footer_div = document.querySelector("#footer");
			const quickSettings = document.querySelector("#quicksettings");

			if (footer_div && quickSettings) {
				footer_div.parentNode.insertBefore(quickSettings, footer_div);
				observer.disconnect();
				clearInterval(intervalId);
				return;
			}
		}, 100);
	}, 1000);

	// новый инлайн-стиль body
	setTimeout(() => {
		const bodystyle = "background: var(--body-background-fill) !important; margin: 0 !important; padding: 0 !important; top: 0 !important; left: 0 !important;";
		const waitUntilLoaded = setInterval(() => {
			if (document.body && document.body.style.cssText !== bodystyle) {
				document.body.removeAttribute('style');
				document.body.style.cssText = bodystyle;
				clearInterval(waitUntilLoaded);
			}
		}, 500);
	}, 9000);

// цветовые схемы
setTimeout(() => {
const colorTheme = document.createElement("div");
colorTheme.id = "color_theme";
colorTheme.innerHTML = `
  <select id="color_theme_select">
    <option value="theme1">выделения содомии</option>
    <option value="theme2">натруженный пролапс</option>
    <option value="theme3">минет под одеялом</option>
    <option value="theme4">некроз препуция</option>
	<option value="theme5">тоска по члену</option>
    <option value="theme6">фистинг баклажаном</option>
    <option value="">стандартная тема</option>
  </select>
  
`;
const AppContainer = document.querySelector("body > gradio-app > div.gradio-container > div.main > div.wrap > div.contain > div.gap");
const BottomFooter = document.querySelector("#footer");
AppContainer.insertBefore(colorTheme, BottomFooter);

const styles = [
  `
* { /* выделения содомии */
	--background-fill-primary: #1a120e !important;
  --body-background-fill: #251a15 !important;
  --border-color-primary: #c2a878 !important;
  --input-background-fill: #1a120e !important;
  --button-primary-border-color: #c2a878 !important;
  --button-primary-background-fill: #6c4a2f !important;
  --background-fill-secondary: #3c2a1e !important;
  --button-secondary-background-fill: #4c3a2f !important;
  --button-secondary-background-fill-hover: #3c2a1e !important;
  --button-secondary-border-color: #c2a878 !important;
  --checkbox-label-background-fill: #4c3a2f !important;
  --checkbox-background-color: #3c2a1e !important;
  --checkbox-background-color-selected: #c2a878 !important;
  --checkbox-border-color-focus: #c2a878 !important;
  --checkbox-border-color-hover: #c2a878 !important;
  --checkbox-border-color-selected: #c2a878 !important;
  --checkbox-label-background-fill-hover: #c2a878 !important;
  --button-primary-background-fill-hover: #4c3a2f !important;
  --button-secondary-text-color: #cd8657 !important;
  --block-title-text-color: var(--button-secondary-text-color);
  --body-text-color: #c2a878 !important;
  --neutral-900: #1a120e !important;
  --neutral-800: #251a15 !important;
  --neutral-100: var(--button-secondary-text-color) !important;
  --neutral-400: var(--checkbox-label-background-fill-hover) !important;
}
input[type=checkbox].gr-check-radio.gr-checkbox {
filter: hue-rotate(200deg) sepia(0.2);
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--neutral-900) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
* { /* натруженный пролапс */
  --background-fill-primary: #130c17 !important;
  --body-background-fill: #0d0717 !important;
  --border-color-primary: #a90839 !important;
  --input-background-fill: #2e0424 !important;
  --button-primary-border-color: #fb6c98 !important;
  --button-primary-background-fill: #ff0057 !important;
  --background-fill-secondary: #17030b !important;
  --button-secondary-background-fill: #2f1428 !important;
  --button-secondary-background-fill-hover: #5c0a34 !important;
  --button-secondary-border-color: #e8064b !important;
  --checkbox-label-background-fill: #ff009700 !important;
  --checkbox-background-color: #75052e !important;
  --checkbox-background-color-selected: #FF4081 !important;
  --checkbox-border-color-focus: #3408f4f0 !important;
  --checkbox-border-color-hover: #5c0a34 !important;
  --checkbox-border-color-selected: #f6c1e0 !important;
  --checkbox-label-background-fill-hover: #2f1428 !important;
  --button-primary-background-fill-hover: #FF4081 !important;
  --button-secondary-text-color: #f65985 !important;
  --body-text-color: #FFC4D6 !important;
  --neutral-900: #e8064b !important;
  --neutral-800: #2f1428 !important;
  --hue-rotate-checkbox: 120deg;
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--checkbox-border-color-hover) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
* { /* минет под одеялом */
  --body-background-fill: #0f0e12 !important;
  --border-color-primary: #34323d !important;
  --input-background-fill: #16151b !important;
  --button-primary-border-color: #2b2a31 !important;
  --button-primary-background-fill: #00695C !important;
  --background-fill-secondary: #1f1e24 !important;
  --button-secondary-background-fill: #30343b !important;
  --button-secondary-background-fill-hover: #37474F !important;
  --button-secondary-border-color: #37474F !important;
  --checkbox-label-background-fill: #29282e !important;
  --checkbox-background-color: #24232a !important;
  --checkbox-background-color-selected: #6b6a6f !important;
  --checkbox-border-color-focus: #b4b3b8 !important;
  --checkbox-border-color-hover: #d7d6db !important;
  --checkbox-border-color-selected: #b4b3b8 !important;
  --checkbox-label-background-fill-hover: #37474f !important;
  --button-primary-background-fill-hover: hsl(250, 12%, 31%) !important;
  --button-secondary-text-color: #b4b3b8 !important;
  --body-text-color: #d7d6db !important;
  --neutral-900: #1d1c22 !important;
  --neutral-800: #29282e !important;
  --background-fill-primary: #0e0d11 !important;
}
input[type=checkbox].gr-check-radio.gr-checkbox {
filter: hue-rotate(312deg) grayscale(0.65);
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--neutral-900) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
* { /*препуций мертвеца */
  --body-background-fill: #0c0f1a !important;
  --border-color-primary: #6c7cbf !important;
  --input-background-fill: #151f33 !important;
  --button-primary-border-color: #b1c7f7 !important;
  --button-primary-background-fill: #6c7cbf !important;
  --background-fill-secondary: #2b3c5d !important;
  --button-secondary-background-fill: #3f4f7e !important;
  --button-secondary-background-fill-hover: #2b3c5d !important;
  --button-secondary-border-color: #b1c7f7 !important;
  --checkbox-label-background-fill: #2b3c5d !important;
  --checkbox-background-color: #1e2a3e !important;
  --checkbox-background-color-selected: #6c7cbf !important;
  --checkbox-border-color-focus: #b1c7f7 !important;
  --checkbox-border-color-hover: #7f8fb3 !important;
  --checkbox-border-color-selected: #b1c7f7 !important;
  --checkbox-label-background-fill-hover: #b1c7f7 !important;
  --button-primary-background-fill-hover: #455d8f !important;
  --button-secondary-text-color: #a9bade !important;
  --body-text-color: #b1c7f7 !important;
  --neutral-900: #263d4e !important;
  --neutral-800: #151f33 !important;
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--neutral-900) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
* { /* тоска по члену */
  --body-background-fill: #131313 !important;
  --border-color-primary: #404040 !important;
  --input-background-fill: #1e1e1e !important;
  --button-primary-border-color: #4c4c4c !important;
  --button-primary-background-fill: #313131 !important;
  --background-fill-secondary: #1b1b1b !important;
  --button-secondary-background-fill: #171717 !important;
  --button-secondary-background-fill-hover: #111111 !important;
  --button-secondary-border-color: #767676 !important;
  --checkbox-label-background-fill: #191919 !important;
  --checkbox-background-color: #1a1a1a !important;
  --checkbox-background-color-selected: #585858 !important;
  --checkbox-border-color-focus: #828282 !important;
  --checkbox-border-color-hover: #9d9d9d !important;
  --checkbox-border-color-selected: #919191 !important;
  --checkbox-label-background-fill-hover: #cbcbcb !important;
  --button-primary-background-fill-hover: #232323 !important;
  --button-secondary-text-color: #a4a4a4 !important;
  --body-text-color: #d2d2d2 !important;
  --neutral-900: #4e4e4e !important;
  --neutral-800: #2b2b2b!important;
  --background-fill-primary: #111 !important;
  --hue-rotate-checkbox: 0deg;
}
input[type=checkbox].gr-check-radio.gr-checkbox {
filter: grayscale(1);
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--background-fill-secondary) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
* { /* фистинг баклажаном */
  --body-background-fill: #140d19 !important;
  --border-color-primary: #500573 !important;
  --input-background-fill: #221727 !important;
  --button-primary-border-color: #740587 !important;
  --button-primary-background-fill: #3c035a !important;
  --background-fill-secondary: #1d0332 !important;
  --button-secondary-background-fill: #1f022c !important;
  --button-secondary-background-fill-hover: #15061c !important;
  --button-secondary-border-color: #8040ab !important;
  --checkbox-label-background-fill: #27042f !important;
  --checkbox-background-color: #210330 !important;
  --checkbox-background-color-selected: #60099b !important;
  --checkbox-border-color-focus: #a70ae5 !important;
  --checkbox-border-color-hover: #340141 !important;
  --checkbox-border-color-selected: #bc06ff !important;
  --checkbox-label-background-fill-hover: #d6c0c3 !important;
  --button-primary-background-fill-hover: #300342 !important;
  --button-secondary-text-color: #b87ecb !important;
  --body-text-color: #eeb6ee !important;
  --neutral-900: #511b7f !important;
  --neutral-800: #2d0e47 !important;
  --background-fill-primary: #140d1a !important;
  --hue-rotate-checkbox: 63deg;
}
.autocompleteResults {
  border-radius: 0!important;
  background-color: var(--background-fill-secondary) !important;
  border: 1px solid var(--checkbox-background-color-selected) !important;
  box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
  background-color: var(--body-background-fill);
}
  `,
  `
  `,
];

const setStyle = (index) => {
  const style = document.querySelector(`[data="user_theme"]`);
  if (style) {
    style.innerHTML = styles[index];
  } else {
    const newStyle = document.createElement("style");
    newStyle.setAttribute("data", "user_theme");
    newStyle.innerHTML = styles[index];
    document.querySelector("body").appendChild(newStyle);
  }
  document.cookie = `color_theme=${index}; domain=.gradio.app; path=/`;
  document.cookie = `color_theme=${index}; domain=.gradio.live; path=/`;
  document.cookie = `color_theme=${index}; domain=.ngrok.io; path=/`;
  document.cookie = `color_theme=${index}; domain=127.0.0.1; path=/`;
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const index = getCookie("color_theme");
if (index) {
  document.querySelector("#color_theme_select").selectedIndex = index;
  setStyle(index);
}

document.querySelector("#color_theme_select").addEventListener("change", (event) => {
  const index = event.target.selectedIndex;
  setStyle(index);
});

document.querySelector("#color_theme_select").addEventListener("blur", () => {
  const index = document.querySelector("#color_theme_select").selectedIndex;
  setStyle(index);
});
}, 5000);

	// изменение лейблов быстрых настроек
	setTimeout(() => {
		const extraNetworksSpan = document.querySelector("#setting_extra_networks_default_multiplier > div > div > label > span");
		extraNetworksSpan.textContent = 'экстрасети';
		const vaeSpan = document.querySelector("#setting_sd_vae_as_default > label > span");
		vaeSpan.textContent = 'VAE от модели';
		const clipSpan = document.querySelector("#setting_CLIP_stop_at_last_layers > div > div > label");
		clipSpan.textContent = 'CLIP-skip';
		const ImgOutputSpan = document.querySelector("#setting_do_not_show_images > label > span");
		ImgOutputSpan.textContent = '';
		const hypernetworkSpan = document.querySelector("#setting_sd_hypernetwork > label > span");
		hypernetworkSpan.textContent = 'гиперсеть в запрос';
	}, 9000);

	// перемещение кнопки
	setTimeout(() => {
		setTimeout(() => {
			const save_txt2imgButton = document.querySelector("button#save_txt2img");
			const image_buttons_txt2imgDiv = document.querySelector('div#image_buttons_txt2img');
			image_buttons_txt2imgDiv.appendChild(save_txt2imgButton);
		}, 500);
		setTimeout(() => {
			const save_img2imgButton = document.querySelector('button#save_img2img');
			const image_buttons_img2imgDiv = document.querySelector('div#image_buttons_img2img');
			image_buttons_img2imgDiv.appendChild(save_img2imgButton);
		}, 500);
		setTimeout(() => {
			const openfolder_t = document.querySelector('#image_buttons_txt2img > button:nth-child(1)');
			if (openfolder_t) { openfolder_t.remove(); }
			const openfolder_i = document.querySelector('#image_buttons_img2img > button:nth-child(1)');
			if (openfolder_i) { openfolder_i.remove(); }
			const folder_zip_t = document.querySelector("#save_zip_txt2img");
			if (folder_zip_t) { folder_zip_t.remove(); }
			const folder_zip_i = document.querySelector("#save_zip_img2img");
			if (folder_zip_i) { folder_zip_i.remove(); }
			const openfolder_e = document.querySelector("#image_buttons_extras > button:nth-child(1)")
			if (openfolder_e) { openfolder_e.remove(); }
		}, 500);
	}, 9000);

	// замена эмодзи на svg-иконки
	setTimeout(() => {
		function replaceValues(node) {
			const text = node.nodeValue;
			const replacedText = text.replace(/↙️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor"  d="m26.23,44v-3.07h13.5s0-29.77,0-29.77h-5.42s0,6.65,0,6.65H15.38v-6.65s-5.42,0-5.42,0v15.55h-3.07v-15.55c0-.85.3-1.58.9-2.17.6-.6,1.32-.9,2.17-.9h9.87c.24-1.19.83-2.17,1.76-2.94.94-.77,2.02-1.15,3.25-1.15,1.23,0,2.31.38,3.25,1.15.94.77,1.53,1.75,1.76,2.94h10.79c.38,0,.83.3,1.36.9.53.6.79,1.32.79,2.17v29.77c0,.85-.3,1.58-.9,2.17-.6.6-1.32.9-2.17.9h-13.5Zm.08-33.63c.39-.39.59-.88.59-1.46s-.2-1.07-.59-1.46c-.39-.39-.88-.59-1.46-.59s-1.07.2-1.46.59c-.39.39-.59.88-.59,1.46,0,.58.2,1.07.59,1.46.39.39.88.59,1.46.59s1.07-.2,1.46-.59ZM2.8,36.53l7.47-7.47,2.15,2.15-3.79,3.79h13.4v3.07h-13.4s3.79,3.79,3.79,3.79l-2.15,2.15-7.47-7.47Zm31.52-15.77H15.37v2.45h18.95v-2.45Zm0,5.69H15.37v2.45h18.95v-2.45Z"/></svg></div>').replace(/🗑/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m21.13,22.09h5.74v-13.4c0-.8-.27-1.48-.81-2.03-.54-.56-1.23-.84-2.06-.84s-1.48.27-2.03.81-.84,1.23-.84,2.06v13.4Zm-11.48,8.61h28.71v-5.74H9.64v5.74Zm-3.06,11.48h6.41v-4.31c0-.41.14-.76.41-1.03.27-.27.61-.41,1.03-.41s.76.14,1.03.41c.27.27.41.61.41,1.03v4.31h6.7v-4.31c0-.41.14-.76.41-1.03.27-.27.61-.41,1.03-.41s.76.14,1.03.41c.27.27.41.61.41,1.03v4.31h6.7v-4.31c0-.41.14-.76.41-1.03s.61-.41,1.03-.41.76.14,1.03.41.41.61.41,1.03v4.31h6.41l-2.39-9.57H8.97l-2.39,9.57Zm33.59,2.87H7.83c-1.24,0-2.25-.49-3.01-1.48-.77-.99-.99-2.09-.67-3.3l2.63-10.53v-3.83c0-1.05.37-1.95,1.12-2.7.75-.75,1.65-1.12,2.7-1.12h7.66v-13.4c0-1.6.56-2.95,1.67-4.07,1.12-1.12,2.47-1.67,4.07-1.67s2.95.56,4.07,1.67c1.12,1.12,1.67,2.47,1.67,4.07v13.4h7.66c1.05,0,1.95.37,2.7,1.12.75.75,1.12,1.65,1.12,2.7v3.83l2.63,10.53c.32,1.21.1,2.31-.67,3.3-.77.99-1.77,1.48-3.01,1.48Zm-1.82-20.1H9.64h28.71Zm-11.48-2.87h-5.74,5.74Z"/></svg></div>').replace(/🎴/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m19.02,15.08l2.5-.93,6.42,17.36,8.28-3.1.78,2.11-10.78,4.03-7.2-19.47Zm-4.59-1.89l16.5-6-16.5,6Zm-2.31,28.62l-1.19-.37c-1.11-.49-1.86-1.32-2.26-2.5-.4-1.18-.29-2.35.34-3.5l3.11-7.09v13.46Zm-5.96-4.15l-.97-.78c-.85-.86-1.24-1.92-1.17-3.17.07-1.25.6-2.29,1.6-3.12l5.51-5.43-4.96,12.5Zm12.53,6.34c-2.37,0-4.26-1.9-4.26-4.28v-10.8l4.77,13.67c.14.55.47.99.83,1.41h-1.35Zm6.64-.65c-.73.31-1.49.24-2.28-.21-.8-.45-1.37-1.08-1.71-1.88L11.42,14.18c-.35-.8-.31-1.58.1-2.35.42-.76,1.06-1.32,1.92-1.67l16.5-6c.8-.28,1.57-.21,2.34.21.76.42,1.32,1.04,1.66,1.88l9.91,26.76c.24.87.19,1.72-.16,2.56-.35.83-.95,1.41-1.82,1.72l-16.55,6.05Zm-.99-3.03l16.5-6.05L30.93,7.19l-16.5,6,9.91,27.13Z"/></svg></div>').replace(/📋/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m8.7,42c-.87,0-1.58-.28-2.15-.85-.57-.57-.85-1.28-.85-2.15V9c0-.87.28-1.58.85-2.15s1.28-.85,2.15-.85h10.4c.23-1.17.81-2.12,1.73-2.88.92-.75,1.98-1.12,3.17-1.12s2.26.38,3.17,1.12c.92.75,1.49,1.71,1.73,2.88h10.4c.87,0,1.58.28,2.15.85.57.57.85,1.28.85,2.15v30c0,.87-.28,1.58-.85,2.15-.57.57-1.28.85-2.15.85H8.7Zm0-3h30.6V9h-3.3v4.5H12v-4.5h-3.3v30Zm15.3-30c.57,0,1.04-.19,1.42-.57.38-.38.58-.86.58-1.43s-.19-1.04-.58-1.43c-.38-.38-.86-.57-1.42-.57s-1.04.19-1.42.57c-.38.38-.58.86-.58,1.43s.19,1.04.58,1.43c.38.38.86.57,1.42.57Zm12,7.56H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Z"/></svg></div>').replace(/💾/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m22.45,37h3v-7.15h7.1v-3h-7.1v-7.1h-3v7.1h-7.2v3h7.2v7.15Zm-12.6,7c-.8,0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V7c0-.8.3-1.5.9-2.1.6-.6,1.3-.9,2.1-.9h19.85l11.45,10.95v26.05c0,.8-.3,1.5-.9,2.1-.6.6-1.3.9-2.1.9H9.85Zm18.35-27.7V7H9.85v34h28.3v-24.7h-9.95ZM9.85,7v9.3V7v34V7Z"/></svg></div>').replace(/🔄/g, '<div class="icons"><svg id="refresh" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="m3.33,33v-2.81h6.09l-.7-.56c-2-1.59-3.45-3.33-4.36-5.2-.91-1.88-1.36-3.97-1.36-6.28,0-3.31.98-6.29,2.93-8.93,1.95-2.64,4.52-4.46,7.71-5.46v2.91c-2.34.91-4.23,2.41-5.67,4.52-1.44,2.11-2.16,4.43-2.16,6.96,0,1.97.37,3.68,1.1,5.13.73,1.45,1.73,2.71,2.98,3.77l1.41.98v-5.81h2.81v10.78H3.33Zm19.08-.7v-2.95c2.37-.91,4.27-2.41,5.67-4.52,1.41-2.11,2.11-4.43,2.11-6.96,0-1.5-.37-3.02-1.1-4.57-.73-1.55-1.7-2.91-2.88-4.1l-1.36-1.22v5.81h-2.81V3h10.78v2.81h-6.14l.7.66c1.88,1.75,3.28,3.63,4.22,5.63.94,2,1.41,3.92,1.41,5.77,0,3.31-.97,6.3-2.91,8.95-1.94,2.66-4.5,4.48-7.69,5.48Z"/></svg></div>').replace(/🎲️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m43.87,33.89v.02c-.8.55-1.65,1.02-2.44,1.41-.89.44-1.87.86-2.89,1.23-.03.01-.06.02-.09.03-.21.08-.41.16-.61.22-1.98.71-3.77,1.07-5.37,1.09-.06.01-.13.01-.19.01h-.18c-.12,0-.23-.01-.34-.01-.35-.02-.68-.05-1.01-.1-.33-.05-.64-.12-.91-.19-.48-.12-.94-.29-1.38-.49-1.92-.89-3.28-2.41-4.31-4.24-1.11-1.96-1.87-4.28-2.61-6.55-1.29-3.95-2.51-7.68-5.3-8.96-1.96-.9-4.63-.62-8.26.89l5.85,2.47-1.17,2.77-10.54-4.46,4.45-10.55,2.77,1.17-2.44,5.76c4.45-1.85,7.82-2.04,10.59-.78,3.98,1.83,5.47,6.37,6.9,10.76.95,2.9,1.87,5.69,3.4,7.48.55.65,1.18,1.17,1.93,1.52.75.34,1.59.51,2.56.51h.01c1.5,0,3.27-.4,5.35-1.22.07-.02.13-.05.2-.08.06-.02.12-.04.18-.07.7-.26,1.4-.56,2.08-.9,1.02-.51,1.83-1,2.45-1.46l.39.8.93,1.92Z"/><g><path fill="currentColor" d="m16.24,34.4c-1.96.9-4.68.61-8.31-.9h-.01c-.68-.24-1.37-.54-2.03-.87-1.03-.51-1.84-1.01-2.46-1.47l-1.31,2.71v.04c.8.55,1.65,1.02,2.44,1.41.89.44,1.87.86,2.89,1.23.03.01.06.02.09.03.2.07.4.14.61.21h0c2.06.72,3.92,1.11,5.57,1.11,1.39,0,2.64-.26,3.77-.77,1.79-.82,3.06-2.19,4.07-3.84-.59-1.17-1.09-2.4-1.53-3.63-.92,2.18-2.05,3.94-3.79,4.74Z"/><path fill="currentColor" d="m29.72,17.36c1.97-.9,4.67-.62,8.29.85v.03s-5.85,2.47-5.85,2.47l1.17,2.76,10.55-4.46-4.46-10.55-2.76,1.17,2.43,5.76c-4.43-1.82-7.86-2.03-10.62-.76-1.77.82-3.05,2.18-4.05,3.82.59,1.17,1.08,2.41,1.51,3.64.92-2.17,2.04-3.94,3.79-4.74Z"/></g></svg></div>').replace(/♻️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m21.52,41.7c-4.1-.33-7.55-2.02-10.35-5.05-2.8-3.03-4.2-6.63-4.2-10.8,0-2.57.59-4.98,1.77-7.25s2.84-4.12,4.98-5.55l2.15,2.15c-1.87,1.1-3.32,2.61-4.35,4.52-1.03,1.92-1.55,3.96-1.55,6.12,0,3.33,1.1,6.22,3.3,8.65,2.2,2.43,4.95,3.83,8.25,4.2v3Zm3,0v-3c3.33-.4,6.08-1.81,8.25-4.22,2.17-2.42,3.25-5.29,3.25-8.62,0-3.63-1.26-6.71-3.78-9.23-2.52-2.52-5.59-3.78-9.22-3.78h-1l3,3-2.15,2.15-6.65-6.65,6.65-6.65,2.15,2.15-3,3h1c4.47,0,8.25,1.56,11.35,4.68,3.1,3.12,4.65,6.89,4.65,11.32,0,4.17-1.39,7.77-4.17,10.8-2.78,3.03-6.23,4.72-10.33,5.05Z"/></svg></div>').replace(/⇅/g, '<div class="icons"><svg id="_Слой_1" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m15.1,24.55v-15.8l-6,6-2.1-2.1L16.65,3l9.65,9.65-2.1,2.1-6.1-6.05v15.85h-3Zm14.25,18.45l-9.65-9.7,2.1-2.05,6,6v-15.8h3v15.85l6.1-6.05,2.1,2.1-9.65,9.65Z"/></svg></div>');
			if (replacedText !== text) {
				const newNode = document.createRange().createContextualFragment(replacedText);
				node.parentNode.replaceChild(newNode, node);
			}
		}
		function traverse(node) {
			if (node.nodeType === Node.TEXT_NODE) {
				replaceValues(node);
			} else {
				const childNodes = node.childNodes;
				if (childNodes && childNodes.length) {
					for (let i = 0; i < childNodes.length; i++) {
						traverse(childNodes[i]);
					}
				}
			}
		}

		traverse(document.body);
	}, 9000);

	// добавление кнопочек очистки промптов по отдельности
	setTimeout(() => {
		const textareas = document.querySelectorAll("#txt2img_prompt > label > textarea, #txt2img_neg_prompt > label > textarea, #img2img_prompt > label > textarea, #img2img_neg_prompt > label > textarea");
		textareas.forEach((textarea) => {
			const closeButton = document.createElement('div');
			closeButton.classList.add('prompt_clear');
			closeButton.title = "очистить это поле";
			closeButton.innerHTML = '<svg id="clear_button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="m6.25,14.8l3.75-3.75,3.75,3.75,1.05-1.05-3.75-3.75,3.75-3.75-1.05-1.05-3.75,3.75-3.75-3.75-1.05,1.05,3.75,3.75-3.75,3.75,1.05,1.05Zm3.75,5.2c-1.37,0-2.66-.26-3.88-.79-1.22-.52-2.28-1.24-3.19-2.15s-1.62-1.97-2.15-3.19c-.52-1.22-.79-2.51-.79-3.88s.26-2.68.79-3.9c.53-1.22,1.24-2.27,2.15-3.18.91-.9,1.97-1.61,3.19-2.14,1.22-.53,2.51-.79,3.88-.79s2.68.26,3.9.79c1.22.53,2.28,1.24,3.17,2.14.9.9,1.61,1.96,2.14,3.18.53,1.22.79,2.52.79,3.9s-.26,2.66-.79,3.88c-.52,1.22-1.24,2.28-2.14,3.19-.9.91-1.96,1.62-3.18,2.15-1.22.53-2.52.79-3.9.79Zm0-1.5c2.37,0,4.38-.83,6.02-2.49,1.65-1.66,2.48-3.66,2.48-6.01s-.82-4.38-2.48-6.03c-1.65-1.65-3.66-2.47-6.02-2.47s-4.35.83-6.01,2.47c-1.66,1.65-2.49,3.66-2.49,6.03s.83,4.35,2.49,6.01c1.66,1.66,3.66,2.49,6.01,2.49Z"/></svg>';
			textarea.parentElement.appendChild(closeButton);
			closeButton.addEventListener('click', () => {
				textarea.value = '';
			});
		});
	}, 9000);

	// хуекнопка наверх
	setTimeout(() => {
		const gradioContainer = document.querySelector("body > gradio-app > div.gradio-container");
		const upArrowDiv_create = document.createElement('div');
		upArrowDiv_create.classList.add('up_arrow');
		upArrowDiv_create.innerHTML = `
		<object type="image/svg+xml" data="/file=./extensions-builtin/fix-webui/javascript/arrow.svg"></object>
			`;
		gradioContainer.insertAdjacentElement('afterend', upArrowDiv_create);
	}, 9000);

	// обработчик хуекнопки
	setTimeout(() => {
		const toggleUpArrowVisibility = () => {
			const upArrowDiv = document.querySelector("body > gradio-app > div.up_arrow");
			if (upArrowDiv) {
				if (window.scrollY >= window.innerHeight / 4) {
					upArrowDiv.style.display = "block";
				} else {
					upArrowDiv.style.display = "none";
				}
			}
		};

		const observeUpArrow = () => {
			const targetNode = document.querySelector("body > gradio-app");
			const config = { childList: true, subtree: true };

			const callback = (mutationsList, observer) => {
				for (let mutation of mutationsList) {
					if (mutation.type === "childList") {
						const upArrowDiv = document.querySelector("body > gradio-app > div.up_arrow");
						if (upArrowDiv) {
							toggleUpArrowVisibility();
							observer.disconnect();
							const upArrowObject = document.querySelector("body > gradio-app > div.up_arrow > object");
							const upArrowSvg = upArrowObject.contentDocument.documentElement;
							upArrowDiv.addEventListener("click", () => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							});
							upArrowObject.addEventListener("click", () => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							});
							upArrowSvg.addEventListener("click", () => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							});
						}
					}
				}
			};

			const observer = new MutationObserver(callback);
			observer.observe(targetNode, config);
		};

		observeUpArrow();
		window.addEventListener("scroll", toggleUpArrowVisibility);
		console.log("обработчик кнопки наверх");
	}, 20000);
	
	//разблокировать правый клик
	setTimeout(() => {
		document.addEventListener('contextmenu', event => event.stopPropagation(), true);
		//javascript:void(document.oncontextmenu=null);
		console.log("правый клик разблокирован");
	}, 20000);
	//просмотрщик картинок
	setTimeout(() => {
			const zoomIcon = document.querySelector('.modalZoom');
			zoomIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z"/></svg>';
			const tileImageIcon = document.querySelector('.modalTileImage');
			tileImageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M120 546V216h330v330H120Zm0 390V606h330v330H120Zm390-390V216h330v330H510Zm0 390V606h330v330H510ZM180 486h210V276H180v210Zm390 0h210V276H570v210Zm0 390h210V666H570v210Zm-390 0h210V666H180v210Zm390-390Zm0 180Zm-180 0Zm0-180Z"/></svg>';
			const saveIcon = document.querySelector('.modalSave');
			saveIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z"/></svg>';
			const closeIcon = document.querySelector('.modalClose');
			closeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';
	}, 20000);
	setTimeout(() => {
			document.querySelector("#modal_save > svg").addEventListener("mousedown", function() {
			const fileName = document.querySelector("img#modalImage").src.split("/").pop().replace(/%20/g, "_");
			const a = document.createElement("a");
			a.href = document.querySelector("img#modalImage").src;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		});
	}, 20000);
	setTimeout(() => {
        // подсказки
        const do_not_show_images = document.querySelector("#setting_do_not_show_images > label");
        do_not_show_images.setAttribute("title", "не выводить изображения в результаты генерации. полезно если запускаешь пакетную генерацию, чтобы не нагружать ВебУИ");
        const sd_vae_as_default = document.querySelector("#setting_sd_vae_as_default > label");
        sd_vae_as_default.setAttribute("title", "если рядом с моделью лежит одноименный файл с VAE - использовать его");
}, 5000);
}


//таймер колаба
let startTime;
let timeout;
function updateTimer(el) {
	const a = (i) => (i < 10 ? "0" + i : i);
	const b = (x) => Math.floor(x);
	let c = b(Date.now() / 1000) - startTime;
	h = a(b(c / 3600));
	m = a(b((c / 60) % 60));
	s = a(b(c % 60));
	if (c > 298 && c < 315) {
		el.innerText =
			"Обычно в это время вылазит капча, проверь вкладку колаба (" +
			h +
			":" +
			m +
			":" +
			s +
			")";
	} else {
		el.innerText = h + ":" + m + ":" + s;
	}
	//обновление таймера каждые 30 сек
	if (c % 30 == 0) {
		refreshTimer(el, true);
		return;
	}
	timeout = setTimeout(() => updateTimer(el), 1000);
}
refreshTimer = (timerEl, notext = false) => {
	if (timeout) {
		clearTimeout(timeout);
		timeout = null;
	}
	if (!notext) timerEl.innerText = "подключение...";
	fetch("file=static/launch.txt", { cache: "no-store" })
		.then((response) => {
			if (response.status == 404) {
				timerEl.innerText = "Ошибка: колаб выключился!";
				return;
			}
			response.text().then((text) => {
				startTime = parseInt(text);
				updateTimer(timerEl);
			});
		})
		.catch((err) => {
			console.log(err);
			timerEl.innerText = "Ошибка. " + err;
		});
};
onUiLoaded(function () {
	const insertionPosition = document.querySelector("body > gradio-app > div");
	if (gradioApp().querySelector("#colab-timer") != null) return;
	let mainDiv = document.createElement("div");
	mainDiv.id = "colab-timer";
	mainDiv.style = "cursor:pointer;user-select:none;display:flex!important;cursor:pointer!important;position:absolute!important;background-color:transparent!important;right:.7em;top:.2em;justify-content:center;width:110px;height:26px;flex-direction:row;align-content:center;align-items:center;font-family:monospace!important;";
	mainDiv.onclick = () => refreshTimer(timerEl);
	let div2 = document.createElement("div");
	div2.className = "timer";
	div2.style = "cursor:pointer;user-select:none;display:flex!important;cursor:pointer!important;position:absolute!important;background-color:transparent!important;right:.7em;top:.2em;justify-content:center;width:110px;height:26px;flex-direction:row;align-content:center;align-items:center;font-family:monospace!important;";
	div2.title = "таймер работы колаба: нажми чтобы обновить";
	let img = document.createElement("img");
	img.id = "colab_logo";
	img.src =
		"https://github.com/PR0LAPSE/StableDiffusionWebUIColab/raw/main/src/colab.svg";
	img.width = 24;
	let timerEl = document.createElement("div");
	timerEl.id = "timer_time";
	timerEl.innerText = "соединение...";
	timerEl.style = "font-family:monospace!important;color:#ff9f00;margin-left:.3em";
	div2.appendChild(img);
	div2.appendChild(timerEl);
	mainDiv.appendChild(div2);
	insertionPosition.parentNode.insertBefore(mainDiv, insertionPosition.nextSibling);
	refreshTimer(timerEl);
});

// прелоадер :)
document.addEventListener('DOMContentLoaded', function() {
	const loadlayer = document.createElement('div');
	loadlayer.id = "loadlayer";
	loadlayer.innerHTML = `
	<script src="/file=./extensions-builtin/fix-webui/javascript/howler.min.js"></script>
	<style>
  #loadlayer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999999;color:#fff;background:#280000;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;justify-content:center;align-items:center}.loader{position:relative;top:15%;width:40px;height:40px}.loader .circle{position:absolute;width:38px;height:38px;opacity:0;transform:rotate(225deg);animation-iteration-count:infinite;animation-name:orbit;animation-duration:5.5s}.loader .circle:after{content:'';position:absolute;width:5px;height:5px;border-radius:5px;background:#fff}.loader .circle:nth-child(2){animation-delay:240ms}.loader .circle:nth-child(3){animation-delay:480ms}.loader .circle:nth-child(4){animation-delay:720ms}.loader .circle:nth-child(5){animation-delay:960ms}@keyframes orbit{0%{transform:rotate(225deg);opacity:1;animation-timing-function:ease-out}7%{transform:rotate(345deg);animation-timing-function:linear}30%{transform:rotate(455deg);animation-timing-function:ease-in-out}39%{transform:rotate(690deg);animation-timing-function:linear}70%{transform:rotate(815deg);opacity:1;animation-timing-function:ease-out}75%{transform:rotate(945deg);animation-timing-function:ease-out}76%{transform:rotate(945deg);opacity:0}100%{transform:rotate(945deg);opacity:0}}#molitva{width:50%!important} #loadlayer > a {color: #f4fcff;}
	</style>
  <svg id="molitva" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674.25 81.42"> 
  <defs>
    <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0">
    <stop offset="0%" stop-color="#8d755d"/>
    <stop offset="25%" stop-color="#e6cc98"/>
    <stop offset="40%" stop-color="#be9d6b"/>
    <stop offset="60%" stop-color="#eee4d1"/>
    <stop offset="80%" stop-color="#6f5c4a"/>
    <stop offset="100%" stop-color="#8d755d"/>
    </linearGradient>
    <pattern id="pattern" width="300%" height="100%" x="0" y="0" patternUnits="userSpaceOnUse">
    <rect width="150%" height="100%" fill="url(#gradient)">
      <animate attributeName="x" attributeType="XML" dur="5s" from="0" repeatCount="indefinite" to="150%"/>
    </rect>
    <rect width="150%" height="100%" x="-150%" fill="url(#gradient)">
      <animate attributeName="x" attributeType="XML" dur="5s" from="-150%" repeatCount="indefinite" to="0"/>
    </rect>
    </pattern>
  </defs>
  <path fill="url(#pattern)" d="m108.32,14.7c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.95,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.18.35-.18.46,0,.17.1.46.25.46.46-.14.84-.25,1.3-.38.1-.04.21-.04.31-.04.31,0,.52.14.73.35.42.84.67,2.1.95,3.19.25.95.49,2.03.67,3.01.07.42.1.74.1.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.31-.77-.31-1.29.14-2.49.38-4.73.7-7.18.14-1.23.35-2.38.59-3.47.1-.49.25-1.19.74-1.19t.07.04h.35c1.08,0,2.28.1,3.47.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.03c.74,0,.98,0,1.09-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.46-2.31-.77-3.04-.17-.32-.35-.49-.52-.49-.21,0-.39-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.94-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.04-.35-.07-.56,0-.1-.1-.14-.24-.14-.95,0-1.26.56-1.26,1.58,0,.35.1.88.42.88Zm9.9-2.1c1.3-.91,3.19-1.82,5.04-1.89h.1c1.54,0,2.63,1.19,3.33,2.17.73,1.05,1.44,2.66,1.44,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.51-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.65,1.89,2.83,2.24.1,0,.18.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.1-.04-.21-.04-.28-.04Zm15.57,7.04c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.51-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.04.59-.1.84-.1.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.15-.46.49,0,.6.63.6,1.26Zm8.23-9.07c0,.56-.63,1.05-.84,1.43-.25.39-.42,1.23-.56,1.82-.39,1.44-.56,3.01-.56,4.83,0,1.4.07,2.91.21,4.09,0,.53-.6.53-1.23.53h-.04c-.38,0-.8-.04-1.05-.04-.53-.04-1.86-.07-2-.35-.04-.07-.04-.21-.04-.39v-.46c.14-1.43.42-3.15.49-4.62.07-1.54.14-3.54.21-5.08.07-1.16.1-1.75,1.08-1.93.73-.14,1.65-.21,2.28-.42.28-.07.73-.28,1.15-.28.46,0,.88.42.88.84Zm2.35,12.64c-.32,0-.49-.35-.49-.77,0-1.86-.6-3.57-1.3-4.83-.31-.56-.56-.8-.56-1.26,0-.14.03-.35.1-.59.7-1.37,1.57-2.7,2.69-3.82.49-.56,1.09-.98,1.72-1.26.91-.49,2.77-.67,4.06-.67.42,0,.73.07.73.32,0,.1-.03.21-.14.35-.21.39-.98.98-1.26,1.4-.25.32-.67,1.71-1.23,1.71-.31,0-.46-.25-.6-.67-.17-.38-.46-.56-.81-.56-.94,0-2.27,1.33-2.62,1.75-.07.11-.6.8-.6,1.12,0,.21.31.38.52.28.14-.04.21-.07.32-.07.24,0,.42.21.63.49,1.12,1.65,1.79,3.78,2.21,6.16.04.18.07.32.07.46,0,.25-.07.42-.35.42-.46,0-1.05-.1-1.54-.1-.52,0-1.08.14-1.57.14Zm8.33,11.76c0-.49.1-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.52-.38,1.37-.98,2.06-.98.56,0,.88.46.95.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.52,6.62.18,1.19.32,1.68.32,2.7,0,.7-.18,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.39-.74-.81-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm-6.42-15.99c-.77,0-1.47-.11-1.68-.32-.25-.28-.31-.91-.31-1.54,0-.7.07-1.47.14-1.96.07-.7.21-.88.49-1.26.1-.11.28-.18.52-.18,2.21,0,4.69.32,6.86.32.31.04.56-.21.67-.42.04-.11.04-.35,0-.7-.07-.32-.21-.74-.38-1.26.07-.39.24-.35.94-.42.7-.14,1.72-.31,2.52-.35h.14c1.51,0,1.65,1.4,1.68,2.98v.31c0,.7-.1,1.86-.77,1.86h-.1c-.73,0-1.71-.14-2.7-.21-1.47-.11-3.43-.17-5.08-.17-.39.1-.81.04-.91.42-.04.17-.04.31-.04.49,0,.56.17,1.08.28,1.75,0,.46-1.19.67-2.28.67Zm18.7,15.99c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.51-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.04.59-.1.84-.1.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.15-.46.49,0,.6.63.6,1.26Zm8.08.25c0,.74-.77,1.89-.91,2.1-.52.7-1.93,1.29-3.12,1.29-.14,0-.28,0-.42-.04-1.75-.67-1.02-3.22-1.57-4.97-.18-.59-.28-1.37-.28-2.17,0-2.73,1.08-4.41,2.8-5.36.95-.56,1.54-.95,3.08-.95.77,0,1.01.14,1.01.77,0,.52-.21,1.05-.35,1.43-.18.39-1.05.53-1.58.67-.56.18-1.4.42-1.51.98-.07.25-.14.67-.14,1.05,0,.46.1.88.39.91.31.11.38,0,.63-.14.25-.17,1.02-.7,1.54-.7.45,0,.52.63.52,1.16,0,.25-.04.52-.07.74-.1.49-1.4.63-1.82.77-.32.07-.67.49-.67.91v.98c0,.28.03.56.31.52.49-.07.88-.56,1.44-.56.46,0,.7.21.7.59Zm207.02-.25c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.51-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.04.59-.1.84-.1.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.15-.46.49,0,.6.63.6,1.26Zm12.32-9.03c0,.1-.04.35-.17.67-.07.31-.14.7-.14,1.12,0,.84.25,2.27.42,3.15.07.7.21,1.29.31,1.85.14.74.28,1.33.77,1.33s.6-.21.95-.73c.42-.77.94-1.82,1.33-2.7.49-1.19.35-2.59.7-3.96.07-.25.17-.46.28-.56.6-.38,1.72-.32,2.42-.56l.56-.14c.28-.11.67-.17.94-.17.35.04.21.14.21.42,0,3.01.88,8.05,1.89,10.75.25.63.42.84.63,1.29.04.11.07.17.07.28,0,.28-.31.46-.42.63-.04.04-.1.07-.28.07-.49,0-1.12-.07-1.61-.07s-1.08.14-1.54.21c-.07,0-.14.04-.21.04-.31,0-.42-.17-.49-.53-.46-2.28-1.05-5.21-1.23-7.84-.1-.31-.21-.42-.31-.42-.25,0-.46.56-.63.95-.94,2.21-2.1,4.2-2.1,7.25.04.24-.28.52-.52.52-.49,0-1.4-.1-1.96-.14-.52,0-1.26.21-1.75.21-.07,0-.1-.04-.14-.04-.21-.21-.35.11-.38-.46-.14-.95-.25-2.62-.39-3.78-.14-1.23-.42-3.4-.98-4.06-.1-.1-.25-.17-.35-.17-.74,0-1.4,2.21-1.65,2.83-.49,1.26-.84,2.84-1.05,4.38,0,.31-.04.49-.04.56,0,.49-.31.49-.84.53-.46.07-1.05.14-1.61.14h-.25c-.77-.04-.88-.25-.98-.88v-.25c0-.31.1-.56.21-.88.18-.74.81-1.61,1.26-2.34.67-.98,1.54-2.17,2.24-3.05.91-1.08,1.5-2.7,1.89-4.24.07-.35.1-.56.1-.63,0-.32.18-.38.35-.59.04-.04.25-.11.67-.18.91-.21,2.1-.38,3.15-.38.52,0,.52.17.67.56Zm18.86,9.28c0,.74-.77,1.89-.91,2.1-.52.7-1.93,1.29-3.12,1.29-.14,0-.28,0-.42-.04-1.75-.67-1.02-3.22-1.57-4.97-.18-.59-.28-1.37-.28-2.17,0-2.73,1.08-4.41,2.8-5.36.95-.56,1.54-.95,3.08-.95.77,0,1.01.14,1.01.77,0,.52-.21,1.05-.35,1.43-.18.39-1.05.53-1.58.67-.56.18-1.4.42-1.51.98-.07.25-.14.67-.14,1.05,0,.46.1.88.39.91.31.11.38,0,.63-.14.25-.17,1.02-.7,1.54-.7.45,0,.52.63.52,1.16,0,.25-.04.52-.07.74-.1.49-1.4.63-1.82.77-.32.07-.67.49-.67.91v.98c0,.28.03.56.31.52.49-.07.88-.56,1.44-.56.46,0,.7.21.7.59Zm2.66,15.09c0-.49.1-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.52-.38,1.37-.98,2.06-.98.56,0,.88.46.95.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.52,6.62.18,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.39-.74-.81-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm5.7-2.91v-1.37c0-1.37.31-2.8.63-3.88.31-1.12.67-1.3,2.14-1.3.6-.03,1.3-.03,2.07-.03h2.35c3.08,0,5.57-.32,8.26-.56.14-.04.25-.04.35-.04.21,0,.38.04.52.04.39,0,.56.21.56.53s-.1.7-.21.88c-.25.52-.94,1.33-1.4,1.86-.32.42-.63.8-.95,1.12-.31.35-.52.52-.63.56-.25.04-.35.04-.35,0,0-.07-.04-.14-.1-.25-.1-.21-.1-.84-.14-1.19-.04-.42-.1-1.12-.28-1.36-.14-.21-.52-.67-.88-.67-.03,0-.07.03-.1.03-.63.39-.7.53-.84,1.54-.14.94-.31,2.24-.46,3.25-.07.56-.1.98-.1,1.29,0,1.65-.21,3.78-.21,5.36,0,.32.1.56-.25.6-.31.1-1.02.1-1.44.14-.49.04-1.19.07-1.58.07-.42-.04-.35-.35-.46-.7-.07-.25-.07-.63-.07-1.05v-.98c0-3.26.49-6.06.77-9.07,0-.38-.52-.49-1.12-.49-.73,0-1.65.21-1.82.45-.6.98-.63,2.49-.63,3.99v.77c.04.67.35.84.35,1.47,0,.59-.46.56-1.05.7-.6.07-.77.1-1.19.28-.17.11-.67.39-1.02.39-.7,0-.73-1.44-.73-2.38Zm17.43-13.34c0-.98.81-1.93,1.79-1.93s1.96.74,1.96,1.82c0,1.02-.67,1.82-1.75,1.82-1.02,0-2-.7-2-1.71Zm6.34,7.14c0,.56-.63,1.08-.84,1.47-.21.32-.31,1.02-.46,1.58-.35,1.89-.46,4.2-.46,6.48v.67c0,.7,0,1.44.07,1.93,0,.59-.81.63-1.51.63h-.14c-.63,0-1.26-.07-1.68-.14-.52-.14-.67-.25-.67-.74,0-.14.04-.32.04-.53.07-1.54.39-3.33.46-4.87s.21-3.47.31-4.97c.1-1.16.18-1.71,1.16-1.89.42-.07,1.02,0,1.4-.11.28-.07.91-.28,1.44-.28.49,0,.88.32.88.77Zm-1.26-6.9c0-1.02.77-1.96,1.79-1.96s1.96.74,1.96,1.79c0,.6-.25,1.19-.63,1.54-.31.24-.73.35-1.12.35-1.05,0-2-.67-2-1.71Zm8.92,6.93c0,.59-.56,1.08-.8,1.47-.21.25-.32,1.05-.35,1.54,0,.6.46.7,1.08.7.25,0,.52-.04.81-.04,1.19-.1,2.06-.38,2.59-.98.25-.25.38-.53.42-.77.49-1.16,1.47-2.8,2.87-2.8h.21c1.61.17,1.96,2.45,1.96,4.55,0,2.77-.6,4.69-1.65,6.58-.42.67-.84,1.26-1.33,1.75-.42.38-.84.59-1.26.59-.53,0-1.02-.31-1.33-.91-.53-.98-.84-2.59-.84-4.13,0-.53.04-1.05.1-1.54,0-.11.04-.17.04-.25,0-.67-.46-.98-1.08-.98-.14,0-.25,0-.39.04-.73.07-.81.07-1.47.35-.46.14-.91.42-.91.94-.03.46-.03,1.02-.03,1.61v.7c0,1.26,0,2.59.14,3.64,0,.49-.77.63-1.61.63-.7,0-1.47-.11-1.79-.21-.6-.11-.7-.25-.7-.74v-.46c.07-1.54.38-3.36.46-4.87.1-1.92.46-4.13.73-5.88.1-.67.74-1.05,1.51-1.05.07,0,.1,0,.17.04h.04c.46,0,1.19-.32,1.72-.32.46,0,.7.35.7.77Zm5.36,4.17c-.39,0-.67.32-.74.81v.35c0,.7.21,1.12.6,1.58.17.17.38.28.56.28.42,0,.77-.42.84-.91,0-.14.04-.28.04-.42,0-.67-.25-1.05-.7-1.44-.17-.17-.38-.25-.59-.25ZM0,35.6c0-.17.07-.35.21-.56.03-.03.17-.31.49-.88,3.29-5.95,6.02-11.06,9.42-17.47.18-.17.25-.46.25-.74,0-.38-.1-.84-.17-1.26-.6-2.77-1.72-6.16-3.15-8.09-.1-.14-.14-.14-.14-.14.04.1.04.07-.07-.04-.14-.25-.28-.32-.67-.32-.67,0-1.51-.03-1.51-.67,0-.31.1-.56.25-.73.25-.21.77-.14,1.16-.21.17,0,.56.1,1.12.21.91.17,2.48.28,3.43.28.49,0,1.19,0,1.4.28.24.38.21.6.38,1.23.21.8.49,1.82.67,2.62.14.38.18.67.18.77.07.35.38.38.49.1.28-.56,1.05-1.54,1.54-2.21.39-.53.81-1.02,1.16-1.47.74-.84,1.12-1.12,2.35-1.12.88,0,1.89.32,2.77.42h.21c.7,0,.98-.42,1.47-.6.38-.14.7-.07.7.25,0,.46-.52.84-.81,1.16-.88.91-1.71,1.79-2.48,2.8-.25.42-.6,1.05-1.12,1.05-.39,0-.63-.49-.84-.77s-.77-.91-1.29-.91c-.14,0-.28.07-.39.18-.25.17-.46.56-.7.88-.59.94-1.4,2.03-1.65,3.33-.1.49-.14,1.08-.14,1.71v.38c0,.11.1.53.31,1.3,1.02,4.06,2.31,8.86,3.36,12.88.32,1.19.21,1.05.49,1.75.14.46.39.7.84.98.28.14.7.32.7.67,0,.04-.03.07-.03.11-.04.17-.1.24-.21.28h-1.12c-.56,0-1.3.04-1.86.04-.84,0-1.75.11-2.59.11h-.42c-.31-.07-.49-.07-.42-.53.1-.46.56-.59.56-1.12,0-.32-.04-.46-.21-1.16-.7-2.87-1.51-6.3-2.24-9.1-.18-.67-.18-1.19-.56-1.19-.32,0-.56.67-.91,1.33-2.31,4.13-5.01,9.17-7.21,13.37-.46.77-.67,1.23-.7,1.3-.17.28-.31.56-.7.56-.56,0-1.58-.46-1.58-1.05Zm26.04,3.82c0-.49.1-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.52-.38,1.37-.98,2.06-.98.56,0,.88.46.95.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.52,6.62.18,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.39-.74-.81-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16ZM37.54,0c.77,0,1.5.11,2.17.35,1.47.53,2.59,1.33,3.71,2.17,1.58,1.22,3.75,1.89,5.78,2.73.52.17,1.05.31,1.05.8,0,.7-.63.77-1.54.8-.42.04-.84.07-1.29.07-1.75,0-3.64-.17-4.87-.67-.88-.38-1.68-.98-2.35-1.58l-1.12-.98c-.49-.42-.94-.77-1.5-1.12-.35-.24-.77-.35-1.23-.35-1.23,0-2.63.7-3.22,1.19-.59.46-.84,1.22-.84,2.06,0,.63.14,1.33.35,1.93,0,.04.03.07.03.07,0,.56-2.35,1.4-2.91,1.54-.21.07-.42.1-.56.1-.77,0-.77-.67-.98-1.5-.1-.42-.17-.84-.17-1.23,0-1.92,1.33-3.33,2.56-4.2.94-.67,2-1.16,3.15-1.54,1.19-.38,2.52-.67,3.78-.67Zm1.16,7.42c0,.17-.18.38-.35.63-.39.49-.77.8-1.02,1.44-.07.14-.07.28-.07.38,0,.38.32.63.6.8.1.04.21.04.31.04.49,0,.95-.28,1.26-.49.21-.1,1.16-.84,1.72-.84.14,0,.28.07.31.21.04.07.07.17.07.25,0,.32-.28.56-.49.81-.81,1.01-2.14,1.61-3.78,1.89-.31.04-.67.07-.94.07-1.02,0-1.79-.32-1.79-1.33,0-.11,0-.25.03-.39.18-.91.88-1.79,1.47-2.38.53-.53,1.3-1.16,2-1.37.49,0,.67.11.67.28Zm-3.6,13.76v-1.37c0-1.37.31-2.8.63-3.88.31-1.12.67-1.3,2.14-1.3.6-.03,1.3-.03,2.07-.03h2.35c3.08,0,5.57-.32,8.26-.56.14-.04.25-.04.35-.04.21,0,.39.04.52.04.39,0,.56.21.56.53s-.1.7-.21.88c-.25.52-.94,1.33-1.4,1.86-.32.42-.63.8-.95,1.12-.31.35-.52.52-.63.56-.25.04-.35.04-.35,0,0-.07-.04-.14-.1-.25-.1-.21-.1-.84-.14-1.19-.04-.42-.1-1.12-.28-1.36-.14-.21-.53-.67-.88-.67-.03,0-.07.03-.1.03-.63.39-.7.53-.84,1.54-.14.94-.31,2.24-.46,3.25-.07.56-.1.98-.1,1.29,0,1.65-.21,3.78-.21,5.36,0,.32.1.56-.25.6-.31.1-1.02.1-1.44.14-.49.04-1.19.07-1.58.07-.42-.04-.35-.35-.46-.7-.07-.25-.07-.63-.07-1.05v-.98c0-3.26.49-6.06.77-9.07,0-.38-.53-.49-1.12-.49-.74,0-1.65.21-1.82.45-.6.98-.63,2.49-.63,3.99v.77c.04.67.35.84.35,1.47,0,.59-.46.56-1.05.7-.6.07-.77.1-1.19.28-.17.11-.67.39-1.02.39-.7,0-.73-1.44-.73-2.38Zm20.89-5.36c1.3-.91,3.19-1.82,5.04-1.89h.1c1.54,0,2.63,1.19,3.33,2.17.73,1.05,1.44,2.66,1.44,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.51-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.65,1.89,2.83,2.24.1,0,.18.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.1-.04-.21-.04-.28-.04Zm15.57,7.04c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.51-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.04.59-.1.84-.1.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.15-.46.49,0,.6.63.6,1.26Zm1.78-3.61v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.03-.84.35-1.01.39-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.52.04,1.08.25,1.08.63,0,.14-.07.28-.17.42-.04.07-.18.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.04.1-.04.17-.04.21,0,.14.07.21.21.17.7-.17,1.44-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.94,3.15.94,4.9,0,.67,0,.91-.77.95h-.52c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.81-.46-.04-.14-.04-.25-.04-.32,0-.21.04-.31.04-.8,0-1.08.52-2.94.94-4.2.46-1.44,1.05-3.08,1.51-4.45.25-.7.31-.88.31-1.19,0-.84-.77-.88-1.72-.88s-1.71.04-1.85.77c-.18.91-.31,1.96-.42,3.15-.1.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.52-.38-.52-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.25-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.38.95.94.95.74,0,1.16-.14,1.16-.84Zm-25.32-16.68c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Zm184.95,6.18c0,.1-.04.35-.17.67-.07.31-.14.7-.14,1.12,0,.84.25,2.27.42,3.15.07.7.21,1.29.31,1.85.14.74.28,1.33.77,1.33s.6-.21.95-.73c.42-.77.94-1.82,1.33-2.7.49-1.19.35-2.59.7-3.96.07-.25.17-.46.28-.56.6-.38,1.72-.32,2.42-.56l.56-.14c.28-.11.67-.17.94-.17.35.04.21.14.21.42,0,3.01.88,8.05,1.89,10.75.25.63.42.84.63,1.29.04.11.07.17.07.28,0,.28-.31.46-.42.63-.04.04-.1.07-.28.07-.49,0-1.12-.07-1.61-.07s-1.08.14-1.54.21c-.07,0-.14.04-.21.04-.31,0-.42-.17-.49-.53-.46-2.28-1.05-5.21-1.23-7.84-.1-.31-.21-.42-.31-.42-.25,0-.46.56-.63.95-.94,2.21-2.1,4.2-2.1,7.25.04.24-.28.52-.52.52-.49,0-1.4-.1-1.96-.14-.52,0-1.26.21-1.75.21-.07,0-.1-.04-.14-.04-.21-.21-.35.11-.38-.46-.14-.95-.25-2.62-.39-3.78-.14-1.23-.42-3.4-.98-4.06-.1-.1-.25-.17-.35-.17-.74,0-1.4,2.21-1.65,2.83-.49,1.26-.84,2.84-1.05,4.38,0,.31-.04.49-.04.56,0,.49-.31.49-.84.53-.46.07-1.05.14-1.61.14h-.25c-.77-.04-.88-.25-.98-.88v-.25c0-.31.1-.56.21-.88.18-.74.81-1.61,1.26-2.34.67-.98,1.54-2.17,2.24-3.05.91-1.08,1.5-2.7,1.89-4.24.07-.35.1-.56.1-.63,0-.32.18-.38.35-.59.04-.04.25-.11.67-.18.91-.21,2.1-.38,3.15-.38.52,0,.52.17.67.56Zm18.86,9.28c0,.74-.77,1.89-.91,2.1-.52.7-1.93,1.29-3.12,1.29-.14,0-.28,0-.42-.04-1.75-.67-1.02-3.22-1.57-4.97-.18-.59-.28-1.37-.28-2.17,0-2.73,1.08-4.41,2.8-5.36.95-.56,1.54-.95,3.08-.95.77,0,1.01.14,1.01.77,0,.52-.21,1.05-.35,1.43-.18.39-1.05.53-1.58.67-.56.18-1.4.42-1.51.98-.07.25-.14.67-.14,1.05,0,.46.1.88.39.91.31.11.38,0,.63-.14.25-.17,1.02-.7,1.54-.7.45,0,.52.63.52,1.16,0,.25-.04.52-.07.74-.1.49-1.4.63-1.82.77-.32.07-.67.49-.67.91v.98c0,.28.03.56.31.52.49-.07.88-.56,1.44-.56.46,0,.7.21.7.59Zm2.66,15.09c0-.49.1-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.52-.38,1.37-.98,2.06-.98.56,0,.88.46.95.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.52,6.62.18,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.39-.74-.81-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm5.7-2.91v-1.37c0-1.37.31-2.8.63-3.88.31-1.12.67-1.3,2.14-1.3.6-.03,1.3-.03,2.07-.03h2.35c3.08,0,5.57-.32,8.26-.56.14-.04.25-.04.35-.04.21,0,.38.04.52.04.39,0,.56.21.56.53s-.1.7-.21.88c-.25.52-.94,1.33-1.4,1.86-.32.42-.63.8-.95,1.12-.31.35-.52.52-.63.56-.25.04-.35.04-.35,0,0-.07-.04-.14-.1-.25-.1-.21-.1-.84-.14-1.19-.04-.42-.1-1.12-.28-1.36-.14-.21-.52-.67-.88-.67-.03,0-.07.03-.1.03-.63.39-.7.53-.84,1.54-.14.94-.31,2.24-.46,3.25-.07.56-.1.98-.1,1.29,0,1.65-.21,3.78-.21,5.36,0,.32.1.56-.25.6-.31.1-1.02.1-1.44.14-.49.04-1.19.07-1.58.07-.42-.04-.35-.35-.46-.7-.07-.25-.07-.63-.07-1.05v-.98c0-3.26.49-6.06.77-9.07,0-.38-.52-.49-1.12-.49-.73,0-1.65.21-1.82.45-.6.98-.63,2.49-.63,3.99v.77c.04.67.35.84.35,1.47,0,.59-.46.56-1.05.7-.6.07-.77.1-1.19.28-.17.11-.67.39-1.02.39-.7,0-.73-1.44-.73-2.38Zm24.19-6.48c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.95,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.18.35-.18.46,0,.17.1.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.31,0,.52.14.73.35.42.84.67,2.1.95,3.19.24.95.49,2.03.67,3.01.07.42.1.74.1.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.31-.77-.31-1.29.14-2.49.38-4.73.7-7.18.14-1.23.35-2.38.59-3.47.1-.49.25-1.19.74-1.19t.07.04h.35c1.08,0,2.28.1,3.47.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.03c.74,0,.98,0,1.09-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.45-2.31-.77-3.04-.17-.32-.35-.49-.52-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.94-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.04-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.1.88.42.88Zm12.28,3.08c.56,0,1.3-.35,1.79-.35.6,0,.84.67,1.12,1.12.77,1.33,1.33,2.7,1.58,4.62.04.14.04.28.04.38,0,.74-.35,1.02-1.16,1.02h-.1c-.77-.04-1.79-.07-2.59-.07h-.94c-.21,0-.46,0-.74.04-.46.04-.46-.04-.91,0-.42.04-.91.17-1.29.17-.14,0-.28.04-.42.04-.81,0-1.3-.32-1.37-1.08,0-1.54.31-3.33.49-4.9.21-1.96.45-4.2.94-5.85.28-.6.46-.81,1.16-.88.56-.11,1.23-.25,1.68-.46.25-.11.49-.18.67-.21.38,0,.77.52.77.98s-.42.63-.7.91c-.28.17-.42,1.12-.52,1.58-.14.67-.35,1.61-.35,2.28,0,.46.31.67.77.67h.1Zm-.94,2.03c-.56,0-.6.91-.63,1.65v.28c0,.77.18,1.58.81,1.58.07.04.14.04.21.04.74,0,1.19-.21,1.19-.98v-.25c-.11-.81-.49-1.89-1.12-2.17-.18-.07-.32-.14-.46-.14Zm9.31,4.69c-.14.04-.28.04-.42.04-.63,0-1.4-.07-1.54-.35-.07-.14-.1-.42-.1-.88,0-1.5.1-3.33.1-4.83s-.1-3.15-.1-4.55v-.84c.1-1.37,1.93-1.02,2.77-1.61.25-.17.77-.46,1.23-.46s.77.38.77.81c0,.52-.59,1.05-.8,1.4-.28.81-.28,2.03-.32,3.08,0,.24-.03.52-.03.77,0,.28.03.53.03.81,0,1.96.32,4.24.74,5.84,0,.77-1.47.77-2.31.77Zm7-13.51h1.02c1.26.07,1.61.42,1.96,1.4.24.8.52,1.82.77,2.56.07.17.31.42.42.14.67-1.33,1.44-3.19,2.8-3.78.7-.28,1.19-.42,2.17-.42.74,0,1.65.07,2.31.17.46.07.7.28.7.56,0,.38-.35.7-.56.94l-.42.42c-.35.39-.46.6-.84,1.02-.25.28-.39.49-.42.59-.07.14-.14.17-.25.17-.31,0-.7-.52-.88-.77-.35-.53-.56-.67-.91-.91-.07-.04-.1,0-.14,0-.31,0-.81.67-1.05.91-.8,1.05-1.44,2.98-1.44,4.83,0,.18.07.49.18,1.02.49,2.21,1.33,4.69,2.03,6.83.52,1.58,1.01,2.91,1.47,3.92.46,1.05.74,1.68.84,1.86.17.24.35.67.28,1.01-.31.63-1.23.63-2.17.7-.18,0-.39.04-.56.04-.74,0-1.26-.17-1.54-.74-.8-1.4-1.29-3.54-1.82-5.32-.31-1.12-.63-2.31-.95-3.33-.14-.42-.21-.91-.38-.91-.28,0-.35.38-.63,1.08-1.44,3.19-3.12,7-4.59,10.15-.42.88-.38,1.26-1.02,1.37-.03,0-.07.04-.14.04-.04,0-.11,0-.14-.04-.42-.14-1.19-.46-1.19-.94,0-.11.04-.21.1-.39,1.68-3.39,3.5-7.56,5.08-11.03.6-1.26.63-1.37,1.05-2.42.1-.28.14-.59.14-.94,0-.63-.14-1.3-.28-1.89-.49-2.35-1.33-4.9-2.87-6.16-.25-.21-.39-.49-.39-.8,0-.95,1.26-.95,2.24-.95Zm13.51,6.27v-.21c.07-.67.25-1.47.25-2.17,0-.46.03-1.16.03-1.68v-.63c0-.46.04-.84.35-1.01.39-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.52.04,1.08.25,1.08.63,0,.14-.07.28-.17.42-.04.07-.18.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.04.1-.04.17-.04.21,0,.14.07.21.21.17.7-.17,1.44-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.52c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.8-.46-.04-.14-.04-.25-.04-.32,0-.21.04-.31.04-.8,0-1.08.52-2.94.94-4.2.46-1.44,1.05-3.08,1.51-4.45.25-.7.31-.88.31-1.19,0-.84-.77-.88-1.72-.88s-1.71.04-1.85.77c-.18.91-.31,1.96-.42,3.15-.1.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.52-.38-.52-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.25-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.38.95.94.95.74,0,1.16-.14,1.16-.84Zm6.02,1.89c0-.7.84-1.33,1.33-1.68,1.12-.81,2.35-1.37,4.03-1.61.25-.07.49-.07.7-.07,1.5,0,2.17.84,2.17,2.07,0,.56-.14,1.19-.42,1.89-.46,1.26-1.86,2.52-2.94,3.33-.98.73-2.42,1.75-3.75,1.89h-.07c-.49,0-.7-.28-.7-.56,0-.25.14-.53.39-.7.95-.67,1.96-1.58,2.66-2.56.25-.35.6-1.12.6-1.75,0-.42-.14-.77-.52-.95-.1-.03-.28-.07-.42-.07-.24,0-.49.07-.67.21-.38.28-1.29.91-1.79.98h-.28c-.21,0-.31-.17-.31-.42Zm-94.2-18.66c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Zm-65.34,12.08c0-.39-.14-.49-.35-.49-.25,0-.56.14-.84.21-.91.31-2.14.56-3.26.74-.14,1.12-.21,2.42-.21,3.6,0,.77.04,1.65.1,2.24,0,.35-.21.49-.52.49-.14,0-.25-.04-.39-.07-.35-.04-.73-.07-1.12-.07h-.38c-.25,0-.7.07-1.05.07-.28,0-.52-.04-.56-.21-.07-.14-.07-.39-.07-.7,0-.35,0-.74.07-1.26.21-1.85.77-6.3,1.16-8.02.25-1.01.38-1.65.42-1.92.14-.77.42-1.12,1.12-1.12h.42c.39,0,.88-.11,1.16-.14.18,0,.67-.17,1.08-.17s.56.25.56.59c0,.53-.52,1.16-.7,1.47-.46.8-.7,2.13-.81,3.22,1.12,0,2.45-.32,3.33-.49.52-.14.81-.11.91-.49.04-.11.04-.17,0-.25.1-.8.21-1.58.39-2.35.14-.59.14-.98.67-1.12.52-.14.98-.1,1.68-.17.77-.14,1.29-.35,1.96-.35.25,0,.39.21.39.42,0,.1-.04.21-.1.32-.63.91-.77,2.1-1.02,3.43-.18,1.12-.31,2.35-.31,3.61,0,1.65.24,3.29.45,4.66.04.35.14.67.14.91s-.1.39-.42.39c-.46,0-1.16-.11-1.75-.11-.7,0-1.23.07-1.86.07-.46,0-.35-.21-.42-.6-.04-.77-.04-1.47-.04-2.1,0-1.26.18-3.5.18-4.24Zm5.81-18.73c0,.18-.04.32-.07.49-.35,1.58-1.71,3.01-2.87,3.82-.28.17-.74.53-1.08.53-.32,0-.53-.25-.53-.59.07-.25.28-.46.49-.74s.81-1.05.81-1.65c0-.49-.7-.74-1.12-.74-.53,0-1.05.21-1.4.56-.63.56-1.23,1.33-1.68,2.03-.25.46-.59,1.16-1.05,1.16-.53,0-.77-.49-.77-.84,0-1.36,2.45-3.85,2.94-4.3.91-.84,2.35-1.51,3.78-1.51s2.56.6,2.56,1.79Zm-1.23,28.39c0-.14.14-.21.28-.32.39-.38,1.54-.67,2.21-.84.74-.21,1.82-.49,2.49-.56h.21c.88,0,1.61.63,2.17,1.08.81.53,1.89,1.23,3.01,1.4.07.04.14.04.21.04.7,0,1.3-.59,1.44-.95.14-.49.32-.95.32-1.65v-.24c-.07-1.12-.7-2.28-1.19-3.05-.1-.21-.21-.28-.35-.28-.24,0-.49.18-.73.32-.46.17-1.19.49-1.79.49s-1.65-.32-1.93-.63c-.21-.25-.31-.81-.31-1.3v-.31c0-.53.49-1.05.81-1.37.24-.28.73-.77,1.08-.84.25-.14,1.23-.49,1.79-.49.91,0,1.72.49,2.35.84.25.14.49.32.7.49.56-.42,1.05-1.05,1.12-2v-.42c0-.98-.28-1.44-.67-2.1-.35-.59-1.12-1.05-1.82-1.33-.39-.17-.88-.25-1.4-.25-.94,0-2,.25-2.52.56-.49.28-1.33,1.01-1.51,1.47-.1.25-.21.95-.35,1.16-.18.28-1.12.42-1.51.49-.46.14-.91.21-1.44.21-.49-.07-.63-.53-.63-1.02,0-.14.04-.31.04-.46,0-.04.07-.17.18-.46.1-.28.38-.63.73-1.01,1.61-1.68,4.66-2.91,8.02-3.01h.25c1.79,0,2.8.49,3.92,1.19,1.19.7,2.38,1.65,2.38,3.43,0,.63-.17,1.19-.25,1.79-.28.95-1.19,1.68-2,2.17-.49.28-1.02.53-1.61.74.53.95,1.61,2.07,2.17,2.94.39.63.42,1.43.42,2.27v.77c0,.49-.14.88-.42,1.16-1.26,1.19-3.12,2.17-4.76,2.91-.88.38-1.71.74-2.52.84h-.39c-.56,0-.8-.21-1.29-.59-.63-.49-1.47-1.08-2.14-1.58-.35-.25-.63-.42-.84-.53-.21-.04-.46-.07-.67-.07-.7,0-1.44.18-1.96.35-.25.04-.39.07-.49.07-.35-.18-.67-.77-.77-1.16,0-.17-.03-.25-.03-.38ZM224.39,1.22c0,.9-2.06,2.15-2.47,2.51-.18.18-.13.54.05.63.72.81,1.3,1.61,1.97,2.33.23.4.45.49.45.72,0,.09-.09.36-.14.45-1.25,1.26-2.29,2.24-3.63,3.14-.4.27-1.03.72-1.48.72-.36,0-.58-.36-.58-.81,0-.63.63-.81,1.08-1.26.31-.18.81-.54,1.03-.72.09-.18.09-.36,0-.45,0-.09-.14-.18-.4-.36-.63-.45-1.48-.99-2.11-1.43-.36-.18-.94-.54-.94-1.08,0-.05-.05-.09-.05-.18,0-.05,0-.09.05-.09.05-.09.31-.36.81-.9.94-.99,2.24-2.15,3.32-3.05.63-.45,1.03-.72,1.35-.81.18-.09.36-.09.49-.09.58,0,1.21.31,1.21.72Zm262.79,22.86c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.51-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.04.59-.1.84-.1.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.15-.46.49,0,.6.63.6,1.26Zm12.32-9.03c0,.1-.04.35-.17.67-.07.31-.14.7-.14,1.12,0,.84.25,2.27.42,3.15.07.7.21,1.29.31,1.85.14.74.28,1.33.77,1.33s.6-.21.95-.73c.42-.77.94-1.82,1.33-2.7.49-1.19.35-2.59.7-3.96.07-.25.17-.46.28-.56.6-.38,1.72-.32,2.42-.56l.56-.14c.28-.11.67-.17.94-.17.35.04.21.14.21.42,0,3.01.88,8.05,1.89,10.75.25.63.42.84.63,1.29.04.11.07.17.07.28,0,.28-.31.46-.42.63-.04.04-.1.07-.28.07-.49,0-1.12-.07-1.61-.07s-1.08.14-1.54.21c-.07,0-.14.04-.21.04-.31,0-.42-.17-.49-.53-.46-2.28-1.05-5.21-1.23-7.84-.1-.31-.21-.42-.31-.42-.25,0-.46.56-.63.95-.94,2.21-2.1,4.2-2.1,7.25.04.24-.28.52-.52.52-.49,0-1.4-.1-1.96-.14-.52,0-1.26.21-1.75.21-.07,0-.1-.04-.14-.04-.21-.21-.35.11-.38-.46-.14-.95-.25-2.62-.39-3.78-.14-1.23-.42-3.4-.98-4.06-.1-.1-.25-.17-.35-.17-.74,0-1.4,2.21-1.65,2.83-.49,1.26-.84,2.84-1.05,4.38,0,.31-.04.49-.04.56,0,.49-.31.49-.84.53-.46.07-1.05.14-1.61.14h-.25c-.77-.04-.88-.25-.98-.88v-.25c0-.31.1-.56.21-.88.18-.74.81-1.61,1.26-2.34.67-.98,1.54-2.17,2.24-3.05.91-1.08,1.5-2.7,1.89-4.24.07-.35.1-.56.1-.63,0-.32.18-.38.35-.59.04-.04.25-.11.67-.18.91-.21,2.1-.38,3.15-.38.52,0,.52.17.67.56Zm18.86,9.28c0,.74-.77,1.89-.91,2.1-.52.7-1.93,1.29-3.12,1.29-.14,0-.28,0-.42-.04-1.75-.67-1.02-3.22-1.57-4.97-.18-.59-.28-1.37-.28-2.17,0-2.73,1.08-4.41,2.8-5.36.95-.56,1.54-.95,3.08-.95.77,0,1.01.14,1.01.77,0,.52-.21,1.05-.35,1.43-.18.39-1.05.53-1.58.67-.56.18-1.4.42-1.51.98-.07.25-.14.67-.14,1.05,0,.46.1.88.39.91.31.11.38,0,.63-.14.25-.17,1.02-.7,1.54-.7.45,0,.52.63.52,1.16,0,.25-.04.52-.07.74-.1.49-1.4.63-1.82.77-.32.07-.67.49-.67.91v.98c0,.28.03.56.31.52.49-.07.88-.56,1.44-.56.46,0,.7.21.7.59Zm2.66,15.09c0-.49.1-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.52-.38,1.37-.98,2.06-.98.56,0,.88.46.95.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.52,6.62.18,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.39-.74-.81-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm5.7-2.91v-1.37c0-1.37.31-2.8.63-3.88.31-1.12.67-1.3,2.14-1.3.6-.03,1.3-.03,2.07-.03h2.35c3.08,0,5.57-.32,8.26-.56.14-.04.25-.04.35-.04.21,0,.38.04.52.04.39,0,.56.21.56.53s-.1.7-.21.88c-.25.52-.94,1.33-1.4,1.86-.32.42-.63.8-.95,1.12-.31.35-.52.52-.63.56-.25.04-.35.04-.35,0,0-.07-.04-.14-.1-.25-.1-.21-.1-.84-.14-1.19-.04-.42-.1-1.12-.28-1.36-.14-.21-.52-.67-.88-.67-.03,0-.07.03-.1.03-.63.39-.7.53-.84,1.54-.14.94-.31,2.24-.46,3.25-.07.56-.1.98-.1,1.29,0,1.65-.21,3.78-.21,5.36,0,.32.1.56-.25.6-.31.1-1.02.1-1.44.14-.49.04-1.19.07-1.58.07-.42-.04-.35-.35-.46-.7-.07-.25-.07-.63-.07-1.05v-.98c0-3.26.49-6.06.77-9.07,0-.38-.52-.49-1.12-.49-.73,0-1.65.21-1.82.45-.6.98-.63,2.49-.63,3.99v.77c.04.67.35.84.35,1.47,0,.59-.46.56-1.05.7-.6.07-.77.1-1.19.28-.17.11-.67.39-1.02.39-.7,0-.73-1.44-.73-2.38Zm26.95,6.55c-.8-.04-1.85-.07-2.73-.07h-.98c-1.01,0-2.13.25-3.12.25-1.08,0-1.79-.1-1.85-1.12,0-.77.14-1.75.28-2.7.35-2.76.67-6.02,1.37-8.44.31-.59.49-.84,1.3-.95.94-.14,1.82-.56,2.73-.7.42,0,.84.56.84,1.02,0,.49-.49.67-.77.94-.07.04-.18.25-.35.56-.31.7-.63,1.65-.84,2.45-.14.46-.21.8-.21,1.08,0,.42.31.67.7.67.17,0,.35-.07.52-.14.35-.17,1.05-.59,1.61-.59.1,0,.21.03.31.07.28.11.63.91.81,1.23.46.91.88,1.5,1.19,2.52.25.84.56,1.89.56,2.83,0,.84-.46,1.08-1.37,1.08Zm-4.41-5.29c-.63,0-.63.98-.63,1.85s.04,2.1.84,2.17h.17c.84,0,1.58-.28,1.58-1.12,0-.95-.56-1.82-.98-2.38-.25-.31-.56-.52-.98-.52Zm-37.18-13.43c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Zm54.96,18.61c-.18,0-.21-.24-.25-.38,0-.59-.04-1.4-.04-2.21,0-2.87.17-5.6.67-7.91.17-1.05.25-2.73,1.19-2.73h.56c.42.03.95.03,1.54.03,2.94,0,5.85-.1,8.54-.28h.63c.21,0,.46.14.46.35,0,.04-.04.07-.04.11,0,.07-.07.31-.14.73-.56,2.17-1.05,4.69-1.05,7.42v.35c.04,1.5.1,2.73.14,4.17.07.21-.07.38-.21.42-.42,0-1.19.04-1.75.04s-1.33-.04-1.79-.04c-.32-.04-.35-.14-.42-.38,0-.53-.04-1.23-.04-1.93,0-3.29.21-6.51.7-9.21.04-.07.07-.14.07-.25,0-.42-.21-.39-.77-.35h-1.12c-.46,0-.98,0-1.54.04-.56,0-.67.49-.84,1.05-.56,2.35-.8,5.15-.8,8.16v2.28c.07.25-.11.42-.28.42-.25.07-.73.07-1.19.07h-.6c-.49,0-1.26.03-1.64.03Zm17.67-11.8c1.29-.91,3.19-1.82,5.04-1.89h.11c1.54,0,2.62,1.19,3.33,2.17.74,1.05,1.44,2.66,1.44,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.92-.98-3.19-3.12-3.19-6.13,0-2.38,1.51-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.92,1.29-.21.35-.32.77-.32,1.19,0,1.05.56,2.17.91,2.8.59.98,1.65,1.89,2.83,2.24.11,0,.18.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.11-.04-.21-.04-.28-.04Zm9.24,10.57c-.18,0-.21-.24-.25-.38,0-.59-.04-1.4-.04-2.21,0-2.87.17-5.6.67-7.91.17-1.05.25-2.73,1.19-2.73h.56c.42.03.95.03,1.54.03,2.94,0,5.85-.1,8.54-.28h.63c.21,0,.46.14.46.35,0,.04-.04.07-.04.11,0,.07-.07.31-.14.73-.56,2.17-1.05,4.69-1.05,7.42v.35c.04,1.5.1,2.73.14,4.17.07.21-.07.38-.21.42-.42,0-1.19.04-1.75.04s-1.33-.04-1.79-.04c-.32-.04-.35-.14-.42-.38,0-.53-.04-1.23-.04-1.93,0-3.29.21-6.51.7-9.21.04-.07.07-.14.07-.25,0-.42-.21-.39-.77-.35h-1.12c-.46,0-.98,0-1.54.04-.56,0-.67.49-.84,1.05-.56,2.35-.8,5.15-.8,8.16v2.28c.07.25-.11.42-.28.42-.25.07-.73.07-1.19.07h-.6c-.49,0-1.26.03-1.64.03Zm15.4,11.8c0-.49.11-.77.56-.88.03-.35,0-.67,0-1.02,0-1.92-.32-3.75-.49-5.78-.17-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.53-.38,1.37-.98,2.07-.98.56,0,.88.46.95.95.21,1.96.38,3.78.38,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.73.59-1.4.59-.39,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.53,6.62.17,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.02,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.38-.74-.8-.74-1.29,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm13.2-9.87c.46,0,.77.14.77.56,0,2.73.21,5.78.74,8.02.24,1.05.56,2.17.84,3.08.14.42.25.67.31.77.07.1.11.21.11.28,0,.28-.25.52-.42.59-.35.21-1.02.14-1.58.21-.17.04-.35.04-.53.04h-1.01c-.74,0-.63-3.15-.95-3.75-.07-.32-.35-.49-.63-.49-.21,0-.42.1-.6.31-.56.67-1.01,1.82-1.4,2.77-.35.98-1.02,1.44-2.24,1.44-.84,0-1.23-.74-1.23-1.54s.17-1.15.63-2.17c.74-1.58,2-3.08,2.84-4.69.31-.56.7-1.29.88-1.82.07-.17.1-.38.1-.59,0-.7-.31-1.61-.42-2.07,0-.07-.04-.14-.04-.17,0-.49.67-.53,1.26-.53.28,0,.7-.04.94-.04.39,0,1.09-.21,1.61-.21Zm-2.91,5.36c-.28,0-.42.32-.7.63-.38.56-.84,1.33-1.16,2-.14.28-.28.73-.28,1.12,0,.31.1.59.49.59.07,0,.17-.04.31-.07.81-.21,1.44-1.01,1.82-1.68.14-.25.21-.42.21-.56,0-.67-.04-2.03-.7-2.03Zm13.4-4.87c1.12-.1,2.1-.25,3.19-.31.11-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.95,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.22,1.54-.11.17-.18.35-.18.46,0,.17.11.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.32,0,.53.14.74.35.42.84.67,2.1.95,3.19.24.95.49,2.03.67,3.01.07.42.1.74.1.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.31-.77-.31-1.29.14-2.49.38-4.73.7-7.18.14-1.23.35-2.38.59-3.47.1-.49.25-1.19.74-1.19t.07.04h.35c1.08,0,2.28.1,3.46.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.04c.74,0,.98,0,1.08-.49.11-.35.14-.8.14-1.22v-.49c0-.98-.45-2.31-.77-3.04-.17-.32-.35-.49-.53-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.95-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.04-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.1.88.42.88Zm6.93,2.55v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.04-.84.35-1.01.39-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.76.04,1.61,0,3.89-.11,5.53-.11.52.04,1.08.25,1.08.63,0,.14-.07.28-.17.42-.04.07-.18.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.53,1.19-.67,1.79-.04.1-.04.17-.04.21,0,.14.07.21.21.17.7-.17,1.44-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.52c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.8-.46-.04-.14-.04-.25-.04-.32,0-.21.04-.31.04-.8,0-1.08.52-2.94.94-4.2.46-1.44,1.05-3.08,1.51-4.45.25-.7.31-.88.31-1.19,0-.84-.77-.88-1.71-.88s-1.71.04-1.86.77c-.17.91-.31,1.96-.42,3.15-.1.81-1.05,1.02-1.79,1.33-.21.11-1.01.46-1.54.46-.46,0-.53-.38-.53-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.25-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.38.95.94.95.74,0,1.16-.14,1.16-.84Zm6.02,1.89c0-.7.84-1.33,1.33-1.68,1.12-.81,2.34-1.37,4.03-1.61.25-.07.49-.07.7-.07,1.51,0,2.17.84,2.17,2.07,0,.56-.14,1.19-.42,1.89-.46,1.26-1.86,2.52-2.94,3.33-.98.73-2.42,1.75-3.75,1.89h-.07c-.49,0-.7-.28-.7-.56,0-.25.14-.53.38-.7.95-.67,1.96-1.58,2.66-2.56.25-.35.6-1.12.6-1.75,0-.42-.14-.77-.53-.95-.1-.03-.28-.07-.42-.07-.25,0-.49.07-.67.21-.38.28-1.29.91-1.79.98h-.28c-.21,0-.31-.17-.31-.42Zm-34.99-18.79c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29ZM88.26,62.24c0-.39-.14-.49-.35-.49-.25,0-.56.14-.84.21-.91.31-2.13.56-3.25.74-.14,1.12-.21,2.42-.21,3.6,0,.77.04,1.65.1,2.24,0,.35-.21.49-.52.49-.14,0-.25-.04-.39-.07-.35-.04-.73-.07-1.12-.07h-.38c-.25,0-.7.07-1.05.07-.28,0-.53-.04-.56-.21-.07-.14-.07-.39-.07-.7,0-.35,0-.74.07-1.26.21-1.85.77-6.3,1.16-8.02.25-1.01.38-1.65.42-1.92.14-.77.42-1.12,1.12-1.12h.42c.39,0,.88-.11,1.16-.14.18,0,.67-.17,1.08-.17s.56.25.56.59c0,.53-.53,1.16-.7,1.47-.46.8-.7,2.13-.8,3.22,1.12,0,2.45-.32,3.33-.49.52-.14.8-.11.91-.49.04-.11.04-.17,0-.25.1-.8.21-1.58.38-2.35.14-.59.14-.98.67-1.12.53-.14.98-.1,1.68-.17.77-.14,1.29-.35,1.96-.35.25,0,.38.21.38.42,0,.1-.04.21-.1.32-.63.91-.77,2.1-1.02,3.43-.17,1.12-.31,2.35-.31,3.61,0,1.65.24,3.29.45,4.66.04.35.14.67.14.91s-.11.39-.42.39c-.46,0-1.16-.11-1.75-.11-.7,0-1.23.07-1.86.07-.46,0-.35-.21-.42-.6-.04-.77-.04-1.47-.04-2.1,0-1.26.17-3.5.17-4.24Zm5.91-18.73c0,.18-.04.32-.07.49-.35,1.58-1.71,3.01-2.87,3.82-.28.17-.74.53-1.08.53-.32,0-.53-.25-.53-.59.07-.25.28-.46.49-.74s.8-1.05.8-1.65c0-.49-.7-.74-1.12-.74-.53,0-1.05.21-1.4.56-.63.56-1.22,1.33-1.68,2.03-.25.46-.59,1.16-1.05,1.16-.53,0-.77-.49-.77-.84,0-1.36,2.45-3.85,2.94-4.3.91-.84,2.34-1.51,3.78-1.51s2.56.6,2.56,1.79Zm127.14,12.57c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.94,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.17.35-.17.46,0,.17.11.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.31,0,.52.14.74.35.42.84.67,2.1.94,3.19.25.95.49,2.03.67,3.01.07.42.11.74.11.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.32-.77-.32-1.29.14-2.49.39-4.73.7-7.18.14-1.23.35-2.38.6-3.47.1-.49.25-1.19.73-1.19t.07.04h.35c1.09,0,2.28.1,3.47.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.04c.73,0,.98,0,1.08-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.46-2.31-.77-3.04-.18-.32-.35-.49-.53-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.95-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.03-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.11.88.42.88Zm9.9-2.1c1.29-.91,3.18-1.82,5.04-1.89h.11c1.54,0,2.62,1.19,3.33,2.17.74,1.05,1.43,2.66,1.43,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.5-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.64,1.89,2.83,2.24.11,0,.17.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.11-.04-.21-.04-.28-.04Zm-121.06,7.04c0,.91-.28,1.89-.67,2.35-.56.73-2,1.29-3.22,1.29-.1,0-.21,0-.31-.04-.95-.59-1.5-2.66-1.82-4.1-.35-1.36-.56-2.73-.56-4.24,0-.94.14-1.68.56-2.38.67-1.12,1.58-1.96,2.62-2.59.32-.21.88-.32,1.44-.32.77,0,1.58.21,1.79.59.17.39.31,1.08.31,1.72,0,.31-.03.59-.1.84-.11.42-1.02.7-1.44.88-.56.21-1.37.53-1.47,1.12-.14.46-.21,1.08-.21,1.75,0,.84.1,2.56.7,2.56.21,0,.42-.14.63-.25.28-.17.77-.46,1.16-.46.49,0,.59.63.59,1.26Zm14.59,2c0-.8.14-1.71.21-2.34.35-2.49.77-4.87,1.29-7,.1-.38.14-.8.31-1.05.39-.53.74-.7,1.51-.77.8-.07,1.85-.14,2.66-.14.28,0,.53.21.53.38,0,.11-.07.21-.21.35-.59.49-.73.84-1.01,1.89-.53,2.14-1.01,4.9-1.19,7.42,0,.07,0,.14,0,.21,0,1.07.28,1.47,1.4,1.47h2.62c.81,0,.88-.7.88-1.54v-3.71c.21-2.7.35-3.5.63-4.94.1-.46.25-.98.7-1.08.77-.17,2.03-.28,2.87-.56h.14c.38,0,.59.25.59.53,0,.17-.1.38-.35.53-.17.1-.35.35-.53.73-.17.39-.35,1.37-.52,2.91-.18,1.54-.28,3.43-.32,5.71.04.77.35,1.82,1.54,1.82h1.29c1.05,0,2.24,0,2.24-.98v-.21c-.14-.77-.14-2.24-.17-3.29v-.88c0-2,.11-4.17.49-5.5.21-.74.59-1.16,1.33-1.19.91-.04,1.75-.25,2.52-.39h.1c.25,0,.46.25.46.46,0,.46-.38.32-.7.95-.17.35-.35,1.26-.46,2.7-.1,1.44-.17,3.57-.21,6.37.11.56.18,1.05.35,1.51.07.14.1.31.1.49,0,.52-.28,1.01-.7,1.01-.32.07-.67.11-1.05.11-1.61,0-3.12-.32-4.79-.32h-.21c-.53,0-.77.04-1.3.07-.21,0-.42,0-.52.07-.18.04-.21.35-.28.56-.11,2.13-.21,4.34-.38,6.37-.07,1.33-.46,2.8-.84,3.85-.21.67-.42.84-.7,1.02-.28.17-.59.28-.98.28-.63,0-1.4-.31-1.4-.91,0-.35.17-.77.28-1.02.28-.59.56-1.68.7-2.24.38-1.75.42-4.55.42-6.62,0-.63-.07-1.05-.25-1.47-1.05-.07-2.03-.14-3.12-.17h-.28c-1.26,0-2.34.21-3.5.42-.46.07-.53-.21-.91-.21-1.02,0-1.29-.49-1.29-1.65Zm32.41-5.21c0-.39-.14-.49-.35-.49-.24,0-.56.14-.84.21-.91.31-2.13.56-3.25.74-.14,1.12-.21,2.42-.21,3.6,0,.77.03,1.65.1,2.24,0,.35-.21.49-.52.49-.14,0-.25-.04-.39-.07-.35-.04-.74-.07-1.12-.07h-.38c-.25,0-.7.07-1.05.07-.28,0-.53-.04-.56-.21-.07-.14-.07-.39-.07-.7,0-.35,0-.74.07-1.26.21-1.85.77-6.3,1.16-8.02.25-1.01.38-1.65.42-1.92.14-.77.42-1.12,1.12-1.12h.42c.39,0,.88-.11,1.16-.14.17,0,.67-.17,1.08-.17s.56.25.56.59c0,.53-.53,1.16-.7,1.47-.46.8-.7,2.13-.81,3.22,1.12,0,2.45-.32,3.33-.49.52-.14.8-.11.91-.49.03-.11.03-.17,0-.25.1-.8.21-1.58.38-2.35.14-.59.14-.98.67-1.12.53-.14.98-.1,1.68-.17.77-.14,1.3-.35,1.96-.35.24,0,.38.21.38.42,0,.1-.04.21-.11.32-.63.91-.77,2.1-1.01,3.43-.17,1.12-.32,2.35-.32,3.61,0,1.65.25,3.29.46,4.66.04.35.14.67.14.91s-.11.39-.42.39c-.46,0-1.16-.11-1.75-.11-.7,0-1.22.07-1.85.07-.46,0-.35-.21-.42-.6-.03-.77-.03-1.47-.03-2.1,0-1.26.17-3.5.17-4.24Zm16.97-5.81c0,.1-.04.35-.17.67-.07.31-.14.7-.14,1.12,0,.84.25,2.27.42,3.15.07.7.21,1.29.32,1.85.14.74.28,1.33.77,1.33s.59-.21.94-.73c.42-.77.95-1.82,1.33-2.7.49-1.19.35-2.59.7-3.96.07-.25.18-.46.28-.56.59-.38,1.71-.32,2.42-.56l.56-.14c.28-.11.67-.17.95-.17.35.04.21.14.21.42,0,3.01.88,8.05,1.89,10.75.25.63.42.84.63,1.29.04.11.07.17.07.28,0,.28-.31.46-.42.63-.04.04-.11.07-.28.07-.49,0-1.12-.07-1.61-.07s-1.08.14-1.54.21c-.07,0-.14.04-.21.04-.31,0-.42-.17-.49-.53-.46-2.28-1.05-5.21-1.22-7.84-.11-.31-.21-.42-.32-.42-.25,0-.46.56-.63.95-.95,2.21-2.1,4.2-2.1,7.25.04.24-.28.52-.52.52-.49,0-1.4-.1-1.96-.14-.53,0-1.26.21-1.75.21-.07,0-.1-.04-.14-.04-.21-.21-.35.11-.38-.46-.14-.95-.25-2.62-.39-3.78-.14-1.23-.42-3.4-.98-4.06-.11-.1-.25-.17-.35-.17-.73,0-1.4,2.21-1.64,2.83-.49,1.26-.84,2.84-1.05,4.38,0,.31-.03.49-.03.56,0,.49-.32.49-.84.53-.46.07-1.05.14-1.61.14h-.25c-.77-.04-.88-.25-.98-.88v-.25c0-.31.11-.56.21-.88.17-.74.8-1.61,1.26-2.34.67-.98,1.54-2.17,2.24-3.05.91-1.08,1.51-2.7,1.89-4.24.07-.35.11-.56.11-.63,0-.32.17-.38.35-.59.04-.04.25-.11.67-.18.91-.21,2.1-.38,3.15-.38.53,0,.53.17.67.56Zm12.56,5.42v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.04-.84.35-1.01.38-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.53.04,1.09.25,1.09.63,0,.14-.07.28-.18.42-.04.07-.17.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.03.1-.03.17-.03.21,0,.14.07.21.21.17.7-.17,1.43-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.53c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.81-.46-.03-.14-.03-.25-.03-.32,0-.21.03-.31.03-.8,0-1.08.53-2.94.95-4.2.46-1.44,1.05-3.08,1.5-4.45.25-.7.32-.88.32-1.19,0-.84-.77-.88-1.71-.88s-1.72.04-1.86.77c-.17.91-.32,1.96-.42,3.15-.11.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.53-.38-.53-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.24-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.39.95.95.95.74,0,1.16-.14,1.16-.84Zm-85.81-1.17v-.31c0-1.26.59-2.21,1.23-2.94.8-.98,1.92-1.75,3.01-2.52-.32-.38-.63-.74-.95-1.05-1.05-1.12-2.1-2.45-2.8-3.85-.35-.67-.38-.95-.49-1.71v-.28c0-.63.35-1.12.74-1.5.73-.84,2.24-1.51,3.71-1.75.11,0,.17-.03.28-.03.42,0,.67.24.67.52,0,.17-.11.38-.35.56-.39.28-.49.84-.49,1.61,0,.42.21,1.12.59,2.03.42,1.02,1.01,2.14,1.79,3.4.17-.17.53-.42.67-.56,1.82-1.82,3.64-4.1,5.01-6.23.31-.53.49-.91.52-1.12.04-.18.07-.35.07-.46,0-.18-.07-.28-.25-.28-.04,0-.1,0-.21.04-.31.1-.56.42-.98.42h-.14c-.46-.11-.63-.21-.63-.7,0-.7,1.08-1.08,1.68-1.37.67-.28,1.61-.67,2.24-.88.32-.07.56-.14.81-.14.56,0,.95.25,1.26.73.04.07.07.18.07.28,0,.17-.07.42-.17.7-.77,1.89-2.38,3.75-3.64,5.25-1.68,1.82-3.82,3.6-5.67,5.29l.74,1.05c.98,1.29,1.68,2.35,2.13,3.75.14.52.21,1.05.21,1.54,0,1.37-.56,2.59-1.33,3.39-.94,1.02-2.42,1.68-4.45,1.68h-.21c-3.01,0-4.66-1.71-4.66-4.55Zm3.22-.67c0,1.23.25,2.35.8,3.01.28.31.63.46,1.02.46.42,0,.88-.21,1.19-.56.42-.42.7-1.33.7-2.55,0-1.72-1.01-3.29-1.82-4.38-1.16,1.02-1.89,1.93-1.89,4.03Zm3.46-23.57c2.38,0,3.85.67,4.69,2.28.17.42.31,1.01.31,1.61,0,.52-.1,1.05-.28,1.4-.11.25-.28.39-.46.42h-2.35c-.25,0-.46-.25-.52-.46-.04-.24-.04-.52,0-.8.03-.07.03-.14.03-.25,0-.63-.35-1.4-.7-1.61-.25-.17-.56-.25-.95-.25-.7.07-1.16.49-1.37,1.12-.07.21-.11.39-.11.53,0,.35.14.67.14,1.08,0,.25-.21.53-.42.6-.74.03-1.4.1-2.14.1-.59,0-.67-.04-.91-.42-.21-.42-.31-1.05-.31-1.71,0-2.7,2.66-3.64,5.32-3.64Zm134.7,27.57h-.91c-.53-.04-1.29-.07-1.72-.07-.24-.07-.46-.35-.46-.63,0-2,.04-4.79.28-6.65.04-.38.11-.84.14-1.4l.21-1.61c.14-1.4.07-3.08,1.33-3.25.07-.04.31,0,.77,0,.91.04,2.03.1,3.01.1h.98c1.26,0,2.98-.17,4.24-.25.24,0,.46-.03.63-.03.35,0,.56.07.56.42,0,.25-.21.38-.42.56-.91,1.02-1.79,2.07-2.49,3.26-.14.25-.21.59-.49.52-.14-.07-.25-.21-.28-.52-.18-1.12-.42-2.28-1.47-2.63-.35-.1-.77-.14-1.19-.14h-.38c-.52.04-.88.25-.91.67,0,.59-.14,1.58-.21,2.35-.07.94-.21,2.27-.21,3.22,0,1.44.04,3.26.17,4.62,0,.42.04.7.04.8,0,.56-.56.67-1.22.67Zm11.02,11.69c0-.49.1-.77.56-.88.04-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.18-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.53-.38,1.37-.98,2.07-.98.56,0,.88.46.94.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.74.59-1.4.59-.38,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.53,6.62.17,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.01,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.38-.74-.8-.74-1.3,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm8.33-8.26c1.29-.91,3.18-1.82,5.04-1.89h.11c1.54,0,2.62,1.19,3.33,2.17.74,1.05,1.43,2.66,1.43,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.5-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.64,1.89,2.83,2.24.11,0,.17.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.11-.04-.21-.04-.28-.04Zm13.23,4.79c.35,0,.88-.35,1.08-.49.38-.17.98-.56,1.5-.56h.11c.42.07.84.67,1.12,1.01.88,1.3,1.61,2.91,1.86,4.87.04.17.04.31.04.35,0,.49-.25.53-.56.63-.04.04-.28,0-.7,0-.63,0-.63.04-1.4.04-.7,0-1.86-.04-2.49-.04-.98,0-2.28.11-3.29.11h-.67c-.39-.04-.84-.42-.84-.88v-.63c0-3.64.46-7.63,1.23-10.64.17-.67.25-.95.91-.95h3.12c1.89,0,3.89,0,5.29-.35.35-.07.67-.14.95-.14.35,0,.49.25.49.53,0,.17-.07.38-.14.56-.28.49-1.16,1.29-1.47,1.75-.31.46-.59,1.08-.95,1.5-.1.14-.24.21-.35.21h-.07c-.46,0-1.05-1.19-1.05-1.64-.11-1.05-.35-1.51-1.54-1.51-.91,0-1.54.11-1.65.67-.28,1.02-.56,2.66-.7,3.92-.07.46-.1.84-.1,1.08.04.14-.14.59.28.59Zm-.67,3.54c0,.63.18,1.19.7,1.19.91,0,1.47-.17,1.47-1.05,0-1.12-.28-2-1.4-2-.63,0-.77,1.05-.77,1.85Zm24.43-6.83c0-.32.07-.7-.04-1.02-.07-.77-.98-1.4-1.71-1.5-.18,0-.74-.04-1.12-.04-.63,0-.63.39-.73,1.02-.21,1.16-.6,2.7-.6,3.96,0,.17-.07.38.53.32.74-.14,1.75-.35,2.56-.35.42,0,.8,1.02.98,1.47.46,1.22.91,2.73,1.19,4.06.07.31.11.52.11.63,0,.49-.28.49-.6.63-.04.04-.28,0-.63,0h-3.68c-1.01,0-2.34.11-3.39.11h-.7c-.35-.04-.84-.39-.84-.84,0-.28.04-.52.14-1.22.46-2.87.95-6.16,1.43-9.14v-.11c0-.74-1.01-.88-1.96-.88-.8,0-1.16.04-1.58.53-.17.17-.35.49-.38,1.01,0,.38-.04,1.12-.04,1.58v1.08c0,.32.07.77.07,1.19,0,.53-.11.98-.46,1.01-.67,0-1.61.07-2.28.07-.53,0-.77-.04-.91-.35v-.53c0-1.82.07-3.82.21-5.6.07-.46.14-1.02.7-1.02h.07c.84,0,2.49.04,3.5.04h2.91c.42,0,.7-.17.8-.52.04-.04.14-.46.39-1.19.56-1.82,1.33-4.03,2.13-5.81.42-1.02.88-1.82,1.33-2.42.14-.18.42-.25.74-.25h.8c.32-.04.67-.07,1.09-.07h.24c.25,0,.88.21.88.59,0,.04-.04.11-.04.18-.25.49-.21.35-.67,1.05-1.44,2.17-2.66,5.04-3.54,8.02-.03.14-.03.25-.03.35,0,.28,1.05.31,1.82.31h1.93c1.22,0,2.31-.35,3.46-.35.39,0,.53.21.53.49,0,.73-.63,1.12-1.05,1.54-.53.49-.98.84-1.44,1.4-.31.35-.63.7-.98,1.02-.18.14-.39.25-.56.25-.32,0-.59-.49-.59-.7Zm-4.38,4.73c-.35,0-.46.28-.52.7-.11.31-.18.73-.18,1.19,0,.63.18,1.23.74,1.23.95,0,1.5-.17,1.5-1.23-.04-.88-.59-1.89-1.54-1.89Zm13.3-9.07h1.02c1.26.07,1.61.42,1.96,1.4.25.8.52,1.82.77,2.56.07.17.32.42.42.14.67-1.33,1.44-3.19,2.8-3.78.7-.28,1.19-.42,2.17-.42.74,0,1.65.07,2.31.17.46.07.7.28.7.56,0,.38-.35.7-.56.94l-.42.42c-.35.39-.46.6-.84,1.02-.25.28-.38.49-.42.59-.07.14-.14.17-.25.17-.32,0-.7-.52-.88-.77-.35-.53-.56-.67-.91-.91-.07-.04-.11,0-.14,0-.32,0-.81.67-1.05.91-.8,1.05-1.43,2.98-1.43,4.83,0,.18.07.49.17,1.02.49,2.21,1.33,4.69,2.03,6.83.52,1.58,1.01,2.91,1.47,3.92.46,1.05.74,1.68.84,1.86.18.24.35.67.28,1.01-.31.63-1.22.63-2.17.7-.17,0-.38.04-.56.04-.73,0-1.26-.17-1.54-.74-.8-1.4-1.29-3.54-1.82-5.32-.31-1.12-.63-2.31-.94-3.33-.14-.42-.21-.91-.39-.91-.28,0-.35.38-.63,1.08-1.43,3.19-3.12,7-4.58,10.15-.42.88-.39,1.26-1.02,1.37-.04,0-.07.04-.14.04-.04,0-.11,0-.14-.04-.42-.14-1.19-.46-1.19-.94,0-.11.04-.21.1-.39,1.68-3.39,3.5-7.56,5.08-11.03.59-1.26.63-1.37,1.05-2.42.1-.28.14-.59.14-.94,0-.63-.14-1.3-.28-1.89-.49-2.35-1.33-4.9-2.87-6.16-.25-.21-.38-.49-.38-.8,0-.95,1.26-.95,2.24-.95Zm13.51,6.27v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.04-.84.35-1.01.38-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.53.04,1.09.25,1.09.63,0,.14-.07.28-.18.42-.04.07-.17.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.03.1-.03.17-.03.21,0,.14.07.21.21.17.7-.17,1.43-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.53c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.81-.46-.03-.14-.03-.25-.03-.32,0-.21.03-.31.03-.8,0-1.08.53-2.94.95-4.2.46-1.44,1.05-3.08,1.5-4.45.25-.7.32-.88.32-1.19,0-.84-.77-.88-1.71-.88s-1.72.04-1.86.77c-.17.91-.32,1.96-.42,3.15-.11.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.53-.38-.53-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.24-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.39.95.95.95.74,0,1.16-.14,1.16-.84Zm-43.05-16.86c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Zm72.58,18.3s.07-.63-.04-1.01c-.1-.46-.21-.74-.49-1.12-.88-1.19-2.42-2.94-2.42-2.94,0,.88-.21,1.75-.21,2.7,0,.46.04,1.12.04,1.61,0,.42-.04,1.08-.25,1.26-.32.21-1.12.25-1.71.25h-.39c-.38,0-.73.11-1.05,0-.28-.14-.32-.88-.32-1.44v-.52c0-.53.07-1.08.11-1.68l.53-4.58c-.84.7-1.68,1.29-2.35,2.1-.7.84-1.01,1.26-1.47,2.21-.35.77-.56,1.33-.56,2.42v.28c0,.35,0,.7.04,1.05,0,0-.28.25-.49.28-.46.1-.74.1-1.12.1h-.31c-.49,0-1.68-.25-1.68-.59,0-1.68.53-2.35,1.4-3.36.98-1.12,2-2.1,3.12-3.15l-.28-.39c-.42.07-1.16.21-1.79.21-1.29,0-1.43-.56-1.43-1.96,0-.42.03-.88.03-1.22.04-.81,0-1.86.39-2.03.88-.46,2.49-.49,3.75-.49.84,0,1.54.46,2.07.8.35.25.67.53.98.81,0-.46.07-.88.11-1.29,0-.49.28-.67.77-.67.6,0,1.12-.07,1.68-.07.25,0,.46,0,.63.04.25.21.25.77.25,1.22,0,.28-.04.6-.07.91.81-.8,1.79-1.54,2.91-2.07.35-.17,1.23-.28,2.03-.28s1.58.14,1.58.63c0,.1-.04.25-.1.38-.53.84-1.58,2.14-2.35,2.98-.52-.07-.91-.21-1.33-.63-.21-.28-.52-.49-.88-.49-.21,0-.38.07-.56.21-.53.42-.88.74-1.33,1.19l1.4,1.4c.53.53,1.4,1.3,1.79,1.82,1.12,1.33,2.63,2.77,3.15,4.73.07.17.11.32.11.46,0,.35-.25.49-.63.56-.53.07-1.26.25-1.89.25-.59,0-1.33-.21-1.33-.84Zm-8.72-7.04c.46-.46.98-.88,1.43-1.33l-.67-.88c-.28-.32-.56-.6-.88-.6h-.1c-.32,0-.7.17-.74.53v1.75l.63.84.32-.31Zm23.07.91c0-.39-.14-.49-.35-.49-.25,0-.56.14-.84.21-.91.31-2.13.56-3.25.74-.14,1.12-.21,2.42-.21,3.6,0,.77.03,1.65.1,2.24,0,.35-.21.49-.53.49-.14,0-.24-.04-.38-.07-.35-.04-.73-.07-1.12-.07h-.38c-.25,0-.7.07-1.05.07-.28,0-.53-.04-.56-.21-.07-.14-.07-.39-.07-.7,0-.35,0-.74.07-1.26.21-1.85.77-6.3,1.16-8.02.25-1.01.38-1.65.42-1.92.14-.77.42-1.12,1.12-1.12h.42c.38,0,.88-.11,1.16-.14.17,0,.67-.17,1.08-.17s.56.25.56.59c0,.53-.53,1.16-.7,1.47-.46.8-.7,2.13-.81,3.22,1.12,0,2.45-.32,3.33-.49.52-.14.8-.11.91-.49.03-.11.03-.17,0-.25.1-.8.21-1.58.38-2.35.14-.59.14-.98.67-1.12.52-.14.98-.1,1.68-.17.77-.14,1.3-.35,1.96-.35.25,0,.38.21.38.42,0,.1-.04.21-.11.32-.63.91-.77,2.1-1.01,3.43-.17,1.12-.32,2.35-.32,3.61,0,1.65.25,3.29.46,4.66.04.35.14.67.14.91s-.11.39-.42.39c-.45,0-1.15-.11-1.75-.11-.7,0-1.22.07-1.85.07-.46,0-.35-.21-.42-.6-.03-.77-.03-1.47-.03-2.1,0-1.26.17-3.5.17-4.24Zm12.7-6.16c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.94,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.17.35-.17.46,0,.17.11.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.31,0,.52.14.74.35.42.84.67,2.1.94,3.19.25.95.49,2.03.67,3.01.07.42.11.74.11.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.32-.77-.32-1.29.14-2.49.39-4.73.7-7.18.14-1.23.35-2.38.6-3.47.1-.49.25-1.19.73-1.19t.07.04h.35c1.09,0,2.28.1,3.47.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.04c.73,0,.98,0,1.08-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.46-2.31-.77-3.04-.18-.32-.35-.49-.53-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.95-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.03-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.11.88.42.88Zm9.9-2.1c1.29-.91,3.18-1.82,5.04-1.89h.11c1.54,0,2.62,1.19,3.33,2.17.74,1.05,1.43,2.66,1.43,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.5-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.64,1.89,2.83,2.24.11,0,.17.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.11-.04-.21-.04-.28-.04Zm8.99,4.13v-1.37c0-1.37.32-2.8.63-3.88.31-1.12.67-1.3,2.13-1.3.59-.03,1.29-.03,2.07-.03h2.34c3.08,0,5.57-.32,8.26-.56.14-.04.24-.04.35-.04.21,0,.38.04.53.04.38,0,.56.21.56.53s-.1.7-.21.88c-.25.52-.95,1.33-1.4,1.86-.31.42-.63.8-.94,1.12-.32.35-.53.52-.63.56-.25.04-.35.04-.35,0,0-.07-.04-.14-.11-.25-.1-.21-.1-.84-.14-1.19-.04-.42-.11-1.12-.28-1.36-.14-.21-.52-.67-.88-.67-.04,0-.07.03-.1.03-.63.39-.7.53-.84,1.54-.14.94-.31,2.24-.46,3.25-.07.56-.1.98-.1,1.29,0,1.65-.21,3.78-.21,5.36,0,.32.1.56-.25.6-.32.1-1.02.1-1.44.14-.49.04-1.19.07-1.58.07-.42-.04-.35-.35-.46-.7-.07-.25-.07-.63-.07-1.05v-.98c0-3.26.49-6.06.77-9.07,0-.38-.52-.49-1.12-.49-.73,0-1.64.21-1.82.45-.59.98-.63,2.49-.63,3.99v.77c.04.67.35.84.35,1.47,0,.59-.46.56-1.05.7-.59.07-.77.1-1.19.28-.18.11-.67.39-1.02.39-.7,0-.74-1.44-.74-2.38Zm17.92-.7v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.04-.84.35-1.01.38-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.53.04,1.09.25,1.09.63,0,.14-.07.28-.18.42-.04.07-.17.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.03.1-.03.17-.03.21,0,.14.07.21.21.17.7-.17,1.43-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.53c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.81-.46-.03-.14-.03-.25-.03-.32,0-.21.03-.31.03-.8,0-1.08.53-2.94.95-4.2.46-1.44,1.05-3.08,1.5-4.45.25-.7.32-.88.32-1.19,0-.84-.77-.88-1.71-.88s-1.72.04-1.86.77c-.17.91-.32,1.96-.42,3.15-.11.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.53-.38-.53-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.24-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.39.95.95.95.74,0,1.16-.14,1.16-.84Zm-38.04-16.82c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Zm63.21,18.99h-2.27c-1.54-.04-2.28-.04-2.28-.04-.39.04-.7.21-1.02.56-.1.14-.25.88-.49,2.21-.21,1.22-.31,1.92-.31,2.17,0,.49-.21.81-.56.81s-.73-.21-.77-.53c-.21-2.17-.81-3.96-1.96-5.39-.14-.14-.11-.32-.11-.46,0-.28.25-.53.56-.53,2.31,0,3.5,0,3.54.04.04,0,.14-.07.31-.17.67-1.19,1.96-5.88,2.35-8.72l.35-2.59c.04-.31.18-.49.42-.52.11-.04.7-.07,1.79-.11.04,0,1.23-.17,1.65-.17h.14c.28.04.35.28.25.59-.14.35-.35,1.08-.59,2.17-.04.38-.07.8-.07,1.29,0,.88.07,1.96.25,3.25.35,2.8.6,4.38.77,4.73.1.25.21.39.38.46.53-.04,1.05-.04,1.65-.04h.91c.25.07.49.42.49.77,0,.14-.07.32-.17.42-1.61,1.61-3.15,3.64-3.78,5.43-.04.17-.21.25-.46.25-.46,0-.67-.11-.67-.46,0-.14.04-.25.07-.42,0,0,.28-2.45.28-3.5,0-.77-.11-1.4-.63-1.5Zm-1.54-1.12c.21,0,.28-.04.28-.14,0-.07,0-.11-.04-.18-.17-.31-.31-1.08-.46-2.31-.17-1.26-.28-2.63-.49-2.63h-.03c-.11,0-.14.07-.18.21-.31,1.05-.88,3.25-1.4,4.55-.04.07-.04.14-.04.17,0,.14.04.21.14.28.04.04.77.04,2.21.04Zm16.13-12.39c.46,0,.77.14.77.56,0,2.73.21,5.78.73,8.02.25,1.05.56,2.17.84,3.08.14.42.24.67.31.77.07.1.11.21.11.28,0,.28-.25.52-.42.59-.35.21-1.02.14-1.58.21-.18.04-.35.04-.53.04h-1.02c-.73,0-.63-3.15-.94-3.75-.07-.32-.35-.49-.63-.49-.21,0-.42.1-.59.31-.56.67-1.01,1.82-1.4,2.77-.35.98-1.01,1.44-2.24,1.44-.84,0-1.22-.74-1.22-1.54s.17-1.15.63-2.17c.74-1.58,2-3.08,2.83-4.69.32-.56.7-1.29.88-1.82.07-.17.11-.38.11-.59,0-.7-.32-1.61-.42-2.07,0-.07-.04-.14-.04-.17,0-.49.67-.53,1.26-.53.28,0,.7-.04.95-.04.38,0,1.08-.21,1.61-.21Zm-2.91,5.36c-.28,0-.42.32-.7.63-.38.56-.84,1.33-1.16,2-.14.28-.28.73-.28,1.12,0,.31.1.59.49.59.07,0,.18-.04.32-.07.8-.21,1.44-1.01,1.82-1.68.14-.25.21-.42.21-.56,0-.67-.04-2.03-.7-2.03Zm7.84,19.85c0-.49.1-.77.56-.88.04-.35,0-.67,0-1.02,0-1.92-.31-3.75-.49-5.78-.18-2.42-.42-5.22-.42-7.7,0-2.03.56-3.99,1.19-5.46.63-1.44,1.58-2.38,2.73-3.29.53-.38,1.37-.98,2.07-.98.56,0,.88.46.94.95.21,1.96.39,3.78.39,5.88,0,1.51-.25,2.38-.53,3.57-.21.88-.49,1.79-.91,2.42-.31.49-.74.59-1.4.59-.38,0-.7-.07-1.05-.11-.17-.03-.35.21-.42.35v.84c0,2.24.28,4.66.53,6.62.17,1.19.31,1.68.31,2.7,0,.7-.17,1.15-.56,1.54-.28.38-1.54.38-2.17.38-.56,0-.77-.14-.77-.63Zm3.36-15.33c1.01,0,1.33-1.37,1.33-2.52v-.32c-.04-.53-.38-.74-.8-.74-1.3,0-1.58,1.02-1.58,2.42,0,.74.31,1.16,1.05,1.16Zm8.33-8.26c1.29-.91,3.18-1.82,5.04-1.89h.11c1.54,0,2.62,1.19,3.33,2.17.74,1.05,1.43,2.66,1.43,4.24s-.84,2.87-1.61,3.82c-1.19,1.5-2.98,2.94-5.04,3.46-.31.07-.63.11-.88.11-.84,0-1.47-.32-2.17-.7-1.93-.98-3.19-3.12-3.19-6.13,0-2.38,1.5-4.03,2.98-5.08Zm2.66,1.23c-.88,0-1.58.7-1.93,1.29-.21.35-.31.77-.31,1.19,0,1.05.56,2.17.91,2.8.59.98,1.64,1.89,2.83,2.24.11,0,.17.04.28.04.88,0,1.61-.84,1.96-1.44.25-.35.35-.8.35-1.22,0-1.19-.67-2.45-1.12-3.08-.56-.77-1.54-1.68-2.7-1.79-.11-.04-.21-.04-.28-.04Zm14.91-2.35c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.94,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.17.35-.17.46,0,.17.11.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.31,0,.53.14.74.35.42.84.67,2.1.94,3.19.25.95.49,2.03.67,3.01.07.42.11.74.11.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.32-.77-.32-1.29.14-2.49.39-4.73.7-7.18.14-1.23.35-2.38.6-3.47.1-.49.25-1.19.73-1.19t.07.04h.35c1.08,0,2.27.1,3.46.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.04c.73,0,.98,0,1.08-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.46-2.31-.77-3.04-.18-.32-.35-.49-.53-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.95-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.03-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.11.88.42.88Zm14.77-3.71c.46,0,.77.14.77.56,0,2.73.21,5.78.73,8.02.25,1.05.56,2.17.84,3.08.14.42.24.67.31.77.07.1.11.21.11.28,0,.28-.25.52-.42.59-.35.21-1.02.14-1.58.21-.18.04-.35.04-.53.04h-1.02c-.73,0-.63-3.15-.94-3.75-.07-.32-.35-.49-.63-.49-.21,0-.42.1-.59.31-.56.67-1.01,1.82-1.4,2.77-.35.98-1.01,1.44-2.24,1.44-.84,0-1.22-.74-1.22-1.54s.17-1.15.63-2.17c.74-1.58,2-3.08,2.83-4.69.32-.56.7-1.29.88-1.82.07-.17.11-.38.11-.59,0-.7-.32-1.61-.42-2.07,0-.07-.04-.14-.04-.17,0-.49.67-.53,1.26-.53.28,0,.7-.04.95-.04.38,0,1.08-.21,1.61-.21Zm-2.91,5.36c-.28,0-.42.32-.7.63-.38.56-.84,1.33-1.16,2-.14.28-.28.73-.28,1.12,0,.31.11.59.49.59.07,0,.18-.04.32-.07.8-.21,1.43-1.01,1.82-1.68.14-.25.21-.42.21-.56,0-.67-.04-2.03-.7-2.03Zm13.4-4.87c1.12-.1,2.1-.25,3.19-.31.1-.04.21-.04.28-.04.49,0,.7.14.7.49,0,.84-.94,1.26-1.47,1.64l-.42.32c-.42.42-.91,1.01-1.23,1.54-.1.17-.17.35-.17.46,0,.17.11.46.25.46.46-.14.84-.25,1.29-.38.11-.04.21-.04.32-.04.31,0,.52.14.74.35.42.84.67,2.1.94,3.19.25.95.49,2.03.67,3.01.07.42.11.74.11.98-.04.84-.21,1.23-.95,1.33h-2.17c-.74,0-1.86.04-2.49.04-1.33,0-2.91.42-4.2.42-.56-.07-.63-.04-.98-.46-.21-.31-.32-.77-.32-1.29.14-2.49.39-4.73.7-7.18.14-1.23.35-2.38.6-3.47.1-.49.25-1.19.73-1.19t.07.04h.35c1.09,0,2.28.1,3.47.1Zm-1.29,6.3c-.32.88-.49,2.13-.56,3.25-.04.32-.07.67-.07.98,0,.53.1.91.56.91h.07c.38-.04.8-.04,1.33-.04h.04c.73,0,.98,0,1.08-.49.1-.35.14-.8.14-1.22v-.49c0-.98-.46-2.31-.77-3.04-.18-.32-.35-.49-.53-.49-.21,0-.38-.07-.49-.07-.07,0-.1,0-.14.04-.35.17-.49.21-.67.67Zm.95-3.08c.31,0,.7-.63.88-.88.21-.32.28-.6.28-.88,0-.18-.03-.35-.07-.56,0-.1-.11-.14-.25-.14-.95,0-1.26.56-1.26,1.58,0,.35.11.88.42.88Zm6.93,2.55v-.21c.07-.67.25-1.47.25-2.17,0-.46.04-1.16.04-1.68v-.63c0-.46.04-.84.35-1.01.38-.25.42-.25.98-.25h2.1c.84,0,2.1.04,2.77.04,1.61,0,3.89-.11,5.53-.11.53.04,1.09.25,1.09.63,0,.14-.07.28-.18.42-.04.07-.17.24-.46.56-.63.74-1.26,1.75-1.82,2.73-.28.59-.52,1.19-.67,1.79-.03.1-.03.17-.03.21,0,.14.07.21.21.17.7-.17,1.43-.21,2.24-.21,1.05,0,1.05.35,1.33,1.23.42,1.33.95,3.15.95,4.9,0,.67,0,.91-.77.95h-.53c-1.16,0-2.45-.11-3.5-.11-1.19,0-2.73.11-3.85.21h-.14c-.42,0-.77-.14-.81-.46-.03-.14-.03-.25-.03-.32,0-.21.03-.31.03-.8,0-1.08.53-2.94.95-4.2.46-1.44,1.05-3.08,1.5-4.45.25-.7.32-.88.32-1.19,0-.84-.77-.88-1.71-.88s-1.72.04-1.86.77c-.17.91-.32,1.96-.42,3.15-.11.81-1.05,1.02-1.79,1.33-.21.11-1.02.46-1.54.46-.46,0-.53-.38-.53-.88Zm10.99,5.08c0-.11-.04-.21-.04-.35-.1-.8-.35-1.4-.98-1.68-.14-.07-.24-.11-.35-.11-.56,0-.77.81-.77,1.58,0,.17.04.32.04.46.07.7.39.95.95.95.74,0,1.16-.14,1.16-.84Zm12.98-6.76c0,.77-2.56,2.24-3.08,2.52-.38.17-.63.28-.8.28h-.04c-.98,0-1.12-.94-1.12-2v-1.12c.07-3.12.46-6.44.46-9.38,0-.49-.38-.77-.63-1.05-.14-.17-.32-.28-.53-.35-.42-.07-.67-.46-.67-.88,0-.46.11-.56.6-.73,1.68-.56,4.03-.6,5.67-1.19.11-.04.25-.07.32-.07.49,0,.74.42.88.84.04.07.07.14.07.21,0,.14-.11.28-.18.42-.1.1-.35.28-.73.46-.39.17-.74.42-.98.67-.38.46-.56.91-.7,1.47-.59,2.91-1.12,6.41-1.22,9.8-.11.32.21.77.59.63.42-.18,1.02-.91,1.61-.91.21,0,.49.14.49.38Zm-3.47,3.88c1.54,0,2.49.88,2.49,2.24,0,1.47-1.08,2.8-2.66,2.8h-.14c-1.19-.11-2-.88-2.24-1.89-.04-.28-.07-.49-.04-.67,0-1.47,1.08-2.49,2.59-2.49Zm-40.28-13.93c-.41.41-.76,1-1.45,1-.55,0-1.27-.41-1.27-1.03,0-.1.03-.21.07-.31.52-.69,1.03-1.1,1.62-1.86.79-1.03,2.51-3.82,2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41,1.14-.41.65,0,1.34.27,1.34.82,0,.72-.76,1.51-1.17,2.17-1.2,1.86-2.31,3.64-3.68,5.29Z"/>
  </svg>
  <div class='loader'><div class='circle'></div><div class='circle'></div><div class='circle'></div><div class='circle'></div><div class='circle'></div></div>
	`;
	var sound = new Howl({
	src: ['/file=./extensions-builtin/fix-webui/javascript/molitva.mp3']
	});
	sound.play();
	document.body.insertBefore(loadlayer, document.body.firstChild);
	const LastModifiedItem = document.querySelector("#setting_sd_vae_as_default > label > span");
	const FullLoaded = new MutationObserver(mutations => {
	  mutations.forEach(mutation => {
		if (mutation.type === 'childList' && mutation.target.textContent === 'VAE от модели') {
		 document.querySelector("#loadlayer").remove();
		}
	  });
	});
	if (LastModifiedItem) {
	  FullLoaded.observe(LastModifiedItem, { childList: true });
	} else {
	  const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
		  if (mutation.addedNodes.length > 0) {
			const newItem = mutation.addedNodes[0];
			if (newItem.querySelector && newItem.querySelector("#setting_sd_vae_as_default > label > span")) {
			  FullLoaded.observe(newItem.querySelector("#setting_sd_vae_as_default > label > span"), { childList: true });
			}
		  }
		});
	  });
	  observer.observe(document.body, { childList: true, subtree: true });
	}
  });
document.addEventListener("DOMContentLoaded", function(event) {
  const HangingLoadLayer = document.querySelector("#loadlayer");
  if (HangingLoadLayer) {
      setTimeout(() => {
          const closePreloader = document.createElement("a");
          closePreloader.textContent = "закрыть";
          closePreloader.href = "#";
          closePreloader.addEventListener("click", function (event) {
              event.preventDefault();
              HangingLoadLayer.remove();
          });
          HangingLoadLayer.appendChild(closePreloader);
      }, 15000);
      setTimeout(() => {
          HangingLoadLayer.remove();
      }, 20000);
  }
});
// ожидание загрузки страницы
function findLastElement() {
	const lastElement = document.querySelector("#footer > div.versions");
	if (lastElement) {
		console.clear()
		console.log("страница полностью загружена");
		const gradioAppElement = document.querySelector('gradio-app');
		const gradioContainerDiv = gradioAppElement.querySelector('div.gradio-container');
		const BodyStyle = document.createElement('style');
		gradioContainerDiv.appendChild(BodyStyle);
		// выполнение кусков кода
		runTasks();
		return;
	}
	setTimeout(findLastElement, 100);
}
findLastElement();
// установка шага слайдеров размера на 64px
	setTimeout(() => {
		const SizeSliders = document.querySelectorAll('div[id$="_width"] > input[type=range], div[id$="_height"] > input[type=range]');
		SizeSliders.forEach(input => {
		  input.setAttribute('step', '64');
		  console.log("установка шага слайдеров размера на 64px");
		});
}, 9000);