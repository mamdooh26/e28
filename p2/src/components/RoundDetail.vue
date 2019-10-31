<template>
    <div>
        <p><slot name=win></slot></p>
        <p><slot name=high></slot></p>
        <p><slot name=low></slot></p>
        <p><slot name=over></slot></p>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
        }
    },
    props: {
        'attempt': Number,
    },
    template: '#round-detail',
}
</script>

<style>

        [v-cloak] {
            display: none;
        }
        .pass {
            background-color: green;
        }

        .fail {
            background-color: red;
        }

        .feedback {
            display: inline-block;
            padding: 5px;
            margin: 10px 0;
            color: white;
            font-weight: bold;
        }

</style>