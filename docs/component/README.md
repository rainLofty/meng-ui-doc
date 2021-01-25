
# 公共样式
<script>
    export default {
        data(){
            return{
                formData:{},
                showDialog:false,
                btnColors:{
                    '':'默认按钮',
                    'blueBtn':'蓝色按钮',
                    'redBtn':'红色按钮',
                    'orangeBtn':'黄色按钮',
                    'greenBtn':'绿色按钮',
                    'grayBtn':'灰色按钮',
                },
                iconList:[
                    'icon-xiazai45',
                    'icon-pingjia',
                    'icon-zhuxiao1',
                    'icon-u502',
                    'icon-u51',
                    'icon-sousuo',
                    'icon-cad',
                    'icon-excel',
                    'icon-shp-',
                    'icon-word',
                    'icon-jpg',
                    'icon-dui',
                    'icon-gantanhao',
                    'icon-shanchu',
                    'icon-zhankai',
                    'icon-fanhui',
                ],
            }
        },
        mounted () {
           
        },
        methods:{
            openMessage(type){
                this.$message({
                    showClose:true,
                    type: type,
                    message: '提示内容',
                });
            },
            openDialog(){
                this.showDialog = true;
            },
            closeDialog(){
                this.showDialog = false;
            },
        },
    }
</script>

## 按钮

#### 基础用法
<div class="code">
    <button v-for="(value,color) in btnColors" :key="color" :class="color">
        {{value}}
    </button>
</div>

```html
<button>默认按钮</button>
<button class="blueBtn">蓝色按钮</button>
<button class="redBtn">红色按钮</button>
<button class="orangeBtn">黄色按钮</button>
<button class="greenBtn">绿色按钮</button>
<button class="grayBtn">灰色按钮</button>
```
#### 禁用状态
<div class="code">
   <button v-for="(value,color) in btnColors" :key="color" :class="color" disabled>
        {{value}}
    </button>
</div>

```html
<button disabled>默认按钮</button>
<button class="blueBtn" disabled>蓝色按钮</button>
<button class="redBtn" disabled>红色按钮</button>
<button class="orangeBtn" disabled>黄色按钮</button>
<button class="greenBtn" disabled>绿色按钮</button>
<button class="grayBtn" disabled>灰色按钮</button>
```

## icon

<template>
    <ul class="icon ">
        <li v-for="icon in iconList" :key="icon">
            <i class="iconfont" :class="icon"></i>
            <span>{{icon}}</span>
        </li>
    </ul>
</template>

## message提示信息
<div class="code">
    <button class="greenBtn" @click="openMessage('success')">成功提示</button>
    <button class="redBtn"  @click="openMessage('error')">错误提示</button>
</div>

```js
this.$message({
    showClose:true,
    type: 'success',
    message: '提示内容',
});
this.$message({
    showClose:true,
    type: 'error',
    message: '提示内容',
});
```
## dialog弹窗
<div class="code">
    <button class="greenBtn" @click="openDialog">打开弹窗</button>
</div>
<el-dialog
    @close="closeDialog"
    width="540px"
    :visible="showDialog"
    title="dialog弹窗"
    :destroy-on-close="true"
>
    <div class="formwrap" >
        <dl>
            <dt>
                <b>*</b>input输入框
            </dt>
            <dd>
                <el-input  v-model="formData.input" placeholder="请输入内容"></el-input>
            </dd>
        </dl>
        <dl>
            <dt>
                <b>*</b>radio单选按钮
            </dt>
            <dd>
                <el-radio-group v-model="formData.radio">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </dd>
        </dl>
    </div>
    <template slot="footer">
        <button  class="blueBtn">确定</button>
        <button @click="closeDialog" class="grayBtn">取消</button>
    </template>
</el-dialog>

```html
<div class="code">
    <button class="greenBtn" @click="openDialog">打开弹窗</button>
</div>
<el-dialog
    @close="closeDialog"
    width="540px"
    :visible="showDialog"
    title="dialog弹窗"
    :destroy-on-close="true">
    <div class="formwrap"></div>
    <template slot="footer">
        <button  class="blueBtn">确定</button>
        <button @click="closeDialog" class="grayBtn">取消</button>
    </template>
</el-dialog>
```
