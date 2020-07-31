<template>
    <h1>Header2: <slot /> {{ testComputed }}</h1>
</template>

<script lang=ts>
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
    setup()
    {
        const testComputed = computed(() => 'computed');

        return {
            testComputed,
        };
    }
});
</script>

<style>

</style>