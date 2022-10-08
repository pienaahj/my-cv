<template>
  <header>
    <MDBNavbar
      class="mb-1 opacity-85 nav-layout layout-media"
      expand="lg" 
      position="sticky"
      light
      center 
      container
    >
    <MDBNavbarBrand href="#">
        <img
          src="@/assets/icons/HJP-Logo_c2.png"
          height="100"
          alt=""
          loading="lazy"
          class="zoom"
        />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
      >
    </MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-1 mb-lg-0">

        <MDBNavbarItem active  to="/" linkClass="change-link-color-active">
          <MDBTooltip v-model="tooltip1" tag="a">
            <template #reference >
              <a active  to="/"  >Home</a>
            </template>
            <template #tip>
              Career, Skills, Technical Knowledge and Core Competencies
            </template>
          </MDBTooltip> 
        </MDBNavbarItem> 

        <MDBNavbarItem linkClass="change-link-color" to="/CoursePage">
          Education
        </MDBNavbarItem>

        <MDBNavbarItem linkClass="change-link-color" to="/EmploymentPage">
          Employment History
        </MDBNavbarItem>

        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle
            tag="a"
            class="nav-link change-link-color"
            @click="dropdown1 = !dropdown1"
            >More...</MDBDropdownToggle
            >
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/personalPage">Some personal guidance</MDBDropdownItem>
              <MDBDropdownItem to="#">Another Action</MDBDropdownItem>
              <MDBDropdownItem href='/files/HJ_Pienaar_cv_2022-10 .pdf'
              download
              >Download curriculum vitae</MDBDropdownItem
              >
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>

      <span class="navbar-text custom-font fs-1 text fw-bolder lh-1" text-wrap>
        When the winds of change blow, some people build walls and others build windmills.
        <p class="fs-3 m-0"> - old Chinese proverb</p>
      </span>
    </MDBCollapse>
  </MDBNavbar>  
</header>
</template>

<script>
  import {
    MDBTooltip,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  
  import { ref } from 'vue';

  export default {
    components: {
      MDBTooltip,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      const tooltip1 = ref(false);
      return {
        collapse1,
        dropdown1,
        tooltip1
      }
    },

  };
  
  
</script>

<style lang="scss" scoped>
  @import '@/assets/config/_variables.scss';
  
  .nav-layout { 
    background-color: $bd-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    margin: 0.2rem auto;
    // max-width: 100rem;
    width: 100%;
    position: relative;
    font-size: 1.2rem;  
    
  }
  .quote {
    color: $desert-sand !important;
  }
  
</style>

<style lang="scss">
  @import '@/assets/config/_variables.scss';
  .change-link-color {
    color: $charcoal !important;
    :active {
      color: $desert-sand !important;
    }
  }

  .change-link-color-active {
    color: black !important;
    :active {
      color: $desert-sand !important;
    }
  }
 
  .change-link-color.router-link-active {
    color: $desert-sand !important;
  }
  .change-link-color.nav-link.active {
    color: $desert-sand !important;
  }
  .zoom {
    transition: transform .2s;
  }
  .zoom:hover {
    transform: scale(1.7);
  }
</style>