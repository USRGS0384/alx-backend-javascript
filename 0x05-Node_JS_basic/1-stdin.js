// 1-stdin.js

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from stdin (user input)
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert input to string and remove extra spaces/new lines
  process.stdout.write(`Your name is: ${name}\n`);
  
  // End the program after processing the input
  process.stdin.end();
});

// Handle program end
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
