const getblogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://api.countrylayer.com/v2/all?access_key=c350f209d1c04c47c164904f14e867b3");

    xhr.responseType="json";
    xhr.onload = () => {
         console.log(xhr.response);
    


    };
    xhr.send();

};
getblogs();