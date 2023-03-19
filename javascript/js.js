function runTasks() {
	// модальное окно с пояснениями
	setTimeout(() => {
		function createModal() {
			if (document.querySelector(".modal") || localStorage.getItem("modalShown")) {
				return;
			}
			// html-код окошка
			const modal = document.createElement("div");
			modal.classList.add("modal_warning");
			const message = document.createElement("div");
			message.classList.add("warning_text");
			message.innerHTML = "<h3>UI претерпел изменения</h3><p>А чтобы ты не претерпевал страдания, вот краткое пояснение:</p><ul><li>панель быстрых настроек перемещена вниз, там выбор моделей, vae, и прочие штуки;</li><li>на слабых ПК и устройствах без поддержки аппаратного ускорения могут возникать тормоза из-за «эффектов», но все это можно отключить по кнопочке в подвале страницы:</li></ul>";
			const link = document.createElement("a");
			link.href = "#";
			link.textContent = "перейти к быстрым настройкам и отключению эффектов";
			const closeBtn = document.createElement("button");
			closeBtn.classList.add("close-btn");
			closeBtn.innerHTML = "&times;";
			// добавление элементов в модальное окно
			modal.appendChild(closeBtn);
			modal.appendChild(message);
			message.appendChild(link);
			// добавление модального окна в код gradio-app
			const lightboxModal = document.querySelector("body > gradio-app").shadowRoot.querySelector("#lightboxModal");
			lightboxModal.parentNode.insertBefore(modal, lightboxModal.nextSibling);
			// действия по клику
			link.addEventListener("click", (event) => {
				event.preventDefault();
				closeModal();
				window.scrollTo(0, document.body.scrollHeight);
			});
			const modalCloseBtn = modal.querySelector(".close-btn");
			modalCloseBtn.addEventListener("click", closeModal, { capture: true });
			modalCloseBtn.addEventListener("click", closeModalShadow, { capture: true });
			// запись на диск пользователю
			localStorage.setItem("modalShown", true);
		}

		window.addEventListener("load", createModal);

		// закрытие с отменой действия ссылки
		function closeModalShadow(event) {
			console.log("closeModalShadow");
			event.preventDefault();
			closeModal();
		}
		// закрытие
		function closeModal(event) {
			console.log("closeModal");
			const modal = document.querySelector("body > gradio-app").shadowRoot.querySelector("div.modal_warning");
			if (modal) {
				// удаление модального окна из документа
				modal.remove();
				// удаление обработчиков событий
				const modalCloseBtn = modal.querySelector(".close-btn");
				modalCloseBtn.removeEventListener("click", closeModal);
				modalCloseBtn.removeEventListener("click", closeModalShadow);
				// проверка на нажатие на ссылку
				if (event && event.target && event.target.tagName === "A") {
					// задержка перед прокруткой
					setTimeout(() => {
						window.scrollTo(0, document.body.scrollHeight);
					}, 100);
				}
			}
		}
		//первый показ окошка
		createModal();
	}, 1000);


	// внедрение перезаписывающих стилей
	setTimeout(() => {
		const styles = `
/* стили для переопределения с высоким приорететом! */
/* например:
.container {color:red}
*/
.autocompleteResults {left: 0.8em !important;}
		`;
		document.querySelector("body > gradio-app").shadowRoot.querySelector("style").insertAdjacentHTML("beforeend", styles);
	}, 2000);

	// скрипт перемещения панели быстрых настроек в самый низ перед слоем footer
	setTimeout(() => {
		const observer = new MutationObserver(function (mutationsList, observer) {
			for (const mutation of mutationsList) {
				if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
					const gradio_App = document.querySelector("body > gradio-app");
					const footer_div = gradio_App?.shadowRoot?.querySelector("div#footer");
					const quickSettings = gradio_App?.shadowRoot?.querySelector("#quicksettings");

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
			const footer_div = gradio_App?.shadowRoot?.querySelector("div#footer");
			const quickSettings = gradio_App?.shadowRoot?.querySelector("#quicksettings");

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
		const bodystyle = "background: #000 !important; margin: 0 !important; padding: 0 !important; top: 0 !important; left: 0 !important;";
		const waitUntilLoaded = setInterval(() => {
			if (document.body && document.body.style.cssText !== bodystyle) {
				document.body.removeAttribute('style');
				document.body.style.cssText = bodystyle;
				clearInterval(waitUntilLoaded);
			}
		}, 500);
	}, 9000);

	// изменение лейблов быстрых настроек
	setTimeout(() => {
		const extraNetworksSpan = document.querySelector("gradio-app").shadowRoot.querySelector("#setting_extra_networks_default_multiplier > div.w-full.flex.flex-col > div > label > span");
		extraNetworksSpan.textContent = 'экстрасети';
		const vaeSpan = document.querySelector("gradio-app").shadowRoot.querySelector("#setting_sd_vae_as_default > label > span");
		vaeSpan.textContent = 'VAE от модели';
		const clipSpan = document.querySelector("gradio-app").shadowRoot.querySelector("#setting_CLIP_stop_at_last_layers > div.w-full.flex.flex-col > div > label > span");
		clipSpan.textContent = 'CLIP-skip';
		const ImgOutputSpan = document.querySelector("gradio-app").shadowRoot.querySelector("#setting_do_not_show_images > label > span");
		ImgOutputSpan.textContent = '';
		const hypernetworkSpan = document.querySelector("body > gradio-app").shadowRoot.querySelector("#setting_sd_hypernetwork > label > span");
		hypernetworkSpan.textContent = 'гиперсеть в запрос';
	}, 9000);

	// перемещение кнопки
	setTimeout(() => {
		setTimeout(() => {
			const shadowRoot = document.querySelector("body > gradio-app").shadowRoot;
			const save_txt2imgButton = shadowRoot.querySelector('button#save_txt2img');
			const image_buttons_txt2imgDiv = shadowRoot.querySelector('div#image_buttons_txt2img');
			image_buttons_txt2imgDiv.appendChild(save_txt2imgButton);
		}, 500);
		setTimeout(() => {
			const shadowRoot = document.querySelector("body > gradio-app").shadowRoot;
			const save_img2imgButton = shadowRoot.querySelector('button#save_img2img');
			const image_buttons_img2imgDiv = shadowRoot.querySelector('div#image_buttons_img2img');
			image_buttons_img2imgDiv.appendChild(save_img2imgButton);
		}, 500);
	}, 9000);

	// замена эмодзи на svg-иконки
	setTimeout(() => {
		function replaceValues(node) {
			const text = node.nodeValue;
			const replacedText = text.replace(/↙️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor"  d="m26.23,44v-3.07h13.5s0-29.77,0-29.77h-5.42s0,6.65,0,6.65H15.38v-6.65s-5.42,0-5.42,0v15.55h-3.07v-15.55c0-.85.3-1.58.9-2.17.6-.6,1.32-.9,2.17-.9h9.87c.24-1.19.83-2.17,1.76-2.94.94-.77,2.02-1.15,3.25-1.15,1.23,0,2.31.38,3.25,1.15.94.77,1.53,1.75,1.76,2.94h10.79c.38,0,.83.3,1.36.9.53.6.79,1.32.79,2.17v29.77c0,.85-.3,1.58-.9,2.17-.6.6-1.32.9-2.17.9h-13.5Zm.08-33.63c.39-.39.59-.88.59-1.46s-.2-1.07-.59-1.46c-.39-.39-.88-.59-1.46-.59s-1.07.2-1.46.59c-.39.39-.59.88-.59,1.46,0,.58.2,1.07.59,1.46.39.39.88.59,1.46.59s1.07-.2,1.46-.59ZM2.8,36.53l7.47-7.47,2.15,2.15-3.79,3.79h13.4v3.07h-13.4s3.79,3.79,3.79,3.79l-2.15,2.15-7.47-7.47Zm31.52-15.77H15.37v2.45h18.95v-2.45Zm0,5.69H15.37v2.45h18.95v-2.45Z"/></svg></div>').replace(/🗑/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m21.13,22.09h5.74v-13.4c0-.8-.27-1.48-.81-2.03-.54-.56-1.23-.84-2.06-.84s-1.48.27-2.03.81-.84,1.23-.84,2.06v13.4Zm-11.48,8.61h28.71v-5.74H9.64v5.74Zm-3.06,11.48h6.41v-4.31c0-.41.14-.76.41-1.03.27-.27.61-.41,1.03-.41s.76.14,1.03.41c.27.27.41.61.41,1.03v4.31h6.7v-4.31c0-.41.14-.76.41-1.03.27-.27.61-.41,1.03-.41s.76.14,1.03.41c.27.27.41.61.41,1.03v4.31h6.7v-4.31c0-.41.14-.76.41-1.03s.61-.41,1.03-.41.76.14,1.03.41.41.61.41,1.03v4.31h6.41l-2.39-9.57H8.97l-2.39,9.57Zm33.59,2.87H7.83c-1.24,0-2.25-.49-3.01-1.48-.77-.99-.99-2.09-.67-3.3l2.63-10.53v-3.83c0-1.05.37-1.95,1.12-2.7.75-.75,1.65-1.12,2.7-1.12h7.66v-13.4c0-1.6.56-2.95,1.67-4.07,1.12-1.12,2.47-1.67,4.07-1.67s2.95.56,4.07,1.67c1.12,1.12,1.67,2.47,1.67,4.07v13.4h7.66c1.05,0,1.95.37,2.7,1.12.75.75,1.12,1.65,1.12,2.7v3.83l2.63,10.53c.32,1.21.1,2.31-.67,3.3-.77.99-1.77,1.48-3.01,1.48Zm-1.82-20.1H9.64h28.71Zm-11.48-2.87h-5.74,5.74Z"/></svg></div>').replace(/🎴/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m19.02,15.08l2.5-.93,6.42,17.36,8.28-3.1.78,2.11-10.78,4.03-7.2-19.47Zm-4.59-1.89l16.5-6-16.5,6Zm-2.31,28.62l-1.19-.37c-1.11-.49-1.86-1.32-2.26-2.5-.4-1.18-.29-2.35.34-3.5l3.11-7.09v13.46Zm-5.96-4.15l-.97-.78c-.85-.86-1.24-1.92-1.17-3.17.07-1.25.6-2.29,1.6-3.12l5.51-5.43-4.96,12.5Zm12.53,6.34c-2.37,0-4.26-1.9-4.26-4.28v-10.8l4.77,13.67c.14.55.47.99.83,1.41h-1.35Zm6.64-.65c-.73.31-1.49.24-2.28-.21-.8-.45-1.37-1.08-1.71-1.88L11.42,14.18c-.35-.8-.31-1.58.1-2.35.42-.76,1.06-1.32,1.92-1.67l16.5-6c.8-.28,1.57-.21,2.34.21.76.42,1.32,1.04,1.66,1.88l9.91,26.76c.24.87.19,1.72-.16,2.56-.35.83-.95,1.41-1.82,1.72l-16.55,6.05Zm-.99-3.03l16.5-6.05L30.93,7.19l-16.5,6,9.91,27.13Z"/></svg></div>').replace(/📋/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m8.7,42c-.87,0-1.58-.28-2.15-.85-.57-.57-.85-1.28-.85-2.15V9c0-.87.28-1.58.85-2.15s1.28-.85,2.15-.85h10.4c.23-1.17.81-2.12,1.73-2.88.92-.75,1.98-1.12,3.17-1.12s2.26.38,3.17,1.12c.92.75,1.49,1.71,1.73,2.88h10.4c.87,0,1.58.28,2.15.85.57.57.85,1.28.85,2.15v30c0,.87-.28,1.58-.85,2.15-.57.57-1.28.85-2.15.85H8.7Zm0-3h30.6V9h-3.3v4.5H12v-4.5h-3.3v30Zm15.3-30c.57,0,1.04-.19,1.42-.57.38-.38.58-.86.58-1.43s-.19-1.04-.58-1.43c-.38-.38-.86-.57-1.42-.57s-1.04.19-1.42.57c-.38.38-.58.86-.58,1.43s.19,1.04.58,1.43c.38.38.86.57,1.42.57Zm12,7.56H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Zm0,5.69H12v2.45h24v-2.45Z"/></svg></div>').replace(/💾/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="m22.45,37h3v-7.15h7.1v-3h-7.1v-7.1h-3v7.1h-7.2v3h7.2v7.15Zm-12.6,7c-.8,0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V7c0-.8.3-1.5.9-2.1.6-.6,1.3-.9,2.1-.9h19.85l11.45,10.95v26.05c0,.8-.3,1.5-.9,2.1-.6.6-1.3.9-2.1.9H9.85Zm18.35-27.7V7H9.85v34h28.3v-24.7h-9.95ZM9.85,7v9.3V7v34V7Z"/></svg></div>').replace(/🔄/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="m3.33,33v-2.81h6.09l-.7-.56c-2-1.59-3.45-3.33-4.36-5.2-.91-1.88-1.36-3.97-1.36-6.28,0-3.31.98-6.29,2.93-8.93,1.95-2.64,4.52-4.46,7.71-5.46v2.91c-2.34.91-4.23,2.41-5.67,4.52-1.44,2.11-2.16,4.43-2.16,6.96,0,1.97.37,3.68,1.1,5.13.73,1.45,1.73,2.71,2.98,3.77l1.41.98v-5.81h2.81v10.78H3.33Zm19.08-.7v-2.95c2.37-.91,4.27-2.41,5.67-4.52,1.41-2.11,2.11-4.43,2.11-6.96,0-1.5-.37-3.02-1.1-4.57-.73-1.55-1.7-2.91-2.88-4.1l-1.36-1.22v5.81h-2.81V3h10.78v2.81h-6.14l.7.66c1.88,1.75,3.28,3.63,4.22,5.63.94,2,1.41,3.92,1.41,5.77,0,3.31-.97,6.3-2.91,8.95-1.94,2.66-4.5,4.48-7.69,5.48Z"/></svg></div>').replace(/🎲️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m43.87,33.89v.02c-.8.55-1.65,1.02-2.44,1.41-.89.44-1.87.86-2.89,1.23-.03.01-.06.02-.09.03-.21.08-.41.16-.61.22-1.98.71-3.77,1.07-5.37,1.09-.06.01-.13.01-.19.01h-.18c-.12,0-.23-.01-.34-.01-.35-.02-.68-.05-1.01-.1-.33-.05-.64-.12-.91-.19-.48-.12-.94-.29-1.38-.49-1.92-.89-3.28-2.41-4.31-4.24-1.11-1.96-1.87-4.28-2.61-6.55-1.29-3.95-2.51-7.68-5.3-8.96-1.96-.9-4.63-.62-8.26.89l5.85,2.47-1.17,2.77-10.54-4.46,4.45-10.55,2.77,1.17-2.44,5.76c4.45-1.85,7.82-2.04,10.59-.78,3.98,1.83,5.47,6.37,6.9,10.76.95,2.9,1.87,5.69,3.4,7.48.55.65,1.18,1.17,1.93,1.52.75.34,1.59.51,2.56.51h.01c1.5,0,3.27-.4,5.35-1.22.07-.02.13-.05.2-.08.06-.02.12-.04.18-.07.7-.26,1.4-.56,2.08-.9,1.02-.51,1.83-1,2.45-1.46l.39.8.93,1.92Z"/><g><path fill="currentColor" d="m16.24,34.4c-1.96.9-4.68.61-8.31-.9h-.01c-.68-.24-1.37-.54-2.03-.87-1.03-.51-1.84-1.01-2.46-1.47l-1.31,2.71v.04c.8.55,1.65,1.02,2.44,1.41.89.44,1.87.86,2.89,1.23.03.01.06.02.09.03.2.07.4.14.61.21h0c2.06.72,3.92,1.11,5.57,1.11,1.39,0,2.64-.26,3.77-.77,1.79-.82,3.06-2.19,4.07-3.84-.59-1.17-1.09-2.4-1.53-3.63-.92,2.18-2.05,3.94-3.79,4.74Z"/><path fill="currentColor" d="m29.72,17.36c1.97-.9,4.67-.62,8.29.85v.03s-5.85,2.47-5.85,2.47l1.17,2.76,10.55-4.46-4.46-10.55-2.76,1.17,2.43,5.76c-4.43-1.82-7.86-2.03-10.62-.76-1.77.82-3.05,2.18-4.05,3.82.59,1.17,1.08,2.41,1.51,3.64.92-2.17,2.04-3.94,3.79-4.74Z"/></g></svg></div>').replace(/♻️/g, '<div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m21.52,41.7c-4.1-.33-7.55-2.02-10.35-5.05-2.8-3.03-4.2-6.63-4.2-10.8,0-2.57.59-4.98,1.77-7.25s2.84-4.12,4.98-5.55l2.15,2.15c-1.87,1.1-3.32,2.61-4.35,4.52-1.03,1.92-1.55,3.96-1.55,6.12,0,3.33,1.1,6.22,3.3,8.65,2.2,2.43,4.95,3.83,8.25,4.2v3Zm3,0v-3c3.33-.4,6.08-1.81,8.25-4.22,2.17-2.42,3.25-5.29,3.25-8.62,0-3.63-1.26-6.71-3.78-9.23-2.52-2.52-5.59-3.78-9.22-3.78h-1l3,3-2.15,2.15-6.65-6.65,6.65-6.65,2.15,2.15-3,3h1c4.47,0,8.25,1.56,11.35,4.68,3.1,3.12,4.65,6.89,4.65,11.32,0,4.17-1.39,7.77-4.17,10.8-2.78,3.03-6.23,4.72-10.33,5.05Z"/></svg></div>').replace(/⇅/g, '<div class="icons"><svg id="_Слой_1" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><path fill="currentColor" d="m15.1,24.55v-15.8l-6,6-2.1-2.1L16.65,3l9.65,9.65-2.1,2.1-6.1-6.05v15.85h-3Zm14.25,18.45l-9.65-9.7,2.1-2.05,6,6v-15.8h3v15.85l6.1-6.05,2.1,2.1-9.65,9.65Z"/></svg></div>');
			if (replacedText !== text) {
				const newNode = document.createRange().createContextualFragment(replacedText);
				node.parentNode.replaceChild(newNode, node);
			}
		}
		function traverse(node) {
			const nodes = node.childNodes;
			for (let i = 0; i < nodes.length; i++) {
				const childNode = nodes[i];
				if (childNode.nodeType === Node.TEXT_NODE) {
					replaceValues(childNode);
				} else if (childNode.nodeType === Node.ELEMENT_NODE) {
					if (childNode.shadowRoot) {
						traverse(childNode.shadowRoot);
					} else {
						traverse(childNode);
					}
				}
			}
		}

		//замена элементов внутри Shadow DOM
		const shadowRoots = document.querySelectorAll("body *");
		shadowRoots.forEach(shadowRoot => {
			if (shadowRoot.shadowRoot) {
				traverse(shadowRoot.shadowRoot);
			}
		});
	}, 9000);

	// добавление кнопочек очистки промптов по отдельности
	setTimeout(() => {
		const textareas = document.querySelectorAll("body > gradio-app").forEach((gradioApp) => {
			const shadow = gradioApp.shadowRoot;
			const textareas = shadow.querySelectorAll("label > textarea[rows='2'], label > textarea[rows='3']");
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
		});
	}, 9000);

	// кнопка облегчения стиля
	setTimeout(() => {
		const gradioContainer = document.querySelector("body > gradio-app").shadowRoot.querySelector("div.gradio-container.dark");
		const versionsDiv = document.querySelector("body > gradio-app").shadowRoot.querySelector("#footer > div.versions");
		const bgAnimToggleDiv = document.createElement('div');
		const isMobile = /Android|iPhone|iPad|iPod|/i.test(navigator.userAgent);
		const isAndroid = /Android/i.test(navigator.userAgent);
		const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
		const screenWidth = window.screen.width;
		const isSmallScreen = (screenWidth <= 768);
		bgAnimToggleDiv.classList.add('bg_anim_toggle');
		versionsDiv.insertAdjacentElement('afterend', bgAnimToggleDiv);
		// добавление облегченных стилей
		function addBadStyles() {
			const badstyles = `
			#available_extensions,#extensions,#extensions_installed_top > div,#quicksettings,#settings > div:first-child,#ti_gallery,#txt2img_extra_tabs> div.tabitem.p-2.border-2.border-t-0.border-gray-200.relative.flex,.flex.flex-col.relative.col.gap-4.gr-compact,.flex.flex-col.relative.col.gap-4.gr-panel,.gr-button:not([id*="res_switch"]):not([id$="seed"]):not([id*="refresh"]):not(textarea[rows="1"]),.header_settings,fieldset,textarea{background-image: url("/file=./extensions-builtin/webui-fix/javascript/grain_dark_woblur.png") !important;backdrop-filter: blur(0px) !important}#txt2img_interrupt:hover,#txt2img_skip:hover,#img2img_interrupt:hover,#img2img_skip:hover{border-color: #ca4a00 !important;background-color: #862000 !important}#txt2img_interrupt,#txt2img_skip,#img2img_interrupt,#img2img_skip{border-color: #ff7221 !important;background-color: #c83405 !important}
		  `;
			const styleElement = document.createElement("style");
			styleElement.setAttribute("data-badstyles", "");
			styleElement.innerHTML = badstyles;
			document.querySelector("body > gradio-app").shadowRoot.appendChild(styleElement);
		}
		// удаление облегченных стилей
		function removeBadStyles() {
			const styleElement = document.querySelector("body > gradio-app").shadowRoot.querySelector("style[data-badstyles]");
			if (styleElement) {
				styleElement.remove();
			}
		}
		const setStaticBg = () => {
			gradioContainer.style.backgroundImage = 'url("/file=./extensions-builtin/webui-fix/javascript/bg_static.svg")';

		};
		if (isMobile && isSmallScreen && (isAndroid || isiOS)) {
			setStaticBg();
			addBadStyles();
			bgAnimToggleDiv.innerText = 'включить эффекты';
			bgAnimToggleDiv.addEventListener('click', function () {
				if (gradioContainer.style.backgroundImage.includes('bg_static.svg')) {
					// Вкл
					bgAnimToggleDiv.innerText = 'отключить эффекты';
					gradioContainer.style.backgroundImage = '';
					addBadStyles();
				} else {
					// Выкл
					bgAnimToggleDiv.innerText = 'включить эффекты';
					setStaticBg();
					removeBadStyles();
				}
			});
		}
		else {
			bgAnimToggleDiv.innerText = 'отключить эффекты';
			gradioContainer.style.backgroundImage = '';
			bgAnimToggleDiv.addEventListener('click', function () {
				if (gradioContainer.style.backgroundImage.includes('bg_static.svg')) {
					// Вкл
					bgAnimToggleDiv.innerText = 'отключить эффекты';
					gradioContainer.style.backgroundImage = '';
					removeBadStyles();
				} else {
					// Выкл
					bgAnimToggleDiv.innerText = 'включить эффекты';
					setStaticBg();
					addBadStyles();
				}
			});
		}
	}, 9000);

	// хуекнопка наверх
	setTimeout(() => {
		const gradioContainer = document.querySelector("body > gradio-app").shadowRoot.querySelector("div.gradio-container.dark");
		const upArrowDiv_create = document.createElement('div');
		upArrowDiv_create.classList.add('up_arrow');
		upArrowDiv_create.innerHTML = `
		<object type="image/svg+xml" data="/file=./extensions-builtin/webui-fix/javascript/arrow.svg"></object>
			`;
		gradioContainer.insertAdjacentElement('afterend', upArrowDiv_create);
	}, 9000);

	// обработчик хуекнопки
	setTimeout(() => {
		// функция для проверки наличия элементов на странице
		const checkIfGradioElementsExist = function () {
			const gradioContainer = document.querySelector("body > gradio-app");
			const footer = document.querySelector("body > gradio-app");
			if (gradioContainer && footer) {
				const gradioContainerShadowRoot = gradioContainer.shadowRoot;
				const footerShadowRoot = footer.shadowRoot;
				if (gradioContainerShadowRoot && footerShadowRoot) {
					const gradioContainerDiv = gradioContainerShadowRoot.querySelector("div.gradio-container.dark > div.w-full.flex.flex-col.min-h-screen");
					const footerDiv = footerShadowRoot.querySelector("#footer");
					if (gradioContainerDiv && footerDiv) {
						// проверяем наличие элемента up_arrow на странице
						const upArrowDiv = document.querySelector("body > gradio-app").shadowRoot.querySelector("div.up_arrow");
						if (upArrowDiv) {
							const upArrowObject = upArrowDiv.querySelector("object");
							const upArrowSvg = upArrowObject.contentDocument.documentElement;
							upArrowDiv.style.display = "none";
							upArrowObject.style.display = "none";
							window.addEventListener("scroll", () => {
								if (window.scrollY >= window.innerHeight / 3) {
									upArrowDiv.style.display = "block";
									upArrowObject.style.display = "block";
								} else {
									upArrowDiv.style.display = "none";
									upArrowObject.style.display = "none";
								}
							});
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
							return upArrowDiv;
						}
					}
				}
			}
			return null;
		};

		// проверяем наличие элементов на странице
		const upArrowDiv = checkIfGradioElementsExist();
		if (upArrowDiv) {
			// функция, которая будет вызываться при изменении на странице
			const arrowObserverCallback = function (mutationsList, arrowObserver) {
				for (let mutation of mutationsList) {
					// проверяем, появился ли элемент, который нам нужен
					if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
						if (checkIfGradioElementsExist() === null) {
							// останавливаем наблюдение за изменениями на странице
							arrowObserver.disconnect();
						}
					}
				}
			};

			// создаем экземпляр MutationObserver и присваиваем его переменной arrow_observer
			let arrowObserver = new MutationObserver(arrowObserverCallback);

			// настраиваем наблюдение за изменениями на странице
			const config = { childList: true, subtree: true };

			// запускаем наблюдение за изменениями на странице
			arrowObserver.observe(document.body, config);
		}
		console.log("обработчик кнопки наверх");
	}, 20000);

	//перенос блока с заготовками соотношения сторон
	setTimeout(() => {
		setTimeout(function () {
			const parentElement = document.querySelector("body > gradio-app").shadowRoot.querySelector("#txt2img_row_aspect_ratio").parentElement;
			const insertBeforeElement = document.querySelector("body > gradio-app").shadowRoot.querySelector("#txt2img_column_size > div");
			insertBeforeElement.parentNode.insertBefore(parentElement, insertBeforeElement.nextSibling);
		}, 500);

		setTimeout(function () {
			const parentElement = document.querySelector("body > gradio-app").shadowRoot.querySelector("#img2img_row_aspect_ratio").parentElement;
			const insertBeforeElement = document.querySelector("body > gradio-app").shadowRoot.querySelector("#img2img_column_size > div");
			insertBeforeElement.parentNode.insertBefore(parentElement, insertBeforeElement.nextSibling);
		}, 500);
	}, 9000);

	//фикс просмотрщика картинок
	setTimeout(() => {
		const lightboxModalDiv = document.querySelector("body > gradio-app").shadowRoot.querySelector("#lightboxModal > div");
		lightboxModalDiv.classList.remove("gradio-container");
		lightboxModalDiv.classList.add("modalControls");
	}, 9000);
	
	// удаление расширений у имен моделей
	setTimeout(() => {
		function delExtModels() {
			const selectModel = document.querySelector("body > gradio-app").shadowRoot.querySelector("#setting_sd_model_checkpoint > label > select");
			if (selectModel) {
				const optionsModel = selectModel.querySelectorAll("option");
				optionsModel.forEach(function (option) {
					let text = option.textContent;
					text = text.replace(/(\.safetensors|\.ckpt|\.pt)/g, '');
					option.textContent = text;
				});
			}
		}

		function delExtVae() {
			const selectVae = document.querySelector("body > gradio-app").shadowRoot.querySelector("#setting_sd_vae > label > select");
			if (selectVae) {
				const optionsVae = selectVae.querySelectorAll("option");
				optionsVae.forEach(function (option) {
					let text = option.textContent;
					text = text.replace(/(\.safetensors|\.ckpt|\.pt)/g, '');
					option.textContent = text;
				});
			}
		}

		function delExtHypernet() {
			const selectHypernet = document.querySelector("body > gradio-app").shadowRoot.querySelector("#setting_sd_hypernetwork > label > select");
			if (selectHypernet) {
				const optionsHypernet = selectHypernet.querySelectorAll("option");
				optionsHypernet.forEach(function (option) {
					let text = option.textContent;
					text = text.replace(/(\.safetensors|\.ckpt|\.pt)/g, '');
					option.textContent = text;
				});
			}
		}


		delExtModels();
		delExtVae();
		delExtHypernet();
	}, 9000);

}

// ожидание загрузки страницы
// выполнение кусков кода
function findElement() {
  const element = document.querySelector("body > gradio-app")?.shadowRoot?.querySelector("#footer > div.versions");
  if (element) {
    console.log("страница полностью загружена");
    runTasks();
    return;
  }
  setTimeout(findElement, 100); // продолжаем поиск через 100 мс
}
findElement();
