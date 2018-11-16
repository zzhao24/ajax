(() => {

    

mounted : function(){
    console.log('view is ready to go on the page');

    

    document.querySelector('#F55').click();
},

    beforeUpdate : function() {
            console.log('things are gonna change');
        },
        updated : function(){
            console.log('things are different now');
            // move the preloader out of the element and hide it
            let preloader = document.querySelector('.preloader-wrapper');

            setTimeout(functin(){
              preloader.classList.add('.hidden');
            document.body.appendChild(preloader);  

            }, 1000); // 1000ms = 1 s
            

        },

        methods: [
            assPreloader(parentEl){
                //load the preloader into the parent element and make it draw
                let preloader = document.querySelector('.preloader-wrapper');

                parentEl.appendChild(preloader);

                let animItem = bodymovin.loadAnimation({
                    wrapper : document.querySelector('.preloader-wrapper'),
                    animType : 'svg',
                    loop : true,
                    path : 'data/search.json'

                })


            },
        ]
     getData(e) {

            
        this.addPreloader(document.querySelector('.modelInfo'));

        let targetURL = "./includes/connect.php?modelNo=${e.currentTarget.id}`;

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