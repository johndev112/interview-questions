DESCRIPTION:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"


// clever way
                                                                                        
// use split to seperate divide into seprate parts and remove #
//return first index
                                                                                        
function removeUrlAnchor(url){
  return url.split('#')[0];
}



//use replace 
// use regex ec



function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}
