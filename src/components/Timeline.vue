<template>
    <div id="timeline">
        <carousel
          :dots="false"
          :stagePadding="100"
          :rewind="false"
          :responsive="{0:{items:1,nav:false},700:{items:2,nav:true},1100:{items:3,nav:true}}">

            <div
              v-for="(month,index) in monthes"
              :key="index">
                <month
                  :initialDate="month"
                  ref="calendar"
                  :events='events'
            />
            </div>
        </carousel>
    </div>
</template>



<script>
import axios from 'axios';
import ICAL from 'ical.js';
import DateTime from '../DateTime.js'

import Carousel from 'vue-owl-carousel'
import Month from './Month'

export default {

    name: 'Timeline',

    data () {
        return {
            events: []
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

    methods: {
        /**
         * Parse event from ICAL Ajax response
         */
        parseEvents (response) {
            console.log(response);
            //console.log(response.data);
            var ical = ICAL.parse(response);
            console.log(ical);
            var component = new ICAL.Component(ical);
            var events = component.getAllSubcomponents('vevent');
            for (let i = 0; i < events.length; i++) {
                var event = new ICAL.Event(events[i]);
                //console.log(event);
                this.addEvent(event);
            }
        },

        addEvent (event) {
            var start = new Date(event.startDate.toJSDate());
            var end = new Date(event.endDate.toJSDate());

            // Moins 1 heure sur la date de fin pour tomber sur les bons jours
            end.setHours (end.getHours() - 1);

            var object = {
                title: event.summary,
                start: start.toString() ,
                end: end.toString(),
                //end: '2019-04-04',
                categoryId: 1
            };

            console.log(object);
            this.events.push(object);
        },
    },

    mounted: function () {
        axios.get("http://localhost/beta.gouv/public-calendar/proxy.php")
             .then(response => this.parseEvents(response.data));
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


};
</script>

<style lang="sass">

.owl-carousel

    .owl-item
        transition: opacity .8s ease

    .owl-item:not(.active)
        opacity: .3

</style>
