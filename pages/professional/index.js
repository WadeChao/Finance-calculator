// pages/professional/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expertFuncList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      expertFuncList: this.getProfessionalFuncs()
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

  getProfessionalFuncs: function () {
    let professionalfuncList = [{ id: 0, name: '复利终值' }, { id: 1, name: '复利现值' }]
    return professionalfuncList;
  },

  navigateTo: function () {
    wx.navigateTo({ url: '../compoundFinal/compoundFinal' })
  },

})