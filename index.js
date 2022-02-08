function totalScore(){

//입력
  let nameInsert = "";
  let mathInsert = 0;
  let koreanInsert = 0;
  let scienceInsert = 0;

  // 문자열 유효성 검사 while 문으로 작성할 것

  while(true){
    let result = prompt("이름을 입력해주세요.")
    if(isNaN(result)){
      nameInsert += result
      break;
    }else{
      alert("옳바른 이름만 입력 해주세요")
    }
  }


  while(true){
    let result = prompt("수학 점수를 입력해주세요.")
    if(!isNaN(result)){
      if(result > 0 && result <= 100){
        mathInsert = parseInt(result);
        break;
     }else{
        alert("옳바른 점수만 입력 해주세요")
      }
    }
  }


  while(true){
    let result = prompt("국어 점수를 입력해주세요.")
    if(!isNaN(result)){
      if(result > 0 && result <= 100){
        koreanInsert = parseInt(result);
        break;
      }else{
        alert("옳바른 점수만 입력 해주세요")
     }
    }
  }

  while(true){
    let result = prompt("과학 점수를 입력해주세요.")
    if(!isNaN(result)){
      if(result > 0 && result <= 100){
        scienceInsert = parseInt(result);
        break;
      }else{
        alert("옳바른 점수만 입력 해주세요")
      }
    }
  }
/*
  if (isNaN(mathInsert)){
    alert("점수만 입력 해주세요.")
    if(mathInsert > 100){
      mathInsert = ""
    }
  } else if(isNaN(koreanInsert)) {
    if(koreanInsert > 100){
    koreanInsert = ""
    }
  } else if(isNaN(scienceInsert)){
    if(scienceInsert > 100){
    scienceInsert = ""
  }
}
*/
  let grade = {
    name:"",
    math:"",
    korean:"",
    science:""
  }

  grade.name = nameInsert;
  grade.math = mathInsert;
  grade.korean = koreanInsert;
  grade.science = scienceInsert;
  
  let gradeTable = JSON.stringify(grade)
  
  localStorage.setItem(nameInsert, gradeTable);

}

//숙 함수로 뺴고 호출해서 완성하기

function searchScore(){
  let findNameScore = prompt("학생 이름을 입력해 주세요.")
  let findName = document.getElementById("findName") 
  let findMath = document.getElementById("findMath")
  let findKorean = document.getElementById("findKorean")
  let findScience = document.getElementById("findScience")
  let total = document.getElementById("total")
  let average = document.getElementById("average")

  let aaa = JSON.parse(localStorage.getItem(findNameScore)); //잘 이해안됨
  

  console.log(aaa)
  if(aaa.name === findNameScore){ 
    alert("조회 성공")
    findName.innerHTML = (`이름은 ${aaa.name} 입니다.`) // 질문 : 코드 한줄로 로컬스토리지 호출
    findMath.innerHTML = (`수학 점수는 ${aaa.math} 입니다.`)
    findKorean.innerHTML = (`국어 점수는 ${aaa.korean} 입니다.`)
    findScience.innerHTML = (`과학 점수는 ${aaa.science} 입니다.`)
  

  } else {
    alert("조회 실패");    
  }
  total.innerHTML = (` 토탈 점수는 ${aaa.math + aaa.korean + aaa.science} 점 입니다.`)
  average.innerHTML = (`평균은 ${(aaa.math + aaa.korean + aaa.science) / 3} 입니다.`) // toFixed




  //합계 및 평균 구하기

}


















