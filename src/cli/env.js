const parseEnv = () => {
  const filteredEnvs = []

  for (const key in process.env) {
    if (key.startsWith('RSS_')) {
      filteredEnvs.push([`${key}=${process.env[key]}`])
    }
  }

  console.log(filteredEnvs.join('; '));
};

parseEnv();