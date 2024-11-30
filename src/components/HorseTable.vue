<script setup>

defineProps({
    header: String,
    list: Array,
})
</script>

<template>
    <div class="p-3 text-center bg-[#ffef9f] inline-block w-full font-medium text-lg">{{ header }}</div>
    <table class=" w-full border border-neutral-400 border-collapse rounded-lg table-auto">
        <thead>
            <tr>
                <th class="p-3 bg-neutral-200 font-medium border border-slate-300">Name</th>
                <th class="p-3 bg-neutral-200 font-medium border border-slate-300">Condition</th>
                <th class="p-3 bg-neutral-200 font-medium border border-slate-300">Color</th>
            </tr>
        </thead>
        
        <tr v-for="horse in list">
            <td class="text-center p-2 border border-slate-300">{{ horse.name }}</td>
            <td class="text-center p-2 border border-slate-300">{{ horse.condition }}</td>
            <td class="text-center p-2 border border-slate-300">{{ horse.color }}</td>
        </tr>
    </table>
</template>