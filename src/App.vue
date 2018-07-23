<template>
  <div class="d-flex justify-content-center ">
    <div class="admin_template" v-if="user_role == 1">
      <div>
        <app-nav></app-nav>
        <div class="content-wrapper">
          <div class="container-fluid">
            <!-- Breadcrumbs-->
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li class="breadcrumb-item active">Blank Page</li>
            </ol>
            <div class="row">
              <div class="col-12">
                <!-- <h1>Blank</h1> -->
                <!-- <p>This is an example of a blank page that you can use as a starting point for creating new ones.</p> -->
                <router-view></router-view>
                <!-- <app-client-edit></app-client-edit> -->
              </div>
            </div>
          </div>
          <app-footer></app-footer>
          <app-scroll></app-scroll>
          <app-modal></app-modal>
        </div>
      </div>
    </div>
    <div class="messenger_template" v-else-if="user_role == 2">
      <router-view></router-view>  
    </div>
    <div class="client_template" v-else-if="user_role == 3">
      <router-view></router-view>  
    </div>
    
  </div>
   
</template>

<script>
  import AdminNav from './components/admin/adminTemplate/AdminNav.vue';
  import AdminFooter from './components/admin/adminTemplate/AdminFooter.vue';
  import AdminScrollToTopButton from './components/admin/adminTemplate/AdminScrollToTopButton.vue';
  import AdminLogoutModal from './components/admin/adminTemplate/AdminLogoutModal.vue';
  import EditClient from './components/admin/client/EditClient.vue';
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      user_role : 2
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  components:{
    appNav: AdminNav,
    appFooter: AdminFooter,
    appScroll: AdminScrollToTopButton,
    appModal: AdminLogoutModal
  }
}
</script>
