var pauseTime = 8000;

var viewerLeft = document.getElementById("viewer-left");
viewerLeft.onload = function() {
    viewerLeft.contentWindow.scrollTo(0, 150);
};

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
                "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#q=Virginia+Republican+primary+results&eob=m.07z1m/R/2/short/m.07z1m/",
                "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Republican+Primary+results&eob=m.09c7w0/R/2/short/m.09c7w0/"
                ];

var getLinkLeft = function(index) {
    return linkListLeft[index % linkListLeft.length];
};

var displayNextLinkLeft = function(index) {
    viewerLeft.src = getLinkLeft(index);
    setTimeout(function() { displayNextLinkLeft(index + 1); }, pauseTime);
};

var viewerRight = document.getElementById("viewer-right");
viewerRight.onload = function() {
    viewerRight.contentWindow.scrollTo(0, 150);
};

var linkListRight = [
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=alabama+democratic+primary+results",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=arkansas+democratic+primary+results&eob=m.0vbk/D/2/short/m.0vbk/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=colorado+democratic+caucus+results&eob=m.01n4w/D/2/short/m.01n4w/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Georgia+Democratic+primary+results&eob=m.0d0x8/D/2/short/m.0d0x8/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=massachusetts+Democratic+primary+results&eob=m.05k7sb/D/2/short/m.05k7sb/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Minnesota+Democratic+caucus+results&eob=m.04ykg/D/2/short/m.04ykg/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Oklahoma+Democratic+Primary+results&eob=m.05mph/D/2/short/m.05mph/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Tennessee+Democratic+Primary+results&eob=m.07h34/D/2/short/m.07h34/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Texas+Democratic+Primary+results&eob=m.07b_l/D/2/short/m.07b_l/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Vermont+Democratic+Primary+results&eob=m.07_f2/D/2/short/m.07_f2/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Virginia+Democratic+Primary+results&eob=m.07z1m/D/2/short/m.07z1m/",
    "https://www.google.com/?gfe_rd=ssl&ei=EBrVVs_7I4Sp-gWvxpW4DQ#q=Democratic+Primary+results&eob=m.09c7w0/D/2/short/m.09c7w0/"
];

var getLinkRight = function(index) {
    return linkListRight[index % linkListRight.length];
};

var displayNextLinkRight = function(index) {
    viewerRight.src = getLinkRight(index);
    setTimeout(function() { displayNextLinkRight(index + 1); }, pauseTime);
};

displayNextLinkRight(0);
displayNextLinkLeft(0);
