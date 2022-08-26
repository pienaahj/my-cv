<template>
    <header>
        <div style="card-layout" >
            <slot name="tableSelector"></slot>
        </div>
    </header>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
   .card-layout {
    background-color: #99b4cb;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
    max-width: 40rem;
}
</style>