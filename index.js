const app = new Vue({

    el : "#root",

    data : {
        message : "Titolone incredibile!",
        imgSrc : "https://www.consumatori.it/wp-content/uploads/2018/10/Cani-spiaggia.png",
        imgSrcButton : ""
    },

    methods : {
        changeImg : function(){
            this.imgSrc = this.imgSrcButton;
        }
    }
});

