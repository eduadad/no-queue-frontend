<template>

  
  <section class="section">
    <section class="section is-vcentered " style="height:165px; background-size: cover; background-repeat: no-repeat; background-image: url('https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/371335783.jpg?k=fa7873a8f92601c7d57e84066f50abfd6490096f60799ebffe520155c27e9ba7&o=');">
      <h1 class="title is-1 has-text-centered has-text-white" >Check-in</h1>
    </section>
    
  <section class= "section">
        <h1 class= "subtitle is-5" >Preencha abaixo as informações da sua reserva:</h1>
    <section class="box p-6" style = "background-color: #c3c3c3">
    
        

        <b-field label="Número da reserva">
            <b-input v-model="name" placeholder = "Insira o número da reserva"></b-input>
        </b-field>
      
    </section>
    
   <div class="columns is-vcentered is-centered has-text-centered mt-6">
    <div class="column is-5">
      <b-button outlined rounded tag="router-link" expanded :to="{ path: '/finalizacao' }" type="is-primary">Próximo</b-button>

    </div>
  </div>

    
  </section>

       
    
  </section>
    

</template>