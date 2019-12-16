/**
 * 이메일 유효성 검사
 * @param email 확인 할 email 주소
 * @returns {Boolean}
 */
function emailValidationCheck (email) {

    var pattern = /^[\w_-]+(\.[\w_-]+)*@[\w_-]+(\.[\w_-]+)*\.\w{2,3}$/;
    
    if (pattern.test(email)) {
        return true;
    }
    return false;
}

/**
 * 이름 유효성 검사
 * @param id 확인 할 문자열
 * @returns {Boolean}
 */
function nameValidationCheck (name) {
    
    // 영문, 정확한 한글만 입력 가능
    var pattern = /^[\uac00-\ud7a3a-zA-Z ]*$/g;
    
    // 정확한 이름이 입력되었는지 검사
    if (!pattern.test(name)) {
        return false;
    }
    
    return true;
}

/**
 * 숫자 유효성 검사
 * @param str 확인 할 문자열
 * @returns {Boolean}
 */
function numberValidationCheck (str) {
    
    var pattern = /^[0-9]*$/g;
    
    // 숫자만 입력되었는지 검사
    if (!pattern.test(str)) {
        return false;
    }
    
    return true;
}

/**
 * 금액 입력 이벤트
 * @param str 확인 할 문자열
 * @param {Boolean}
 */
function moneyValidationCheck (str) {

    var pattern = /^[0-9]+[,]*$/g;
    
    // 숫자 + 콤마 입력되었는지 검사
    if (!pattern.test(str)) {
        return false;
    }
    
    return true;

}

/**
 * 엔터키 입력 이벤트
 * @param $text 엔터키 입력 하는 DOM Object
 * @param $button 클릭 이벤트가 일어나는 DOM Object
 */
function enterKeyPress ($text, $button) {
    
    $text.keydown(function(e){
        if(e.which == 13) {
            e.preventDefault();
            $button.click();
        }
    });
}

/**
 * 태그에서 value 를 얻음
 * ex) var memberSeq = getValue($(this), 'class', 'otaMemberSeq');
 * 
 * @param $tag 태그 객체 : $(this), $('a'), $('div') ...
 * @param attrName 속성명 : class , id , name ...
 * @param name 구분명 : otaMemberSeq1234  중 otaMemberSeq
 * @returns otaMemberSeq1234  중 1234
 */
function getValue ($tag, attrName, name) {
	
	if ($tag.size() != 1 || attrName == null || attrName == undefined || name == null || name == undefined) {
		return '';
	}
	
	var value = $tag.prop(attrName);
	
	if (value == undefined) {
		return '';
	} else {
		value = String(value);
	}
	
	if (value != '' && value.indexOf(name) > -1) {
		value = value.split(name)[1].split(' ')[0];
	} else {
		value = '';
	}
	
	return value;
}

/**
 * 콤마 찍기
 * <1000단위 숫자 표현시 사용> 
 * 
 * @param 숫자포맷 전환 대상 
 * @returns
 */
function commaStr( targetNum ){

    if (!targetNum) targetNum = 0;

    var orgNum = targetNum;
    
    // 숫자인 경우 문자열로 변경
    targetNum = '' + targetNum;
	
	var len,point,str;
	var num = onlyNumber(targetNum);

	if($.trim(num) != "") {
		num = num+"";
		point = num.length%3;
		len = num.length;
		str = num.substring(0,point);
		while( point < len){
			if( str != "" ) str += ",";
			str += num.substring( point , point+3);
			point +=3;
		}
		
	}
	
	if (orgNum < 0) str = '-' + str;
	
	return str;
}

/**
 * 숫자만 추출
 * 
 * @param 숫자 전환 대상
 * @returns 숫자
 */
function onlyNumber(target) {
    var regexp = /[^0-9]/g;

	var result = target.replace(regexp,'');
	return result;
}