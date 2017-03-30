/*var createNoteBean={
		notename:"create....",
		noteDesc:"笔记本说明"
		
}*/
/*
 * sp_notebook_list传进来的特殊笔记本列表
 * 正常：normal
 * 收藏：favorites
 * 回收站：recycle
 * 活动:action
 * 推送:push
 */
var sp_note_list=undefined;
/*
 * 创建笔记本
 */
//成功回调方法
function successFunc_addnb(result,get_name,noteId){
	if(result.status == 1){
		var dom_data=$('.contacts-list:first li:first');
		dom_data.after('<li class="online"><a href="#"><i class="fa fa-book" title="笔记本" rel="tooltip-bottom"></i> '+get_name+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button></a></li>');
		//alert(noteId);
		dom_data.next().data('cnNotebookId',noteId);
		$('.close,.cancle').trigger('click');
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_addnb(result){
	alert("添加笔记本失败");
}
/*
 * 删除笔记本
 */
//成功回调方法
function successFunc_deletenb(result,dom){
	if(result.status == 1){
		dom.remove();
		$('.close,.cancle').trigger('click');
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_deletenb(result){
	alert("删除笔记本失败");
}
/*
 * 笔记本列表json
 */
//成功回调方法
function successFunc_nblist(result){
	if(result.status == 1){
		//alert(result.resource[0].cnNotebookName);
		var a=undefined,i=0;
		a=result.resource;
		while(a[i]){
			$('#first_side_right ul').append('<li class="online"><a><i class="fa fa-book" title="笔记本" rel="tooltip-bottom"></i> '+a[i].cnNotebookName+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button></a></li>');
			$('#first_side_right li:last').data('cnNotebookId',a[i].cnNotebookId);
			$('#first_side_right li:last').data('cnNotebookTypeId',a[i].cnNotebookTypeId);
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_nblist(result){
	if(result.status == "401"){
		alert("登录过期，请重新登录");
		location.href="log_in.html";
	}else
	alert("获取笔记本列表失败");
}
/*
 * 笔记本特殊列表json
 */
//成功回调方法
function successFunc_spnblist(result){
	if(result.status == 1){
		var a=undefined;
		a=result.resource;
		$('#first_side_right li:first').data('cnNotebookId',a.push.cnNotebookId);
		$('#rollback_button').data('cnNotebookId',a.recycle.cnNotebookId);
		$('#like_button').data('cnNotebookId',a.favorites.cnNotebookId);
		$('#action_button').data('cnNotebookId',a.action.cnNotebookId);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_spnblist(result){
	if(result.status == "401"){
		alert("登录过期，请重新登录");
		location.href="log_in.html";
	}else{
		alert("系统故障，获取特殊笔记本列表ID失败");
	}
	
}
/*
 * 重命名笔记本
 */
//成功回调方法
function successFunc_renamenb(result,nb_name,nb_id,dom){
	if(result.status == 1){
		var result_dom='<i class="fa fa-book" title="笔记" rel="tooltip-bottom"></i> '+nb_name+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button>';
		dom.children('a').html(result_dom);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_renamenb(result){
	alert("获取特殊笔记本列表ID失败");
}
