class SiteHeader extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page') || 'home';

        this.innerHTML = `
            <header class="header">
                <picture class="logo"> <a href="./index.html">
                        <source media="(min-width:1024px)" srcset="">
                        <source media="(min-width:600px)" srcset="">
                        <img loading="eager" src="" alt="Logo Digital Imagination Header" title="Digital Imagination's logo">
                    </a>
                </picture>

                <nav class="header-nav">
                    <ul class="nav">
                        <li> <a href="${activePage === 'home' ? '#' : './index.html'}"> Home </a> </li>
                        <li> <a href="${activePage === 'art' ? '#' : './art.html'}"> Art </a> </li>
                        <li> <a href="${activePage === 'radio' ? '#' : './radio.html'}"> Radio </a> </li>
                        <!-- <li> <a href="${activePage === 'jobs' ? '#' : './jobs.html'}"> Jobs </a> </li> -->
                        <li> <a href="${activePage === 'about' ? '#' : './about.html'}"> About Us </a> </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const full = this.hasAttribute('full-footer');
        const year = new Date().getFullYear();

        let footerContent = full ? `
            <article>
                <h4>Dreams Shape The World</h4>
                <picture> <a href="./index.html">
                        <source media="(min-width:1024px)" srcset="">
                        <source media="(min-width:600px)" srcset="">
                        <img loading="eager" src="" alt="Digital Imagination's logo Footer"
                            title="Digital Imagination's logo">
                    </a>
                </picture>
            </article>

            <p id="copyright-year">${year} © Digital Imagination<br> All rights reserved</p>

            <section class="footer_social-media">
                <picture> <a href="https://www.twitter.com/digital_img1" target="_blank">
                        <source media="(min-width:1024px)" srcset="">
                        <source media="(min-width:600px)" srcset="">
                        <img loading="eager" src="./twitter.svg" alt="Digital Imagination's Twitter"
                            title="Digital Imagination's Twitter">
                    </a>
                </picture>

                <picture> <a href="https://www.instagram.com/digital.img1" target="_blank">
                        <source media="(min-width:1024px)" srcset="">
                        <source media="(min-width:600px)" srcset="">
                        <img loading="eager" src="./facebook.svg" alt="Digital Imagination's Instagram"
                            title="Digital Imagination's Instagram">
                    </a>
                </picture>

                <picture> <a href="https://www.youtube.com/channel/UCCKW9yhr0bNlYVWjHsf8iXw" target="_blank">
                        <source media="(min-width:1024px)" srcset="">
                        <source media="(min-width:600px)" srcset="">
                        <img loading="eager" src="./youtube-icon.svg" alt="Digital Imagination's YouTube"
                            title="Digital Imagination's YouTube">
                    </a>
                </picture>
            </section>
        ` : `
            <picture> <a href="./index.html">
                    <source media="(min-width:1024px)" srcset="">
                    <source media="(min-width:600px)" srcset="">
                    <img loading="eager" src="" alt="Logo Digital Imagination Footer">
                </a>
            </picture>
            <p id="copyright-year">${year} © Digital Imagination<br> All rights reserved</p>
        `;

        this.innerHTML = `
            <footer class="footer">
                ${footerContent}
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);
