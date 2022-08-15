<template>
    <header>
       <MDBNavbar expand="lg" light bg="light" position="top" container>
            <MDBNavbarBrand href="#">
                <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                    height="30"
                    alt=""
                    loading="lazy"
                />
                Brand
            </MDBNavbarBrand>
            <MDBNavbarToggler
            @click="collapse1 = !collapse1"
            target="#navbarSupportedContent"
            ></MDBNavbarToggler>
            <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-1 mb-lg-0">
                <MDBNavbarItem to="/" active>
                Home
                <router-link to="/"></router-link>
                </MDBNavbarItem>   
                <MDBNavbarItem href="/aboutMe">
                About Me
                <router-link to="/aboutMe"></router-link>
                </MDBNavbarItem>
                    
                <MDBNavbarItem>
                <!-- Navbar dropdown -->
                <MDBDropdown class="nav-item" v-model="dropdown1">
                    <MDBDropdownToggle
                    tag="a"
                    class="nav-link"
                    @click="dropdown1 = !dropdown1"
                    >Dropdown</MDBDropdownToggle
                    >
                    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                    <MDBDropdownItem href="#">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#"
                        >Something else here</MDBDropdownItem
                    >
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem to="#" disabled>
                Disabled
                </MDBNavbarItem>
            </MDBNavbarNav>
            <!-- Search form -->
            <form class="d-flex input-group w-auto">
                <input
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
                />
                <MDBBtn outline="primary">
                Search
                </MDBBtn>
            </form>
            </MDBCollapse>
        </MDBNavbar>  
    </header>
   
</template>

<script>
  import {
    MDBBtn,
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
      MDBBtn,
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
      return {
        collapse1,
        dropdown1
      }
    }
  };

  
</script>