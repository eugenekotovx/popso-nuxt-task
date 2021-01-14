<template>
  <div class="chart">
    <chart-line
      v-if="showLine"
      :chartData="datacollection"
      :width="500"
      :height="300"
    />
    <button type="button" @click="pushData()" name="button">push</button>
    <button type="button" @click="fillData()" name="button">fill</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLine: false,
      datacollection: {}
    };
  },
  mounted() {
    this.fillData();
    this.showLine = true;
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Data",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            borderColor: "#EEB969",
            backgroundColor: "transparent"
          },
          {
            label: "Data",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            borderColor: "#788DFF",
            backgroundColor: "transparent"
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    pushData() {
      this.datacollection.datasets.push({
        borderColor: "#788DFF",
        backgroundColor: "transparent",
        label: "data",
        data: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.chart {
  box-sizing: border-box;
}
</style>
