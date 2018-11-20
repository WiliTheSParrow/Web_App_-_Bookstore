var app = new Vue({
    el: '#app',
    data: {
        allbooks: [],
        searchKey: "",
    },
    created: function () {
        this.getData("https://api.myjson.com/bins/zyv02");
        window.onscroll = function () {
            app.scrollFunction()
        }
    },
    computed: {
        filteredBooks: function () {
            return this.allbooks.filter((allbooks) => {
                return allbooks.title.match(this.searchKey);
                return allbooks.description.match(this.searchKey);
                return allbooks.language.match(this.searchKey);
            });
        }
    },
    methods: {
        getData: function (link) {
            fetch(link, {
                    method: "GET",
                })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    app.allbooks = data.books;
                    webLogic();
                })
                .catch(error => error);
        },
        scrollFunction: function () {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        },
        topFunction: function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    }
});

function webLogic() {
    
}
