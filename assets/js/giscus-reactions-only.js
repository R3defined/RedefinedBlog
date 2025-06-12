// Hide Giscus comments, keep only reactions
function hideGiscusComments() {
    const giscusIframe = document.querySelector('iframe.giscus-frame');
    
    if (giscusIframe) {
        // Listen for iframe load
        giscusIframe.addEventListener('load', function() {
            try {
                // Set a fixed height that should only show reactions
                giscusIframe.style.height = '120px';
                giscusIframe.style.maxHeight = '120px';
                giscusIframe.style.overflow = 'hidden';
                
                // Try to access iframe content (will fail due to CORS, but worth trying)
                const iframeDoc = giscusIframe.contentDocument || giscusIframe.contentWindow.document;
                if (iframeDoc) {
                    // Hide comment forms and threads
                    const style = iframeDoc.createElement('style');
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
                // CORS will prevent access to iframe content
                console.log('Giscus iframe content not accessible due to CORS policy');
            }
        });
        
        // Also set initial styles
        giscusIframe.style.height = '120px';
        giscusIframe.style.maxHeight = '120px';
        giscusIframe.style.overflow = 'hidden';
    }
}

// Wait for Giscus to load
function waitForGiscus() {
    const checkGiscus = setInterval(function() {
        const giscusIframe = document.querySelector('iframe.giscus-frame');
        if (giscusIframe) {
            hideGiscusComments();
            clearInterval(checkGiscus);
        }
    }, 100);
    
    // Stop checking after 10 seconds
    setTimeout(function() {
        clearInterval(checkGiscus);
    }, 10000);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForGiscus);
} else {
    waitForGiscus();
} 