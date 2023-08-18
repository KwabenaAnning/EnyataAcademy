<template>
  <div class="thirdCard">
    <p>Findtrend helps you to increase your productivity and reduce your computer's memory load, 
    <p class="greyBold">an application that can fulfill your daily browsing needs.</p></p>
 </div> 
</template>


<style scoped>
.thirdCard {
    padding: 140px;
    color: #000;
    font-style: normal;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 

.greyBold{
    color: #ADADAD;
}

@media (max-width: 600px) {
    .thirdCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: #000;
    font-size: 36px;
    font-weight: 900;
    line-height: normal;
    }


}

</style>