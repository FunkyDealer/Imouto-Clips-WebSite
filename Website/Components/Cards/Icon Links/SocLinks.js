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
            <!-- size= 30/30 -->
        
            <svg class="ColorSVGLinkSmall" width="30" height="30" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <a href="https://${link}" target="_blank">
        <g clip-path="url(#clip0_133_306)">
            <path d="M9.66987 2.5H56.5V35.5L39.5 51H9L9.66987 2.5Z" fill="white" />
            <path
                d="M53.9935 33.4177L44.9883 42.4217H30.8423L23.126 50.1379V42.4217H11.5504V5.12441H53.9935V33.4177ZM6.40458 -0.0201721L3.83292 10.269V56.5677H15.4085V63H21.8383L28.2706 56.5677H38.5585L59.1356 35.9931V-0.0201721H6.40458Z"
                fill="#6441A5" />
            <path d="M25.699 30.8473H30.8436V15.4111H25.699V30.8473ZM39.845 30.8473H44.9896V15.4111H39.845V30.8473Z"
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

// Create a class for the element
class ClipLink extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const link = this.getAttribute("link") || "";  
        const name = this.getAttribute("name") || "NoName";

        this.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
                
            </style>            
        <button class="OpenYTModal" data-link-${link}>
           <svg class="ColorSVGLinkSmall" width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.4 44.6H27.6V74.2H65.4V44.6Z" fill="white" />
        <path
            d="M14.064 24.55L4.00601 71.574C3.36601 74.57 5.27401 77.52 8.27201 78.16L77.18 92.898C80.176 93.538 83.126 91.63 83.766 88.632L93.824 41.608L14.064 24.55ZM57.096 61.548L47.398 64.686L37.7 67.824C37.394 67.924 37.096 67.654 37.162 67.34L39.294 57.372L41.426 47.404C41.494 47.09 41.876 46.966 42.114 47.182L49.68 54.012L57.246 60.842C57.484 61.058 57.4 61.45 57.094 61.55L57.096 61.548Z"
            fill="#6196E5" />
        <path d="M91.6 11H17.2V23.2H91.6V11Z" fill="white" />
        <path
            d="M90.064 9.79398L19.598 9.64198C16.546 9.63598 14.044 12.126 14.038 15.178L14.018 24.61L95.582 24.786L95.602 15.354C95.608 12.302 93.118 9.79998 90.066 9.79398H90.064ZM28.974 14.536L21.766 21.714C21.224 22.254 20.344 22.252 19.804 21.71C19.264 21.168 19.266 20.288 19.808 19.748L27.016 12.57C27.558 12.03 28.438 12.032 28.978 12.574C29.518 13.116 29.516 13.996 28.974 14.536ZM41.18 14.562L33.972 21.74C33.43 22.28 32.55 22.278 32.01 21.736C31.47 21.194 31.472 20.314 32.014 19.774L39.222 12.596C39.764 12.056 40.644 12.058 41.184 12.6C41.724 13.142 41.722 14.022 41.18 14.562ZM53.386 14.588L46.178 21.766C45.636 22.306 44.756 22.304 44.216 21.762C43.676 21.22 43.678 20.34 44.22 19.8L51.428 12.622C51.97 12.082 52.85 12.084 53.39 12.626C53.93 13.168 53.928 14.048 53.386 14.588ZM65.592 14.614L58.384 21.792C57.842 22.332 56.962 22.33 56.422 21.788C55.882 21.246 55.884 20.366 56.426 19.826L63.634 12.648C64.176 12.108 65.056 12.11 65.596 12.652C66.136 13.194 66.134 14.074 65.592 14.614ZM77.798 14.64L70.59 21.818C70.048 22.358 69.168 22.356 68.628 21.814C68.088 21.272 68.09 20.392 68.632 19.852L75.84 12.674C76.382 12.134 77.262 12.136 77.802 12.678C78.342 13.22 78.34 14.1 77.798 14.64ZM90.004 14.666L82.796 21.844C82.254 22.384 81.374 22.382 80.834 21.84C80.294 21.298 80.296 20.418 80.838 19.878L88.046 12.7C88.588 12.16 89.468 12.162 90.008 12.704C90.548 13.246 90.546 14.126 90.004 14.666Z"
            fill="#6196E5" />
    </svg>
    </button>
    `
        const button = this.querySelector(".OpenYTModal");

        button.addEventListener("click", () => {
            this.OpenModal(link, name);
        });

    }
    
    OpenModal(link, name)
    {
           const modalElement = document.querySelector("modal-component");

        if (!modalElement) {
            console.log("Modal was null");
            return;
        }
   
        const titleElement = document.querySelector("#title h1");
         if (titleElement) titleElement.textContent = name;

         const videoFrame = document.querySelector("#videoFrame");

         videoFrame.innerHTML = ``
        
         if (videoFrame) {
            const iframe = document.createElement("iframe-video");
            iframe.setAttribute("link", link);
            iframe.slot = "videoFrame";
            videoFrame.append(iframe);

         }
         else console.log("video frame was null");   

        modalElement.open();
    }
}

customElements.define("clip-link", ClipLink);


// Create a class for the element
class Iframe extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const link = this.getAttribute("link") || "";

        this.innerHTML =
            `
        <iframe class="VideoPlayerFrame" 
  height="495" 
  width="880" 
  src="https://${link}" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>
    `
    }
}

customElements.define("iframe-video", Iframe);