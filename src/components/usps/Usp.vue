<template>
  <div class="usp-item">
        <div class="usp-icon">
            <div class="icon">
                <font-awesome-icon icon="home" class="font-awesome-icon "/>
            </div>
            <font-awesome-icon icon="fa-solid fa-gauge-high" />
        </div>
        <div class="usp-title">
            <h2>{{usp.usptitle}}</h2>
        </div>
        <div class="usp-desc">
            <p>{{usp.uspdesc}}</p>
        </div>               
  </div>
</template>

<script>
export default {
    name: 'Usp',
    props: {
      usp: Object
  }
}
</script>

<style scoped>
.icon{
    width: fit-content;
    background: #002051;
    padding: 20px;
    margin: 0px auto 20px;
    border-radius: 50%;
}

.font-awesome-icon {
    color: white;
    font-size: 40px;
}

.usp-desc p{
    font-size: 13px;
    margin-bottom: 0px;
}

</style>