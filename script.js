//your code here!

document.addEventListener('DOMContentLoaded', function () {
  const infiList = document.getElementById('infi-list');
  const initialListItems = 10;
  const itemsToAdd = 2;

  // Function to add list items
  function addListItems(start, end) {
    for (let i = start; i <= end; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Item ${i}`;
      infiList.appendChild(listItem);
    }
  }

  // Add initial list items
  addListItems(1, initialListItems);

  // Function to check if user has reached the end of the list
  function isAtEnd() {
    const scrollTop = infiList.scrollTop;
    const scrollHeight = infiList.scrollHeight;
    const clientHeight = infiList.clientHeight;

    return scrollTop + clientHeight < scrollHeight;
  }

  // Function to add more items when user reaches the end
  function addMoreItems() {
    if (isAtEnd()) {
      const currentItemCount = infiList.childElementCount;
      const nextItemCount = currentItemCount + itemsToAdd;

      // Add more items
      addListItems(currentItemCount + 1, nextItemCount);
    }
  }

  // Attach the scroll event listener
  infiList.addEventListener('scroll', addMoreItems);
});
