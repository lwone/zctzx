// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    navbarActiveIndex: 0,
    navbarTitle: [
      "所有",
      "Top250",
      "口碑榜",
      "新片榜",
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myThis=this;

    wx.setNavigationBarTitle({
      //config.getWebsiteName+
      title: '时政快讯',
      success: function (res) {
        // success
      }
    });

    wx.request({
      url: 'https://headline.zgzsrc.com/kxapi', // 接口
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {

        myThis.setData({
            items:res.data
          });
          console.log(res.data);
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

  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  /**
   * 
   */
  onBindAnimationFinish: function ({ detail }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  }


})