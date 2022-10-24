<template>
  <div class="container is-fluid">

    <b-navbar shadow="true">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://museulinguaportuguesa.org.br/wp-content/uploads/2017/12/Ibis-Hotel.jpg"
                    alt="https://museulinguaportuguesa.org.br/wp-content/uploads/2017/12/Ibis-Hotel.jpg"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                HOME
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/redes   ' }">
                REDES
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-navbar-item tag="router-link" :to="{ path: '/reserva' }">
                RESERVA
            </b-navbar-item>
                  
            <b-navbar-item tag="router-link" :to="{ path: '/hoteis' }">
                HOTÉIS
            </b-navbar-item>
                  
                    <b-navbar-item tag="router-link" :to="{ path: '/cadastro' }">
                CADASTRO
            </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/dadoscadastrais' }">
                DADOS CADASTRAIS
            </b-navbar-item>
                  <b-navbar-item tag="router-link" :to="{ path: '/finalizacao' }">
                FINALIZAÇÃO
            </b-navbar-item>

                  <b-navbar-item tag="router-link" :to="{ path: '/checkin' }">
                CHECK IN
            </b-navbar-item>
                  
                  
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

    <Nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Nuxt exemplo</strong> by Robson Luz. 
          <a target="_blank" href="https://fae.edu">FAE Centro Universitário</a>
        </p>
      </div>
    </footer>      
    
  </div>
</template>

