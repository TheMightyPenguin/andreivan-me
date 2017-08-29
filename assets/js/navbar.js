var navBar = {
  init: function init() {
    this._bindElements();
    this._createFlags();
    this._bindEvents();
  },

  _bindElements: function _bindElements() {
    this.mobileMenuElements = jQuery('#mobile-nav, .menu, #mobile-nav-toggle, .mobile__overlay');
    this.mobileMenuToggle = jQuery('#mobile-nav-toggle');
    // Click event will be atteched to these to close the menu
    this.mobileMenuClosers = jQuery('.nav__link, .mobile__overlay');
    this.navBar = jQuery('.menu');
  },

  _createFlags: function _createFlags() {
    this.loopResetTime = 11;
    this.linkWasClicked = false;
  },

  _bindEvents: function _bindEvents() {
    this._handleMobileNavEvents();
  },

  _handleNavBarEvents: function _handleNavBarEvents() {
    var that = this;

    this.navBar.headroom({
      onUnpin: function() {
        jQuery(this).toggleClass(this.classes.unpinned, !that.linkWasClicked);
        jQuery(this).toggleClass(this.classes.pinned, that.linkWasClicked);
        that.linkWasClicked = false;
        return;
      }
    });
  },

  _handleMobileNavEvents: function _handleMobileNavEvents() {
    var that = this;

    this.mobileMenuToggle.on('click', function(event) {
      that.mobileMenuElements.toggleClass('active');
    });

    this.mobileMenuClosers.on('click', function(event) {
      that._closeMenu();
    });
  },

  _closeMenu: function _closeMenu() {
    this.mobileMenuElements.removeClass('active');
    this.linkWasClicked = true;
  }
}

jQuery(document).ready(function () {
  navBar.init();
});
