const soduko = document.querySelector("#soduko")! as HTMLDivElement;

const render = () => {
  if (soduko) {
    soduko.innerHTML = `<h1>Es klappt</h1>`;
  }
};

export { render };
