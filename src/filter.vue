<template>
	<div>
		
	
   <div id="search-div" style="position: fixed;bottom:0; background-color: rgba(220,220,220,0.9);z-index: 111;margin:0; padding:20px;width: 100%;">
            <div class="form-row">
                <div class="col-md-3">
                    <label for="validationCustom01" style="font-family: Bahnschrift;margin-bottom:10px;">Property Type:</label>
                    <select class="form-control" id="exampleFormControlSelect1" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);">
                        <option>Private Rooms</option>
                        <option>Shared Rooms</option>
                        <option>Whole House</option>
                    </select>
                </div>
                <div class="col ">
                    <label for="validationCustom02" style="font-family: Bahnschrift;margin-bottom:10px;">Location:</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Location"  list="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);">
                    <datalist  id="places" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);">
                       <!-- from db -->
                       <option v-for="place in places">{{place}}</option>
                    </datalist>
                </div>
                
                <div class="col-md-3">
                    <label for="validationCustom01" style="font-family: Bahnschrift;margin-bottom:10px;">For Whom:</label>
                    <select class="form-control" id="exampleFormControlSelect2" style="font-family: Bahnschrift;color: rgba(0,191,255,0.8);">
                        <option>Boys</option>
                        <option>Girls</option>
                        <option>Family</option>
                    </select>
                </div>

                <div class="col-md-1 d-flex align-content-end">
                    <button class="btn btn-block btn-secondary mt-md-auto mt-4">Search</button>
                </div>
            </div>
        </div>

        </div>
</template>

<script>
import db from '../firebase'

export default {
  data () {
    return {
      location:'',	
      places: []
    }
  },
   methods: {
       
    },
     mounted(){
        db.collection('locations').doc('list').get().then(
            (res) => {
            	this.places=res.data().names
            }
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    }
}
</script>

<style>

</style>
