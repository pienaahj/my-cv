<template>
            
            <div class="d-flex align-items-left">
                <MDBTable striped>
                    <td>
                        <div class="d-flex align-items-left">
                            {{ courseTitle }}
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-left">
                            <select name="courseCategory" id="courseCategory" class="d-flex">
                                {{ courseCategory }}
                            </select>
                            
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-left"> 
                            {{ datePeriod }}
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-left">
                            {{ institution}}
                        </div>
                    </td>
                    <td colspan="2">
                        <div class="d-flex align-items-left">
                            {{ description}}
                        </div>
                    </td>
                    <!-- <tr>{{ courseTitle }}</tr>
                <tr>{{ courseCategory }}</tr>
                <tr>{{ datePeriod }}</tr>
                <tr>{{ institution}}</tr>
                <tr>{{ description}}</tr>  -->
                </MDBTable>
                
            </div>   

           
</template>

<script>
    import {
    MDBTable
  } from 'mdb-vue-ui-kit';

    export default {
        props: ['courseTitle', 'courseCategory', 'datePeriod', 'description', 'institution'],
        components: {
      MDBTable,
    },

    }
</script>


<style scoped>
    tr {
        background-color: whitesmoke;
        /* border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 2rem auto; */
    }
    
 
</style>
