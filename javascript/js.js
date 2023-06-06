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
  min-width: 250px!important;
  max-width: 250px!important;
  width: 250px!important;
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
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center!important;
	align-items: center!important;
	width: 100% !important;
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
  top: -12px!important;
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
#quicksettings #setting_save_images_before_face_restoration {
	position: relative;
	top: 18px!important;
}
#quicksettings #setting_sd_vae {
	--sd_vae_w: 200px;
	max-width: var(--sd_vae_w) !important;
	min-width: var(--sd_vae_w) !important;
	width: var(--sd_vae_w) !important;
}
#quicksettings #setting_img2img_color_correction {
	--color_correction_w: 85px;
	max-width: var(--color_correction_w) !important;
	min-width: var(--color_correction_w) !important;
	width: var(--color_correction_w) !important;
	top: -10px;
}
#quicksettings #setting_img2img_background_color > label > input {
	--color_w: 30px;
	max-width: var(--color_w) !important;
	min-width: var(--color_w) !important;
	width: var(--color_w) !important;
	position: relative;
	top: -32px;
	right: -6em;
}
#quicksettings #setting_img2img_background_color {
	--background_color_w: 120px;
	max-width: var(--background_color_w) !important;
	min-width: var(--background_color_w) !important;
	width: var(--background_color_w) !important;
	top: 10px;
}
#quicksettings #setting_live_previews_enable {
	--livep_w: 7em;
	max-width: var(--livep_w) !important;
	min-width: var(--livep_w) !important;
	width: var(--livep_w) !important;
}
#quicksettings #setting_save_images_before_face_restoration {
	--facerestore_w: 100px;
	max-width: var(--facerestore_w) !important;
	min-width: var(--facerestore_w) !important;
	width: var(--facerestore_w) !important;
	position: relative!important;
	top: -8px!important;
}
#quicksettings #setting_disable_all_extensions {
	--ext_disable_w: 168px;
	max-width: var(--ext_disable_w) !important;
	min-width: var(--ext_disable_w) !important;
	width: var(--ext_disable_w) !important;
}
#quicksettings #setting_disable_all_extensions > div.wrap > label:nth-child(1) {
	width: 70px !important;
}
#quicksettings #setting_CLIP_stop_at_last_layers,
#quicksettings #setting_extra_networks_default_multiplier,
#quicksettings #setting_code_former_weight,
#quicksettings #setting_ldsr_steps {
	--CLIP_stop_w: 188px;
	max-width: var(--CLIP_stop_w) !important;
	min-width: var(--CLIP_stop_w) !important;
	width: var(--CLIP_stop_w) !important;
}
#quicksettings #setting_code_former_weight {
	top: 7px!important;
}
#setting_code_former_weight > input[type="range"] {
	/*direction: rtl!important;*/
	transform: rotateY(180deg)!important;
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
#reload_frame {
	cursor: pointer;
	position: relative;
	width: fit-content;
	top: 4px;
	left: 25px;
}
#reload_frame:active {
	color:#fff
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
            // масштаб быстрых настроек
            function updateScale() {
              const screenWidth = window.innerWidth * (window.devicePixelRatio || 1);
              console.log("ширина окна:", screenWidth);
              function getScale(screenWidth) {
                if (screenWidth < 1600) {
                  return 1;
                }
                const slope1 = (0.720 - 0.603) / (1920 - 1600);
                const intercept1 = 0.603 - slope1 * 1600;
                const slope2 = (0.960 - 0.720) / (2560 - 1920);
                const intercept2 = 0.720 - slope2 * 1920;
                if (screenWidth <= 1920) {
                  return slope1 * screenWidth + intercept1;
                } else if (screenWidth <= 2560) {
                  return slope2 * screenWidth + intercept2;
                } else {
                  return 1;
                }
              }
              const scale = getScale(screenWidth);
              console.log("масштаб быстрых настроек:", scale);
              quickSettings.style.transform = `scale(${scale.toFixed(2)})`;
              if (screenWidth < 1600) {quickSettings.style.flexWrap = "wrap";}else{quickSettings.style.flexWrap = "nowrap";}
            }
            updateScale();
            window.addEventListener("resize", updateScale);
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
    <option value="theme7">кандидоз</option>
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
  --slider-background: #30343b !important;
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
  * {
	/* кандидоз */
	--background-fill-primary: #f8f8f8 !important;
	--body-background-fill: #fbfbfb !important;
	--border-color-primary: #6f6f6f !important;
	--input-background-fill: #f6f6f6 !important;
	--button-primary-border-color: #f53c03 !important;
	--button-primary-background-fill: #ff9100 !important;
	--background-fill-secondary: #eee !important;
	--button-secondary-background-fill: #d1d1d1 !important;
	--button-secondary-background-fill-hover: #fafafa !important;
	--button-secondary-border-color: #c4c4c4 !important;
	--checkbox-label-background-fill: #ff009700 !important;
	--checkbox-background-color: #f9f9f9 !important;
	--checkbox-background-color-selected: #0078fc !important;
	--checkbox-border-color-focus: #002fff !important;
	--checkbox-border-color-hover: #8e8e8e !important;
	--checkbox-border-color-selected: #00d9ff !important;
	--checkbox-label-background-fill-hover: #a2a2a2 !important;
	--button-primary-background-fill-hover: #b1b1b1 !important;
	--button-secondary-text-color: #000 !important;
	--body-text-color: #000 !important;
	--neutral-200: #595959 !important;
	--hue-rotate-checkbox: 0deg;
	--slider-background: #bcb8b8 !important;
	--slider-thumb: #0078fc !important;
	--slider-focus: #9c9c9c !important;
	--slider-fill-lower: #0078fc !important;
}
#txt2img_prompt textarea,
#img2img_prompt textarea {
	color: #0a8e18!important;
}
#txt2img_neg_prompt textarea,
#img2img_neg_prompt textarea {
	color: #a11b1b!important;
}
a:hover {
	color: #0078fc !important;
	text-decoration: underline !important;
}
ul.options {
	background: #ddd !important;
}
li.selected.active {
	background: #0078fc !important;
}
div[id$=modal_for_waiting] {
	background: #eee !important;
	color: #000 !important;
}
div[id$=modal_for_waiting] p {
	color: #000 !important;
}
div[id$=modal_for_waiting] h1 {
	color: #000 !important;
}
div#colab_model_list {
	background: #fbfbfb !important;
	color: #0f0f0f !important;
}
div#colab_model_list p {
	color: #0f0f0f !important;
}
div#colab_model_list code {
	background: none !important;
	color: #39910e !important;
}
.autocompleteResults {
	border-radius: 0!important;
	background-color: #e2e1e1 !important;
	border: 1px solid #6f6f6f !important;
	box-shadow: 0 0 10px #000;
}
.autocompleteResultsList > li:nth-child(odd) {
	background-color: #fbfbfb !important;
}
.autocompleteResultsList > li:hover {
	background-color: #e4f3df !important;
}
body > gradio-app > div.up_arrow {
	filter: invert(1)
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
    const bgSpan = document.querySelector("#setting_img2img_background_color > label > span");
    bgSpan.textContent = 'фон изо-в-изо';
    const img2imgColorcorrectionSpan = document.querySelector("#setting_img2img_color_correction > label > span");
    img2imgColorcorrectionSpan.textContent = 'цветокор изо-в-изо';
    const livepreviewSpan = document.querySelector("#setting_live_previews_enable > label > span");
    livepreviewSpan.textContent = 'лайвпревью';
    const backupBeforeFaceRestoreSpan = document.querySelector("#setting_save_images_before_face_restoration > label > span");
    backupBeforeFaceRestoreSpan.textContent = 'бэкап перед codeformer';
    backupBeforeFaceRestoreSpan.title = 'Сделать копию изображения перед восстановлением лица';
    const LDSRstepsSpan = document.querySelector("#setting_ldsr_steps > div.wrap.svelte-1cl284s > div > label > span");
    LDSRstepsSpan.textContent = 'шаги LDSR';
    LDSRstepsSpan.title = 'кол-во шагов LDSR\nменьше = быстрее';
    const codeformerSpan = document.querySelector("#setting_code_former_weight > div.wrap.svelte-1cl284s > div > label > span");
    codeformerSpan.textContent = 'сила codeformer';
    codeformerSpan.title = 'сила влияния codeformer: меньше = лучше!!!';
    const disableExtSpan = document.querySelector("#setting_disable_all_extensions > span");
    if (disableExtSpan) {disableExtSpan.textContent = 'все дополнения:';
    document.querySelector("#setting_disable_all_extensions > div.wrap > label:nth-child(3)").style.display = 'none';
    document.querySelector("#setting_disable_all_extensions > div.wrap > label:nth-child(1) > span").textContent = 'вкл.';
    document.querySelector("#setting_disable_all_extensions > div.wrap > label:nth-child(2) > span").textContent = 'выкл.';};
    document.querySelector("#hires_prompt > label > textarea").value = "high detail, sharpness, fine-textured, clarity, intricate, finely-detailed, accurate";
    document.querySelector("#hires_neg_prompt > label > textarea").value = "low detail, blurred, low quality, unfocused, fuzzy image, unclear, hazy, murky, indistinct";
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