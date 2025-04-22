const parseArgs = () => {
  const args = process.argv.slice(2, process.argv.length)
  let final = ''
  
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--') && args[i + 1]) {
      final += `, ${args[i]} is ${args[i + 1]}`
      i++;
    }
  }
  console.log(final.replace(', ', ''));
};

parseArgs();