function getUsernames () {
	return [
		'antdesroche',
		'ckirkwood7464',
		'connormgerrits',
		'DDiggs0798',
		'DuuCodes',
		'FrancisGichuhi',
		'itsdanielguerrero',
		'Keefelaporte',
		'Kullen7117',
		'm-madelyn',
		'mjamison3',
		'mlundstrom23',
		'sashgems',
		'seanbiller'
	];
}

function buildGitRepoScript(repo_name) { 
	var out = '';

	getUsernames().forEach(function(username) {
		out = out + '\n' + 'git remote add ' + username + ' https://github.com/' + username + '/' + repo_name;
		out = out + '\n' + 'git push ' + username;
	});

	return out;
}

console.log(buildGitRepoScript('perfect-lineup'))