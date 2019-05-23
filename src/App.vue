<template>
    <div class="public-calendar">
        <h1>Planning & disponibilités</h1>
        <timeline
        start="2019-05-01"
        end="2019-12-31"
        />
    </div>
</template>

<style lang="sass">

html
    background: #F5F3F0
    font-family: 'Raleway'

</style>

<script>
    import Timeline from './components/Timeline'

    export default {

        name: 'PublicCalendar',


        components: {
            Timeline
        },


    };
</script>
