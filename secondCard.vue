
<template>
    <div class="secondCard">
        <div class="head">
            <h1>Open new tabs is sh*t </h1>
        </div>
        <div class="elon">
            <img src="component/images/solutionfordiscover.png" alt="" id="solutionDiscover">
            <img src="component/images/elonmusk.png" alt="" id="elonmusk">
            <img src="component/images/youjustneed.png" alt=""  id="youJustneed">
        </div>
        <div class="textunderElon">
            <p>A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
        </div>
   </div>
</template>


<style  scoped>
.secondCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    background: #A8FF35;
    padding: 140px 293px;
}

.elon{
    display: flex;
    justify-content: center;
    gap: 25px;
 }

.elon #elonmusk{
    padding: 25px 33px;
    margin: 60px 80px;
    background: #030303;
}
.head{
         display: flex;
        justify-content: center;
        color: #000;
        text-align: center;
        font-size: 72px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
}
.textunderelon{
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}

    @media (max-width: 600px){
        .elon{
           display:flex;
           flex-direction: column-reverse
        };
       
        .elon #solutionDiscover{
            display: flex;
            align-items: right;
        };

       .elon #youJustneed{
        display: flex;
          align-items: left;
       }
       

    }
</style>