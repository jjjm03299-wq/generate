(function () {
  if (window.location.pathname.endsWith("/api/generate")) {
    const pin = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    Object.assign(document.body.style, {
      background: "#000",
      color: "#0f0",
      fontFamily: "'Space Grotesk', sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: "0",
      fontSize: "2rem",
    });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap";
    document.head.appendChild(link);

    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify({ pin }, null, 2);
    document.body.appendChild(pre);
  }
})();
