 //index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:true,
    sers:'',
    rubishitems:'',
    currentitem:'',
    searchitems:''
  },
  //搜索框里的值
  servalue(e){
    this.setData({
      sers: e.detail.value
      
    })
    // console.log(this.data.sers)
  },
  //切换垃圾分类
  rubishchange(e){
    var that = this
    this.setData({
      currentitem: e.currentTarget.dataset.qh
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category',
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
          rubishitems: res.data.data
        })
      }

    })
  },
  ser(){
    
    // wx.request({
    //   // http://api.choviwu.top/garbage/getGarbage？
    //     // garbageName = XXX(垃圾物) 
    //     url: `http://api.choviwu.top/garbage/getGarbage?garbageName=${this.data.sers}`,
    //   method: 'POST',
    //   // data: `q=${this.data.sers}`,    //参数为键值对字符串
    //   header: {
    //     //设置参数内容类型为x-www-form-urlencoded
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data.data)
    //     that.setData({
    //       searchitems: res.data.data
    //     })
    //   }

    // })
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