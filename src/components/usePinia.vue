<template>
    <div>
        test pinia:  {{useUserStoreVal.name}}
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'
const useUserStoreVal = useUserStore()

</script>
