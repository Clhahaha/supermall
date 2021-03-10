<template>
  <div class="toast" v-show="isShow">
      <div>{{isMessage}}</div>
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default:''
        }
    },

    data(){
        return{
            isShow:false,
            isMessage:''
        }
    },

    methods:{
        show(message,duration=2000){
            this.isShow=true
            this.isMessage=message
            setTimeout(()=>{
                this.isShow=false
                this.isMessage=''
            },1000)
        }
    }
}
</script>

<style>
.toast{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: rgb(0, 0, 0,.7);
    z-index: 9;
}

</style>