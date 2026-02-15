// Create a class for the element
class TwitterLink extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const link = this.getAttribute("link") || "";

        this.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
            </style>

             <svg class="ColorSVGLinkSmall" width="30" height="30" viewBox="0 0 63 63" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <a href="https://${link}" target="_blank">
                                <g clip-path="url(#clip0_87_91)">
                                    <path
                                        d="M49.5961 0H13.4039C6.00112 0 0 6.00112 0 13.4039V49.5961C0 56.9989 6.00112 63 13.4039 63H49.5961C56.9989 63 63 56.9989 63 49.5961V13.4039C63 6.00112 56.9989 0 49.5961 0Z"
                                        fill="black" />
                                    <path
                                        d="M36.0524 27.7314L53.9305 6.94891H49.6944L34.1699 24.9934L21.7715 6.94891H7.47052L26.2206 34.2367L7.47052 56.0297H11.7079L28.1018 36.9735L41.1957 56.0297H55.4967L36.0524 27.7314ZM30.2488 34.4761L28.3487 31.7583L13.2338 10.138H19.7417L31.9397 27.5865L33.8398 30.3043L49.6956 52.9855H43.1877L30.2488 34.4774V34.4761Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_87_91">
                                        <rect width="63" height="63" fill="none" />
                                    </clipPath>
                                </defs>
                            </a>
                        </svg>
    `
    }
}

customElements.define("twitter-link", TwitterLink);

// Create a class for the element
class YoutubeLink extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const link = this.getAttribute("link") || "";

        this.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
            </style>

            <svg class="ColorSVGLinkSmall" width="30" height="30" viewBox="0 0 89 62" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <a href="https://${link}" target="_blank">
                                <g clip-path="url(#clip0_85_75)">
                                    <path
                                        d="M87.1399 9.68208C86.1146 5.86841 83.1029 2.87309 79.2705 1.85104C72.3339 0 44.5 0 44.5 0C44.5 0 16.6679 0 9.72948 1.85281C5.89714 2.87309 2.88716 5.87018 1.86188 9.68385C0 16.5867 0 31 0 31C0 31 0 45.4133 1.86188 52.3179C2.88716 56.1316 5.89892 59.1269 9.72948 60.1472C16.6679 62 44.5 62 44.5 62C44.5 62 72.3339 62 79.2705 60.1472C83.1029 59.1269 86.1128 56.1298 87.1399 52.3179C89.0018 45.4133 89.0018 31 89.0018 31C89.0018 31 88.9947 16.5867 87.1399 9.68208Z"
                                        fill="#ED2224" />
                                    <path d="M32.9389 44.2832L56.0611 31L32.9389 17.7168V44.2832Z" fill="white" />
                                </g>
                            </a>
                        </svg>
    `
    }
}

customElements.define("youtube-link", YoutubeLink);

// Create a class for the element
class TwitchLink extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    } 

    connectedCallback() {

        const link = this.getAttribute("link") || "";

        this.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
            </style>
            
            <svg class="ColorSVGLinkSmall" width="30" height="30" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <a href="https://${link}" target="_blank">
                    <g clip-path="url(#clip0_133_306)">
                        <path
                            d="M53.9935 33.4177L44.9883 42.4217H30.8423L23.126 50.1379V42.4217H11.5504V5.12441H53.9935V33.4177ZM6.40458 -0.0201721L3.83292 10.269V56.5677H15.4085V63H21.8383L28.2706 56.5677H38.5585L59.1356 35.9931V-0.0201721H6.40458Z"
                            fill="#6441A5" />
                        <path
                            d="M25.699 30.8473H30.8436V15.4111H25.699V30.8473ZM39.845 30.8473H44.9896V15.4111H39.845V30.8473Z"
                            fill="#6441A5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_133_306">
                            <rect width="63" height="63" fill="white" />
                        </clipPath>
                    </defs>
                </a>
            </svg>
    `
    }
}

customElements.define("twitch-link", TwitchLink);