console.log(angular);

let siteModule = angular.module("site", []);

siteModule.directive("article", function() {
	return {
		templateUrl: (e, a) => {
			console.log(a, a.url);
			return a.url;
		},
	};
});
