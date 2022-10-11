<template>
    <header>
        <div class="card-layout card-media" >
            <slot></slot>
        </div>
    </header>

</template>

<style scoped>
   .card-layout {
    background-color: #99b4cb;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.1rem;
    margin: 0.1rem auto;
    }
    @media only screen and (min-width: 375px) and (max-width: 1024px) {
    .table-layout-media {
        display: flex;
        flex-direction:column;
        column-fill: auto;
    } 
}
</style>