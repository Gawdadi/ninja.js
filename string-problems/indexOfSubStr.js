const str1 = "ilovegoogle";
const str2 = "ve";
// Output : 3;

const str1 = "";
const str2 = "";
// Output : 0;

const str1 = "ilove";
const str2 = "hate";
// Output : -1;

// Don't use indexOf();

function indexOf() {
  if (!str1.length && !str2.length) return 0;
  let i = 0;
  while (i < str1.length) {
    var j = 0,
      count = 0;
    while (j < str2.length) {
      if (str1.charAt(i + j) === str2.charAt(j)) {
        count++;
        j++;
      } else {
        break;
      }
    }
    if (str2.length === count) {
      return i;
    }
    i++;
  }

  return -1; // Not found.
}

console.log(indexOf());
