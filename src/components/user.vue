<template>
 <div>
    <router-link :key='item.id' v-for="item in userLists" :to="{path:'/user/'+ item.id, query:{name:item.name}}">{{item.name}}</router-link>
    <div class="content">
        <div>姓名：{{userInfo.name}}</div>
        <div>性别：{{userInfo.sex}}</div>
        <div>爱好：{{userInfo.hobbit}}</div>
    </div>
 </div>
</template>

<script>
//模拟请求数据
const userLists = [
    {
        id:123,
        name:'cg',
        hobbit:'book',
        sex:'male'
    },
    {
        id:456,
        name:'dg',
        hobbit:'basketball',
        sex:'male'
    },
    {
        id:789,
        name:'stg',
        hobbit:'football',
        sex:'male'
    }
]
export default {
    created(){
        // console.log(this.$route)
        var temp = this.userLists.filter(item => item.id == this.$route.params.id)
        // console.log(temp);
        if(temp.length == 0){
            this.userInfo = {
                name:'none',
                sex:'none',
                hobbit:'none'
            }
        }else{
            this.userInfo = temp[0]
        }
    },
    watch:{
        $route(){
            var temp = this.userLists.filter(item => item.id == this.$route.params.id)
            if(temp.length == 0){
                this.userInfo = {
                    name:'name',
                    sex:'none',
                    hobbit:'none'
                }
            }else{
                this.userInfo = temp[0]
            }
        }
    },
    data() {
        return {
        name: "user",
        userLists,
        userInfo:{}
        };
    }
};
</script>

