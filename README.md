Monitoring size of a [positioned ancestor](https://www.w3.org/TR/css-position-3/#comp-abspos).

    <div class="rel">
        <vue-sizemon v-model="size" />
        <div>
            width={{ size.w }}<br>
            height={{ size.h }}
        </div> 
    </div>

## Installation

    npm i @vbarbarosh/vue-sizemon

## Using from module

    import Vue from 'vue';
    import vue_sizemon from '@vbarbarosh/vue-sizemon';

    Vue.component('vue-sizemon', vue_sizemon);

## Using from browser

    <script src="https://unpkg.com/@vbarbarosh/vue-sizemon@1.0.0/dist/vue-sizemon.js"></script>

## Related projects

* [CSS Element Queries](https://github.com/marcj/css-element-queries)
