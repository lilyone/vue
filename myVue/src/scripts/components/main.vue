<template>
  <div class="main-container">
      首页
      <input type="text" v-model= "message"/>
     <div id="app">{{message}}</div> 
     {{{html}}}
     <hr />
     <partial name="my-partial"></partial>
     <partial name="lily"></partial>
     <hr />
     <input v-model = "a"></input>
     {{a=1}}
     {{first}}
     {{last}}
     <br />
     {{full}}
     <br />
     <input type="checkbox"  value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox"  value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox"  value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		
		<br>
		<span>Checked names: {{ checkedNames | json }}</span>
		<br />
		<input v-model="qwe" lazy>
		{{qwe}}
  </div>
</template>

<script>

  import { changeIndex } from "../vuex/actions";

  import loadingss from "../libs/vue-loading";
	Vue.partial('my-partial', '<p>This is a partial! {{msg}}</p>')
	Vue.partial('lily', '<p>lily{{mes}}</p>');
	
  export default {
  	data(){
  		return{
  			message:"hekko",
  			html:"<b>qqqqqq {{msg}}</b>",
  			msg:'reeeeeee',
  			mes:'hello!!!',
  			a:0,
  			first:"lily++",
  			last:"one",
  			fullq:'',
  			checkedNames: []
  		}
  		
  	},
  	computed:{
  		fullq:{
  			get:function(){
  				return this.last+this.first;
  			},
  			set:function(newValue){
  				console.log(111)
  				this.first = newValue;
  			}
  		}
  		
  	},
    directives: { loading: loadingss },
    vuex: {
      actions: {
        change: changeIndex
      }
    },

	  ready: function() {
	      this.change(0);
	  }
	
	}
 
</script>
