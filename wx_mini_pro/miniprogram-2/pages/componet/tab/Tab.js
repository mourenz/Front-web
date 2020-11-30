// pages/componet/tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
      // console.log(index);
      let {list} = this.data;
      console.log('index',index);
      list.forEach((v,i)=>{
        index === i?v.isActive=true:v.isActive=false
        this.setData({
          list
        })
      })

      
      


    }

  }
})
