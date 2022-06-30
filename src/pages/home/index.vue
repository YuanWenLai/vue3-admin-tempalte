<template>
    <div class="page">
        home
        <div class="page-test">
            scss 
        </div>
         <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    </div>
</template>
<script lang="ts">
    import API from '@/api';
    console.log(233, API)
    
    //     let result = await API.login('zhangsan', '123456');
    // console.log(233, result)

</script>


<style lang="scss" scoped>
.page {
    height: 300px;
    &-test {
        color: red
    }
}
</style>
