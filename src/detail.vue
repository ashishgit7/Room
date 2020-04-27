<template>
<div>
    <div class="container">
            <div class="row">
                <div class="col-xl-8 col-12 px-lg-4 py-lg-4 p-1">
                    
                    <!-- property detail card -->

                    <!-- image carousel -->
                    <div id="carouselExampleControls" class="carousel slide p-3" data-ride="carousel" style="width: 100%; height:400px; max-height: 55vw; object-fit: cover;">
                        <div class="carousel-inner w-100 h-100">
                            <div class="carousel-item" v-bind:class="{active:index===1}" v-for="(photo,index) in photos">
                            <img class="d-block w-100" v-bind:src="photo"  alt="First slide">
                            </div>
                             <!-- <div class="carousel-item">
                            <img class="d-block w-100" v-bind:src="photos[1]" alt="Second slide">
                            </div> -->
                            <!--
                            <div class="carousel-item">
                            <img class="d-block w-100" src="assets/bg2.jpg" alt="Third slide">
                            </div> -->
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- end image carousel -->

                    <div class="container">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h3>{{property.name}}</h3>
                                        <h6 class="card-subtitle mb-xl-3 mb-2 text-muted">{{property.location}}</h6>
                                        <p class="card-text">{{property.description}}</p>
                                        <div v-for="(val,key,index) in property.rentDetails">
                                            <h5>{{key}}</h5>
                                            <p v-for="details in rentDetails[index] ">{{details}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="display-8">Property rules and responsibility</h5>
                                        <h6 class="card-subtitle mb-xl-3 mb-2 text-muted">{{property.location}}</h6>
                                        <p class="card-text">
                                        <span>Rules</span>    
                                        <ul>
                                        <li v-for="rule in property.rules"  >{{rule}}
                                        </li>   
                                        </ul>
                                        <span>Responsibility</span>    
                                        <ul>
                                        <li v-for="res in property.responsibility"  >{{res}}
                                        </li>   
                                        </ul>  
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end property detail card -->          
                </div>

                <!-- visit form -->
                <div class="col-xl-4 col-12  px-lg-4 py-lg-4 p-1">
                    <div class="card  px-lg-4 py-lg-4 m-2 p-2 text-center">
                        <h4>Book a visit!</h4>
                        <hr>

                        <form>
                            <div id="collapseTarget1" class="collapse show">
                                <div class="form-group">
                                    <label for="nameInput">Full Name</label>
                                    <input type="text" class="form-control" id="nameInput">
                                </div>
                                <div class="form-group">
                                    <label for="numberInput">Phone number</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+91</div>
                                        </div>
                                        <input type="text" class="form-control" id="numberInput">
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block btn-secondary">Send OTP</button>
                                <button type="button" class="btn btn-block btn-secondary "  data-toggle="collapse" data-target="#collapseTarget1" >Submit</button>
                                <hr>
                                <small>Or call +91-9711999999</small>
                            </div>
                            <div id="collapseTarget1" class="collapse">
                                    <ul class="list-group">
                                        
                                            <li class="list-group-item">
                                                <a href="#collapseTarget1" style="text-decoration: none;" data-toggle="collapse">
                                                    Today
                                                </a>
                                            </li>
                                            <li class="list-group-item">
                                                <a href="#collapseTarget1" style="text-decoration: none;" data-toggle="collapse">
                                                    Tomorrow
                                                </a>
                                            </li>
                                            <li class="list-group-item">
                                                <a href="#collapseTarget1" style="text-decoration: none;" data-toggle="collapse">
                                                    20-04-2020
                                                </a>
                                            </li>
                                            <li class="list-group-item">
                                                <a href="#collapseTarget1" style="text-decoration: none;" data-toggle="collapse">
                                                    21-04-2020
                                                </a>
                                            </li>
                                        
                                    </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- end visit form -->
            </div>
        </div>
        <!-- end detail page -->
        <!-- Footer starts -->

        <footer id="footer" class="footer-1 pt-3 bg-secondary">
                <div class="main-footer widgets-dark typo-light">
                  <div class="container">
                    <div class="row">
              
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget subscribe no-box">
                          <h5 class="widget-title">Roomlelo is fun!<span></span></h5>
                          <p>Student accomodation was never this easy</p>
                        </div>
                      </div>
              
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Quick Links<span></span></h5>
                          <ul class="thumbnail-widget">
                            <li>
                              <div class="thumb-content"><a href="/">Home</a></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Get Started<span></span></h5>
                          <p>Find yourself accomodation today.</p>
                        </div>
                      </div>
            
                      <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                          <h5 class="widget-title">Contact Us<span></span></h5>
                          <p>rooomlelo@gmail.com</p>
                          <ul class="social-footer2">
                            <h6>
                              <li class="fa fa-phone"> +91 7667651878 </li>
                            </h6>
                            <h6>
                              <li class="fa fa-phone"> +91 7349666240 </li>
                            </h6>
                          </ul>
                        </div>
                      </div>
              
                    </div>
                  </div>
                </div>
              <hr>
                <div class="footer-copyright">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <p>Copyright Roomlelo © 2020. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
        <!-- Footer ends -->
</div>
</template>

<script>
import db from "../firebase";

export default {
    
  data () {
    return {
      id:this.$route.params.id,
      property:{},
      photos:[],
      rentDetails:[],
    }
  },
   methods: {
    inp: function(){
        console.log(this.property);
        console.log(this.rentDetails);
    }
   },
   created(){
    //  console.log(this.id);
    db.collection("properties")
      .get()
      .then((res) => {
        res.forEach((doc, ind) => {
          // console.log(doc.id);
          if(this.id===doc.id)
          {this.property = doc.data();
          }
        });
      }); 
    db.collection('properties').doc(this.id).get().then((res)=>{
        this.photos = res.data().photos;
        // res.data().rentDetails.forEach((data)=>{
        //     this.rentDetails.push(data);
        //     console.log(data); 
        // })
        let objKeys = Object.keys(res.data().rentDetails); 
  
            objKeys.forEach(key => { 
                let value = res.data().rentDetails[key]; 
            
                this.rentDetails.push(value); 
            });

            
    })
      
   } ,
    
}
</script>

<style scoped>
.btn-secondary{
  background-color:yellow!important ;
  color:blue!important
}
.bg-secondary{
  background-color:yellow!important ;
  /* color:blue!important */
}
</style>
