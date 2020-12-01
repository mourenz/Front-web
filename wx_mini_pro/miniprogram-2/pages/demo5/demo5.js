// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    checkBoxItem:[
      {
        id:1,
        name:"苹果",
        value:"apple",
      },
      {
        id:2,
        name:"香蕉",
        value:"balana",
      }
    ],
    checkValue:[],
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
      }
    ],
    

  },
  //单选
  getRadioVlaue:function(e){
    console.log(e);
    this.setData({
      gender: e.detail.value
    })
  },
  // 复选框
  checkboxClick:function(e){
    console.log(e);
    let values = e.detail.value;
    this.setData({
      checkValue:values
    })
  },

  handleItemClick:function(e){
    console.log("子触发了父函数",e);
    const {index} = e.detail;
    let {list} = this.data;  // 这是获取本实例中的data对象中的list
    list.forEach((v,i)=>{
      if(i===index){
        v.isActive = true;
      }else{
        v.isActive = false;
      }
    })
    //重新放回
    this.setData({
      list
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})