/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectorTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);
// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }
//   e.target.classList.add('tags__btn--active');
//   selectorTag = e.target.dataset.value;
//   console.log(selectorTag);
// }

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = e.target;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(btn.dataset.value);
  } else {
    selectedTags.add(btn.dataset.value);
  }

  btn.classList.toggle('tags__btn--active');

  console.log(selectedTags);
}
