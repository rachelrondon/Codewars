/* 1. Create a function that takes an array of non-negative integers and strings and returns a new list with the strings filtered out */

function filterArray(array) {
  return array.filter(n => typeof n==="number")
}

filterArray([1,2,'a','b'])


/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. For 4 or more names, the number in and 2 others simply increases. */

function likes(names) {
  let length = names.length;
  let lengthMinusTwo = length - 2;

  if (length === 0) {
    return "no one likes this";
  } else if (length === 1) {
    return names[0] + ' likes this';
  } else if (length === 2) {
    return `${names[0]}` +  ` and ${names[1]}` + ' like this';
  } else if (length === 3) {
    return `${names[0]},` +  ` ${names[1]}` +  ` and ${names[2]}` + ' like this';
  } else if (length >= 4) {
    return `${names[0]},` + ` ${names[1]}` + ` and ${lengthMinusTwo} others like this`;
  }
}

likes(["Peter"]);
likes(["Jacob, Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);


/* Even or Odd */
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers */

function evenOdd(number) {

}

evenOdd(5);
