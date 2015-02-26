angular.module("parseQ").controller("mainController", function($scope, parseService){

	$scope.postQuestion = function(){
		parseService.postQuestion($scope.myQuestion).then(function(){
			$scope.getQuestion();
			$scope.myQuestion = '';
		}) 
	}

	$scope.getQuestion = function(){
		parseService.getQuestion().then(function(data){
			$scope.questions = data;
			console.log(data)
		})
	}
	$scope.getQuestion();

	$scope.updateStatus = function(questionId) {
		parseService.updateQuestion(questionId).then(function(data){
			$scope.getQuestion();
		})
	}

	$scope.deleteQuestion = function(questionId){
		parseService.deleteQuestion(questionId).then(function(data){
			$scope.getQuestion();
		})
	}
})