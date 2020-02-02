const vue_sizemon = {
    props: ['value'],
    // template: '<iframe v-on:load="on_iframe_load" src="about:blank" style="position: absolute; top: -999999px; left: -999999px; width: 100%; height: 100%;" />',
    render: function (createElement) {
        return createElement('iframe', {
            on: {load: this.on_iframe_load},
            attrs: {src: 'about:blank'},
            style: 'position: absolute; top: -999999px; left: -999999px; width: 100%; height: 100%;',
        });
    },
    methods: {
        on_iframe_load: function () {
            this.$el.contentWindow.onresize = this.update;
            this.update();
        },
        update: function () {
            if (!this.$el) {
                return;
            }
            const w = this.$el.offsetWidth;
            const h = this.$el.offsetHeight;
            this.$emit('input', {w, h});
            // // Sometimes reading sizes directly from iframe
            // // produces wrong numbers: 299.2x150.4 instead of 300x150
            // // Screen size: 1920x1080
            // // Screen scale: 125%
            // // Container size: 300x150
            // try {
            //     const {top, left, right, bottom} = this.$el.offsetParent.getBoundingClientRect();
            //     this.$emit('input', {w: right - left, h: bottom - top});
            // }
            // catch (error) {
            //     const {top, left, right, bottom} = this.$el.getBoundingClientRect();
            //     this.$emit('input', {w: right - left, h: bottom - top});
            // }
        },
    },
};

export default vue_sizemon;
