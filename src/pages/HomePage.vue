<template>
    <div class="page-content">
        <h1>Welcome to my Web Page</h1>
        <base-greeting></base-greeting>
        <base-card class="card-content">
            <h2>Testing slot in base-card</h2>
            <p>Lets see how a paragraph will look</p>
        </base-card>
    </div>
    
</template>

<style scoped>
.page-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 60rem;
}
.page-content h1 {

}
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>