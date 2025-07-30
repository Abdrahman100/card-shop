const cartItem = document.querySelectorAll("#cartItem");

cartItem.forEach((cart) => {
  const cartItem = cart.querySelector("#cartItem");
  const button = cart.querySelector("#addTo");
  const message = cart.querySelector("#messageadd");
  button.addEventListener("click", () => {
    message.style = "display: block";
    cart.style.background = "#d4edda";
    cart.style.transition =
      "background .3s ease-in-out ,  display .3s ease-in-out,transform .3s ease-in-out , box-shadow .3s ease-in-out";

    setTimeout(() => {
      cart.style.background = "#ffffffff";
      cart.style.transition =
        "background .3s ease-in-out , display .3s ease-in-out,transform .3s ease-in-out ,box-shadow .3s ease-in-out";
    }, 1000);
    setTimeout(() => {
      message.style = "display: none;";
    }, 6000);
  });
});
console.log(cartItem);
