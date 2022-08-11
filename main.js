function initSelecionarAnimal() {
  const animaisGif = document.querySelectorAll(".animais-gif li");
  const animaisTexto = document.querySelectorAll(".animal-texto span");
  const controle = document.querySelectorAll(".controle-button");
  const somar = document.querySelector("#somar");
  const subtrair = document.querySelector("#subtrair");
  let index = 0;
  animaisGif[0].classList.add("ativo");
  animaisTexto[0].classList.add("ativo");

  somar.addEventListener("click", () => {
    mudarAnimal("somar");
  });

  subtrair.addEventListener("click", () => {
    mudarAnimal("subtrair");
  });
  animalEscolhido(index);

  function animalEscolhido(index) {
    animaisTexto.forEach((span) => {
      span.classList.remove("ativo");
    });
    animaisGif.forEach((img) => {
      img.classList.remove("ativo");
    });
    animaisTexto[index].classList.add("ativo");
    animaisGif[index].classList.add("ativo");
  }
  function mudarAnimal(operacao) {
    if (operacao === "somar" && index < animaisGif.length - 1) {
      animalEscolhido((index += 1));
    }
    if (operacao === "subtrair" && index > 0) {
      animalEscolhido((index -= 1));
    }
  }
}
initSelecionarAnimal();
