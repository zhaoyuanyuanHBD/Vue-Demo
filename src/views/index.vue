<template>
    <div>
        <el-row style="margin-bottom: 2em">
            <el-button type="primary" round @click="getToDoList">指令集</el-button>
            <el-button type="primary" round @click="handleClick">TODOLIST</el-button>
            <el-button type="primary" round @click="showHeadler">ShowImage</el-button>
        </el-row>

        <!--显示指令集-->
        <div v-if="showList">
            <el-card class="box-card">
                <div v-for="item in data" class="text item">
                    {{item}}
                </div>
            </el-card>
        </div>

        <!--显示输入框-->
        <div v-if="showInputBox">
            <el-input v-model="message" type="text" placeholder="请输入内容" style="margin-bottom: 1em"></el-input>
            <el-button type="primary" @click="pushMessageHandler(message)" style="width: 100%">PUSH</el-button>
        </div>
        <!--显示StateList-->
        <div v-if="showStateList">
            <el-card class="box-card">
                <div v-for="item in $store.state.todo.list" class="text item">
                    {{item}}
                </div>
            </el-card>
        </div>

        <!--显示轮播图-->
        <div v-if="showImg">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in imageList" :key="item">
                    <img :src="item" alt="" style="width: 50%;height: 100%;">
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>

<script>
    import * as types from "../store/musations-types";

    export default {
        name: "index",
        data() {
            return {
                data: [],
                imageList:[
                    'http://mfs.bandao.cn/storage/mfs/5b9dd233f442a307b92d2254.jpeg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574231026173&di=1393f84c96716380573a91e6a45b233f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190307%2F659d247c1e504b3ba775bced9a2c1ba3.jpeg',
                    'http://5b0988e595225.cdn.sohucs.com/images/20180507/227d6aff226e46aa885dac8b9c528d4f.jpeg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574231014543&di=89a8ed545dae54b27766fd9ba944945d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190520%2Ff2d90d3dc5e84b19a6ace6b7f453a366.jpeg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574231125476&di=49222d84e2c14df15cfeadd8eb86c786&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180730%2F547546e4b8d84fc8816a466a35a2fa1d.jpeg'
                ],
                message: '',
                input: '',
                showInputBox: false,
                showList: false,
                showStateList: false,
                showImg: false
            }
        },
        methods: {
            getToDoList() {
                this.showList = true;
                this.showInputBox = false;
                this.showStateList = false;
                this.showImg = false;
                this.axios.get("https://api.myjson.com/bins/go2sy").then((response) => {
                    console.log(response.data);
                    this.data = response.data;
                })
            },
            handleClick() {
                this.showList = false;
                this.showStateList = true;
                this.showInputBox = true;
                this.showImg = false;
            },
            pushMessageHandler(message) {
                this.$store.commit(types.ADD_MESSAGE, message);
                // this.$store.commit('addMessage',message);
            },
            showHeadler() {
                this.showList = false;
                this.showInputBox = false;
                this.showStateList = false;
                this.showImg = true;
            }
        },
    }

</script>

<style scoped>
    html,body{
        width: 100%;
    }

    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }

    /*轮播图样式*/
    .el-carousel__img:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__img:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
