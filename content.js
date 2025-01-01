var isTabRemoved = false;
const forYouTabClassSelector = ".css-175oi2r.r-14tvyh0.r-cpa5s6.r-16y2uox";
const forYouSpanContentClassSelector = ".css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3";

function removeForYouTab(observer){
    const forYouTab = document.querySelector(forYouTabClassSelector);
    
    console.log(forYouTab);
    
    if(forYouTab){
        let forYouContent = forYouTab.querySelector("span" + forYouSpanContentClassSelector);
        let forYouText = forYouContent.textContent.trim();
        if(forYouText != "For you")
            return;

        console.log("YEEEESSSS!!!!")
        forYouTab.remove();
        // observer.disconnect();
        isTabRemoved = true;
    }else{
        // observer.disconnect();
    }
    
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            removeForYouTab(observer); // Check and remove the target element when it appears
        }
    }
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true, // Observes direct child additions/removals
    subtree: true,  // Observes changes in the entire subtree
});


console.log('MutationObserver is running.');


