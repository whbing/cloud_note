/***
 * 获得活动列表
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getActionList(successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/action/getActionList",
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
 * 用户笔记参加活动
 * @param noteId 笔记id
 * @param activityId 活动id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function createNoteActivity(noteId,activityId,successFunc,errorFunc,ddom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/action/createNoteActivity/"+noteId + "/to/"+activityId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,ddom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}





/***-over
 * 查询指定用户活动笔记本的笔记列表
 * @param noteBookId 笔记本id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getActionNoteList(noteBookId,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/action/getActionNoteList/"+noteBookId,
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
 * 查询指定活动下已参加活动的笔记列表
 * @param activityId 活动id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getActionNotesByActivityId(activityId,beginIndex,endIndex,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/action/getActionNotesByActivityId/"+activityId+"/"+beginIndex+"/"+endIndex,
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




/***
 * 查询指定id的活动笔记
 * @param activityId 活动笔记id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function findNoteActivityById(ntoeActivityId,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/action/findNoteActivityById/"+ntoeActivityId,
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