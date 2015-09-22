/**
 * Created by Johny on 9/21/2015.
 */
function getClasses(elem) {
  var classes = document.getElementById(elem).className;
  return classes;
}
function addClass(elem, className) {
  var item = document.getElementById(elem);
  if (item.className == null) {
    item.className = className;
  } else {
    document.getElementById(elem).classList.add(className);
  }
}