/*
 * 获取参加活动笔记列表
 */
//成功回调方法
function successFunc_activity_list(result){
	if(result.status == 1){
		var i=0,a='';
		a=result.resource;
		while(a[i]){
			$('#action_part_1 ul').append('<li class="online"><a><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+a[i].cnNoteActivityTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_like"><i class="fa fa-star-o"></i></button></a></li>');
			$('#action_part_1 ul li:last').data({
				cnNoteActivityId:a[i].cnNoteActivityId,
				cnNoteId:a[i].cnNoteId,
				cnNoteActivityTitle:a[i].cnNoteActivityTitle
			});
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_activity_list(result){
	alert("获取参加活动笔记列表失败");
}
/*
 * 点击活动笔记
 */
//成功回调方法
function successFunc_ac_note(result){
	if(result.status == 1){
		$('#content_body').append('<h4><strong>笔记标题: </strong>'+result.resource.cnNoteActivityTitle+'</h4>')
		$('#content_body').append(result.resource.cnNoteActivityBody);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_ac_note(result){
	alert("获取内容失败");
}
/*
 * 获取选择参加活动笔记本
 */
//成功回调方法
function successFunc_ac_nblist(result){
	if(result.status == 1){
		var i=0,a='';
		a=result.resource;
		while(a[i]){
			$('#select_notebook ul').append('<li class="online"><a><i class="fa fa-book" title="笔记本" rel="tooltip-bottom"></i> '+a[i].cnNotebookName+'</a></li>');
			$('#select_notebook ul li:last').data({
				cnNotebookId:a[i].cnNotebookId
			});
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_ac_nblist(result){
	alert("获取参加活动笔记列表失败");
}
/*
 * 获取选择参加活动笔记列表
 */
//成功回调方法
function successFunc_ac_nlist(result,noteBook_Id){
	if(result.status == 1){
		var i=0,a='';
		a=result.resource;
		while(a[i]){
			$('#select_note ul').append('<li class="online"><a><i class="fa fa-file-text-o" title="笔记本" rel="tooltip-bottom"></i> '+a[i].cnNoteTitle+'</a></li>');
			$('#select_note ul li:last').data({
				cnNoteId:a[i].cnNoteId,
				noteBookId:noteBook_Id
			});
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_ac_nlist(result){
	alert("获取参加活动笔记列表失败");
}
/*
 * 选定参加活动笔记
 */
//成功回调方法
function successFunc_sure_note(result,ddom){
	if(result.status == 1){
		$('#first_action ul').prepend(ddom);
		$('#first_action ul li:first').data('cnNoteActivityId',result.resource);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_sure_note(result){
	alert("参加活动失败");
}
/*
 * 获取活动列表
 */
//成功回调方法
function successFunc_ac(result){
	if(result.status == 1){
		var i=0,a=result.resource;
		while(a[i]){
			var d=i%3;
			var rol=i%4;
			if(rol==0){
				rol='bg-primary';
			}else if(rol==1){
				rol='bg-danger';
			}
			else if(rol==2){
				rol='bg-inverse';
			}else{
				rol='bg-warning';
			};
			//alert(rol);
			$('#col_'+d).append('<div id="contentfeeds'+i+'" class="panel panel-animated panel-default animated fadeInUp" style="visibility: visible;"><div class="panel-body bordered-bottom"><div class="no-padding jumbotron '+rol+'"><p class="lead"><a href="activity_detail.html#'+a[i].cnActivityId+'">'+a[i].cnActivityTitle+'</a></p></div><p class="text-muted">'+a[i].cnActivityBody+'</p><div class="text-muted"><small style="color:red;">活动结束时间:'+a[i].cnActivityEndTime+'</small></div></div></div>');
			
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_ac(result){
	alert("获取活动列表失败");
}
/*
 * 收藏活动笔记
 */
//成功回调方法
 function successFunc_lb(result,ddom){
 	if(result.status == 1){
		$('footer div').children('strong').text('收藏成功').end().fadeIn(100);
		setTimeout("$('footer div').fadeOut(600)",1000);
 	}else if(result.status == -1){
 		//输出错误原因
 		alert(result.message);
 	}
 }
 //异常回调方法
 function errorFunc_lb(result){
 	alert("收藏笔记失败");
 }
