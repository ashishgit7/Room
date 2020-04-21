<template>
       <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
                  <a class="navbar-brand" href="/index.html">
                      <img height="30" src="src/assets/roomlelologo.png" alt="">
                  </a>
                  <button class="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" nav nav-pills ml-auto">
                      <li class="nav-item">
                      <button id="home-btn" style="background-color: transparent;border:0;outline: 0;">  <a class="nav-link  rounded-pill active" id="home" href="/index.html" style="font-family: Bahnschrift;" >Home</a></button>
                      </li>
                      <li class="nav-item">
                       <button id="search-btn" style="background-color: transparent;border:0;outline: 0;"> <a class="nav-link" href="/search.html" style="font-family: Bahnschrift;">Search</a></button>
                      </li>
                      <li class="nav-item">
                        <button id="detail-btn" style="background-color: transparent;border:0;outline: 0;"><a class="nav-link" href="/detail.html" style="font-family: Bahnschrift;">Detail</a></button>
                      </li>
                    </ul>
                  </div>
          </div>    
      </nav>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
