// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.





function removeExclamationMarks(s) {
  //use .replace to replace all ! in the string and replace then with an empty string
  //gi globally removes all instances of !
  return s.replace(/!/gi, '');
}
