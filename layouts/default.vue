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
            <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                HOME
            </b-navbar-item>
            
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                   
                  
            
                  
                   

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
          <strong>No Queue</strong>  
          <a target="_blank" href="https://fae.edu">FAE Centro Universitário</a>
        </p>
      </div>
    </footer>      
    
  </div>
</template>

