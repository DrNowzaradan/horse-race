<script setup>

defineProps({
    header: String,
    list: Array,
})
</script>

<template>
    <div class="p-3 text-center bg-[#c1fba4] inline-block w-full font-medium text-lg">{{ header }}</div>
    <table class=" w-full border border-neutral-400 border-collapse rounded-lg table-auto" v-for="lap in list">
        <thead>
            <tr>
                <th class="p-2 text-center font-medium inline-block">{{ lap.round }}.lap - {{ lap.distance }}m</th>
            </tr>
            <tr>
                <th class="p-3 bg-neutral-200 font-medium border border-slate-300 capitalize">Position</th>
                <th class="p-3 bg-neutral-200 font-medium border border-slate-300 capitalize">Name</th>
            </tr>
        </thead>
        
        <tr v-for="(item, index) in lap.horses">
            <td class="text-center p-2 border border-slate-300">{{ index + 1 }}</td>
            <td class="text-center p-2 border border-slate-300">{{ item.name }}</td>
        </tr>
    </table>
</template>