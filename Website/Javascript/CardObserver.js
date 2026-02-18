const options = {
    //root: document.querySelector('.card-row'),
    threshold: 0.5, 
}

const observeFunc = (entries) => {
//console.log("observing:"); //works
    entries.forEach((entry) => {         
        if (entry.isIntersecting) {
             entry.target.classList.add('cardShow'); 
             entry.target.classList.remove('cardHidden');
           // console.log("entry is intersecting: " + entry.target);                      
        }
        // else {
        //     entry.target.classList.remove('cardShow');
        //     entry.target.classList.add('cardHidden');
        // }        
    });
}

const observer = new IntersectionObserver(
    observeFunc,
    options
);

const testFunc = (entries) => {
    let count = entries.childElementCount
    console.log("testFunc called, there are " + count + " child elements");  
}

const mutationObserver = new MutationObserver(() => {
    //console.log("Observing 1");
   // document.querySelectorAll('.card-row').forEach(myElement => testFunc(myElement));
    document.querySelectorAll('.cardHidden:not(.observed)').forEach(myElement => {
        myElement.classList.add('observed');
        //console.log("Observing 2");
        observer.observe(myElement);
    });
});

mutationObserver.observe(document.body, { childList: true, subtree: true });

