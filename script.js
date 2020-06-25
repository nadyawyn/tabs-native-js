//MAKING COOL TABS
window.addEventListener('DOMContentLoaded', function () {

	'use strict';
	//выбираем хедер и его элементы в виде массива, а также контент самих табов
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	//пишем функцию сокрытия контента: передаем в нее аргумент а, который позволит нам скрыть табы с нужными номерами
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);
	//пишем функцию ПОКАЗА нужного таба: передаем в нее аргумент b, который будет соответствовать НОМЕРУ нужного таба, который мы покажем, когда до него дойдет цикл. А цикл поймет, что это нужный номер, т.к. этот номер будет равен порядковому номеру заголовка таба.

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	//при клике на нужный заголовок таба мы проверяем - было ли событие, и было ли это событие кликом по заголовку таба, а не по их контейнеру. Если был клик по заголовку таба, то мы берем его НОМЕр и сравниваем с номером элементов массива табов (в цикле). Как только номе перебираемых табов совпадает с номером заголовка, мы ПОКАЗЫВАЕМ данный таб, УБИРАЕМ все остальные табы и останавливаем цикл.

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}

			}
		}
	});
});