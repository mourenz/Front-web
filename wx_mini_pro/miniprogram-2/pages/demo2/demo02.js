// pages/demo2/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    list:[
      {
        name:"123",
        age:20
      },
      {
        name:"124",
        age:20
      }
    ],
    person:{
      name:"111",
      age:20
    },
  },
  "handleInput":function(e){
    console.log(e);
    // 获取值
    this.setData({
      num:e.detail.value
    })
    console.log(":)");
  },
  "bindButton":function(e){
    console.log("获取实参数值_",e.currentTarget.dataset.operation); // operation 为页面变量名 即为 data-xxx
    this.setData({
      num:this.data.num+e.currentTarget.dataset.operation, 
      // 获取 data的值 需要 this.data.num 和vue不同 修改
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