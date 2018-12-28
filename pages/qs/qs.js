/**
 * author:Lwei
 * 
 * 为了证才通问答页面，单独开发页面。
 * 
 */

//var WxParse = require('../../wxHtmltojson/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var mythis=this;
    
    wx.setNavigationBarTitle({
      //config.getWebsiteName+
      title: '问答专区',
      success: function (res) {
        // success
      }
    });

    wx.request({
      url:'https://headline.zgzsrc.com/kx-xcx',
      method: 'POST',
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {},
      success: function (res) {

        mythis.handlerhtml(res.data);

      }});

    
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

  /**
   * 处理接收的富文本
   */

  handlerhtml:function(res){
      //console.log(res);
      
    var htmlarr = WxParse.wxParse('article', 'html', res, this,5);

     console.log(htmlarr);

  }
})