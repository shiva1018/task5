var name = prompt("Enter Name: ");
const isPalindrome = name => {

  const midPoint = name.length / 2;

  for (let i = 0; i < midPoint && i < name.length; i++) {
    if (name[i] != name[name.length - 1 - i]) {
      console.log(" Not Palindrome");
    }
  }
  console.log("Palindrome");
}