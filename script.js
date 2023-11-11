//your JS code here. If required.
const currentUrl = window.location.href;
let str = currentUrl.toLowerCase().split('');

let result = '';
for(let i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
        result += str[i];
    };
}
alert(`The length of the URL is : ${result.length}`);