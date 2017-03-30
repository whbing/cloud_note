
///////////////////////////////////////////////////////////////////////////////////////////


/****-over
 * 添加笔记本
 * @param createNoteBean 
 * @param successFunc  成功回调函数
 * @param errorFunc    失败回调函数
 */
function addnote(createNoteBean,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	var noteBook = JSON.stringify(createNoteBean);
	//请求
	jQuery.support.cors = true;
	$.ajax({
		type:"post",
		url:basePath + loginUserId+"/noteBook/createNoteBook",
		data:noteBook,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc)){
				successFunc(result,createNoteBean.cnNotebookName,result.resource);
			}
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}


/***-over
 * 删除笔记本
 * @param createNoteBean
 * @param successFunc
 * @param errorFunc
 */
function deletenote(createNoteBean,successFunc,errorFunc,delete_dom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"delete",
		url:basePath + loginUserId+"/noteBook/deleteNoteBook/" + createNoteBean.cnNotebookId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,delete_dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}



/***-over
 * 笔记本列表json
 * @param successFunc
 * @param errorFunc
 */
function notebookNormalList(successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url:basePath + loginUserId+"/noteBook/getNormalList",
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
	
}

/***-over
 * 笔记本特殊列表json
 * @param createNoteBean
 * @param successFunc
 * @param errorFunc
 */
function notebookSpecialList(successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/noteBook/getSpecialList",
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result);
		},
		error:function(result){			
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}


/***-over
 * 重命名笔记本
 * @param updateNoteBean
 * @param successFunc
 * @param errorFunc
 */
function updateNoteBook(updateNoteBean,successFunc,errorFunc,dom){
	var loginUserId = getCookie(cookie_key);
	var noteBook = JSON.stringify(updateNoteBean);
	//请求
	jQuery.support.cors = true;
	$.ajax({
		type:"put",
		url:basePath + loginUserId+"/noteBook/updateNoteBook",
		data:noteBook,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			xhr.setRequestHeader('Content-Type', 'application/json');
			token = getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc)){
				successFunc(result,updateNoteBean.cnNotebookName,updateNoteBean.cnNotebookId,dom);
			}
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
	
}






