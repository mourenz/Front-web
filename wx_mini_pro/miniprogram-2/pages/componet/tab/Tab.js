// pages/componet/tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    },
    navItemArray:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:"首页",
        isActive:true
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },


    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(e){
      // console.log(e);
      let {index} =e.currentTarget.dataset; // 说明 dataset 是对象
      this.triggerEvent('itemClick',{index}); 
      // itemClick 即为父组件的一个绑定函数 需要在组件标签上 通过bind绑定 即为binditemClick 不需要驼峰
      // console.log(index);
      let {list} = this.data;
      console.log('index',index);
      list.forEach((v,i)=>{
        index === i?v.isActive=true:v.isActive=false
        // 将list重新赋值给list
        this.setData({
          list
        })
      })
    }
  }
})
