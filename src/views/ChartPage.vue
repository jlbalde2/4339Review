<template>
<div>
    <!-- adddd -->
    <canvas id="myChart" width="400" height="400"></canvas>
</div>
</template>

<script>
// import dependencies for life cycle hook 
import { ref, onMounted, nextTick } from 'vue';


export default {
  mounted() {
    this.createChart();
  },
  methods: {
    async createChart() {
      await nextTick(); // Wait for DOM update

      const ctx = document.getElementById('myChart');
      
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes:[{
              ticks:{
                beginAtZero:true
              }
            }]
          }
        }
      });
    },
}
}
</script>
<style scoped>

</style>