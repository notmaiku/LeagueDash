<template>
  <div>
    <p>Your Elo Sucks</p>
    <navigation/>
    <div class="small">
      <chart/>
    </div>
  </div>
</template>

<script>
import navigation from "./simple-nav";
import chart from "./profile-stats";

export default {
  name: "dash",
  components: {
    navigation,
    chart
  }
};
</script>

<style>
.small {
  display: flex;
}
</style>
