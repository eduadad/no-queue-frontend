<template>
  <div>

    <div class="columns mt-5">
      <div class="column is-6">
        <article class="notification is-primary has-text-white">
          <b-field  label="Cidade">
            <b-select v-model='cidade' placeholder="Selecione a cidade" expanded >
                <option
                    v-for="cidade in cidades"
                    :value="cidade.id"
                    :key="cidade.nome"
                  >
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
        <article class="notification is-primary">
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

        <article class="notification is-primary has-text-white">

        
            <b-field>
              Até:
              <b-datepicker placeholder="Selecione a data">
              </b-datepicker>
                
            </b-field>
      

          
          
        </article>       
     
        
      </div>
    </div>

    <b-button type="is-primary" @click='buscar()'>BUSCAR</b-button>




<hr>


    <div class="columns" v-for="hotel in hoteis"
                 
                    :key="hotel.id">
  <div class="column is-6">
     <article class="notification is-white">
     
          <b-image class="image"  :src="hotel.foto"></b-image> 
          
        </article>
  </div>
  <div class="column is-6">
    <article class="notification is-white">
           <p class="subtitle mt-3 is-3"> {{hotel.nome}}</p> 
           
          <p class="subtitle mt-3 mb-6">R${{hotel.valor}}</p> 
          <b-button outlined tag="router-link" expanded :to="{ path: '/cadastro',query:{hotel:hotel.id} }" type="is-primary">Reservar agora</b-button>
        </article>
  </div>
  
</div>




  
    

    
  </div>
</template>
<script>

    

    export default {
       watchQuery: ['cidade'],
      
        async asyncData({ $axios,query }) {

          var queryHotels = "?"
    
          if (query.cidade) {
            queryHotels += 'cidade=' + query.cidade + '&'
          }
 
          
          const cidades = await $axios.$get('/api/cidades/')
          const hoteis = await $axios.$get('/api/hotels/'+queryHotels)
          return { cidades,hoteis }
        },
        data() {
            return {
              cidade:null,
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

        },
        methods: {
          buscar() {
            console.log(this.cidade);
            //console.log(event);
            
            var query = {};
            if (this.cidade != null) {
              query.cidade= this.cidade;
            }
            this.$router.push({ path: '/home', query: query })
          }
      
        }
    }

</script>