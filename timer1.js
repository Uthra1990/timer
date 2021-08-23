process.argv.slice(2).forEach(i => {
    if (!isNaN(i) && i >= 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, i * 1000);
    }
  });