<template>
<!--  vue.js渲染函数与jsx-->
  <div class="wrap">
    <h1>
      <a name="hello-world" href="#hello-world">
        Hello world!
      </a>
    </h1>
    <anchored-heading :level="1">
      <div style="height:400px;background:orange;">
        <div class="content1" style="height:100px;background:red;">
          文字1
          <div>文字1兄弟</div>
        </div>
      </div>
    </anchored-heading>
    <anchored-heading :level="2">
      <div style="height:400px;background:black;">文字2</div>
    </anchored-heading>
    <anchored-heading :level="3">
      <div style="height:400px;background:skyblue;">文字3</div>
    </anchored-heading>
  </div>
</template>

<script>
var getChildrenTextContent = function (children) {
  console.log(children,'调用children-----')
  return children.map(function (node) {
    return node.children
        ? getChildrenTextContent(node.children)
        : node.text
  }).join('')
}
export default {
  name: "renderContent",
  components:{
    anchoredHeading:{
      props:{
        level: {
          type: Number,
          required: true
        }
      },
      render(createElement, context) {
        console.log(createElement,context,'------')
        console.log(this.level,this.$slots.default,'000000')
        console.log(getChildrenTextContent(this.$slots.default),'-----------调用返回的打印数据')
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '')

        return createElement(
            'h' + this.level,
            [
              createElement('a', {
                attrs: {
                  name: headingId,
                  href: '#' + headingId
                }
              }, this.$slots.default)
            ]
        )
      }
    }
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.wrap{

}
</style>
