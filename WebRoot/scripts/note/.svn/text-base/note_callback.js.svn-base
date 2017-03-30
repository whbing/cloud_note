/*
 * 获取笔记列表
 */
//成功回调方法
function successFunc_normalbl(result){
	if(result.status == 1){
		//alert(result);
		var i=0,a=result.resource;
		while(a[i]){
			$('#second_side_right ul').append('<li class="online"><a><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+a[i].cnNoteTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button></a><div class="note_menu" tabindex="-1"><dl><dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt></dl></div></li>');
			$('#second_side_right ul li:last').data('cnNoteId',a[i].cnNoteId);
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}

// 搜索分享笔记列表 填充比列表
function successFunc_sharebl(result){
	if(result.status == 1){
		var i=0,a=result.resource;
		while(a[i]){
			$('#second_side_right ul').append('<li class="online"><a><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+a[i].cnNoteTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button></a><div class="note_menu" tabindex="-1"><dl><dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt></dl></div></li>');
			$('#second_side_right ul li:last').data('cnNoteId',a[i].cnNoteId);
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}

//异常回调方法
function errorFunc_normalbl(result){
	alert("获取笔记列表失败");
}
/*
 * 创建笔记
 */
//成功回调方法
function successFunc_create_note(result,name){
	if(result.status == 1){
		//alert(name);
		$('#pc_part_2 ul').prepend('<li class="online"><a><i class="fa fa-file-text-o" title="笔记" rel="tooltip-bottom"></i> '+name+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button></a><div class="note_menu" tabindex="-1"><dl><dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt><dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt></dl></div></li>');
		//alert(result.resource.cnNoteTitle);
		$('#pc_part_2 ul li:first').data('cnNoteId',result.resource);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_create_note(result){
	alert("创建笔记失败");
}
/*
 * 更新笔记
 */
//成功回调方法
function successFunc_update_note(result,name){
	if(result.status == 1){
		//alert(name.dom);
		name.dom.children('.checked').html('<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+name.title+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>');
		$('footer div').children('strong').text('保存成功').end().fadeIn(100);
		setTimeout("$('footer div').fadeOut(600)",1000);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_update_note(result){
	alert("修改笔记失败");
}
/*
 * 查询笔记内容
 */
//成功回调方法
function successFunc_get_note(result){
	if(result.status == 1){
		//alert(result.resource.cnNoteBody);
		result.resource?result.resource:{ };
		$('#input_note_title').val(result.resource.cnNoteTitle);
		um.setContent(result.resource.cnNoteBody);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_get_note(result){
	alert("获取笔记详情失败");
}
/*
 * 删除笔记
 */
//成功回调方法
function successFunc_delete_note(result,dom){
	if(result.status == 1){
		dom.remove();
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_delete_note(result){
	alert("删除笔记详情失败");
}
/*
 * 查询回收站笔记列表
 */
//成功回调方法
function successFunc_recycle_note(result){
	if(result.status == 1){
		//alert(result);
		var i=0,a=undefined;
		a=result.resource;
		while(a[i]){
			$('#pc_part_4 ul').append('<li class="disable"><a><i class="fa fa-file-text-o" title="回收站笔记" rel="tooltip-bottom"></i> '+a[i].cnNoteTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button><button type="button" class="btn btn-default btn-xs btn_position_2 btn_replay"><i class="fa fa-reply"></i></button></a></li>');
			$('#pc_part_4 ul li:last').data('cnNoteId',a[i].cnNoteId);
			i++;
		}
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_recycle_note(result){
	alert("获取回收站笔记列表失败");
}




/***
 * 查询共享笔记列表
 * 成功回调方法
 */
function successFunc_like_note(result){
	if(result.status == 1){
		//alert(result);
		var i=0,a=undefined;
		a=result.resource;
		$.each(result.resource,function(idx,item){ //循环对象取值
			$('#pc_part_7 ul').append('<li class="idle"><a><i class="fa fa-file-text-o" title="收藏笔记" rel="tooltip-bottom"></i> '+item.cnNoteTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete"><i class="fa fa-times"></i></button></a></li>');
			$('#pc_part_7 ul li:last').data('cnNoteId',item.cnNoteId);
			
			});
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
/***
 * 查询共享笔记列表 异常回调方法
 */
function errorFunc_like_note(result){
	alert("获取共享笔记列表失败");
}

/***
 * 回收站删除
 * 成功回调方法
 */
function successFunc_recycle_delete_note(result,dom){
	if(result.status == 1){
		dom.remove();
		$('.close,.cancle').trigger('click');
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
/***
 * 回收站删除 异常回调方法
 */
function errorFunc_recycle_delete_note(result){
	alert("获取回收站笔记列表失败");
}


/***
 * 回收站恢复
 * 成功回调方法
 */
function successFunc_recycle_move_note(result,dom){
	if(result.status == 1){
		dom.remove();
		$('.close,.cancle').trigger('click');
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
/***
 * 回收站恢复 异常回调方法
 */
function errorFunc_recycle_move_note(result){
	alert("恢复系统异常");
}
/***
 * 搜索共享笔记
 * 成功回调方法
 */
function searchNote_successFunc(result,dom){
	$('#pc_part_2,#pc_part_3,#pc_part_4,#pc_part_7,#pc_part_8').hide();
	$('#pc_part_6,#pc_part_5').show();
	$('#sixth_side_right ul').empty();
	$.each(result.resource,function(idx,item){ //循环对象取值
		$('#sixth_side_right ul').append('<li class="online"><a href="#"><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+item.cnShareTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_like"><i class="fa fa-star-o"></i></button><div class="time"></div></a></li>');
		$('#sixth_side_right ul li:last').data({
			shareNoteId:item.cnShareId,
			noteName:item.cnShareTitle
		});
		});
	$('#first_side_right li a').removeClass('checked');
	$('#like_button,#action_button,#rollback_button').removeClass('clicked');
	$('#more_note').val(1);
	$(this).addClass('clicked');
	
	//
}
/***
 * 搜索共享笔记 异常回调方法
 */
function searchNote_errorFunc(result){
	alert("搜索共享笔记异常");
}
/***
 * 更多共享笔记
 * 成功回调方法
 */
function searchNote_more_successFunc(result,dom){
	$('#pc_part_2,#pc_part_3,#pc_part_4,#pc_part_7,#pc_part_8').hide();
	$('#pc_part_6,#pc_part_5').show();
	$.each(result.resource,function(idx,item){ //循环对象取值
		$('#sixth_side_right ul').append('<li class="online"><a href="#"><i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i> '+item.cnShareTitle+'<button type="button" class="btn btn-default btn-xs btn_position btn_like"><i class="fa fa-star-o"></i></button><div class="time"></div></a></li>');
		$('#sixth_side_right ul li:last').data({
			shareNoteId:item.cnShareId
		});
	});
	$('#first_side_right li a').removeClass('checked');
	$('#like_button,#action_button,#rollback_button').removeClass('clicked');
		var page = $('#more_note').val();
		$('#more_note').val(page*1+1);
	$(this).addClass('clicked');
	
	//
}
/***
 * 更多共享笔记 异常回调方法
 */
function searchNote_more_errorFunc(result){
	alert("搜索共享笔记异常");
}

/*
 * 查询共享笔记内容
 */
//成功回调方法
function successFunc_get_share_note(result){
	if(result.status == 1){
		//alert(result.resource.cnNoteBody);
		//$('#fifth_side_right .contact-body').empty();
		//result.resource?result.resource:{ };
		//$('#noput_note_title').html("<strong>笔记标题: </strong>"+result.resource.cnShareTitle);
		//$('#noput_note_title').after(result.resource.cnShareBody);
		//
		var pa=$('#fifth_side_right .contact-body');
		pa.empty();
		pa.append('<h4 id="noput_note_title"><strong>笔记标题: </strong>'+result.resource.cnShareTitle+'</h4>');
		pa.append(result.resource.cnShareBody);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//异常回调方法
function errorFunc_get_share_note(result){
	alert("获取笔记详情失败");
}
/*
 * 查询收藏笔记内容
 */
//成功回调方法
function successFunc_get_note_like(result){
	if(result.status == 1){
		result.resource?result.resource:{ };
		var pa=$('#fifth_side_right .contact-body');
		pa.empty();
		pa.append('<h4 id="noput_note_title"><strong>笔记标题: </strong>'+result.resource.cnNoteTitle+'</h4>');
		pa.append(result.resource.cnNoteBody);
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
// 查询收藏笔记内容，异常回调方法
function errorFunc_get_note_like(result){
	alert("获取笔记详情失败");
}
/*
 * 收藏共享笔记
 */
//成功回调方法
function successFunc_favorites_note(result,like_dom){
	if(result.status == 1){
		//alert("收藏成功！");
		like_dom.remove();
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//收藏共享笔记，异常回调方法
function errorFunc_favorites_note(result){
	alert("收藏共享笔记失败");
}



/***
 * 收藏删除
 * 成功回调方法
 */
function successFunc_like_delete_note(result,dom){
	if(result.status == 1){
		dom.remove();
		$('.close,.cancle').trigger('click');
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
/***
 * 收藏删除 异常回调方法
 */
function errorFunc_like_delete_note(result){
	alert("删除系统异常");
}
/*
 * 回收站笔记内容
 */
//成功回调方法
function successFunc_back(result){
	if(result.status == 1){
		var pa=$('#fifth_side_right .contact-body');
		pa.empty();
		//$('#noput_note_title').html("<strong>笔记标题: </strong>"+result.resource.cnNoteTitle);
		pa.append('<h4 id="noput_note_title"><strong>笔记标题: </strong>'+result.resource.cnNoteTitle+'</h4>');
		$('#noput_note_title').after(result.resource.cnNoteBody);
		
	}else if(result.status == -1){
		//输出错误原因
		alert(result.message);
	}
}
//收藏共享笔记，异常回调方法
function errorFunc_back(result){
	alert("获取回收站笔记内容失败");
}
/*
 * 参加活动列表
 */
//成功回调方法
 function successFunc_ac_list(result){
 	if(result.status == 1){
 		var pa=$('#eighth_side_right ul'),ie=0,ae=result.resource;
 		pa.empty();
 		while(ae[ie]){
 			pa.append('<li class="offline"><a ><i class="fa fa-file-text-o" title="笔记" rel="tooltip-bottom"></i> '+ae[ie].cnNoteTitle+'</a></li>');
 			$('#eighth_side_right ul li:last').data('cnNoteId',ae[ie].cnNoteId);
 			ie++;
 		};
 	}else if(result.status == -1){
 		//输出错误原因
 		alert(result.message);
 	}
 }
 //收藏共享笔记，异常回调方法
 function errorFunc_ac_list(result){
 	alert("获取活动笔记列表失败");
 }
 /*
  * 参加活动笔记内容
  */
//成功回调方法
  function successFunc_ac_n(result){
  	if(result.status == 1){
  		var pa=$('#fifth_side_right .contact-body');
  		pa.empty();
  		pa.append('<h4 id="noput_note_title"><strong>笔记标题: </strong>'+result.resource.cnNoteTitle+'</h4>');
  		$('#noput_note_title').after(result.resource.cnNoteBody);
  		
  	}else if(result.status == -1){
  		//输出错误原因
  		alert(result.message);
  	}
  }
  //收藏共享笔记，异常回调方法
  function errorFunc_ac_n(result){
  	alert("获取活动笔记内容失败");
  }

  
  /*
   * 移动笔记成功回调
   */
 //成功回调方法
   function successFunc_moveNote(result,dom){
   	if(result.status == 1){
   		dom.remove();
   	}else if(result.status == -1){
   		//输出错误原因
   		alert(result.message);
   	}
   }
   //移动笔记笔记，异常回调方法
   function errorFunc_moveNote(result){
   	alert("移动笔记失败，系统异常");
   }
  
  