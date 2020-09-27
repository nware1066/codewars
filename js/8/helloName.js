// the challenge was to take in a name with mixed upper/lower case letters and return a name with only the first letter capitalized, or return hello world if give an empty string or no argument

function hello(name) {
  console.log('test', name)
  if (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return  `Hello, ${name}!`;
  } else {
  return `Hello, World!`;
  }
}
