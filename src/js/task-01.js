const itemList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${itemList.length}`);

itemList.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementCount}`);
});
