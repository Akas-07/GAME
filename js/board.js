class Board {
	constructor(board, backgroundImage, SNAKES_AND_LADDERS) {
		this.board = board;
		this.backgroundImage = backgroundImage;
		this.SNAKES_AND_LADDERS = SNAKES_AND_LADDERS;
		this.board.style.backgroundImage = `url("${backgroundImage}")`;
		this.playButton;
	}

	getBoard() {
		return this.board;
	}

	setBoard(board) {
		this.board = board;
	}

	getbackgroundImage() {
		return this.backgroundImage;
	}

	setbackgroundImage(backgroundImage) {
		this.backgroundImage = backgroundImage;
		this.board.style.backgroundImage = `url("${backgroundImage}")`;
	}

	getSnakeAndLadders() {
		return this.SNAKES_AND_LADDERS;
	}

	setSnakeAndLadders(SNAKES_AND_LADDERS) {
		this.SNAKES_AND_LADDERS = SNAKES_AND_LADDERS;
	}
}
document.addEventListener('DOMContentLoaded', () => {
	const rulesList1 = document.getElementById('rulesList1');
	const rulesList2 = document.getElementById('rulesList2');
	const rules1 = [
		'Registering to vote',
		'Voting in elections',
		'Getting a driver’s license',
		'Renewing your driver’s license',
		'Reporting a crime',
		'Paying your taxes',
		'Filing a tax return',
		'Getting a passport',
		'Registering your car',
		'Getting your car inspected',
		'Having health insurance',
		'Signing up for Social Security',
		'Enrolling in school',
		'Serving on a jury',
		'Starting a business',
		'Signing a rental lease',
		'Signing a mortgage',
		'Paying rent on time',
		'Making mortgage payments',
		'Following local zoning rules',
		'Following noise rules',
		'Throwing away trash properly',
		'Recycling',
		'Signing up for military service (where required)',
		'Following safety rules at work',
		'Applying for unemployment benefits',
		'Getting married legally',
		'Getting a birth certificate',
		'Getting a death certificate',
		'Following building codes',
		'Following fire safety rules',
		'Having homeowner’s insurance',
		'Following child labor laws',
		'Following minimum wage laws',
		'Paying employees on time',
		'Giving employees tax forms',
		'Following labor laws',
		'Driving drunk or under the influence',
		'Respecting copyrights and trademarks',
		'Applying for bankruptcy',
		'Having car insurance',
		'Following environmental laws',
		'Reporting a crime',
		'Getting a gun permit (if applicable)',
		'Doing a background check for a job',
		'Following pet laws',
		'Getting a fishing or hunting license',
		'Following health regulations (like vaccines)',
		'Getting a professional license',
		'Following immigration laws',
	];
	const rules2 = [
		'Cheating on your taxes',
		'Filing an appeal in court',
		'Enrolling kids in school',
		'Applying for financial aid for school',
		'Following school rules',
		'Signing a job contract',
		'Joining a union',
		'Applying for a work visa',
		'Following quarantine rules (during health emergencies)',
		'Following anti-harassment laws',
		'Respecting copyrights',
		'Respecting patents and trademarks',
		'Taking a drug test for work (if required)',
		'Returning lost items',
		'Passing a background check for housing',
		'Filing for child custody',
		'Joining a retirement plan',
		'Following smoking laws',
		'Applying for disability benefits',
		'Following drinking laws',
		'Changing your name legally',
		'Filing for divorce',
		'Adopting or fostering a child',
		'Filing your state and federal taxes',
		'Following animal control laws',
		'Vandalizing property',
		'Following noise ordinances',
		'Following curfew laws (if applicable)',
		'Complying with public safety rules',
		'Obeying public gathering laws',
		'Applying for food stamps or welfare',
		'Registering your child for a daycare',
		'Following hunting regulations',
		'Adhering to public smoking bans',
		'Applying for a business loan',
		'Signing a non-disclosure agreement (NDA)',
		'Setting up a bank account',
		'Applying for student loans',
		'Following public transportation rules',
		'Complying with online privacy laws',
		'Pirating movies or music',
		'Obtaining a liquor license for a business',
		'Registering as an organ donor',
		'Adhering to curfew regulations',
		'Following international travel laws',
		'Submitting to a health inspection (for restaurants)',
		'Stealing from a store',
		'Applying for disaster relief',
		'Signing a medical consent form',
		'Following rules for public demonstrations',
	];
	rules1.forEach((rule, index) => {
		const li = document.createElement('li');
		li.innerText = `${index + 1}. ${rule}`;
		li.id = `rule-${index + 1}`;
		rulesList1.appendChild(li);
	});
	rules2.forEach((rule, index) => {
		const li = document.createElement('li');
		li.innerText = `${index + 51}. ${rule}`;
		li.id = `rule-${index + 51}`;
		rulesList2.appendChild(li);
	});
});
