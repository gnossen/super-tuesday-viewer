var pauseTime = 5000;

var viewerLeft = document.getElementById("viewer-left");
viewerLeft.onload = function() {
    viewerLeft.contentWindow.scrollTo(0, 150);
}

var linkListLeft = [ "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=alabama+republican+primary+results&eob=m.0gyh/R/2/short/m.0gyh/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=alaska+republican+caucus+results&eob=m.0hjy/R/2/short/m.0hjy/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Arkansas+Republican+caucus+results&eob=m.0vbk/R/2/short/m.0vbk/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Georgia+Republican+primary+results&eob=m.0d0x8/R/2/short/m.0d0x8/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=massachusetts+republican+primary+results&eob=m.05k7sb/R/2/short/m.05k7sb/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Minnesota+Republican+caucus+results&eob=m.04ykg/R/2/short/m.04ykg/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Oklahoma+Republican+primary+results&eob=m.05mph/R/2/short/m.05mph/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Tennessee+Republican+primary+results&eob=m.07h34/R/2/short/m.07h34/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Texas+Republican+primary+results&eob=m.07b_l/R/2/short/m.07b_l/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Vermont+Republican+primary+results&eob=m.07_f2/R/2/short/m.07_f2/",
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Virginia+Republican+primary+results&eob=m.07z1m/R/2/short/m.07z1m/"
                ];

var getLinkLeft = function(index) {
    return linkListLeft[index % linkListLeft.length];
};

var displayNextLinkLeft = function(index) {
    viewerLeft.src = getLinkLeft(index);
    setTimeout(function() { displayNextLinkLeft(index + 1); }, pauseTime);
}

displayNextLinkLeft(0);
