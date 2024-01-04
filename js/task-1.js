const categories = document.querySelector('#categories');
const categoryItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('ul > li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});