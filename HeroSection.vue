<script setup>
// import ButtonComponent from './ButtonComponent.vue';
import TheNavbar from './TheNavbar.vue';
</script>

<template> 
    <div class="Heeero">
        <div>
        <TheNavbar/>
        </div>
        <div class= "heroes">
            <div>
            <p>Minimize your tabs.</p>
            <p>Find the trends!</p>
            <p>Don’t let your computer memories consumes all of those browser tabs. 
                Findtrend  let you gathers all of your favorite website into one place.
            </p>
            </div>
            <div class="gStart">
            <ButtonComponent class="getstarted" buttonText= "Get started🔥"/>
            </div>
            <img src="component/images/img-hero.svg" alt="">
            <div class="turningTexts">
                <img src="component/images/btn-hero-socmed.png" alt="" class="imageUndertext">
            </div>
        </div>
    </div>
</template>

<style scoped>
     .Heero{
      background-color: black;
     }

  .heroes{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

 .imageUndertext{
    display: flex;
    justify-content: center;
 }
  
  /* .crypto{
    background: #181818;
    width: 341.226px;
    height: 82px;
    transform: rotate(-4deg);
}

.popDesign{
    background: #181818;
    width: 341.226px;
    height: 82px;
    transform: rotate(2deg);
    };

    .prodDesign{
    background: #181818;
    width: 341.226px;
    height: 82px;
    transform: rotate(-2deg);
    };
     

    .prodDesign{
    background: #181818;
    width: 341.226px;
    height: 82px;
    transform: rotate(-2deg);
    };

    .elon{
        background: #181818;
        width: 341.226px;
        height: 82px;
        transform: rotate(4deg);
    } */

    .turningText{
        display: flex;
    }
 
</style>