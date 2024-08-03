sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'namesp/summaoruappui/test/integration/FirstJourney',
		'namesp/summaoruappui/test/integration/pages/BooksList',
		'namesp/summaoruappui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('namesp/summaoruappui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);