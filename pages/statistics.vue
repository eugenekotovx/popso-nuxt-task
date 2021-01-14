<template lang="html">
  <section class="chart__container">
    <line-chart id="chart-1" :data="chartData" height="425px"></line-chart>
    <div class="chart__button-group">
      <button
        class="chart__button"
        type="button"
        @click="refreshData()"
        name="button"
      >
        Случайные данные
      </button>
      <button
        class="chart__button"
        type="button"
        @click="addChart()"
        name="button"
      >
        Добавить данные
      </button>
      <button
        class="chart__button"
        type="button"
        name="button"
        @click="removeChartData()"
      >
        удалить данные
      </button>
      <button
        class="chart__button"
        type="button"
        @click="addData()"
        name="button"
      >
        Увеличить кол-во данных
      </button>
      <button
        class="chart__button"
        type="button"
        name="button"
        @click="removeData()"
      >
        уменьшить кол-во данных
      </button>

      <button
        class="chart__button"
        type="button"
        name="button"
        @click="removeChartData()"
      >
        удалить данные
      </button>
    </div>
  </section>
</template>

<script>
export default {
  middleware: "authenticated",
  data() {
    return {
      chartData: [
        {
          name: "data",
          data: [
            ["info 1", this.getRandomInt()],
            ["info 2", this.getRandomInt()],
            ["info 3", this.getRandomInt()]
          ]
        },
        {
          name: "data 2",
          data: [
            ["info 1", this.getRandomInt()],
            ["info 2", this.getRandomInt()],
            ["info 3", this.getRandomInt()]
          ]
        }
      ]
    };
  },
  methods: {
    addChart() {
      const newData = {
        name: "data " + (this.chartData.length + 1),
        data: []
      };
      for (let i = 0; i < this.chartData[0].data.length; i++) {
        newData.data.push(["info " + (i + 1), this.getRandomInt()]);
      }
      this.chartData.push(newData);
    },
    getRandomInt() {
      return Math.floor(Math.random() * (1150 - 5 + 1)) + 5;
    },
    addData() {
      this.chartData.forEach(dataItem => {
        return dataItem.data.push([
          "info " + (dataItem.data.length + 1),
          this.getRandomInt()
        ]);
      });
      this.chartData.push();
    },
    removeData() {
      this.chartData.forEach(chartItem => {
        return chartItem.data.pop();
      });
      this.chartData.push();
    },
    removeChartData() {
      this.chartData.pop();
    },
    refreshData() {
      this.chartData.forEach((chartItem, i) => {
        chartItem.data.forEach((chartData, i) => {
          chartData[1] = this.getRandomInt();
        });
      });
      this.chartData.push();
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  &__container {
    height: 100%;
  }
  &__button {
    background: transparent;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    padding: 8px 15px;
    &-group {
      margin-top: 17px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &:hover {
      border: 1px solid #bd0d22;
      color: #bd0d22;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 576px) {
  .chart {
    &__button {
      margin-bottom: 10px;
    }
  }
}
</style>
