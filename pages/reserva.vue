<template>
    <section>

    
   <b-field label="Data de entrada">
            <b-input v-model="reserva.datadeentrada" placeholder="Selecione data de entrada"></b-input> 
        </b-field>
        <b-field label="Data de saida">
            <!--
            <b-datepicker v-model="reserva.datadesaida" :date-parser="dateParser" placeholder="Selecione data de saída"></b-datepicker>
          -->
        <b-input v-model="reserva.datadesaida" placeholder="Selecione data de saída"></b-input>          
        </b-field>
        <b-field label="Número de hóspedes">
            <b-input v-model="reserva.numerodehospedes" placeholder="Selecione número de hóspedes"></b-input>
        </b-field>
        <b-field label="Hotel">
            {{reserva.hotel.nome}}
        </b-field>
        <b-field label="Quarto">
                        <b-select v-model='reserva.quarto' placeholder="Selecione o quarto" expanded >
                <option
                    v-for="quarto in hotel.quartos"
                    :value="quarto.id"
                    :key="quarto.id"
                  >
                    {{ quarto.numero }}
                </option>
            </b-select>
        </b-field>
        
<b-button type="is-primary" @click='cadastrar()'>Reservar
</b-button>
        
        
    </section>


</template>



<script>
    export default {
        async asyncData({ $axios,query }) {



        const hotel = await $axios.$get('/hotels/'+query.hotel+"/")
          var reserva={

            datadeentrada: null,
            datadesaida:null,
            numerodehospedes:1,
            hotel:hotel.id,
            quarto:null
            
           
          

          }
          return { reserva,hotel }
        },
        
       
        methods: {
          dateParser(date) {
            alert(date)
      new Date.parse(date);
    },
          cadastrar() {
            var self = this;

            //Chama a api para criar o usuário
            this.$axios.post('/reserva-create/', this.reserva).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('reserva adicionado com sucesso!')
              //Navega para o MeusPedidos
              self.$router.push({ path: '/confirmacao', query: {reserva:response.data.id}, force:true });
            })            
          }
        }
        
        
        
    }
</script>  