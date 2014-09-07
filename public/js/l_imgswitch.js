$(document).ready(function(){
  var term = $('#term');
  var imageview = $('#imageview');
  var imageviewimg = $('#imageviewimg');
  var imageviewterm = $('#imageviewterm');
  var imageviewclose = $('#imageviewclose');
  var clicktostart = $('#clicktostart');
  var started = false;
  var colors = ['7fffff', '80068d', '7ff971', '7fdf3a', '7fc504', '80a3d6', '7f41f1', '7f62b6', '7f06f6', '7ce075', '9ce075', '6f41f1', '80cb28', '777318', '11b089', '7d288c', '8a92a2', '79b3d0', '828240', '905531', '6ee631', '788658', 'd7c84a', '85460a', 'a3eab2', '6765fd', '8eb1c3', '78ef34', '831f89', '7bda50', '88bac6', '93fe5b', '7b9239', '5be0de', '7147ad', '7ad42b', 'c212d6', '832617', '1b3679', '58c7e2', '7ebedf', '7851eb', '56fd21', '375254', '6a8c14', '7ce075', '56809c', '69c0eb', '8ec56c', '76a7ef', '5b98c7', '778033', '640b77', 'c4c2f7', '9a4a8b', '95f06e', '8bb98b', '8374bb', 'd5bc00', '90e55f', '7d7dbe', '6a1cab', '70c49b', '83126e', '8075f6', '8c0ebe', '91c432', '91bda4', '76cf41', '8631f8', '967a0e', '7d566c', '2f3b64', 'cc7e27', '39374b', '749517', 'b46737', 'c154c8', 'b3dd97', 'abc6a7', '4119cd', 'a4538e', '5bda50', 'a1a9fb', '77d566', '7ee631', '8bcd35', '6844cf', '2ed916', '673eaa', '83c9ee', '80b77f', 'a9e83d', 'c1d7db', 'ec5047', 'a86c21', '4f41f1', '7f559a', '833332', 'af9723', 'f631f7', '82f1a9', 'f85878', 'adbf47', '79a6b4', '852545', '673eaa', '5d70a3', 'a2e48d', '7de00c', '7fcb9', '4dd97f', '83a929', 'b2c3c9', '8bcd35', '32f1a9', 'a1eb84', '93afb7', '1353f7', 'b8c7e1', '79fbe6', '76e978', '807c84', 'a1a9fb', '7786c1', '88db8b', '5b50b0', 'bfb15a', '99b3cf', '4c432c', '750480', 'cc7799', 'a01a36', '7f4f0d', '7c6a7e', '4fe5c8', '6d70a3', '8240b6', 'e83e41', '982a98', '649ba5', '6ef9da', '9758e1', '5b7802', '540b77', '829c77', '793dd9', 'd2eb1b', 'a902dd', '5e631f', '99e1af', '73dd97', '75c91c', '7a43fd', '1b020c', '767a0f', '4779a6', '4dd2f1', '7a5119', 'be90fe', '869ad3', '7ac710', '86594a', '913404', '9e5c91', '8c432c', '7d6a15', '80899f', '801a36', '7fe5c8', '80068d', '7fffff', '712d76', '9f41f1', '1db8ba', 'cb2feb', '286c22', '97ced8', 'a72b01', '3b9f55', '65aee5', '9bac70', 'ca5119', '77c1bd', 'a32ca4', '806f68', '79ad42', '78a08f', '69f559', '7d07c7', '3ca57a', '8d9167', '8b6ae7', '6d6a15', '619ce0', '7eecbf', '82d0e4', '3e5603', '793dd9', '89e83d', '7e075e', 'b837b3', '651eb7', '4c5047', '879a6a', '859b3c', '40b77f', '1c01a3', 'c03afa', '92bd3b', '7e147a', 'a45a1c', '51d7db', '70aa64', '47ced8', 'a559b3', '453261', '53a929', '7068db', '68ce6f', '88240a', '5b6459', 'ad1b70', '260aa6', '5fcb91', '5cd9e7', '0', '7e3bcc', 'a97246', '67dbf4', '79ba5d', '70ff96', '7f6fd1', '744d00', '8a6b50', '66c8b3', '8bb98b', '404ea4', '766665', '904816', '4cac07', '5c710c', '85bc01', '5cc63e', '72f1a9', '6e5c91', '8acd9d', '6ba5e2', '8ccccc', 'a0f908', '74d013', '8432c9', '758793', 'c1ff2d', '63404e', '74d6a0', '77bb2f', 'bc432b', '51a9fb', '8075f6', '7aa64b', '76c8b3', 'a5fd8a', '597f62', '644673', '7b851e', '7ced90', '6ed916', '60902d', '65bc01', '8dd97e', 'a5bc00', '679a6a', '72d0e4', '7f0068', '66e2ea', '5b9239', '95e353', 'a631f7', '827bb2', '6f837a', '350b0e', 'b2267f', '96e978', 'a44672', '98c154', '7cf41e', '402752', '79e83d', '658793', '5d6388', '44d013', '8cb295', '9ab9f4', 'a86594', 'c096ba', '709d48', '73404e', '85182a', '8adab9', '26d5cf', '9afb7d', '5645a1', '6fe5c8', 'b78d4f', '5ea4a8', '7f0068', '6367a0', '2d70a3', '84fdf3', 'b4e3bc', '8161e4', '79374b', '7ce703', '4fd21f', '758105', 'a5f06e', '5de00c', 'b0d844', '837b49', '8a5119', 'b573e', 'a05bbf', '3ba5e3', '89930b', '469446', '93bcd2', '70be0d', '944d00', '8b6ae7', '86a161', '922d0d', '73f140', '860418', '72d772', '8205bb', '65bc01', '8154c9', '840b77', '769445', '78d4fd', '7e703a', '7ef9da', '7bda50', '8a7ef9', '80902d', '7a1cab', '842c3c', '835a85', '7ef34c', '83c9ee', '7ed916', '805bbf', '7f0d83', '7e978c', '80a3d6', '7f27ba', '805531', '807c84', '805bbf', '804ea4', '802ddf', '7ff971', '7fcb91', '809d48', '7fcb91', '801a36', '7ff2e4', '7fc504', '8020c4', '7fe5c8', '7fffff', '7fffff', '7ff971', '7fffff', '80068d', '7fec56']

  function nullimg(){
	this.css = ret;
	this.attr = ret;
	this.hide = ret;
	function ret(){
	  return;
	}
  }
  function nullstage(){
	this.find = newnullelem;
	this.attr = ret;
	function newnullelem(){
	  return new nullelem;
	}
	function ret(){
	  return;
	}
  }
  function nullelem(){
	this.html = ret;
	this.show = ret;
	this.css = ret;
	this.height = retnum;
	function ret(){
	  return;
	}
	function retnum(){
	  return 0;
	}
  }


  var lastImg;
  var currentImg = new nullimg;
  var lastStage;
  var currentStage = new nullstage;
  var nextImgNum = 4; // got rid of the first four

  $('.stage_term').click(showTerm);
  $('.stage').click(showTermStageClick);
  
  
  function showTerm(e) {
      e.preventDefault();
      var stage = $(this).parent();
      var img = stage.find('.audio_img');
      var src = img.attr('src');
      var term = img.attr('term');
      imageviewimg.attr('src', src);
      imageviewterm.html(term);
      imageview.show();
      stage.css('background', stage.attr('altcolor'));
  }
  
  function showTermStageClick() {
      var stage = $(this);
      var img = stage.find('.audio_img');
      var src = img.attr('src');
      var term = img.attr('term');
      imageviewimg.attr('src', src);
      imageviewterm.html(term);
      imageview.show();
      stage.css('background', stage.attr('altcolor'));
  }
  
  function showScreen() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var screen = $('#screen');
    screen.css('width', width + 'px').css('height', height + 'px');
    $('#screenwrap').show();
  }
  
  function hideScreen() {
    $('#screenwrap').hide();
  }
  
  function showImageWide() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    showScreen();
    var imagewidestagewrap = $('#imagewidestagewrap');
    var imagewidestage = $('#imagewidestage');
    // imagewidestage.css('min-width', width * (2/3) + 'px').css('min-height', height * (2/3) + 'px');
    // imagewidestage.css('top', (height - (height * 2/3))/2 + 'px');
    // imagewidestage.css('left', (width - (width * 2/3))/2 + 'px');
    imagewidestagewrap.show();
    $('#showimagewide').html('¿');
  }
  
  function closeImageWide() {
    hideScreen();
    $('#imagewidestagewrap').hide();
    $('#showimagewide').html('!');
  }
  
  $('#showimagewide').click(
    function(e){
      e.preventDefault();
      if($(this).html() == '!'){
        showImageWide();
      } else {
        closeImageWide();
      }
  });
  
  imageviewclose.click(
    function(e){
      e.preventDefault();
      imageview.hide();
  });
  
  var interval = setInterval(function() {
    if(started) {
      clearInterval(interval);
    } else {
      var ellipses = $('.ellipses');
      var len = ellipses.html().length;
      if(len == 1) {
        ellipses.html('。。');
      } else if(len == 2) {
        ellipses.html('。。。');
      } else {
        ellipses.html('。');
      }
    }
  }, 375);
  
  $(window).load(function(){
    if(!started){
      clicktostart.show();
    }
  });
  
  var time = 24000;
  setTimeout(function(){
    if(!started){
      clicktostart.show();
    }
  }, time);
  
  clicktostart.click(function(e) {
    e.preventDefault();
    $('#term').html('。。。');
    start();
  });
  
  function start() {
    started = true;
    var wait_ms = 375;
    $('#song').get(0).play();
    setInterval(function(){
      lastImg = currentImg;
      lastStage = currentStage;
      currentStage.attr('altcolor', '#' + colors[nextImgNum]);
      var stage_term = lastStage.find('.stage_term');
      stage_term.html(lastImg.attr('term'));
      var term_height = stage_term.height();
      stage_term.css('margin-top', 40 - (term_height/2) + 'px');
      stage_term.css('display', 'inline-block');
      lastImg.hide();
      currentImg = $("#img" + nextImgNum);
      currentStage = currentImg.parent();
      currentStage.show();
      term.html(currentImg.attr('term'));
      var imagewidestageimg = $('#imagewidestageimg');
      imagewidestageimg.css('max-height', window.innerHeight - 80 + 'px');
      imagewidestageimg.css('max-width', window.innerWidth - 80 + 'px');
      imagewidestageimg.attr('src', currentImg.attr('src'));
      
      $('#imagewidestage').css('left', (window.innerWidth - imagewidestageimg.width() - 40)/2 + 'px');
      $('#imagewidestage').css('top', (window.innerHeight - imagewidestageimg.height() - 40)/2 + 'px');
      
      nextImgNum++;
    }, wait_ms);
  }
});