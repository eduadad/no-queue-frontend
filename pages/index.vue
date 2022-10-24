<template>
  <div>

    <div class="columns mt-5">
      <div class="column is-6">
        <article class="notification is-primary has-text-white">
          <b-field  label="Cidade">
            <b-select placeholder="Selecione a cidade" expanded>
                <option
                    v-for="cidade in cidades"
                    :value="cidade"
                    :key="cidade.nome">
                    {{ cidade.nome }}
                </option>
            </b-select>
        </b-field>
          
          
        </article>

        <article class="notification is-primary has-text-white">

        
            <b-field>
              De
              <b-datepicker placeholder="Selecione a data">
              </b-datepicker>
                
            </b-field>
      

          
          
        </article>
        
      </div>
      <div class="column is-6">
        <article class="notification is-danger">
          <b-field label="Número de hóspedes">
            <b-select placeholder="Selecione o número de hóspedes">
                <option
                    v-for="numero in numeros"
                    :value="numero"
                    :key="numero.nome">
                    {{ numero.nome }}
                </option>
            </b-select>
        </b-field>
        </article>

        <article class="notification is-danger has-text-white">

        
            <b-field>
              Até:
              <b-datepicker placeholder="Selecione a data">
              </b-datepicker>
                
            </b-field>
      

          
          
        </article>       
     
        
      </div>
    </div>




<hr>


    <div class="columns" v-for="hotel in hoteis"
                 
                    :key="hotel.id">
  <div class="column is-6">
     <article class="notification is-white">
       {{hotel.nome}}
          <b-image class="image"  :src="hotel.foto"></b-image> 
          
        </article>
  </div>
  <div class="column is-6">
    <article class="notification is-white">
           
          <p class="title">Diária  </p>
          <p class="subtitle">R$150,00</p>
          <router-link :to="{ path: '/imagens' }">Reservar</router-link>
        </article>
  </div>
  
</div>




  
    

    
  </div>
</template>
<script>
    

    export default {
        async asyncData({ $axios }) {
          const cidades = await $axios.$get('/api/cidades/')
          const hoteis = await $axios.$get('/api/hotels/')
          return { cidades,hoteis }
        },
        data() {
            return {
              
              numeros: [
                {
                  nome: "1"
                },
                {
                  nome: "2"
                },
                {
                  nome: "3"
                },
                {
                  nome: "4"
                }
              ]
            }              

        }
    }

</script>