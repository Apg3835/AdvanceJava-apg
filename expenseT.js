function saveToLocalStorage(event) {
  event.preventDefault();
  const unique = Math.floor(1000 * Math.random());
  const ammount = event.target.fammount.value;
  const discription = event.target.fdiscription.value;
  const category = event.target.fcategory.value;
  const obj = {
    ammount,
    discription,
    category,
    unique,
  };
  localStorage.setItem(obj.unique, JSON.stringify(obj));
  showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  console.log(localStorage);
  const localstoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localstoragekeys.length; i++) {
    const key = localstoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnScreen(userDetailsObj);
  }
});

function showNewUserOnScreen(user) {
  const parentNode = document.getElementById("listOfExpenses");
  const childHTML = `<li id='${user.unique}'>'${user.ammount}'-'${user.discription}'-'${user.category}' <button onclick=deleteUser('${user.unique}')> Delete User </button>
    <button onclick=editUserDetails('${user.ammount}','${user.discription}','${user.category}','${user.unique}')>Edit User </button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(ammount, discription, category, unique) {
  document.getElementById("Ammount").value = ammount;
  document.getElementById("Discription").value = discription;
  document.getElementById("Category").value = category;

  deleteUser(unique);
}
function deleteUser(unique) {
  localStorage.removeItem(unique);
  removeUserFromScreen(unique);
}
function removeUserFromScreen(unique) {
  const parentNode = document.getElementById("listOfExpenses");
  const childNodeToBeDeleted = document.getElementById(unique);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
