var pageTimer = {} ;		//定时器全局变量
var	formSource = "";		

window.onload = function() {
	//跳过
	$(".finish").on("click",function(){
		$(".service1,.service2,.service2-airport,.service3-trip,.finish").hide();
		$('.service4-role').addClass("a-fadeinR").show();

		//清除全部定时器
		for(var each in pageTimer){
		    clearInterval(pageTimer[each]);
		};
	});

	if (isClient() == "ios" || isClient() == "android") {
	 	$(".finish").css("top","1.5rem");
 	}else {
		$(".app-title").hide();
		$(".service2-zhan").css("height","0.82rem");
		$(".top-zhan").css("height","0.86rem");
		$(".service4-role").css("padding-top","10%");
	};

	showServiceAnimation();
};


function showServiceAnimation(){
	$(".service-circle").addClass("circle").removeClass("service-white");
	pageTimer["timer0"] =  setTimeout(function() {
		$(".finish").show();
	},500);
	pageTimer["timer1"] =  setTimeout(function() {
		$(".welcome").eq(0).addClass("a-fadeinB").show();
	},700);
	pageTimer["timer2"] = setTimeout(function() {

		$(".welcome").eq(1).addClass("a-fadeinB").show();
	},1100);
	pageTimer["timer3"] = setTimeout(function() {

		$(".welcome").eq(2).addClass("a-fadeinB").show();
	},1300);
	pageTimer["timer4"] = setTimeout(function() {
		$(".service1-pulldown").addClass("a-bouncein").show();
	},1700);

	//首屏点击，跳转到第二屏
	$(".service1-pulldown").on("click",function(){
		$(".service2").show();
	
		var scrollHeight = $('.service2').prop("scrollHeight");
		$('body').animate({scrollTop:scrollHeight}, 1000);
		pageTimer["timer5"] = setTimeout(function() {
			$(".service1").hide();
		},1080);


		pageTimer["timer6"] = setTimeout(function() {
			$(".service2-flocktop").addClass("a-fadeinB").show();
		},1100);
		pageTimer["timer7"] = setTimeout(function() {
			$(".service2-content img").eq(0).addClass("a-fadeinL").show();
		},1700);
		pageTimer["timer8"] = setTimeout(function() {
			$(".service2-content img").eq(1).addClass("a-fadeinL").show();
		},2300);
		pageTimer["timer9"] = setTimeout(function() {
			$(".service2-content img").eq(2).addClass("a-fadeinL").show();
		},2900);
		pageTimer["timer10"] = setTimeout(function() {
			$(".service2-content img").eq(3).addClass("a-fadeinL").show();

			var scrollHeight = $('.service2-content').prop("scrollHeight");
			$('.service2-content').animate({scrollTop:scrollHeight}, 1500);
		},3600);
		pageTimer["timer11"] = setTimeout(function() {
			$(".service2-click").show();
		},4400);
	});

	//显示接机安排
	$(".service2-showAir").on("click",function(){
		// $("html,body").css("overflow-y","hidden");
		$(".service2-click,.service2").hide();
		$(".service2-flocktop").removeClass("a-fadeinB");
		$(".service2-content img").eq(0).removeClass("a-fadeinL");
		$(".service2-content img").eq(1).removeClass("a-fadeinL");
		$(".service2-content img").eq(2).removeClass("a-fadeinL");
		$(".service2-content img").eq(3).removeClass("a-fadeinL");

		$(".service2-airport,.service2-save").show();

		var airName = $(".service2-airName");
		var airNameStr = "X X X航空公司";
		var airNumber = $(".service2-airNumber");
		var airNumberStr = "MJ908329";

		pageTimer["timer12"] = setTimeout(function(){
			var scrollHeight = $('.service2-airport').prop("scrollHeight");
			$('.service2-airport').animate({scrollTop:scrollHeight}, 1500);
		},600);
		
		pageTimer["timer13"] = setTimeout(function(){
			typewriter(airName,airNameStr);
		},1300);
		pageTimer["timer14"] = setTimeout(function(){
			typewriter(airNumber,airNumberStr);
		},2800);

		pageTimer["timer15"] = setTimeout(function(){
			$(".shade").eq(0).addClass("a-fadeinR").show();		//显示日历
		},5700);
		pageTimer["timer16"] = setTimeout(function(){
			$(".service2-22").addClass("a-bouncein").show();
		},6700);
		pageTimer["timer17"] = setTimeout(function(){
			$(".shade").eq(0).addClass("a-fadeoutL");			//隐藏日历
		},8100);
		pageTimer["timer18"] = setTimeout(function(){
			$(".shade").eq(1).addClass("a-fadeinR").show();		//显示时间
		},9300);
		pageTimer["timer19"] = setTimeout(function(){
			$(".timeWave").addClass("blue-wave1");
			$(".timeWave div").addClass("blue-wave2");
		},10300);
		pageTimer["timer20"] = setTimeout(function(){
			$(".service2-start").text("2018-09-09  13:40");
			$(".service2-arrive").text("2018-09-10  22:40");
			$(".service2-save").css("background-color","#418be2");
		},11300);
		pageTimer["timer21"] = setTimeout(function() {
			$(".shade").eq(1).addClass("a-fadeoutL");			//隐藏时间
		},11700);
		pageTimer["timer22"] = setTimeout(function(){
			$(".shade").hide();
			$(".service2-airRipple").addClass("service2-airRippleAn");
		},12800);
		pageTimer["timer23"] = setTimeout(function(){
			$("#service2-airport,.service2-save").hide();

			showService2Res();
		},13800);
	});

	//显示服务群的剩余内容
	function showService2Res() {
		$(".service2,.service2-residue").show();
		var scrollHeight = $('.service2-content').prop("scrollHeight");
		$('.service2-content').animate({scrollTop:scrollHeight}, 1500);
		

		pageTimer["timer24"] = setTimeout(function(){
			$(".service2-content img").eq(4).addClass("a-fadeinL").show();
		},1200);
		pageTimer["timer25"] = setTimeout(function(){
			$(".service2-content img").eq(5).addClass("a-fadeinR").show();
		},1800);
		pageTimer["timer26"] = setTimeout(function(){
			$(".service2-content img").eq(6).addClass("a-fadeinL").show();
		},2400);
		pageTimer["timer27"] = setTimeout(function(){
			$(".service2-content img").eq(7).addClass("a-fadeinL").show();
			var scrollHeight = $('.service2-content').prop("scrollHeight");
			$('.service2-content').animate({scrollTop:scrollHeight}, 2000);
		},3000);


		pageTimer["timer28"] = setTimeout(function(){
			showService3();
		},6500)
	};

	//显示服务群 第65天 内容
	function showService3() {
		$(".service3").show();
		var scrollHeight = $('.service2-content').prop("scrollHeight");
		$('.service2-content').animate({scrollTop:scrollHeight}, 1500);

		pageTimer["timer29"] = setTimeout(function() {
			$(".service3-flocktop").addClass("a-fadeinB").show();
		},1200);
		pageTimer["timer30"] = setTimeout(function(){
			$(".service3-content img").eq(0).addClass("a-fadeinR").show();
		},2000);
		pageTimer["timer31"] = setTimeout(function(){
			$(".service3-content img").eq(1).addClass("a-fadeinR").show();
		},2500);
		pageTimer["timer32"] = setTimeout(function(){
			$(".service3-click").show();
		},3400);

	};

	//点击出行服务卡片
	$(".service3-travel").on("click",function(){
		$(".service3-click").hide();
		$("#service3-trip").addClass("a-fadeinR").show();
		pageTimer["timer33"] = setTimeout(function(){
			var scrollHeight = $('#service3-trip').prop("scrollHeight");
			$('#service3-trip').animate({scrollTop:scrollHeight}, 1500);
		},1500);

		pageTimer["timer34"] = setTimeout(function(){
			$(".consentWave").show().addClass("blue-wave1");
			$(".consentWave div").addClass("blue-wave2");
		},2500);
		pageTimer["timer35"] = setTimeout(function(){
			$(".service3-span").css({"background-color":"#3699ec","color":"#fff"});
		},3200);
		pageTimer["timer36"] = setTimeout(function(){
			$("#service3-trip").addClass("a-fadeoutL");
		},4000);

		pageTimer["timer37"] = setTimeout(function(){
			$("#service3-trip").hide();
			$(".service3-content img").eq(2).addClass("a-fadeinL").show();

			var scrollHeight = $('.service2-content').prop("scrollHeight");
			$('.service2-content').animate({scrollTop:scrollHeight}, 1500);
		},5000);

		pageTimer["timer38"] = setTimeout(function(){
			$(".service3-pass").addClass("a-flip").show();
		},6200)

		pageTimer["timer39"] = setTimeout(function(){
			$(".finish,service2").hide();
			$(".service4-role").addClass("a-fadeinR").show();
		},8000);
	});

	//点击显示表单
	$("#goStuForm").on("click",function(){
		showAppForm("student");
	});
	$("#goParForm").on("click",function(){
		showAppForm("parents");
	});
	$("#goAgentForm").on("click",function(){
		showAppForm("agency");
	});

	//调取App表单
	function showAppForm(type) {
		if (type == "student" || type == "parents") {
			if (type == "student") {
				formSource = "student";
			}else if (type == "parents") {
				formSource = "parents";
			};

			if(isClient() == "android") {
			 	window.AndroidLogInterface.openForm("user");
			}else if(isClient() == "ios"){
			 	window.webkit.messageHandlers.openFormUser.postMessage(null);
			}else {
				$("#form-parStu").addClass("a-fadeinR").show();
			};
		}else if (type == "agency") {
			if(isClient() == "android") {
			 	window.AndroidLogInterface.openForm("agency");
			}else if(isClient() == "ios"){
			 	window.webkit.messageHandlers.openFormAgency.postMessage(null);
			}else {
				$("#form-agent").addClass("a-fadeinR").show();
			};
		};
	};

};

//打字机效果
function typewriter(dom,str) {
	var i = 0;
	var typing = setInterval(function(){
		if (i <= str.length) {
			dom.text(str.slice(0, i++) + '|');
		}else{
			clearInterval(typing);
			dom.text(str);//结束打字,移除 _ 光标
		}
	},100);
};

//判断终端
function isClient() {
	var browser = {
        versions: function () {
           var u = navigator.userAgent, 
           	   app = navigator.appVersion;
           return {     //移动终端浏览器版本信息
             mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
             ios: u.indexOf('app/ios') > -1, //ios终端
             android: u.indexOf('app/android') > -1, //android终端
          };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };  

    if (browser.versions.ios) {
		//苹果
		return "ios";
    } else if (browser.versions.android) {
        //安卓
		return "android";
    }
};

//表单

//初始化表单
initForm();
function initForm () {
	$(".service-form input").val("");
	$(".service-formErr").hide().val("");
	$(".service-formButton").removeClass("formButtonColor").unbind();
}

$(".form1-username").blur(function(){
	var username = $(".form1-username").val();

	if (username == "") {
		$(".service-formButton").removeClass("formButtonColor").unbind();
		return false;
	};
	$(".service-formButton").addClass("formButtonColor");
	clickParStu();
});

$(".form2-username").blur(function(){
	var username = $(".form2-username").val();

	if (username == "") {
		$(".service-formButton").removeClass("formButtonColor").unbind();
		return false;
	};
	$(".service-formButton").addClass("formButtonColor");
	clickAgent();
});

function clickParStu() {
	$(".formButton-parStu").on("click",function(){
		var username = $(".form1-username").val();
		var phone = $(".form1-phone").val();
		var time = $(".form1-time").val();
		var agency = $(".form1-agency").val();
		var agentname = $(".form1-agentname").val();

		if (username == "") {
			$(".form1-err").text("请填写您的姓名").show();
			return false;
		}else if (phone == ""){
			$(".form1-err").text("请填写您的手机号码").show();
			return false;
		}else if (phone != ""){
			if (isTelephone(phone) == false) {
				$(".form1-err").text("请填写正确的手机号码").show();
				return false;
			};
		};

		$.ajax({
			type: "post",
			url: "http://47.93.37.130:8092/users/individual/vip",
			data:{
				username: username,
				phone: phone,
				expect_datetime: time,
				agency: agency,
				agent_name: agentname,
				source: formSource
			},
			success:function(data) {
				console.log(data);
				initForm();
				$(".toast").text("提交成功").show();
				setTimeout(function(){
					$(".toast").fadeOut(1500);
				},1000);
			},
			error:function(err) {
				console.log(err);
				initForm();
				$(".form1-err").text("提交失败，请稍后重试").show();
			}
		})
	});
};

function clickAgent() {
	$(".formButton-agent").on("click",function(){
		var username = $(".form2-username").val();
		var phone = $(".form2-phone").val();
		var agency = $(".form2-agency").val();
		var code = $(".form2-code").val();

		if (username == "") {
			$(".form2-err").text("请填写您的姓名").show();
			return false;
		}else if (phone == ""){
			$(".form2-err").text("请填写您的手机号码").show();
			return false;
		}else if (phone != ""){
			if (isTelephone(phone) == false) {
				$(".form2-err").text("请填写正确的手机号码").show();
				return false;
			};
		};
		if (agency == "") {
			$(".form2-err").text("请填写您的中介机构").show();
			return false;
		};

		$.ajax({
			type: "post",
			url: "http://47.93.37.130:8092/users/institution/vip",
			data:{
				username: username,
				phone: phone,
				invent_code: code,
				agency: "agency"
			},
			success:function(data) {
				console.log(data);
				initForm();
				$(".toast").text("提交成功").show();
				setTimeout(function(){
					$(".toast").fadeOut(1500);
				},1000);
			},
			error:function(err) {
				console.log(err);
				initForm();
				$(".form2-err").text("提交失败，请稍后重试").show();
			}
		})
	});
};

function isTelephone(number) {
    var telReg=/^[1][3,4,5,6,7,8][0-9]{9}$/; 
    if ( telReg.test(number) == false ) {
        return false;
    };
};