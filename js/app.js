if ("serviceWorker" in navigator) {
    let version = 3;
    window.addEventListener("load", function() {
        navigator.serviceWorker
         .register("./serviceWorker.js", { scope: "./" })
          .then(res => console.log("Service worker registered!" + "version:" + version))
          .catch(err => console.log("Service worker not registered!" + "version:" + version, err));
    });
}
