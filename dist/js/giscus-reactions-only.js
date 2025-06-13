(() => {
  // <stdin>
  function hideGiscusComments() {
    const giscusIframe = document.querySelector("iframe.giscus-frame");
    if (giscusIframe) {
      giscusIframe.addEventListener("load", function() {
        try {
          giscusIframe.style.height = "120px";
          giscusIframe.style.maxHeight = "120px";
          giscusIframe.style.overflow = "hidden";
          const iframeDoc = giscusIframe.contentDocument || giscusIframe.contentWindow.document;
          if (iframeDoc) {
            const style = iframeDoc.createElement("style");
            style.textContent = `
                        .giscus-comment-form,
                        .giscus-comment,
                        .giscus-replies,
                        [data-testid="comment-form"],
                        [data-testid="comment-content"] {
                            display: none !important;
                        }
                    `;
            iframeDoc.head.appendChild(style);
          }
        } catch (e) {
          console.log("Giscus iframe content not accessible due to CORS policy");
        }
      });
      giscusIframe.style.height = "120px";
      giscusIframe.style.maxHeight = "120px";
      giscusIframe.style.overflow = "hidden";
    }
  }
  function waitForGiscus() {
    const checkGiscus = setInterval(function() {
      const giscusIframe = document.querySelector("iframe.giscus-frame");
      if (giscusIframe) {
        hideGiscusComments();
        clearInterval(checkGiscus);
      }
    }, 100);
    setTimeout(function() {
      clearInterval(checkGiscus);
    }, 1e4);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForGiscus);
  } else {
    waitForGiscus();
  }
})();
