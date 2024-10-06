const delay = (time: 5_000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default delay;