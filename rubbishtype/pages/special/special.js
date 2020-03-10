// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // wx:for= "{{arr}}" wx:for-item="arritem" wx: key="arrkey"
    specialnames: '',
    arr: ['../image/longxia.png', '../image/dianchi.png', '../image/media-1.png', '../image/media-1.png', '../image/rou.png', '../image/ziyuan.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/hotSearch',
      method: 'POST',
      // data: `q=${this.data.sers}`,    //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data[0].name)
        console.log(res.data.data)
        that.setData({
          specialnames: res.data.data
        })
      }

    })
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