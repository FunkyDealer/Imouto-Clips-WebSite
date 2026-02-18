const divOptions = {
    //root: document.querySelector('.card-row'),
    threshold: 0.35, 
}

const divObserveFunc = (entries) => {
    entries.forEach((entry) => {   
         
        if (entry.isIntersecting) {
             entry.target.classList.add('divShow'); 
            if (entry.target.classList.contains("divHiddenLeft")) entry.target.classList.remove('divHiddenLeft');
            else if (entry.target.classList.contains("divHiddenRight")) entry.target.classList.remove("divHiddenRight");
            else if (entry.target.classList.contains("divHiddenDown")) entry.target.classList.remove("divHiddenDown");                 
        }
        // else {
        //     entry.target.classList.remove('cardShow');
        //     entry.target.classList.add('cardHidden');
        // }        
    });
}

const divObserver = new IntersectionObserver(
    divObserveFunc,
    divOptions
);

const observeDivs = () => {
    document.querySelectorAll('.divHiddenLeft:not(.observed)').forEach(myElement => {
        myElement.classList.add('observed');
        divObserver.observe(myElement);
    });
    document.querySelectorAll('.divHiddenRight:not(.observed)').forEach(myElement => {
        myElement.classList.add('observed');
        divObserver.observe(myElement);
    });
    document.querySelectorAll('.divHiddenDown:not(.observed)').forEach(myElement => {
        myElement.classList.add('observed');
        divObserver.observe(myElement);
    });
};

const divMutationObserver = new MutationObserver(observeDivs);

// Run an initial scan once (elements already present at load won't trigger mutations)
observeDivs();

divMutationObserver.observe(document.body, { childList: true, subtree: true });

