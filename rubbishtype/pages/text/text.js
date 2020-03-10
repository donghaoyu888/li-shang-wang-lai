// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,//数组长度
    page:0,//页数
    arr:[
      {
        textname:'涂料桶',
        success:'可回收物',
        fourtype:['厨余垃圾', '其他垃圾', '可回收物', '有害垃圾']
      },
      {
        textname: '沥青扎',
        success: '其他垃圾',
        fourtype: ['厨余垃圾', '其他垃圾', '可回收物', '有害垃圾']
      },
      {
        textname: '耳机',
        success: '有害垃圾',
        fourtype: ['厨余垃圾', '其他垃圾', '可回收物', '有害垃圾']
      },
      {
        textname: '废家电',
        success: '可回收物',
        fourtype: ['厨余垃圾', '其他垃圾', '可回收物', '有害垃圾']
      },
      {
        textname: '海胆壳',
        success: '厨余垃圾',
        fourtype: ['厨余垃圾', '可回收物', '可回收物', '有害垃圾']
      },
      {
        textname: '用过的草纸',
        success: '可回收物',
        fourtype: ['厨余垃圾', '其他垃圾', '可回收物', '有害垃圾']
      },
    ],
    textname:['涂料桶','沥青扎','耳机','废家电','海胆壳','用过的草纸'],
    fourtype:['厨余垃圾','其他垃圾','可回收物','有害垃圾']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      num:this.data.arr.length
    })
  },
  btn(e) {
    console.log(e)
    console.log(e.currentTarget.dataset.number)
    var that = this
    var sues = this.data.arr[Number(e.currentTarget.dataset.number)].success
    console.log(e.currentTarget.dataset.i)
    if (e.currentTarget.dataset.i === sues) {
      wx.showToast({
        title: '回答正确',
        icon: 'success'
      })
      this.setData({
        page: that.data.page + 1
      })
      console.log(that.data.page)
    } else {
      wx.showToast({
        title: '回答错误',
        icon: 'loading'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

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