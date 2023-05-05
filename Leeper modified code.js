Qualtrics.SurveyEngine.addOnload(function()
{
// Set number of choices ;
var numChoice = 5;

// Vectors containing all attribute levels :
var nameArray = ["Alexander Wagner", "Amy Wagner", "Kenneth Dixon", "Kimberly Dixon", "Steven Pham", "Stephanie Pham", "Christopher Alvarez", "Cynthia Alvarez"];
var reppartyArray = ["Democrat", "Republican"];
var ideologyArray =  ["Liberal" , "Moderate", "Conservative"];
var obstructedpartyArray = ["Democrats", "Republicans"];
var topicArray = ["transportation" , "defense" , "children's education", "immigration"];
var titletopicArray = ["Transportation" , "Defense" , "Children's Education", "Immigration"];
var pronounsArray = [ "She", "He"];
var justificationArray = ["aren’t going far enough", "are going too far"];
var pictureArray = ["https://drive.google.com/uc?export=view&id=1_jnoE5hDDlh9IxSbZSeOy6r2fOixngIC", 
					"https://drive.google.com/uc?export=view&id=1NqqeUViWR_aAJPrObeDnvxcJPK8MpcPB", 
					"https://drive.google.com/uc?export=view&id=1FdnKgK_sX7JsuTsudGIOHXWXfH-dUy0X", 
					"https://drive.google.com/uc?export=view&id=1vyPBETlyVIn6lp9lQhBeXr4Fk71RL2Z9", 
					"https://drive.google.com/uc?export=view&id=12Qmop01NvPP6HMIpZXnaDvj58qF_Y9_o", 
					"https://drive.google.com/uc?export=view&id=1Vgg5agD9edCPYGI5r_-1pT8ja7WXGlgp", 
					"https://drive.google.com/uc?export=view&id=1KAtfs_iJzWQbeOwxnL9DpTbhjnxpbrvO", 
					"https://drive.google.com/uc?export=view&id=144Z5uoUTaigwPRSZtRP-AeibpmDOMuqt"];

	
	//  Fisher-Yates shuffle:
	function shuffle(array){
		for (var i = array.length - 1; i > 0; i--){
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
	

// Shuffle a vector , choose the first entry :
function shuffle_one ( theArray ){
var out = shuffle ( theArray );
var out = out [0];
return ( out )
};
	

	 // Perform the randomization and save the result :
for (i = 1; i <= numChoice ; i ++) {
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_name" , shuffle_one(nameArray)) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_repparty" , shuffle_one ( reppartyArray )) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_obstructedparty" , shuffle_one ( obstructedpartyArray )) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_topic" , shuffle_one ( topicArray )) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_ideology" , shuffle_one ( ideologyArray )) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_titletopic" , shuffle_one(titletopicArray)) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_pronouns" , shuffle_one(pronounsArray)) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_justification" , shuffle_one(justificationArray) ) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_picture" , shuffle_one(pictureArray)) ;
}
});