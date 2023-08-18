<script setup>
  import ButtonComponent from './ButtonComponent.vue';
</script>

<template>
    <div class="nav">
       <img src="./components/images/Vector.svg" alt="" class="flash">
       <div class="navRemove">
            <div>findtrend</div>
            <ul class="AHPSF">
                <li>About</li>
                <li>How it woks</li>
                <li>Pricing</li>
                <li>Solution</li>
                <li>Features</li>
                </ul>
            <div class="logReg">
                <p>login</p>
                <ButtonComponent class="register" buttonText= "register"/>
            </div>
            <img src="component/images/humburgersign.png" alt="" class="humburger">
       </div>
    </div>
</template>

<style scoped>
.nav{
  display: flex;
  justify-content: space-between;
}

.AHPSF{
    display: flex; 
    justify-content: space-between;
    gap: 40px;
    text-decoration:none ;
    list-style-type: none;
}

.logReg{
    display: flex; 
    justify-content: space-evenly;
    gap: 40px;
}

.humburger{
    display: none;
}

@media (max-width:600px) {
   .navRemove{
    display: none;
   }  
    
   .humburger{
    display: flex;
    flex-direction: row;
    align-items: right;
   }
}


</style>

