<template>


  
  <div class="columns">

    
      <div class="column is-half mb-1">
        <br>

        <h3 class="title is-3"><strong>Parabéns, sua reserva foi confirmada!</strong></h3>
        <br> O número da sua reserva é: <strong>{{reserva.id}}</strong>
        <br> Ao chegar no seu destino, apresente este <strong>QR CODE</strong> abaixo
        <br> <strong>DATA:</strong> {{reserva.datadeentrada | f-date}}
        <br> <strong>HORÁRIO:</strong> Das 14:00 até as 17:00
      

       
         <b-image style = 'width: 300px;' class="image mt-2" is-6 :src="require('@/assets/qrcode2.jpg')"></b-image>
       
      </div>

  </div>
  
  
    
  </template>
    

<script>
    export default {
        async asyncData({ $axios,query }) {
          const reserva = await $axios.$get('/reservas-list/'+query.reserva+"/")
          return { reserva }
        }
      
        
        
    }
</script>  