// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    navbarActiveIndex: 0,
    navbarTitle: [
      "全部",
      "政策法规",
      "资格考试",
      "行业新闻",
      "职场新闻",
      "其它要闻",
    ],
    banner: [
      'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122807271736.png',
      'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122610455123.png',
      'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122807271736.png',
      'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122610455123.png', 'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122807271736.png',
      'https://headline.zgzsrc.com/wp-content/uploads/2018/12/2018122610455123.png',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var myThis = this;

    wx.setNavigationBarTitle({
      //config.getWebsiteName+
      title: '时政快讯',
      success: function(res) {
        // success
      }
    });

    var api = 'kx';
    var fid = 'f' + this.navbarActiveIndex;
    myThis.getdata(api, fid);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    let navbarTapIndex = this.data.navbarActiveIndex;
    var api = 'kx'
    var fid = 'f' + navbarTapIndex;

    console.log(fid);

    if (fid != 'f0') {
      api = 'kxf'
    }

    this.getdata(api, fid);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
        wx.showToast({
          title: '少侠,已经加载到天涯海角！',
          icon:'none'
        })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 点击导航栏
   */
  onNavBarTap: function(event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    });

    var api = 'kx'
    var fid = 'f' + navbarTapIndex;

    console.log(fid);

    if (fid != 'f0') {
      api = 'kxf'
    }

    this.getdata(api, fid);
  },

  /**
   * 
   */
  onBindAnimationFinish: function({
    detail
  }) {

    var lastfid = 'f' + this.data.navbarActiveIndex;

    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })

    var api = 'kx'
    var fid = 'f' + this.data.navbarActiveIndex;

    console.log(fid);

    if(lastfid!=fid){
      if (fid != 'f0') {
        api = 'kxf'
      }

      this.getdata(api, fid);
    }

  },

  getdata: function(api, fid) {
    var myThis = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    wx.request({
      url: 'https://headline.zgzsrc.com/wp-rest/v2/', // 接口
      data: {
        api: api,
        fid: fid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        setTimeout(function() {
          wx.hideLoading();
          wx.stopPullDownRefresh();
        }, 1000);

        myThis.setData({
          items: res.data,
        })
        //console.log(res.data);
      },
      fail(res) {
        wx.showToast({
          title: '无法加载数据',
        });
      }
    });
  },

  move: function() {
   
  }


})