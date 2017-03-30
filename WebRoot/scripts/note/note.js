/***-over
 * 获得普通笔记本下的笔记列表
 * @param createNoteBean 
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getNormalNoteList(noteBookId,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/getNormalNoteList/"+noteBookId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,noteBookId);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}





/***-over
 * 创建笔记
 * @param createNoteBean 
 * @param noteBookId 笔记本id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function createNormalNote(createNoteBean,successFunc,errorFunc,name){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"post",
		url: basePath + loginUserId+"/note/createNormalNote/"+createNoteBean.cnNotebookId,
		dataType : "json",
		data:JSON.stringify(createNoteBean),
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,name);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}





/***-over
 * 更新笔记
 * @param createNoteBean 笔记实体对象
 * @param noteBookId 笔记本id
 * @param successFunc 
 * @param errorFunc 
 */
function updateNormalNote(createNoteBean,successFunc,errorFunc,note_title){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"put",
		url: basePath + loginUserId+"/note/updateNormalNote/"+createNoteBean.cnNotebookId,
		dataType : "json",
		data:JSON.stringify(createNoteBean),
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,note_title);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}


/***-over
 * 删除笔记
 * @param delNoteBean 
 * @param successFunc 
 * @param errorFunc 
 */
function deleteNormalNote(delNoteBean,successFunc,errorFunc,dom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"delete",
		url: basePath + loginUserId+"/note/deleteNormalNote/"+delNoteBean.cnNoteId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}




/***-over
 * 查询回收站笔记列表
 * @param noteBookId 笔记本id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getRecycleNoteList(noteBookId,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/getRecycleNoteList/"+noteBookId,
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
 * 删除回收站笔记
 * @param noteBean 笔记实体
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function deleteRecycleNote(noteBean,successFunc,errorFunc,dom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"delete",
		url: basePath + loginUserId+"/note/deleteRecycleNote/"+noteBean.cnNoteId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}





/***-over
 * 恢复回收站笔记到指定的笔记本
 * @param noteBean 笔记实体
 * @param noteBookId 笔记本id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function updateRecycleNote(noteBean,noteBookId,successFunc,errorFunc,dom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"put",
		url: basePath + loginUserId+"/note/updateRecycleNote/" + noteBean.cnNoteId+"/to/" + noteBookId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}





/***-over
 * 移动笔记
 * @param noteBean 笔记实体
 * @param noteBookId 笔记本id
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function moveNote(noteBean,noteBookId,successFunc,errorFunc,dom){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"put",
		url: basePath + loginUserId+"/note/moveNote/" + noteBean.cnNoteId+"/to/" + noteBookId,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
			successFunc(result,dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
			errorFunc(result);
		}
	});
}



/***
 * 查询本用户活动笔记列表
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
		url: basePath + loginUserId+"/note/getActionNoteList/"+noteBookId,
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
 * 查询笔记内容
 * @param noteBean 笔记
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getNoteDetail(noteBean,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/getNoteDetail/"+noteBean.cnNoteId,
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
 * 共享笔记
 * @param noteBean 笔记
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function createShareNote(noteBean,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/createShareNote/"+noteBean.cnNoteId,
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
 * 搜索共享笔记列表
 * @param searchKey 关键字
 * @param beginIdx 开始
 * @param endIdx   结束
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function searchShareNote(searchKey,beginIdx,endIdx,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	searchKey=encodeURIComponent(searchKey,"UTF-8");
	searchKey=encodeURIComponent(searchKey,"UTF-8");
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/searchShareNote/"+searchKey+"/"+beginIdx+"/"+endIdx,
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
 * 查询共享笔记内容
 * @param noteBean 笔记
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function getShareNoteDetail(noteBean,successFunc,errorFunc){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/getShareNoteDetail/"+noteBean.cnShareId,
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
 * 收藏共享笔记
 * @param noteBean 笔记
 * @param successFunc 请求成功回调
 * @param errorFunc 异常失败回调
 */
function likeNote(noteBean,successFunc,errorFunc,like_dom,noteType){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/likeNote/"+noteBean.cnShareOrActivityId+"/"+noteType,
		dataType : "json",
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if($.isFunction(successFunc))
				successFunc(result,like_dom);
		},
		error:function(result){
			if($.isFunction(errorFunc))
				errorFunc(result);
		}
	});
}




/***
 * 判断是否收藏过这个笔记
 * @param shareBean 笔记
 */
function CheckLikeNote(noteBean,successFunc,errorFunc,like_dom,noteType){
	var loginUserId = getCookie(cookie_key);
	//允许跨域请求
	jQuery.support.cors = true;
	$.ajax({
		type:"get",
		url: basePath + loginUserId+"/note/checkHasLiked/"+noteBean.cnShareOrActivityId+"/"+noteBean.cnNoteTitle+"/"+noteType,
		dataType : "json",
		//beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},//这里设置header
		beforeSend: function(xhr){
			var token=getCookie(loginUserId+"_token");
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', token);
		},
		success:function(result){
			if(result.status == 1){
				//判断可以收藏了就执行收藏方法
				likeNoteAction(noteBean,successFunc,errorFunc,like_dom);
			}else{
				alert(result.message);
			}
		},
		error:function(result){
			alert(result.message);
		}
	});
}
