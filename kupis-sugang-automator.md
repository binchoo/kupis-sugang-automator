![kulogo](http://www.konkuk.ac.kr/img/Main/img_logo_ku.png)
# __KUPIS SUGANG AUTOMATOR__

[TOC]

---

## 라이선스 요약

해당 프로그램은 GPL 2.0과 하나의 추가 조건으로 배포됩니다. 해당 프로그램은 KUPIS 시스템의 취약점을 밝히는 용도로만 사용되어야 합니다.

해당 프로그램을 실제 수강신청 환경에서 사용할 수 없으며 해당 프로그램 목적 이외의 악용에 대한 책임은 사용자 본인에게 있습니다.

## 구현

이하는 수강신청 매크로의 구현입니다.

###  아이디, 비밀번호 그리고 과목번호를 입력하세요

<style type="text/css">
  div.sbjts input {
    padding: 10px;
    color: #000;
    cursor: text;
    width: 30%;
    height: 10%;
    border: 1px dashed #aaa;
    background: #dedede;
    border-radius: 5px;
  }
  div.btns input {
    color: #000;
    width: 20%;
    height: 20%;
    background: #fff;
    border-radius: 5px;
  }
</style>
<script src="./Macro.js"></script>
<script src="./PopupRequest.js"></script>
<script type="text/javascript">
  const m = new SugangMacro();
  const newSession = async function () {
    var stuid = document.getElementsByName("student-id")[0].value;
    var pwd = document.getElementsByName("student-pwd")[0].value;
    new LogoutPopupRequest(2222, {
      width: 500,
      height: 500,
      left: 0,
      top: 0,
    }).doRequest();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    new LoginPopupRequest(3333, {
      width: 500,
      height: 500,
      left: 0,
      top: 0,
    }).doRequest(stuid, pwd);
  };
  const startMacro = function () {
    var interval = document.getElementsByName("interval")[0].value;
    var batch = document.getElementsByName("batch")[0].value;
    var subjects = new Array();
    document.getElementsByName("sbjt").forEach((input) => {
      if (!(input.value == "")) {
        subjects.push(input.value);
      }
    })
    m.setBatch(batch);
    m.run(subjects, interval);
  };
  const stopMacro = function () {
    m.stop();
    alert("작업 중지.");
  };
</script>
<div class="sbjts">
  <ul>
    <li>ID <input type="text" name="student-id"></li>
    <li>PWD <input type="password" name="student-pwd"></li>
  </ul>
  <ol>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
    <li><input type="text" name="sbjt"></li>
  </ol>
</div>
<div class="btns">
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <input type="button" value="세션" onclick="newSession();">
  <input type="button" value="수행" onclick="startMacro();">
  <input type="button" value="정지" onclick="stopMacro();">
</div></br>
### 매크로 동작을 설정하세요

__수행버튼__을 클릭하면 최대 8개의 팝업창이 뜨며 서버에 <input type="text" name="interval" value="2000" style="width:100px;"/>ms마다 <input type="text" name="batch" value="3" style="width:100px;">개의 리퀘스트를 전송하게 됩니다.

### 매크로를 정지하세요

__정지버튼__을 클릭하여 매크로 수행 중인 팝업 창들을 일괄적으로 닫습니다. 그러면 리퀘스트 전송이 중지됩니다.
