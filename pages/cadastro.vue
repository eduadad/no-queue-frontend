<template>
  <section class = "section mb-4" v-if="reserva">

    <b-field label="Nome Completo">
            <b-input v-model="reserva.nome" placeholder="Seu nome"></b-input>
        </b-field>
        <b-field label="E-mail">
            <b-input v-model="reserva.email" placeholder="noqueue.exemplo@mail.com"></b-input>
        </b-field>
        <b-field label="CPF">
            <b-input v-model="reserva.cpfourg" placeholder="000.000.000-00"></b-input>
        </b-field>
        <b-field label="Data de Nascimento">
            <b-input placeholder="00/00/0000"></b-input>
        </b-field>
        <b-field label="Número de Celular">
            <b-input v-model="reserva.telefone" placeholder="+DD5 (00) 9999-9999"></b-input>
        </b-field>
      
      <section class="section" mt-3>
            <b-button @click="cadastrar()" outlined rounded  expanded  type="is-primary">Próximo</b-button>
      </section>

            
    </section>


</template>


<script>
    export default {
        async asyncData({ $axios,query }) {



        const hotel = await $axios.$get('/api/hotels/'+query.hotel+"/")
          var reserva={
            hotel:hotel,
            nome: "",
            email:"",
            cpfourg:"",
            telefone:""
          }
          return { reserva,hotel }
        },
        
       
        methods: {
          cadastrar() {
            var self = this;

            //Chama a api para criar o usuário
            this.$axios.post('/api/reservas/', this.reserva).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('reserva adicionado com sucesso!')
              //Navega para o MeusPedidos
              self.$router.push({ name: 'confres', force:true });
            })            
          }
        }
        
        
        
    }
</script>  