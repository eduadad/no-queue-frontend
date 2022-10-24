<template>

  
  <section class="section">
    <section class="section is-vcentered " style="height:165px; background-size: cover; background-repeat: no-repeat; background-image: url('https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/371335783.jpg?k=fa7873a8f92601c7d57e84066f50abfd6490096f60799ebffe520155c27e9ba7&o=');">
      <h1 class="title is-1 has-text-centered has-text-white" >Preencher dados</h1>
    </section>
    

  <section class= "section">
        <h1 class= "subtitle is-5" >Preencha abaixo as informações dos hópedes que estão com você:</h1>
    <section class= "section box p-6" style = "background-color: #c3c3c3">

      
    <section class="section">
      <h2 class="subtitle is-2">Hóspede 1</h2>
    
        <b-field label="Nome:">
            <b-input v-model="name" placeholder = "Insira o nome do hóspede"></b-input>
        </b-field>

        <b-field label="CPF ou RG:">
            <b-input v-model="name" placeholder = "Insira o CPF ou RG do hóspede"></b-input>
        </b-field>
    </section>
      

      <section class="section mt-3">
       <h2 class="subtitle is-2">Hóspede 2</h2>
    
        <b-field label="Nome:">
            <b-input v-model="name" placeholder = "Insira o nome do hóspede"></b-input>
        </b-field>

        <b-field label="CPF ou RG:">
            <b-input v-model="name" placeholder = "Insira o CPF ou RG do hóspede"></b-input>
        </b-field>
      </section>
      

      <section class="section mt-3">
       <h2 class="subtitle is-2">Hóspede 3</h2>
    
        <b-field label="Nome:">
            <b-input v-model="name" placeholder = "Insira o nome do hóspede"></b-input>
        </b-field>

        <b-field label="CPF ou RG:">
            <b-input v-model="name" placeholder = "Insira o CPF ou RG do hóspede"></b-input>
        </b-field>
      </section>
  
      
    </section>
    <div class="columns is-vcentered is-centered has-text-centered mt-6">
    <div class="column is-5">
      <b-button outlined rounded tag="router-link" expanded :to="{ path: '/pagamento' }"         type="is-primary">Próximo</b-button>

    </div>
  </div>
      <section class="columns is-vcentered is-centered has-text-centered mt-3">
        <div class="column is-2">
      <b-button size="is-small" tag="router-link" expanded :to="{ path: '/hospedes' }" type="is-primary" outlined rounded >Voltar</b-button>
        </div>
      </section>
    
  </section>

       
    
  </section>
    

</template>