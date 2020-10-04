  function translationresult()
  {
	
	var appid = '20200928000575439'; //appid for api connection
	var key = 'fNMLwLC33HwttrVt1zQN'; // key
	var salt = (new Date).getTime();
	var query = document.getElementById('textarea1').value;
	var from = 'en';
	var to = 'zh';
	var str1 = appid + query + salt +key;
	var sign = MD5(str1);
	  $.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
   	 	type: 'get',
    	dataType: 'jsonp',
    	data: {
        	q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
    	},
    success: function (data) {
		var obj = eval(data);
       
		document.getElementById('textarea1').value=obj.trans_result[0].dst;
    	} 
	  });
   }
	  
	  
   function translationresult_cn()
  {
	
	var appid = '20200928000575439'; //appid for api connection
	var key = 'fNMLwLC33HwttrVt1zQN'; // key
	var salt = (new Date).getTime();
	var query = document.getElementById('textarea1').value;
	var from = 'zh';
	var to = 'en';
	var str1 = appid + query + salt +key;
	var sign = MD5(str1);
	  $.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
   	 	type: 'get',
    	dataType: 'jsonp',
    	data: {
        	q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
    	},
    success: function (data) {
		var obj = eval(data);
       
		document.getElementById('textarea1').value=obj.trans_result[0].dst;
    	} 
	  });
   }
	  
	  
   function resetImage()
   {
		var n1=Math.floor(Math.random()*100+1);
		var imgurl = "https://picsum.photos/200?random=" + String(n1);
		document.getElementById('imgbox').src=imgurl;
   }

		 
   function outOfOrder()
   {
		var arr = document.getElementById('textarea1').value.split('');
        let temp, length = arr.length;
        for (let i = 0; i < length - 1; i++) {
			let index = Math.floor(Math.random() * (length --));
			temp = arr[index];
			arr[index] = arr[length];
			arr[length] = temp;
		}
		document.getElementById('textarea1').value=arr.join('');
   }
// JavaScript Document