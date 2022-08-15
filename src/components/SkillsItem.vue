<template>
    <li >
        {{ skillEntry }}
    </li>
</template>

<script>
    export default {
        props: ['skillEntry'],
    }
</script>


<style scoped>
    li {
        list-style: none;
    }
 
</style>