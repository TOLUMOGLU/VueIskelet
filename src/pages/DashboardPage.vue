<script setup>
    import { Chart } from 'highcharts';
    import {reactive} from "vue";
    const state = reactive({
        chartOptions: {
            series: [
                {
                    data: [1, 2, 3],
                }
            ]
        }
    });
</script>
<template>
    <highcharts :options="state.chartOptions"></highcharts>
</template>
