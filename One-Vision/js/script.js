window.addEventListener('DOMContentLoaded', () => {
    let header = document.body.querySelector('.header__text');

    header.innerText = `desktop, width ${document.body.clientWidth}px`;

    window.addEventListener('resize', resizeContent);

    function resizeContent() {
        let bodyWidth = document.body.clientWidth;
        if (bodyWidth > 1024) {
            header.innerText = `desktop, width ${bodyWidth}px`;
        } else if (bodyWidth >= 768 && bodyWidth <= 1024) {
            header.innerText = `tablet, width ${bodyWidth}px`;
        } else if (bodyWidth < 768) {
            header.innerText = `mobile, width ${bodyWidth}px`;
        }
    }
});
