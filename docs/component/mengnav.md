# 导航 meng-nav
<script>
    export default {
        data(){
            return{
                 navs:['首页','新闻','娱乐','时尚','社会'],
            }
        },
       
    }
</script>

<meng-nav :datalist="navs"></meng-nav>
```js
data(){
    return{
            navs:['首页','新闻','娱乐','时尚','社会'],
    }
},
```

```html
<meng-nav  :datalist="navs"></meng-nav>
```