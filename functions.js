   function searchcap()
   {
	let nation_text = document.getElementById('textarea1').value;
	let Api_url = "https://restcountries.eu/rest/v2/name/" + nation_text;
	fetch(Api_url)
	.then(response => response.json())
	.then(data => {
			if(data.length >= 1)
			{
				let res_string="";
				for(let a= 0; a<= data.length-1; a++)
					{
						res_string= res_string + data[a].name + ":" + data[a].capital + ' \n';
					}
				document.getElementById('textarea1').value=res_string;
			}
			else
			{
				if(data.length == 1)
				{
					document.getElementById('textarea1').value = data[0].name + ":" + data[0].capital;
				}
				else{
					document.getElementById('textarea1').value = "no result";
				}
			}
		})
   }  

   function resetImage()
   {
		let n1=Math.floor(Math.random()*100+1);
		let imgurl = "https://picsum.photos/200?random=" + String(n1);
		document.getElementById('imgbox').src=imgurl;
   }	

   function outOfOrder()
   {
		let arr = document.getElementById('textarea1').value.split('');
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