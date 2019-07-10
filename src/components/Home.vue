<template>
<div>
  <header>
    <img src="static/images/image001.png" alt="">
  </header>
  <div class="result">

    <div class="left-side">
      <h3>Male</h3>
      <ol>
        <li v-for="person of male">
          <p><span>Name: </span>{{person.name}}</p>
          <p><span>Age: </span>{{person.age}}</p>
            <ul v-if="person.pets != null"><span>Pets: </span>
              <li v-for="pet of person.pets">
                <p><span>Pet Name: </span>{{pet.name}}</p></p>
                <p><span>Pet Type: </span>{{pet.type}}</p></p>
              </li>
            </ul>
        </li>
      </ol>
    </div>
    <div class="right-side">
      <h3>Female</h3>
      <ol>
        <li v-for="person of female">
          <p><span>Name: </span>{{person.name}}</p>
          <p><span>Age: </span>{{person.age}}</p>
            <ul v-if="person.pets != null"><span>Pets: </span>
              <li v-for="pet of person.pets">
                <p><span>Pet Name: </span>{{pet.name}}</p></p>
                <p><span>Pet Type: </span>{{pet.type}}</p></p>
              </li>
            </ul>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      male: [],
      female: []
    }
  },
  mounted() {
    this.getResult();
  },
  methods: {
    getResult(){
      axios.get('httpsgit://5c92dbfae7b1a00014078e61.mockapi.io/owners').then((response)=>{
        //get each result
        for(let person of response.data){
          //order by pet type for pet
          if(person.pets != null){
            person.pets.sort((a,b)=>{
              if(a.type > b.type){
                return 1;
              }else{
                return -1;
              }
            })
          }
          //get male and female
          if(person.gender == "Male"){
            this.male.push(person);
          }else{
            this.female.push(person);
          }
        }
        //order male and female by alphabetical
        this.male.sort((a,b)=>{
          if(a.name > b.name){
            return 1;
          }else{
            return -1;
          }
        })
        this.female.sort((a,b)=>{
          if(a.name > b.name){
            return 1;
          }else{
            return -1;
          }
        })

      })
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.result{
  display: flex;
  margin: 20px 20px 0 20px;

  .left-side{
    width: 50%;
  }
  .right-side{
    flex: 1;
  }
}

span{
  font-weight: bold;
}
ol li{
  margin-top: 10px;
}
ul>li{
  margin-left: 20px;
}
</style>
