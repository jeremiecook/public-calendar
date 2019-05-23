<template>
    <div id="timeline">
        <carousel
          :dots="false"
          :stagePadding="100"
          :rewind="false"
          :responsive="{0:{items:1,nav:false},600:{items:2,nav:true},1000:{items:3,nav:true}}">

            <div
              v-for="(month,index) in monthes"
              :key="index">
                <month
                  :initialDate="month"
                  ref="calendar"
            />
            </div>
        </carousel>
    </div>
</template>

<script>
import Month from './Month'
import Carousel from 'vue-owl-carousel'
import DateTime from '../DateTime.js'

export default {

    name: 'Timeline',

    data () {
        return {
            //today: new DateTime(),
            //start: null,
            //end: null,
        }
    },

    computed: {
        monthes () {
          var start      = this.start.split('-');
          var end        = this.end.split('-');
          var startYear  = parseInt(start[0]);
          var endYear    = parseInt(end[0]);
          var dates      = [];

          for(var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
            var startMon = i === startYear ? parseInt(start[1])-1 : 0;
            for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
              var month = j+1;
              var displayMonth = month < 10 ? '0'+month : month;
              dates.push([i, displayMonth, '01'].join('-'));
            }
          }
          return dates;
        },
    },

    components: {
        Carousel, Month
    },


    props: {
        start: {
            type: String,
            default: '2019-01-01'
        },
        end: {
            type: String,
            default: '2019-12-31'
        },
    }


}
</script>
