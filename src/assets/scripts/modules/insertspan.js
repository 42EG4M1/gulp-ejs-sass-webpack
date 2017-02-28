var InsertSpanTag = function(element, options) {
  this.element = element;
  this.settings = {
    margin: '5px',
    space: '10px'
  };

  this.args = arguments[1];
  this.extend({}, this.settings, this);
  this.options = this.settings;
  this.init();
};

InsertSpanTag.prototype.extend = function() {
  if ( this.args != null ) {
    for (var key in this.settings) {
      if ( this.args.hasOwnProperty(key) ) {
        this.settings[key] = this.args[key];
      }
    }
  }
  return this;
};

InsertSpanTag.prototype.init = function() {
  var chars = this.element.textContent.split('');
  var spanMargin = "<span style='margin-left:" + this.options.margin + "'>";
  var after = "";
  for (var i = 0; i < chars.length; i++) {
    after += (i === 0 ? '<span>' : spanMargin) + chars[i] + '</span>';
  }
  var beforeText = new RegExp(spanMargin + '\\s' + '<\\/span>' + spanMargin, 'gi');
  var afterText = "<span style='margin-left:" + this.options.space + ";'>";
  var trim = after.replace(beforeText, afterText);
  // console.log(this.args != null);
  // console.log(this.options);
  this.element.innerHTML = trim;
  return trim;
};

module.exports = InsertSpanTag;