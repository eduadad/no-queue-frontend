<template>
  <section class="section">
    

    <div class="columns">
      <div class="column is-4">
  
      </div>
      
      <div class="column is-4">
        <form class="box p-6" style = "background-color: #c3c3c3">
        <h1 class="title"> Pagamento</h1>

        
        <b-image class="image" :src="require('@/assets/visas.png')"></b-image>
       
        
        <b-field label="Nome">
          <b-input v-model="name" placeholder = "Insira o nome do titular"  icon="account">nome</b-input>
        </b-field>

        <b-field label="CPF">
          <b-input v-model="name" placeholder = "000.000.000-00">nome</b-input>
        </b-field>

        <b-field label="Número do cartão">
          <b-input v-model="name" placeholder = "0000 0000 0000 0000">nome</b-input>
        </b-field>

        <div class= "columns">
          
          <div class= "column">
            <b-field label="CVC">
            <b-input v-model="name" placeholder = "CVC">nome</b-input>
        </b-field>
          
        </div>
          
        <div class= "column">
          <b-field label="Validade">
            <b-input v-model="name" placeholder = "mm/aaaa">nome</b-input>
        </b-field>
        </div>
        </div>

         <div class="buttons is-centered mt-6">
           <b-button tag="router-link" expanded :to="{ path: '/finalizacao' }" type="is-primary" rounded class="button is-black" >Confirmar pagamento</b-button>
         </div>

      </form>
      </div>
      </div>

    <section class="columns is-vcentered is-centered has-text-centered mt-3">
    <div class="column is-2">
      <b-button size="is-small" tag="router-link" expanded :to="{ path: '/dados-cadastrais' }"     type="is-primary" outlined rounded >Voltar</b-button>
    </div>
    </section>

    
    </div>

  
    
  </section>
</template>