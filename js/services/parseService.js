angular.module("parseQ").service("parseService", function($http, $q){
	this.postQuestion = function(question){
		var status = "red";
		return $http({
			method: "POST",
			url:"https://api.parse.com/1/classes/questions",
			data: {question: question, status: status}
		})
	}

	this.getQuestion = function(){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "https://api.parse.com/1/classes/questions"
		}).then(function(data){
			deferred.resolve(data.data.results)
		})
		return deferred.promise;
	}

	this.updateQuestion = function(questionId){
		var newStatus = "yellow";
		return $http({
			method: "PUT",
			url: "https://api.parse.com/1/classes/questions/" + questionId,
			data: {status: newStatus}
		})
	}

	this.deleteQuestion = function(questionId){
		return $http({
			method: "DELETE",
			url: "https://api.parse.com/1/classes/questions/" + questionId
		})
	}
})