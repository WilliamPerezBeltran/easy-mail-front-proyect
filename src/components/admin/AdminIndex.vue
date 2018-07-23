<template>
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
</template>

<script>
  import AdminNav from './adminTemplate/AdminNav.vue';
  import AdminFooter from './adminTemplate/AdminFooter.vue';
  import AdminScrollToTopButton from './adminTemplate/AdminScrollToTopButton.vue';
  import AdminLogoutModal from './adminTemplate/AdminLogoutModal.vue';
  import EditClient from './client/EditClient.vue';
    export default{
      components:{
        appNav: AdminNav,
        appFooter: AdminFooter,
        appScroll: AdminScrollToTopButton,
        appModal: AdminLogoutModal,
        appClientEdit: EditClient,
      }
    }
</script>


  