import "./title";

if (module.hot) {
  module.hot.accept(["./title.js"], () => {
    console.log("title.js update");
  });
}
