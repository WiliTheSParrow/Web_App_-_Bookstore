var app = new Vue({
    el: '#app',
    data: {
        allbooks: [],
        filteredBooks: [],
        searchKey: "",
        hideTable: false,
        hideNoMatch: true,
    },
    created: function () {
        this.getData("https://api.myjson.com/bins/zyv02");
        window.onscroll = function () {
            app.scrollFunction()
        }
    },
    computed: {
        filterBooks: function () {
            this.filteredBooks = this.allbooks.filter((allbooks) => {
                return allbooks.title.toLowerCase().match(this.searchKey.toLowerCase()) || allbooks.description.toLowerCase().match(this.searchKey.toLowerCase()) || allbooks.language.toLowerCase().match(this.searchKey.toLowerCase());
            });
            if (this.filteredBooks == "") {
                this.hideTable = true;
                this.hideNoMatch = false;
            } else {
                this.hideTable = false;
                this.hideNoMatch = true;
            }
            return this.filteredBooks;
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