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
  #loadlayer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999999;color:#fff;background:#000;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;justify-content:center;align-items:center}.loader{position:relative;top:15%;width:40px;height:40px}.loader .circle{position:absolute;width:38px;height:38px;opacity:0;transform:rotate(225deg);animation-iteration-count:infinite;animation-name:orbit;animation-duration:5.5s}.loader .circle:after{content:'';position:absolute;width:5px;height:5px;border-radius:5px;background:#fff}.loader .circle:nth-child(2){animation-delay:240ms}.loader .circle:nth-child(3){animation-delay:480ms}.loader .circle:nth-child(4){animation-delay:720ms}.loader .circle:nth-child(5){animation-delay:960ms}@keyframes orbit{0%{transform:rotate(225deg);opacity:1;animation-timing-function:ease-out}7%{transform:rotate(345deg);animation-timing-function:linear}30%{transform:rotate(455deg);animation-timing-function:ease-in-out}39%{transform:rotate(690deg);animation-timing-function:linear}70%{transform:rotate(815deg);opacity:1;animation-timing-function:ease-out}75%{transform:rotate(945deg);animation-timing-function:ease-out}76%{transform:rotate(945deg);opacity:0}100%{transform:rotate(945deg);opacity:0}}#molitva{width:50%!important}
	</style>
	<svg id="molitva" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 42">
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
	<path fill="url(#pattern)" d="M1 8.01c0-.48.72-1 1.17-1.07.38-.07 1-.07 1.65-.07h1.65c1.14 0 2.82-.04 3.75-.04 2.06 0 4.78-.34 6.68-.62h.45c.65 0 1.2.28 1.48.62.17.17.24.34.24.52 0 .48-.62.82-1.03 1.1-1.38.93-2.24 2.47-2.92 4.09-.1.24-.24.31-.41.31-.24 0-.55-.21-.76-.34-.69-.45-.72-2.13-.72-3.2 0-.45-.41-.55-.86-.55-.27 0-.55.03-.79.03-.79.1-1.65-.14-1.96.48-.1.21-.1.38-.07.55.04.07.04.41 0 1.03-.07 1.96-.14 4.3-.14 6.53 0 .79.04 1.54.04 2.3.17 3.81.24 8.35.24 12.13 0 1 1.41.89 1.41 1.82 0 .58-.52.69-1.1.69-1.13 0-1.86-.1-2.96-.17-1.1.07-2.03.31-3.1.31h-.21c-.38 0-.82-.34-.82-.79 0-.55.38-.65.76-.86.65-.41.69-.89.72-2.1.1-2.58.14-5.71.14-8.35v-1.1c0-2.24.14-4.88.17-7.18.03-.9.1-1.86.1-2.54.03-.65.17-1.24.17-1.86 0-.38-.31-.45-.76-.45h-1.1c-.79 0-1.1-.51-1.1-1.24ZM24.25 28.9h-2.24c-1.51-.03-2.24-.03-2.24-.03-.38.03-.69.2-1 .55-.1.14-.24.86-.48 2.17-.21 1.2-.31 1.89-.31 2.13 0 .48-.21.79-.55.79s-.72-.21-.76-.51c-.21-2.13-.79-3.88-1.93-5.29-.14-.14-.1-.31-.1-.44 0-.28.24-.52.55-.52 2.27 0 3.44 0 3.47.04.03 0 .14-.07.31-.17.65-1.17 1.93-5.77 2.31-8.56l.34-2.54c.04-.31.17-.48.41-.51.1-.03.69-.07 1.75-.1.03 0 1.2-.17 1.62-.17h.14c.28.03.34.27.24.58-.14.34-.34 1.07-.58 2.13-.04.38-.07.79-.07 1.27 0 .86.07 1.92.24 3.2.34 2.75.59 4.3.76 4.64.1.24.21.38.38.44.52-.03 1.03-.03 1.62-.03h.89c.24.07.48.41.48.76 0 .14-.07.31-.17.41-1.58 1.58-3.1 3.57-3.72 5.32-.03.17-.21.24-.45.24-.45 0-.65-.1-.65-.44 0-.14.04-.24.07-.41 0 0 .27-2.4.27-3.44 0-.76-.1-1.37-.62-1.48Zm-1.51-1.1c.21 0 .28-.03.28-.14 0-.07 0-.1-.04-.17-.17-.31-.31-1.06-.45-2.27-.17-1.24-.28-2.58-.48-2.58h-.04c-.1 0-.14.07-.17.2-.31 1.03-.86 3.2-1.38 4.47-.03.07-.03.14-.03.17 0 .14.03.21.14.28.03.03.76.03 2.17.03ZM29.66 1c.76 0 1.48.1 2.13.34 1.45.51 2.55 1.3 3.65 2.13 1.55 1.2 3.68 1.86 5.68 2.68.52.17 1.03.31 1.03.79 0 .69-.62.76-1.51.79-.41.03-.82.07-1.27.07-1.72 0-3.58-.17-4.78-.65-.86-.38-1.65-.96-2.31-1.54l-1.1-.96c-.48-.41-.93-.76-1.48-1.1-.34-.24-.76-.34-1.2-.34-1.2 0-2.58.69-3.16 1.17-.59.44-.83 1.2-.83 2.03 0 .62.14 1.31.34 1.89 0 .03.03.07.03.07 0 .55-2.3 1.37-2.85 1.51-.21.07-.41.1-.55.1-.76 0-.76-.65-.96-1.48-.1-.41-.17-.82-.17-1.2 0-1.89 1.31-3.26 2.51-4.12.93-.65 1.96-1.14 3.1-1.51 1.17-.38 2.48-.65 3.72-.65Zm1.13 7.29c0 .17-.17.38-.34.62-.38.48-.76.79-1 1.41-.07.14-.07.27-.07.38 0 .38.31.62.59.79.1.03.21.03.31.03.48 0 .93-.27 1.24-.48.21-.1 1.14-.83 1.69-.83.14 0 .27.07.31.21.03.07.07.17.07.24 0 .31-.28.55-.48.79-.79 1-2.1 1.58-3.72 1.86-.31.03-.65.07-.93.07-1 0-1.75-.31-1.75-1.3 0-.1 0-.24.04-.38.17-.89.86-1.75 1.44-2.34.52-.51 1.27-1.13 1.96-1.34.48 0 .65.1.65.28Zm8.94 13.88c0-.38-.14-.48-.34-.48-.24 0-.55.14-.83.21-.89.31-2.1.55-3.2.72-.14 1.1-.21 2.37-.21 3.54 0 .76.03 1.61.1 2.2 0 .34-.21.48-.52.48-.14 0-.24-.03-.38-.07-.34-.03-.72-.07-1.1-.07h-.38c-.24 0-.69.07-1.03.07-.28 0-.52-.03-.55-.21-.07-.14-.07-.38-.07-.69 0-.34 0-.72.07-1.24.21-1.82.76-6.18 1.13-7.87.24-1 .38-1.61.41-1.89.14-.76.41-1.1 1.1-1.1h.41c.38 0 .86-.1 1.13-.14.17 0 .65-.17 1.07-.17s.55.24.55.58c0 .51-.52 1.13-.69 1.44-.45.79-.69 2.1-.79 3.16 1.1 0 2.41-.31 3.27-.48.52-.14.79-.1.89-.48.03-.1.03-.17 0-.24.1-.79.21-1.55.38-2.3.14-.58.14-.96.65-1.1.52-.14.96-.1 1.65-.17.76-.14 1.27-.34 1.93-.34.24 0 .38.2.38.41 0 .1-.03.21-.1.31-.62.9-.76 2.06-1 3.37-.17 1.1-.31 2.3-.31 3.54 0 1.61.24 3.23.45 4.57.04.34.14.65.14.9s-.1.38-.41.38c-.45 0-1.14-.1-1.72-.1-.69 0-1.2.07-1.82.07-.45 0-.34-.21-.41-.58-.03-.76-.03-1.44-.03-2.06 0-1.24.17-3.44.17-4.16ZM47 28.63c0-.69.83-1.31 1.31-1.65 1.1-.79 2.3-1.34 3.96-1.58.24-.07.48-.07.69-.07 1.48 0 2.13.83 2.13 2.03 0 .55-.14 1.17-.41 1.86-.45 1.24-1.82 2.47-2.89 3.26-.96.72-2.37 1.72-3.68 1.86h-.07c-.48 0-.69-.27-.69-.55 0-.24.14-.51.38-.69.93-.65 1.93-1.54 2.61-2.51.24-.34.58-1.1.58-1.72 0-.41-.14-.76-.52-.93-.1-.03-.28-.07-.41-.07-.24 0-.48.07-.65.2-.38.28-1.27.9-1.75.96h-.28c-.21 0-.31-.17-.31-.41Zm19.36-.62v-.45c.07-1.51.38-3.33.45-4.81.07-1.58.31-3.54.45-5.09.1-1.13.14-1.68 1.1-1.89.48-.14.89-.04 1.38-.14.21-.03.34-.07.48-.07.07 0 .31-.03.69-.1h.21c.48 0 .86.27.86.72 0 .65-.55 1.1-.82 1.48-.21.31-.28 1.13-.38 1.68-.21 1.37-.31 3.02-.31 4.64 0 1.51.07 3.02.24 4.33-.07.48-.41.51-1.03.58h-.76c-.65 0-1.34-.03-1.86-.14-.59-.14-.69-.27-.69-.76Zm8.49-19.07c0 .17-.04.31-.07.48-.34 1.54-1.68 2.95-2.82 3.74-.27.17-.72.52-1.07.52-.31 0-.52-.24-.52-.58.07-.24.28-.45.48-.72.21-.27.79-1.03.79-1.61 0-.48-.69-.72-1.1-.72-.52 0-1.03.2-1.38.55-.62.55-1.2 1.31-1.65 2-.24.44-.59 1.13-1.03 1.13-.52 0-.76-.48-.76-.83 0-1.34 2.41-3.78 2.89-4.23.89-.83 2.3-1.48 3.71-1.48s2.51.58 2.51 1.75Zm7.17 13.23c0-.38-.14-.48-.34-.48-.24 0-.55.14-.83.21-.89.31-2.1.55-3.2.72-.14 1.1-.21 2.37-.21 3.54 0 .76.03 1.61.1 2.2 0 .34-.21.48-.52.48-.14 0-.24-.03-.38-.07-.34-.03-.72-.07-1.1-.07h-.38c-.24 0-.69.07-1.03.07-.28 0-.52-.03-.55-.21-.07-.14-.07-.38-.07-.69 0-.34 0-.72.07-1.24.21-1.82.76-6.18 1.13-7.87.24-1 .38-1.61.41-1.89.14-.76.41-1.1 1.1-1.1h.41c.38 0 .86-.1 1.13-.14.17 0 .65-.17 1.07-.17s.55.24.55.58c0 .51-.52 1.13-.69 1.44-.45.79-.69 2.1-.79 3.16 1.1 0 2.41-.31 3.27-.48.52-.14.79-.1.89-.48.03-.1.03-.17 0-.24.1-.79.21-1.55.38-2.3.14-.58.14-.96.65-1.1.52-.14.96-.1 1.65-.17.76-.14 1.27-.34 1.93-.34.24 0 .38.2.38.41 0 .1-.03.21-.1.31-.62.9-.76 2.06-1 3.37-.17 1.1-.31 2.3-.31 3.54 0 1.61.24 3.23.45 4.57.03.34.14.65.14.9s-.1.38-.41.38c-.45 0-1.14-.1-1.72-.1-.69 0-1.2.07-1.82.07-.45 0-.34-.21-.41-.58-.03-.76-.03-1.44-.03-2.06 0-1.24.17-3.44.17-4.16Zm.34-8.75c-.76 0-1.45-.1-1.65-.31-.24-.27-.31-.89-.31-1.51 0-.69.07-1.44.14-1.93.07-.69.21-.86.48-1.24.1-.1.27-.17.52-.17 2.17 0 4.61.31 6.74.31.31.04.55-.2.65-.41.04-.1.04-.34 0-.69-.07-.31-.21-.72-.38-1.24.07-.38.24-.34.93-.41.69-.14 1.69-.31 2.48-.34h.14c1.48 0 1.62 1.37 1.65 2.92v.31c0 .69-.1 1.82-.76 1.82h-.1c-.72 0-1.69-.14-2.65-.2-1.45-.1-3.37-.17-4.99-.17-.38.1-.79.04-.89.41-.04.17-.04.31-.04.48 0 .55.17 1.06.27 1.72 0 .44-1.17.65-2.24.65Zm12.81 11.91c0 .89-.27 1.86-.65 2.3-.55.72-1.96 1.27-3.17 1.27-.1 0-.21 0-.31-.03-.93-.58-1.48-2.61-1.79-4.02-.34-1.34-.55-2.68-.55-4.16 0-.93.14-1.65.55-2.34.65-1.1 1.55-1.93 2.58-2.54.31-.21.86-.31 1.41-.31.76 0 1.55.21 1.75.58.17.38.31 1.07.31 1.68 0 .31-.04.58-.1.83-.1.41-1 .69-1.41.86-.55.2-1.34.51-1.45 1.1-.14.44-.21 1.06-.21 1.72 0 .82.1 2.51.69 2.51.21 0 .41-.14.62-.24.28-.17.76-.44 1.14-.44.48 0 .58.62.58 1.24Zm7.95.24c0 .72-.76 1.86-.89 2.06-.52.69-1.89 1.27-3.06 1.27-.14 0-.28 0-.41-.03-1.72-.65-1-3.16-1.55-4.88-.17-.58-.28-1.34-.28-2.13 0-2.68 1.07-4.33 2.75-5.26.93-.55 1.51-.93 3.03-.93.76 0 1 .14 1 .76 0 .51-.21 1.03-.34 1.41-.17.38-1.03.52-1.55.65-.55.17-1.38.41-1.48.96-.07.24-.14.65-.14 1.03 0 .45.1.86.38.89.31.1.38 0 .62-.14.24-.17 1-.69 1.51-.69.45 0 .52.62.52 1.13 0 .24-.04.51-.07.72-.1.48-1.38.62-1.79.76-.31.07-.65.48-.65.89V25c0 .27.03.55.31.51.48-.07.86-.55 1.41-.55.45 0 .69.21.69.58Zm16.22-9.93h1c1.24.07 1.58.41 1.93 1.38.24.79.52 1.79.76 2.51.07.17.31.41.41.14.65-1.3 1.41-3.13 2.75-3.71.69-.27 1.17-.41 2.13-.41.72 0 1.62.07 2.27.17.45.07.69.27.69.55 0 .38-.34.69-.55.93l-.41.41c-.34.38-.45.58-.82 1-.24.27-.38.48-.41.58-.07.14-.14.17-.24.17-.31 0-.69-.51-.86-.76-.34-.52-.55-.65-.89-.9-.07-.03-.1 0-.14 0-.31 0-.79.65-1.03.9-.79 1.03-1.41 2.92-1.41 4.74 0 .17.07.48.17 1 .48 2.16 1.31 4.6 2 6.7.52 1.55 1 2.85 1.44 3.85.45 1.03.72 1.65.83 1.82.17.24.34.65.27 1-.31.62-1.2.62-2.13.69-.17 0-.38.03-.55.03-.72 0-1.24-.17-1.51-.72-.79-1.37-1.27-3.47-1.79-5.22-.31-1.1-.62-2.27-.93-3.26-.14-.41-.21-.9-.38-.9-.28 0-.34.38-.62 1.07-1.41 3.13-3.06 6.87-4.51 9.97-.41.86-.38 1.24-1 1.34-.04 0-.07.04-.14.04-.04 0-.1 0-.14-.04-.41-.14-1.17-.44-1.17-.93 0-.1.04-.21.1-.38 1.65-3.34 3.44-7.42 4.99-10.83.59-1.24.62-1.34 1.03-2.37.1-.27.14-.58.14-.93 0-.62-.14-1.27-.27-1.86-.48-2.3-1.31-4.81-2.82-6.05-.24-.21-.38-.48-.38-.79 0-.93 1.24-.93 2.2-.93Zm13.97 24.74c0-.48.1-.76.55-.86.04-.34 0-.65 0-1 0-1.89-.31-3.68-.48-5.67-.17-2.37-.41-5.12-.41-7.56 0-1.99.55-3.92 1.17-5.36.62-1.41 1.55-2.34 2.68-3.23.52-.38 1.34-.96 2.03-.96.55 0 .86.45.93.93.21 1.93.38 3.71.38 5.77 0 1.48-.24 2.34-.52 3.51-.21.86-.48 1.75-.89 2.37-.31.48-.72.58-1.38.58-.38 0-.69-.07-1.03-.1-.17-.03-.34.21-.41.34v.83c0 2.2.28 4.57.52 6.49.17 1.17.31 1.65.31 2.65 0 .69-.17 1.13-.55 1.51-.28.38-1.51.38-2.13.38-.55 0-.76-.14-.76-.62Zm3.3-15.05c1 0 1.31-1.34 1.31-2.48v-.31c-.04-.51-.38-.72-.79-.72-1.27 0-1.55 1-1.55 2.37 0 .72.31 1.14 1.03 1.14Zm5.06-24.21c.76 0 1.48.1 2.13.34 1.44.51 2.54 1.3 3.65 2.13 1.55 1.2 3.68 1.86 5.68 2.68.52.17 1.03.31 1.03.79 0 .69-.62.76-1.51.79-.41.03-.82.07-1.27.07-1.72 0-3.58-.17-4.78-.65-.86-.38-1.65-.96-2.31-1.54l-1.1-.96c-.48-.41-.93-.76-1.48-1.1-.34-.24-.76-.34-1.2-.34-1.2 0-2.58.69-3.17 1.17-.59.44-.83 1.2-.83 2.03 0 .62.14 1.31.34 1.89 0 .03.03.07.03.07 0 .55-2.3 1.37-2.85 1.51-.21.07-.41.1-.55.1-.76 0-.76-.65-.96-1.48-.1-.41-.17-.82-.17-1.2 0-1.89 1.31-3.26 2.51-4.12.93-.65 1.96-1.14 3.1-1.51 1.17-.38 2.48-.65 3.72-.65Zm1.13 7.29c0 .17-.17.38-.34.62-.38.48-.76.79-1 1.41-.07.14-.07.27-.07.38 0 .38.31.62.59.79.1.03.21.03.31.03.48 0 .93-.27 1.24-.48.21-.1 1.14-.83 1.69-.83.14 0 .27.07.31.21.03.07.07.17.07.24 0 .31-.28.55-.48.79-.79 1-2.1 1.58-3.72 1.86-.31.03-.65.07-.93.07-1 0-1.75-.31-1.75-1.3 0-.1 0-.24.04-.38.17-.89.86-1.75 1.44-2.34.52-.51 1.27-1.13 1.96-1.34.48 0 .65.1.65.28Zm-.58 14.07v-1.34c0-1.34.31-2.75.62-3.81.31-1.1.65-1.27 2.1-1.27.59-.03 1.27-.03 2.03-.03h2.31c3.03 0 5.47-.31 8.12-.55.14-.03.24-.03.34-.03.21 0 .38.03.52.03.38 0 .55.21.55.51s-.1.69-.21.86c-.24.52-.93 1.31-1.38 1.82-.31.41-.62.79-.93 1.1-.31.34-.52.51-.62.55-.24.03-.34.03-.34 0 0-.07-.04-.14-.1-.24-.1-.21-.1-.83-.14-1.17-.04-.41-.1-1.1-.27-1.34-.14-.2-.52-.65-.86-.65-.03 0-.07.03-.1.03-.62.38-.69.51-.83 1.51-.14.93-.31 2.2-.45 3.2-.07.55-.1.96-.1 1.27 0 1.61-.21 3.71-.21 5.26 0 .31.1.55-.24.58-.31.1-1 .1-1.41.14-.48.03-1.17.07-1.55.07-.41-.04-.34-.34-.45-.69-.07-.24-.07-.62-.07-1.03v-.96c0-3.2.48-5.95.76-8.9 0-.38-.52-.48-1.1-.48-.72 0-1.62.21-1.79.45-.58.96-.62 2.44-.62 3.92v.76c.04.65.34.82.34 1.44 0 .58-.45.55-1.03.69-.59.07-.76.1-1.17.27-.17.1-.65.38-1 .38-.69 0-.72-1.41-.72-2.34Zm14.66-14.71c0-.62 1.48-1.34 2.54-1.34.21 0 .38.03.52.07 1.34.34 2.61 1.1 3.85 1.54 1.38.45 2.75 1.03 4.37 1.24.52.04 1.89.07 1.89.58 0 .69-.45 1.44-.79 1.82-.17.14-.31.21-.48.21-.31-.04-.93-.27-1.86-.69-1.34-.69-3.47-1.55-5.3-1.93-1.2-.27-2.41-.51-3.51-.76-.45-.14-.79-.24-1.03-.34-.14-.14-.21-.27-.21-.41Zm9.15 17.8c0 .72-.76 1.86-.89 2.06-.52.69-1.89 1.27-3.06 1.27-.14 0-.28 0-.41-.03-1.72-.65-1-3.16-1.55-4.88-.17-.58-.27-1.34-.27-2.13 0-2.68 1.07-4.33 2.75-5.26.93-.55 1.51-.93 3.03-.93.76 0 1 .14 1 .76 0 .51-.21 1.03-.34 1.41-.17.38-1.03.52-1.55.65-.55.17-1.38.41-1.48.96-.07.24-.14.65-.14 1.03 0 .45.1.86.38.89.31.1.38 0 .62-.14.24-.17 1-.69 1.51-.69.45 0 .52.62.52 1.13 0 .24-.04.51-.07.72-.1.48-1.38.62-1.79.76-.31.07-.65.48-.65.89V25c0 .27.03.55.31.51.48-.07.86-.55 1.41-.55.45 0 .69.21.69.58Zm2.1 3.06c0-.69.83-1.31 1.31-1.65 1.1-.79 2.3-1.34 3.96-1.58.24-.07.48-.07.69-.07 1.48 0 2.13.83 2.13 2.03 0 .55-.14 1.17-.41 1.86-.45 1.24-1.82 2.47-2.89 3.26-.96.72-2.37 1.72-3.68 1.86h-.07c-.48 0-.69-.27-.69-.55 0-.24.14-.51.38-.69.93-.65 1.93-1.54 2.61-2.51.24-.34.58-1.1.58-1.72 0-.41-.14-.76-.52-.93-.1-.03-.28-.07-.41-.07-.24 0-.48.07-.65.2-.38.28-1.27.9-1.75.96h-.28c-.21 0-.31-.17-.31-.41Zm25.19-3.3c0 .89-.27 1.86-.65 2.3-.55.72-1.96 1.27-3.17 1.27-.1 0-.21 0-.31-.03-.93-.58-1.48-2.61-1.79-4.02-.34-1.34-.55-2.68-.55-4.16 0-.93.14-1.65.55-2.34.65-1.1 1.55-1.93 2.58-2.54.31-.21.86-.31 1.41-.31.76 0 1.55.21 1.75.58.17.38.31 1.07.31 1.68 0 .31-.04.58-.1.83-.1.41-1 .69-1.41.86-.55.2-1.34.51-1.45 1.1-.14.44-.21 1.06-.21 1.72 0 .82.1 2.51.69 2.51.21 0 .41-.14.62-.24.28-.17.76-.44 1.14-.44.48 0 .58.62.58 1.24Zm5.03-9.38c.38 0 .83-.1 1.1-.1.24-.03.65-.14 1-.14s.58.07.58.38c0 .41-.21.76-.45 1.07-.1.14-.14.27-.14.38 0 .31.27.55.55.72.58.48 1.62 1.17 2.41 1.37h.04c.45 0 .45-1.31.52-1.79.07-.58.21-1.48.79-1.61.52-.14.96-.1 1.62-.2.79-.1 1.24-.31 1.93-.31.24 0 .34.21.34.41 0 .1-.04.24-.1.31-.17.21-.59 1.27-.65 1.58-.1.44-.14 1.2-.21 1.82-.17 1.06-.24 2.23-.24 3.44 0 .45 0 .93.03 1.37.1 1.31.14 2.82.41 3.88.07.31-.1.48-.34.48-.45 0-1.14-.1-1.72-.1-.72 0-1.17.07-1.79.07-.45 0-.34-.21-.41-.58-.04-.69-.04-1.31-.04-1.93 0-1.24.04-2.41.14-3.64.04-.38.04-.69.04-.93-.14-.62-.48-.69-1.03-.96-.38-.17-.76-.38-1.17-.58l-.48-.27c-.17-.07-.59-.38-.72-.31-.21.14-.24-.03-.38.24-.45 1.82-.69 4.26-.69 6.53v.62c.03.62.03 1.03.07 1.2-.04.34-.21.48-.52.48-.1 0-.24-.03-.38-.07-.31-.03-.69-.07-1.07-.07-.28 0-.89.07-1.34.07-.34 0-.59-.03-.62-.17-.07-.17-.1-.48-.1-.96 0-.31.03-.69.03-1.14.21-2.68.69-6.6 1.38-8.86.24-.93.21-1.68 1.24-1.68h.38Zm.8-2.54c-.76 0-1.45-.1-1.65-.31-.24-.27-.31-.89-.31-1.51 0-.69.07-1.44.14-1.93.07-.69.21-.86.48-1.24.1-.1.27-.17.52-.17 2.17 0 4.61.31 6.74.31.31.04.55-.2.65-.41.04-.1.04-.34 0-.69-.07-.31-.21-.72-.38-1.24.07-.38.24-.34.93-.41.69-.14 1.69-.31 2.48-.34h.14c1.48 0 1.62 1.37 1.65 2.92v.31c0 .69-.1 1.82-.76 1.82h-.1c-.72 0-1.69-.14-2.65-.2-1.45-.1-3.37-.17-4.99-.17-.38.1-.79.04-.89.41-.04.17-.04.31-.04.48 0 .55.17 1.06.27 1.72 0 .44-1.17.65-2.24.65Zm16.96 12.16c0 .72-.76 1.86-.89 2.06-.52.69-1.89 1.27-3.06 1.27-.14 0-.28 0-.41-.03-1.72-.65-1-3.16-1.55-4.88-.17-.58-.27-1.34-.27-2.13 0-2.68 1.07-4.33 2.75-5.26.93-.55 1.51-.93 3.03-.93.76 0 1 .14 1 .76 0 .51-.21 1.03-.34 1.41-.17.38-1.03.52-1.55.65-.55.17-1.38.41-1.48.96-.07.24-.14.65-.14 1.03 0 .45.1.86.38.89.31.1.38 0 .62-.14.24-.17 1-.69 1.51-.69.45 0 .52.62.52 1.13 0 .24-.04.51-.07.72-.1.48-1.38.62-1.79.76-.31.07-.65.48-.65.89V25c0 .27.03.55.31.51.48-.07.86-.55 1.41-.55.45 0 .69.21.69.58Zm15.39-2.44c.34 0 .86-.34 1.07-.48.38-.17.96-.55 1.48-.55h.1c.41.07.82.65 1.1 1 .86 1.27 1.58 2.85 1.82 4.78.03.17.03.31.03.34 0 .48-.24.52-.55.62-.03.04-.27 0-.69 0-.62 0-.62.04-1.38.04-.69 0-1.82-.04-2.44-.04-.96 0-2.24.1-3.23.1h-.65c-.38-.03-.82-.41-.82-.86v-.62c0-3.57.45-7.49 1.2-10.45.17-.65.24-.93.89-.93h3.06c1.86 0 3.82 0 5.19-.34.34-.07.65-.14.93-.14.34 0 .48.24.48.51 0 .17-.07.38-.14.55-.28.48-1.14 1.27-1.45 1.72s-.58 1.07-.93 1.48c-.1.14-.24.21-.34.21h-.07c-.45 0-1.03-1.17-1.03-1.62-.1-1.03-.34-1.48-1.51-1.48-.89 0-1.51.1-1.62.65-.27 1-.55 2.61-.69 3.85-.07.45-.1.83-.1 1.07.04.14-.14.58.28.58Zm-.65 3.47c0 .62.17 1.17.69 1.17.89 0 1.45-.17 1.45-1.03 0-1.1-.28-1.96-1.38-1.96-.62 0-.76 1.03-.76 1.82Zm23.74 1.58s.07-.62-.03-1c-.1-.45-.21-.72-.48-1.1-.86-1.17-2.37-2.89-2.37-2.89 0 .86-.21 1.72-.21 2.65 0 .45.04 1.1.04 1.58 0 .41-.04 1.07-.24 1.24-.31.21-1.1.24-1.69.24h-.38c-.38 0-.72.1-1.03 0-.27-.14-.31-.86-.31-1.41v-.51c0-.51.07-1.06.1-1.65l.52-4.5c-.82.69-1.65 1.27-2.31 2.06-.69.83-1 1.24-1.44 2.16-.34.76-.55 1.31-.55 2.37v.27c0 .34 0 .69.03 1.03 0 0-.27.24-.48.27-.45.1-.72.1-1.1.1h-.31c-.48 0-1.65-.24-1.65-.58 0-1.65.52-2.3 1.38-3.3.96-1.1 1.96-2.06 3.06-3.09l-.28-.38c-.41.07-1.13.2-1.75.2-1.27 0-1.41-.55-1.41-1.93 0-.41.03-.86.03-1.2.04-.79 0-1.82.38-2 .86-.44 2.44-.48 3.68-.48.82 0 1.51.45 2.03.79.34.24.65.51.96.79 0-.44.07-.86.1-1.27 0-.48.28-.65.76-.65.58 0 1.1-.07 1.65-.07.24 0 .45 0 .62.03.24.21.24.76.24 1.2 0 .27-.04.58-.07.89.79-.79 1.75-1.51 2.85-2.03.34-.17 1.2-.27 1.99-.27s1.55.14 1.55.62c0 .1-.03.24-.1.38-.52.82-1.55 2.1-2.31 2.92-.52-.07-.89-.21-1.31-.62-.21-.28-.52-.48-.86-.48-.21 0-.38.07-.55.2-.52.41-.86.72-1.31 1.17l1.38 1.37c.52.51 1.38 1.27 1.75 1.79 1.1 1.3 2.58 2.71 3.1 4.64.07.17.1.31.1.44 0 .34-.24.48-.62.55-.52.07-1.24.24-1.86.24-.59 0-1.31-.21-1.31-.83Zm-8.56-6.91c.45-.45.96-.86 1.41-1.31l-.65-.86c-.28-.31-.55-.58-.86-.58h-.1c-.31 0-.69.17-.72.51v1.72l.62.83.31-.31Zm-.66-7.87c-.76 0-1.45-.1-1.65-.31-.24-.27-.31-.89-.31-1.51 0-.69.07-1.44.14-1.93.07-.69.21-.86.48-1.24.1-.1.27-.17.52-.17 2.17 0 4.61.31 6.74.31.31.04.55-.2.66-.41.03-.1.03-.34 0-.69-.07-.31-.21-.72-.38-1.24.07-.38.24-.34.93-.41.69-.14 1.69-.31 2.48-.34h.14c1.48 0 1.62 1.37 1.65 2.92v.31c0 .69-.1 1.82-.76 1.82h-.1c-.72 0-1.69-.14-2.65-.2-1.44-.1-3.37-.17-4.99-.17-.38.1-.79.04-.89.41-.04.17-.04.31-.04.48 0 .55.17 1.06.27 1.72 0 .44-1.17.65-2.24.65Zm14.01-4.02c0-.96.79-1.89 1.75-1.89s1.93.72 1.93 1.79c0 1-.65 1.79-1.72 1.79-1 0-1.96-.69-1.96-1.68Zm6.23 7.01c0 .55-.62 1.06-.83 1.44-.2.31-.31 1-.45 1.55-.34 1.86-.45 4.12-.45 6.36v.65c0 .69 0 1.41.07 1.89 0 .58-.79.62-1.48.62h-.14c-.62 0-1.24-.07-1.65-.14-.52-.14-.66-.24-.66-.72 0-.14.04-.31.04-.51.07-1.51.38-3.27.45-4.78.07-1.51.21-3.4.31-4.88.1-1.14.17-1.68 1.13-1.86.41-.07 1 0 1.38-.1.28-.07.9-.28 1.41-.28.48 0 .86.31.86.76Zm-1.24-6.77c0-1 .76-1.93 1.75-1.93s1.93.72 1.93 1.75c0 .58-.24 1.17-.62 1.51-.31.24-.72.34-1.1.34-1.03 0-1.96-.65-1.96-1.68Zm12.04 12.51c0-.38-.14-.48-.34-.48-.24 0-.55.14-.82.2-.9.31-2.1.55-3.2.72-.14 1.1-.21 2.37-.21 3.54 0 .76.03 1.61.1 2.2 0 .34-.21.48-.52.48-.14 0-.24-.03-.38-.07-.34-.04-.72-.07-1.1-.07h-.38c-.24 0-.69.07-1.03.07-.27 0-.52-.04-.55-.21-.07-.14-.07-.38-.07-.69 0-.34 0-.72.07-1.24.21-1.82.76-6.18 1.14-7.87.24-1 .38-1.61.41-1.89.14-.76.41-1.1 1.1-1.1h.41c.38 0 .86-.1 1.14-.14.17 0 .65-.17 1.06-.17s.55.24.55.58c0 .51-.52 1.13-.69 1.44-.45.79-.69 2.1-.79 3.16 1.1 0 2.41-.31 3.27-.48.52-.14.79-.1.89-.48.03-.1.03-.17 0-.24.1-.79.21-1.54.38-2.3.14-.58.14-.96.65-1.1.52-.14.96-.1 1.65-.17.76-.14 1.27-.41 1.93-.41.24 0 .38.27.38.48 0 .1-.04.2-.1.31-.62.9-.76 2.06-1 3.37-.17 1.1-.31 2.3-.31 3.54 0 1.61.24 3.23.45 4.57.03.34.14.65.14.89s-.1.38-.41.38c-.45 0-1.14-.1-1.72-.1-.69 0-1.2.07-1.82.07-.45 0-.34-.2-.41-.58-.03-.76-.03-1.44-.03-2.06 0-1.24.17-3.44.17-4.16Zm-3.85-12c0-.69.38-1.34.76-1.92.34-.62.89-1.14 1.41-1.62.38-.34.86-.69 1.27-.89.21-.1.38-.17.55-.17.28 0 .45.1.45.48-.27.55-.38.65-.96 1.58-.2.31-.27.58-.27.79 0 .51.48.76 1.1.76 1.13 0 1.72-.79 2.27-1.51.41-.51.9-1.31 1.24-1.79.2-.24.38-.38.58-.38.07 0 .14.03.17.03.38.17.55.45.55.76 0 1.37-2.44 3.85-2.89 4.26-1 .93-2.2 1.51-3.82 1.51-1.24 0-2.41-.62-2.41-1.89Zm11.43 18.49c0-.69.82-1.31 1.31-1.65 1.1-.79 2.31-1.34 3.96-1.58.24-.07.48-.07.69-.07 1.48 0 2.13.83 2.13 2.03 0 .55-.14 1.17-.41 1.86-.45 1.24-1.82 2.47-2.89 3.26-.96.72-2.38 1.72-3.68 1.86h-.07c-.48 0-.69-.27-.69-.55 0-.24.14-.51.38-.69.93-.65 1.92-1.54 2.61-2.51.24-.34.59-1.1.59-1.72 0-.41-.14-.76-.52-.93-.1-.03-.27-.07-.41-.07-.24 0-.48.07-.65.2-.38.28-1.27.9-1.76.96h-.27c-.21 0-.31-.17-.31-.41Zm145.49-12.17c0 .1-.04.34-.17.65-.07.31-.14.69-.14 1.1 0 .82.24 2.23.41 3.09.07.69.21 1.27.31 1.82.14.72.27 1.3.76 1.3s.59-.2.93-.72c.41-.76.93-1.79 1.31-2.65.48-1.17.34-2.54.69-3.88.07-.24.17-.45.27-.55.59-.38 1.69-.31 2.38-.55l.55-.14c.28-.1.66-.17.93-.17.34.03.21.14.21.41 0 2.95.86 7.9 1.86 10.55.24.62.41.83.62 1.27.03.1.07.17.07.27 0 .27-.31.45-.41.62-.03.03-.1.07-.27.07-.48 0-1.1-.07-1.58-.07s-1.07.14-1.52.21c-.07 0-.14.03-.2.03-.31 0-.41-.17-.48-.51-.45-2.24-1.03-5.12-1.2-7.7-.1-.31-.21-.41-.31-.41-.24 0-.45.55-.62.93-.93 2.17-2.06 4.12-2.06 7.11.04.24-.27.51-.52.51-.48 0-1.38-.1-1.92-.14-.52 0-1.24.21-1.72.21-.07 0-.1-.03-.14-.03-.2-.21-.34.1-.38-.45-.14-.93-.24-2.58-.38-3.71-.14-1.2-.41-3.34-.96-3.99-.1-.1-.24-.17-.34-.17-.72 0-1.38 2.16-1.62 2.78-.48 1.24-.83 2.78-1.03 4.3 0 .31-.03.48-.03.55 0 .48-.31.48-.83.51-.45.07-1.03.14-1.58.14h-.24c-.76-.03-.86-.24-.96-.86v-.24c0-.31.1-.55.21-.86.17-.72.79-1.58 1.24-2.3.65-.96 1.51-2.13 2.2-2.99.89-1.07 1.48-2.65 1.86-4.16.07-.34.1-.55.1-.62 0-.31.17-.38.34-.58.03-.03.24-.1.65-.17.89-.21 2.06-.38 3.1-.38.52 0 .52.17.66.55Zm12.36 11.44c0-.48.14-.86.41-1.37.45-.93.69-1.27 1.48-2.06q.59-.58 1.27-1.24c.93-.96 1.96-1.86 2.68-2.82.38-.52.86-1.14 1.07-1.75.03-.14.07-.24.03-.27 0-.55-.55-.83-.93-1.13-.34-.24-.96-.48-.96-.96 0-.51.38-.65.86-.65h.62c.45.04 1.03.17 1.48.17.79.03 2.27 0 2.72.34.1.1.2.82.2 1.2 0 .62.17.76.62 1.3.93 1.13 2.13 2.54 3.06 3.71.55.72 1.06 1.37 1.55 1.96.76.89 1.45 1.89 1.52 3.16.07.52.14.76.14 1s-.1.34-.31.34c-.38 0-1.27-.03-1.72-.03-.31 0-.86.07-1.27.07s-.79-.07-.83-.41c-.1-.34.07-.55 0-1.03-.14-.83-.45-1.1-.96-1.79-.38-.62-1.13-1.48-1.79-1.65-.27-.1-.69-.1-.69.2 0 1 .14 2.37.14 3.34.03.17.14.58.14.86 0 .17-.03.27-.1.31-.24.14-1.58.17-1.96.21h-.17c-.52 0-1.55-.1-1.79-.21-.1-.03-.17-.14-.17-.31v-.41c.14-.44.24-1.37.31-1.99.1-.69.24-1.75.24-2.3 0-.27-.45-.44-.83-.44-.07 0-.14.03-.2.03-.34.07-.72.48-1.03.72-1.03.89-1.89 2.06-1.89 3.98 0 .41.17.83-.24.83h-1.24c-.24 0-.45.03-.66.03-.58 0-.79-.27-.79-.93Zm8.4-5.84c.48 0 1.68-.21 1.68-.58 0-.07-.03-.14-.14-.2-.24-.24-1.13-1.14-1.31-1.48-.1-.17-.21-.27-.34-.27-.07 0-.17.07-.24.21-.17.51-.79 1.2-1.13 1.55-.14.1-.21.17-.21.27 0 .51 1.03.51 1.62.51h.07Zm-6.07-14.3c0-.62 1.48-1.34 2.54-1.34.21 0 .38.03.52.07 1.34.34 2.61 1.1 3.85 1.54 1.38.45 2.75 1.03 4.37 1.24.52.04 1.89.07 1.89.58 0 .69-.45 1.44-.79 1.82-.17.14-.31.21-.48.21-.31-.04-.93-.27-1.86-.69-1.34-.69-3.47-1.55-5.3-1.93-1.2-.27-2.41-.51-3.51-.76-.45-.14-.79-.24-1.03-.34-.14-.14-.21-.27-.21-.41ZM303 28.78c-.17 0-.21-.24-.24-.38 0-.58-.03-1.37-.03-2.17 0-2.82.17-5.5.65-7.76.17-1.03.24-2.68 1.17-2.68h.55c.41.03.93.03 1.51.03 2.89 0 5.75-.1 8.4-.27h.62c.21 0 .45.14.45.34 0 .03-.04.07-.04.1 0 .07-.07.31-.14.72-.55 2.13-1.03 4.61-1.03 7.29v.34c.03 1.48.1 2.68.14 4.09.07.21-.07.38-.21.41-.41 0-1.17.03-1.72.03s-1.31-.03-1.75-.03c-.31-.04-.34-.14-.41-.38 0-.52-.03-1.2-.03-1.89 0-3.23.21-6.39.69-9.04.03-.07.07-.14.07-.24 0-.41-.2-.38-.76-.34h-1.1c-.45 0-.96 0-1.51.04-.55 0-.66.48-.83 1.03-.55 2.3-.79 5.05-.79 8.01v2.23c.07.24-.1.41-.28.41-.24.07-.72.07-1.17.07h-.59c-.48 0-1.24.03-1.62.03Zm17.38-11.58c1.27-.89 3.13-1.79 4.95-1.86h.1c1.52 0 2.58 1.17 3.27 2.13.72 1.03 1.41 2.61 1.41 4.16s-.83 2.82-1.58 3.74c-1.17 1.48-2.92 2.89-4.96 3.4-.31.07-.62.1-.86.1-.83 0-1.45-.31-2.13-.69-1.89-.96-3.13-3.06-3.13-6.01 0-2.34 1.48-3.95 2.92-4.98Zm2.61 1.2c-.86 0-1.55.69-1.89 1.27-.21.34-.31.76-.31 1.17 0 1.03.55 2.13.9 2.75.58.96 1.62 1.86 2.78 2.2.1 0 .17.03.28.03.86 0 1.58-.83 1.92-1.41.24-.34.34-.79.34-1.2 0-1.17-.65-2.41-1.1-3.02-.55-.76-1.51-1.65-2.65-1.75-.1-.03-.21-.03-.28-.03Zm18.86-1.96c0 .1-.04.34-.17.65-.07.31-.14.69-.14 1.1 0 .82.24 2.23.41 3.09.07.69.2 1.27.31 1.82.14.72.27 1.3.76 1.3s.59-.2.93-.72c.41-.76.93-1.79 1.31-2.65.48-1.17.34-2.54.69-3.88.07-.24.17-.45.27-.55.59-.38 1.69-.31 2.38-.55l.55-.14c.28-.1.66-.17.93-.17.34.03.21.14.21.41 0 2.95.86 7.9 1.86 10.55.24.62.41.83.62 1.27.03.1.07.17.07.27 0 .27-.31.45-.41.62-.03.03-.1.07-.27.07-.48 0-1.1-.07-1.58-.07s-1.07.14-1.52.21c-.07 0-.14.03-.2.03-.31 0-.41-.17-.48-.51-.45-2.24-1.03-5.12-1.2-7.7-.1-.31-.21-.41-.31-.41-.24 0-.45.55-.62.93-.93 2.17-2.06 4.12-2.06 7.11.03.24-.28.51-.52.51-.48 0-1.38-.1-1.92-.14-.52 0-1.24.21-1.72.21-.07 0-.1-.03-.14-.03-.2-.21-.34.1-.38-.45-.14-.93-.24-2.58-.38-3.71-.14-1.2-.41-3.34-.96-3.99-.1-.1-.24-.17-.34-.17-.72 0-1.38 2.16-1.62 2.78-.48 1.24-.82 2.78-1.03 4.3 0 .31-.03.48-.03.55 0 .48-.31.48-.83.51-.45.07-1.03.14-1.58.14h-.24c-.76-.03-.86-.24-.96-.86v-.24c0-.31.1-.55.21-.86.17-.72.79-1.58 1.24-2.3.65-.96 1.51-2.13 2.2-2.99.89-1.07 1.48-2.65 1.86-4.16.07-.34.1-.55.1-.62 0-.31.17-.38.34-.58.03-.03.24-.1.65-.17.89-.21 2.06-.38 3.1-.38.52 0 .52.17.66.55Zm21.2 5.71c0-.38-.14-.48-.34-.48-.24 0-.55.14-.82.21-.9.31-2.1.55-3.2.72-.14 1.1-.21 2.37-.21 3.54 0 .76.03 1.61.1 2.2 0 .34-.21.48-.52.48-.14 0-.24-.03-.38-.07-.34-.03-.72-.07-1.1-.07h-.38c-.24 0-.69.07-1.03.07-.27 0-.52-.03-.55-.21-.07-.14-.07-.38-.07-.69 0-.34 0-.72.07-1.24.21-1.82.76-6.18 1.14-7.87.24-1 .38-1.61.41-1.89.14-.76.41-1.1 1.1-1.1h.41c.38 0 .86-.1 1.14-.14.17 0 .65-.17 1.06-.17s.55.24.55.58c0 .51-.52 1.13-.69 1.44-.45.79-.69 2.1-.79 3.16 1.1 0 2.41-.31 3.27-.48.52-.14.79-.1.89-.48.03-.1.03-.17 0-.24.1-.79.21-1.55.38-2.3.14-.58.14-.96.65-1.1.52-.14.96-.1 1.65-.17.76-.14 1.27-.34 1.93-.34.24 0 .38.2.38.41 0 .1-.04.21-.1.31-.62.9-.76 2.06-1 3.37-.17 1.1-.31 2.3-.31 3.54 0 1.61.24 3.23.45 4.57.03.34.14.65.14.9s-.1.38-.41.38c-.45 0-1.14-.1-1.72-.1-.69 0-1.2.07-1.82.07-.45 0-.34-.21-.41-.58-.03-.76-.03-1.44-.03-2.06 0-1.24.17-3.44.17-4.16Zm15.04 6.77c-.34 0-.72-.03-1.03-.03-.48 0-.52-.48-.59-1-.24-1.65-.48-3.61-.62-5.29-.07-.34-.07-.58-.07-.69-.03-.41-.1-.55-.24-.55-.17 0-.41.34-.58.62-.55.79-1.14 1.82-1.48 2.78-.24.86-.48 1.89-.65 2.82-.03.31.1.83-.07.93-.21.17-.28.31-.76.34-.52 0-1.13.03-1.65.03h-.62c-.27 0-.34-.27-.34-.62s.03-.72.14-.96c.59-1.34 1.55-2.99 2.41-4.05.79-1 1.86-2.37 2.58-3.47.45-.69.65-1.1.65-1.96v-1.17c0-1 1.07-.79 1.96-.86.41-.07 1.1-.24 1.52-.27.1-.04.24-.04.34-.04.24 0 .45.1.45.38 0 .83-.31 1.75-.31 2.72v.31c.1 1.99.27 4.12.69 5.77.21.83.45 1.68.66 2.41.2.51.38.62.38 1.1 0 .55-.59.51-1.07.62-.34.03-.79.1-1.13.1-.17.03-.34.03-.55.03Zm4-4.54v-.31c0-1.24.59-2.17 1.2-2.89.79-.96 1.89-1.72 2.96-2.47-.31-.38-.62-.72-.93-1.03-1.03-1.1-2.06-2.4-2.75-3.78-.34-.65-.38-.93-.48-1.68v-.28c0-.62.34-1.1.72-1.48.72-.83 2.2-1.48 3.65-1.72.1 0 .17-.03.27-.03.41 0 .65.24.65.51 0 .17-.1.38-.34.55-.38.27-.48.82-.48 1.58 0 .41.2 1.1.58 1.99.41 1 1 2.1 1.76 3.33.17-.17.52-.41.65-.55 1.79-1.79 3.58-4.02 4.92-6.12.31-.52.48-.9.52-1.1.04-.17.07-.34.07-.45 0-.17-.07-.27-.24-.27-.03 0-.1 0-.21.03-.31.1-.55.41-.96.41h-.14c-.45-.1-.62-.2-.62-.69 0-.69 1.07-1.07 1.65-1.34.65-.27 1.58-.65 2.2-.86.31-.07.55-.14.79-.14.55 0 .93.24 1.24.72.04.07.07.17.07.27 0 .17-.07.41-.17.69-.76 1.86-2.34 3.68-3.58 5.16-1.65 1.79-3.75 3.54-5.57 5.19l.72 1.03c.96 1.27 1.65 2.3 2.1 3.68.14.51.2 1.03.2 1.51 0 1.34-.55 2.54-1.31 3.33-.93 1-2.38 1.65-4.37 1.65h-.21c-2.96 0-4.57-1.68-4.57-4.47Zm3.17-.65c0 1.2.24 2.3.83 2.95.24.31.58.45.96.45.41 0 .86-.21 1.17-.52.41-.44.69-1.34.69-2.54 0-1.68-1-3.23-1.79-4.3-1.13 1-1.86 1.89-1.86 3.95Zm17.96-1.61c0-.38-.14-.48-.34-.48-.24 0-.55.14-.82.2-.9.31-2.1.55-3.2.72-.14 1.1-.21 2.37-.21 3.54 0 .76.03 1.61.1 2.2 0 .34-.21.48-.52.48-.14 0-.24-.03-.38-.07-.34-.04-.72-.07-1.1-.07h-.38c-.24 0-.69.07-1.03.07-.27 0-.52-.04-.55-.21-.07-.14-.07-.38-.07-.69 0-.34 0-.72.07-1.24.21-1.82.76-6.18 1.14-7.87.24-1 .38-1.61.41-1.89.14-.76.41-1.1 1.1-1.1h.41c.38 0 .86-.1 1.14-.14.17 0 .65-.17 1.06-.17s.55.24.55.58c0 .51-.52 1.13-.69 1.44-.45.79-.69 2.1-.79 3.16 1.1 0 2.41-.31 3.27-.48.52-.14.79-.1.89-.48.03-.1.03-.17 0-.24.1-.79.21-1.54.38-2.3.14-.58.14-.96.65-1.1.52-.14.96-.1 1.65-.17.76-.14 1.27-.41 1.93-.41.24 0 .38.27.38.48 0 .1-.04.2-.1.31-.62.9-.76 2.06-1 3.37-.17 1.1-.31 2.3-.31 3.54 0 1.61.24 3.23.45 4.57.03.34.14.65.14.89s-.1.38-.41.38c-.45 0-1.14-.1-1.72-.1-.69 0-1.2.07-1.82.07-.45 0-.34-.2-.41-.58-.03-.76-.03-1.44-.03-2.06 0-1.24.17-3.44.17-4.16Zm-3.85-12c0-.69.38-1.34.76-1.92.34-.62.89-1.14 1.41-1.62.38-.34.86-.69 1.27-.89.21-.1.38-.17.55-.17.28 0 .45.1.45.48-.27.55-.38.65-.96 1.58-.2.31-.27.58-.27.79 0 .51.48.76 1.1.76 1.13 0 1.72-.79 2.27-1.51.41-.51.9-1.31 1.24-1.79.2-.24.38-.38.58-.38.07 0 .14.03.17.03.38.17.55.45.55.76 0 1.37-2.44 3.85-2.89 4.26-1 .93-2.2 1.51-3.82 1.51-1.24 0-2.41-.62-2.41-1.89Zm-36.11-.53c-.41.41-.76 1-1.45 1-.55 0-1.27-.41-1.27-1.03 0-.1.03-.21.07-.31.52-.69 1.03-1.1 1.62-1.86.79-1.03 2.51-3.82 2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41 1.14-.41.65 0 1.34.27 1.34.82 0 .72-.76 1.51-1.17 2.17-1.2 1.86-2.31 3.64-3.68 5.29Zm110.08 19.29h-.9c-.52-.03-1.27-.07-1.69-.07-.24-.07-.45-.34-.45-.62 0-1.96.03-4.71.27-6.53.03-.38.1-.83.14-1.37l.21-1.58c.14-1.37.07-3.02 1.31-3.2.07-.04.31 0 .76 0 .89.03 1.99.1 2.96.1h.96c1.24 0 2.92-.17 4.16-.24.24 0 .45-.03.62-.03.34 0 .55.07.55.41 0 .24-.2.38-.41.55-.89 1-1.75 2.03-2.44 3.2-.14.24-.21.58-.48.51-.14-.07-.24-.2-.27-.51-.17-1.1-.41-2.23-1.45-2.58-.34-.1-.76-.14-1.17-.14h-.38c-.52.03-.86.24-.89.65 0 .58-.14 1.55-.21 2.3-.07.93-.2 2.23-.2 3.16 0 1.41.03 3.2.17 4.54 0 .41.03.69.03.79 0 .55-.55.65-1.2.65Zm10.84 11.48c0-.48.1-.76.55-.86.03-.34 0-.65 0-1 0-1.89-.31-3.68-.48-5.67-.17-2.37-.41-5.12-.41-7.56 0-1.99.55-3.92 1.17-5.36.62-1.41 1.55-2.34 2.68-3.23.52-.38 1.34-.96 2.03-.96.55 0 .86.45.93.93.2 1.93.38 3.71.38 5.77 0 1.48-.24 2.34-.52 3.51-.2.86-.48 1.75-.89 2.37-.31.48-.72.58-1.38.58-.38 0-.69-.07-1.03-.1-.17-.03-.34.21-.41.34v.83c0 2.2.27 4.57.52 6.49.17 1.17.31 1.65.31 2.65 0 .69-.17 1.13-.55 1.51-.27.38-1.51.38-2.13.38-.55 0-.76-.14-.76-.62Zm3.3-15.05c1 0 1.31-1.34 1.31-2.48v-.31c-.03-.51-.38-.72-.79-.72-1.27 0-1.55 1-1.55 2.37 0 .72.31 1.14 1.03 1.14Zm19.65-5.43c0-.31.07-.69-.04-1-.07-.76-.96-1.37-1.68-1.48-.17 0-.72-.03-1.1-.03-.62 0-.62.38-.72 1-.21 1.13-.59 2.65-.59 3.88 0 .17-.07.38.52.31.72-.14 1.72-.34 2.51-.34.41 0 .79 1 .96 1.44.45 1.2.9 2.68 1.17 3.99.07.31.1.51.1.62 0 .48-.27.48-.59.62-.03.03-.27 0-.62 0h-3.61c-1 0-2.3.1-3.34.1h-.69c-.34-.03-.83-.38-.83-.83 0-.27.03-.51.14-1.2.45-2.82.93-6.05 1.41-8.97v-.1c0-.72-1-.86-1.92-.86-.79 0-1.14.03-1.55.51-.17.17-.34.48-.38 1 0 .38-.03 1.1-.03 1.55v1.07c0 .31.07.76.07 1.17 0 .51-.1.96-.45 1-.66 0-1.58.07-2.24.07-.52 0-.76-.03-.89-.34v-.51c0-1.79.07-3.75.21-5.5.07-.45.14-1 .69-1h.07c.83 0 2.44.03 3.44.03H500c.41 0 .69-.17.79-.51.03-.03.14-.45.38-1.17.55-1.79 1.31-3.95 2.1-5.7.41-1 .86-1.79 1.31-2.37.14-.17.41-.24.72-.24h.79c.31-.03.65-.07 1.07-.07h.24c.24 0 .86.2.86.58 0 .04-.03.1-.03.17-.24.48-.21.34-.66 1.03-1.41 2.13-2.61 4.95-3.47 7.87-.03.14-.03.24-.03.34 0 .27 1.03.31 1.79.31h1.89c1.2 0 2.27-.34 3.4-.34.38 0 .52.21.52.48 0 .72-.62 1.1-1.03 1.51-.52.48-.96.82-1.41 1.37-.31.34-.62.69-.96 1-.17.14-.38.24-.55.24-.31 0-.58-.48-.58-.69Zm-4.3 4.64c-.34 0-.45.28-.52.69-.1.31-.17.72-.17 1.17 0 .62.17 1.2.72 1.2.93 0 1.48-.17 1.48-1.2-.04-.86-.59-1.86-1.52-1.86Zm29.84 4.4h-.89c-1.13 0-2.51-.1-3.71-.1h-5.71c-2.82 0-5.75.28-8.08.65h-.21c-.69 0-.76-.76-.79-1.58v-2.51c0-3.2.34-6.49 1.34-8.35.38-.72 2.31-.93 3.2-1.1.17-.03.34-.07.48-.07.48 0 .79.21.79.55 0 .14-.03.31-.17.48-.34.51-.76 1.03-.96 1.75-.62 1.65-.79 4.47-.79 6.6.04.79.04 1.2.28 1.79.2.44 1.38.48 2.1.48h.52c.72 0 1.69-.04 1.75-.45.04-.1-.03-.24 0-.38 0-1.2-.14-2.75-.14-4.02 0-1.48.17-3.37.41-4.71.17-.96.24-1.41.96-1.75.72-.34 1.86-.55 2.92-.55.07 0 .17-.04.24-.04.34 0 .52.21.52.48 0 .24-.14.52-.34.72-.41.45-.45 1.03-.55 1.68-.24 1.48-.27 3.2-.27 4.95v2.2c.14.55-.03 1.06.24 1.51.14.24.69.31 1.31.31.65 0 1.34-.07 1.72-.1.38-.04 1.17 0 1.17-.31 0-.03 0-.07-.03-.1-.07-1.75-.1-3.33-.14-4.74v-1.79c0-1.03.07-2.06.17-2.85.04-.34.1-.55.21-.62.76-.89 2.31-1.3 3.89-1.3.48 0 .62.14.62.34 0 .31-.48.82-.59 1.03-.24.45-.21.58-.27 1.44-.14 1.13-.21 2.68-.24 3.92v.76c0 1.03.07 1.96.17 2.75.04.44.14.82.28 1.06.17.24.31.65.31 1.03 0 .89-.79.93-1.69.93Zm6.69-12.99c.38 0 .82-.1 1.1-.1.24-.03.65-.14 1-.14s.59.07.59.38c0 .41-.21.76-.45 1.07-.1.14-.14.27-.14.38 0 .31.27.55.55.72.59.48 1.62 1.17 2.41 1.37h.03c.45 0 .45-1.31.52-1.79.07-.58.2-1.48.79-1.61.52-.14.96-.1 1.62-.2.79-.1 1.24-.31 1.93-.31.24 0 .34.21.34.41 0 .1-.03.24-.1.31-.17.21-.59 1.27-.65 1.58-.1.44-.14 1.2-.21 1.82-.17 1.06-.24 2.23-.24 3.44 0 .45 0 .93.03 1.37.1 1.31.14 2.82.41 3.88.07.31-.1.48-.34.48-.45 0-1.13-.1-1.72-.1-.72 0-1.17.07-1.79.07-.45 0-.34-.21-.41-.58-.04-.69-.04-1.31-.04-1.93 0-1.24.04-2.41.14-3.64.03-.38.03-.69.03-.93-.14-.62-.48-.69-1.03-.96-.38-.17-.76-.38-1.17-.58l-.48-.27c-.17-.07-.59-.38-.72-.31-.21.14-.24-.03-.38.24-.45 1.82-.69 4.26-.69 6.53v.62c.04.62.04 1.03.07 1.2-.03.34-.21.48-.52.48-.1 0-.24-.03-.38-.07-.31-.03-.69-.07-1.07-.07-.27 0-.89.07-1.34.07-.34 0-.59-.03-.62-.17-.07-.17-.1-.48-.1-.96 0-.31.03-.69.03-1.14.21-2.68.69-6.6 1.38-8.86.24-.93.21-1.68 1.24-1.68h.38Zm19.27-.31c.45 0 .76.14.76.55 0 2.68.21 5.67.72 7.87.24 1.03.55 2.13.83 3.02.14.41.24.65.31.76.07.1.1.21.1.28 0 .27-.24.51-.41.58-.34.21-1 .14-1.55.21-.17.03-.34.03-.52.03h-1c-.72 0-.62-3.09-.93-3.68-.07-.31-.34-.48-.62-.48-.21 0-.41.1-.59.31-.55.65-1 1.79-1.38 2.71-.34.96-1 1.41-2.2 1.41-.83 0-1.2-.72-1.2-1.51s.17-1.13.62-2.13c.72-1.55 1.96-3.02 2.79-4.61.31-.55.69-1.27.86-1.79.07-.17.1-.38.1-.58 0-.69-.31-1.58-.41-2.03 0-.07-.04-.14-.04-.17 0-.48.66-.52 1.24-.52.28 0 .69-.03.93-.03.38 0 1.07-.21 1.58-.21Zm-2.85 5.26c-.28 0-.41.31-.69.62-.38.55-.83 1.3-1.13 1.96-.14.27-.27.72-.27 1.1 0 .31.1.58.48.58.07 0 .17-.03.31-.07.79-.21 1.41-1 1.79-1.65.14-.24.2-.41.2-.55 0-.65-.03-2-.69-2Zm10.4 8.01h-.9c-.52-.03-1.27-.07-1.69-.07-.24-.07-.45-.34-.45-.62 0-1.96.03-4.71.27-6.53.03-.38.1-.83.14-1.37l.21-1.58c.14-1.37.07-3.02 1.31-3.2.07-.04.31 0 .76 0 .89.03 1.99.1 2.96.1h.96c1.24 0 2.92-.17 4.16-.24.24 0 .45-.03.62-.03.34 0 .55.07.55.41 0 .24-.2.38-.41.55-.89 1-1.75 2.03-2.44 3.2-.14.24-.21.58-.48.51-.14-.07-.24-.2-.27-.51-.17-1.1-.41-2.23-1.45-2.58-.34-.1-.76-.14-1.17-.14h-.38c-.52.03-.86.24-.89.65 0 .58-.14 1.55-.21 2.3-.07.93-.2 2.23-.2 3.16 0 1.41.03 3.2.17 4.54 0 .41.03.69.03.79 0 .55-.55.65-1.2.65Zm13.08-11.68c1.27-.89 3.13-1.79 4.95-1.86h.1c1.52 0 2.58 1.17 3.27 2.13.72 1.03 1.41 2.61 1.41 4.16s-.82 2.82-1.58 3.74c-1.17 1.48-2.92 2.89-4.96 3.4-.31.07-.62.1-.86.1-.83 0-1.45-.31-2.13-.69-1.89-.96-3.13-3.06-3.13-6.01 0-2.34 1.48-3.95 2.92-4.98Zm2.61 1.2c-.86 0-1.55.69-1.89 1.27-.21.34-.31.76-.31 1.17 0 1.03.55 2.13.9 2.75.58.96 1.62 1.86 2.78 2.2.1 0 .17.03.28.03.86 0 1.58-.83 1.92-1.41.24-.34.34-.79.34-1.2 0-1.17-.65-2.41-1.1-3.02-.55-.76-1.51-1.65-2.65-1.75-.1-.03-.21-.03-.28-.03ZM499.5 9.27c-.41.41-.76 1-1.45 1-.55 0-1.27-.41-1.27-1.03 0-.1.03-.21.07-.31.52-.69 1.03-1.1 1.62-1.86.79-1.03 2.51-3.82 2.82-4.54.27-.65.48-1.03.58-1.13.17-.28.66-.41 1.14-.41.65 0 1.34.27 1.34.82 0 .72-.76 1.51-1.17 2.17-1.2 1.86-2.31 3.64-3.68 5.29Z"/>
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