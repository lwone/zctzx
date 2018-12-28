// pages/kx-detail/kx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id = options.id;
    this.getdata(id);

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

  },
  copylink:function(){
    wx.showToast({
      title: '链接复制成功',
      duration:2000,
    })
  },
  back:function(){
   
    wx.vibrateShort();

    var self = this;
    var pages = getCurrentPages();
    if (pages.length == 1) {
      if (self.data.circleId && self.data.circleId >0) {
        wx.redirectTo({
          url: '../../circle/index/index?circleId=' + self.data.circleId
          + '&circleName=' + (self.data.circleName || '')
        });
      } else {
        wx.switchTab({
          url: "../../home/grouplist/grouplist"
        });
      }
    } else {
      wx.navigateBack({ changed: true });//返回上一页
    }
 
  },
  getdata: function (id) {
    var myThis = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    wx.request({
      url: 'https://headline.zgzsrc.com/wp-rest/v2/', // 接口
      data: {
        api: 'kxid',
        id: id,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading();
        myThis.setData({
          items: res.data,
        })
        console.log(res.data);
      },
      fail(res) {
        wx.showToast({
          title: '无法加载数据',
        });
      }
    });
  },
})