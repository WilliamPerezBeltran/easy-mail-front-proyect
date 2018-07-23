<template>
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
          <h1>Blank</h1>
          <p>This is an example of a blank page that you can use as a starting point for creating new ones.</p>
        </div>
      </div>
    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <app-footer></app-footer>
    <app-scroll></app-scroll>
    <app-modal></app-modal>
    
  </div>
</template>

<script>
  import AdminFooter from './AdminFooter.vue';
  import AdminScrollToTopButton from './AdminScrollToTopButton.vue';
  import AdminLogoutModal from './AdminLogoutModal.vue';

    export default{
      components:{
        appFooter: AdminFooter,
        appScroll: AdminScrollToTopButton,
        appModal: AdminLogoutModal,
      }
    }
</script>