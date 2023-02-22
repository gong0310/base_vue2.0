<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>key：</h3>
    <div v-for="(item, index) in list" :key="index">
      <input type="checkbox" /> {{ item.name }}
    </div>
    <button @click="handleAdd">添加</button>
    <button v-colorSwatch="'#ccc'" @click="handleDelete">删除</button>
    <hr />
    <h3>watch</h3>
    {{ fullName }}<input type="text" v-model="firstName" />
    <hr />
    <h3>computed</h3>
    <input type="number" v-model="count" />*3=<input type="number" v-model="multiply" name="" id="" />
    <hr />
    <h3>directives</h3>
    <input v-focus="'哈哈哈'" type="number" />
    <button v-colorSwatch="'#ccc'">v-colorSwatch</button>
    <hr />
    <h3>filters</h3>
    <p>{{ 1658580634000 | datefmt('自定义数据') }}</p>
    <hr />
    <h3 ref="inTheaters" data-type="inTheaters">ref</h3>
    <!-- <Mycom1/> -->
    <h3>provide {{c}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
  },
  inject:['c'],
  // 局部指令
  directives: {
    focus: {
      bind(el, binding, vnode) {
        console.log('directives bind', el, binding, vnode)
        /**
         * el：指令所绑定的元素，可以用来直接操作 DOM。
         * binding：一个对象，包含：
         *    name：指令名，不包括 v- 前缀。
         *    value：指令的绑定值，例如：v-my-directive=“1 + 1” 中，绑定值为 2。指令的参数可以是动态的
         *    oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变 都可用。
         *    expression：字符串形式的指令表达式。例如 v-my-directive=“1 + 1” 中，表达式为 “1 + 1”。
         *    arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 “foo”。
         *    modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
         * vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
         * oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
         */
        console.log('directives bind--->只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置')
      },
      inserted(el) {
        console.log('directives inserted--->被绑定元素插入父节点时调用 ')
        el.focus()
      },
      updated() {
        console.log('directives updated--->所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前')
      },
      componentUpdated() {
        console.log('directives componentUpdated--->指令所在组件的 VNode 及其子 VNode 全部更新后调用 ')
      },
      unbind() {
        console.log('directives inserted--->只调用一次，指令与元素解绑时调用 ')
      },
    },
    // colorSwatch: {
    //   bind(el, binding, vnode) {
    //     el.style.backgroundColor = binding.value
    //   }
    // },
    /* 指令简写: 这个function等同于把代码写到了bind和update中去 */
    colorSwatch: function (el, binding) {
      el.style.backgroundColor = binding.value
    }
  },
  // 局部过滤器
  filters: {
    /*将时间格式转换*/
    datefmt: function (value, formatstring) {
      console.log('filters datefmt--->',value,formatstring)

      const input = new Date(value)
      var year = input.getFullYear();
      var month = input.getMonth() + 1;
      var day = input.getDate();
      var hour = input.getHours();
      /*  用toString().padStart()方法可以保持时间两位数
      var hh = dt.getHours().toString().padStart(2, '0');
      var mm = dt.getMinutes().toString().padStart(2, '0');
      var ss = dt.getSeconds().toString().padStart(2, '0');
      */
      var minute = input.getMinutes();
      var second = input.getSeconds();
      var res1 = year + '-' + month + '-' + day;
      var res2 = year + '-' + month + '-' + day + ' ' + hour + '-' + minute + '-' + second;
      if (formatstring == "yyyy-mm-dd") {
        return res1;
      } else {
        return res2;
      }
    }
  },
  // 如果data是一个对象，就会存在数据被共享的可能(同一个存储空间)
  data() {
    return {
      list: [
        { id: 1, name: "李斯" },
        { id: 2, name: "吕不韦" },
        { id: 3, name: "嬴政" },
      ],
      firstName: "",
      fullName: "",
      count: 0,
    };
  },
  watch: {
    // firstName(newval, oldval) {
    //   console.log(newval)
    //   this.fullName = newval + "---";
    // },
    // $route
    firstName: {
      handler(newval) {
        console.log(newval);
        this.fullName = newval + "---";
      },
      immediate: true, // 参数化默认执行一次
      deep: true,
    },
  },
  computed: {
    // multiply: function () {},
    // multiply() {
    //   return this.count * 3;
    // },
    multiply: {
      get() {
        return this.count * 3;
      },
      set(newval) {
        this.count = newval / 3;
      },
    },
  },
  beforeCreate() {
    // console.log("beforeCreate", this.$el, this.list, this.testMethods());
    console.log("beforeCreate", this.$el, this.list, '报错');
  },
  created() {
    console.log("created", this.$el, this.list, this.testMethods());
  },
  beforeMount() {
    console.log("beforeMount", this.$el, this.list, this.testMethods());
  },
  mounted() {
    console.log("mounted", this.$el, this.list, this.testMethods());
    console.log('refs', this.$refs.inTheaters.dataset.type);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$el, this.list, this.testMethods());
  },
  updated() {
    console.log("updated", this.$el, this.list, this.testMethods());
  },
  activated() {
    console.log("activated", this.$el, this.list, this.testMethods());
  },
  deactivated() {
    console.log("deactivated", this.$el, this.list, this.testMethods());
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.$el, this.list, this.testMethods());
  },
  destroyed() {
    console.log("destroyed", this.$el, this.list, this.testMethods());
  },
  methods: {
    testMethods() {
      console.log('挂载了methods')
      return '挂载了methods'
    },
    handleAdd() {
      this.list.unshift({ id: 4, name: "哈哈" });
    },
    handleDelete() {
      this.list.splice(1, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
