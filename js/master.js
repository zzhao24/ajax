(() => {

    function getData() {
        let targetURL = "./includes/connect.php?modelNo=R58";

        fetch(targetURL) // go get data and bring it back! good doogy
        .then(res => res.json()) // turn the result into a plain js object 
        .then(data => {
            console.log(data);
            // runa function to parse our data
            showCarData(data[0]);
            // run a function to put the data on the page

        }) // let's see what we got 
        .catch(function(error) {
            console.log(error); // if anything broke, log it to the console
        });
    }

    function showCarData(data) {
        // debugger;
        // parse the DB info and put it where it needs to go 
        const {modelName, pricing, modelDetails} = data; // destructing assingment => MDN JS destructing

        //grab the elements we need, and populate them with data
        document.querySelector('.modelName').textContent = modelName;
        document.querySelector('.priceInfo').textContent = pricing;
        document.querySelector('.modelDetails').textContent = modelDetails;
    }

    getData(); // trigger the getData function

})();