Vue.mixin({
  methods: {
    ...mapActions([
      "updateIsLogin",
      "updateDeviceId",
      "updateUserToken",
      "updateImageServer",
      "updateTags",
      "updateCategories"
    ]),
    ...mapGetters([
      "getIsLogin",
      "getDeviceId",
      "getUserToken",
      "getImageServer",
      "getTags",
      "getCategories"
    ]),
    checkToken(token){
      if (this.getUserToken() != token) {
        this.updateUserToken(token);
        console.log(this.getUserToken());
        // this.updateUserSignIn(true);
      }
    },
    findCategories(){
      if(this.getCategories().length <= 0){
        try {
          this.$http.get('app/categories',)
          .then(function(response){
            console.log(response);
            this.updateCategories(response.body.data)
          }, function(response){
            console.log(response);
            alert(response)
          })
        } catch (e) {
          alert(e.message)
        }
      }
    }
  }
})

this.findCategories()