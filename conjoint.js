Qualtrics.SurveyEngine.addOnload(function()
{
// Set number of choices ;
var numChoice = 5;

const names = ["alexander", "amy", "kenneth", "kimberly", "steven", "stephanie", "christopher", "cynthia"];
const parties = ["Democrat", "Republican"];
const ideologies = ["Moderate", "Straight"]
const obstructed = ["Democrats", "Republicans"];
const bills = ["Transportation" , "Defense" , "Children's Education", "Immigration"];

function get_permutation() { 
    return {
        name: names[Math.floor(Math.random() * names.length)],
        party: parties[Math.floor(Math.random() * parties.length)],
        ideology: ideologies[Math.floor(Math.random() * ideologies.length)],
        obstructed: obstructed[Math.floor(Math.random() * obstructed.length)],
        bill: bills[Math.floor(Math.random() * bills.length)],        
    }
}

const name_to_info = {
    alexander: {
        name: "Alexander Wagner",
        pronoun: "He",
        photo_link: "https://drive.google.com/uc?export=view&id=1_jnoE5hDDlh9IxSbZSeOy6r2fOixngIC"
    },
    amy: {
        name: "Amy Wagner",
        pronoun: "She",
        photo_link: "https://drive.google.com/uc?export=view&id=1NqqeUViWR_aAJPrObeDnvxcJPK8MpcPB"
    },
    kenneth: {
        name: "Kenneth Dixon",
        pronoun: "He",
        photo_link: "https://drive.google.com/uc?export=view&id=1FdnKgK_sX7JsuTsudGIOHXWXfH-dUy0X"
    },
    kimberly: {
        name: "Kimberly Dixon",
        pronoun: "She",
        photo_link: "https://drive.google.com/uc?export=view&id=1vyPBETlyVIn6lp9lQhBeXr4Fk71RL2Z9"
    },
    steven: {
        name: "Steven Pham",
        pronoun: "He",
        photo_link: "https://drive.google.com/uc?export=view&id=1KAtfs_iJzWQbeOwxnL9DpTbhjnxpbrvO"
    },
    stephanie: {
        name: "Stephanie Pham",
        pronoun: "She",
        photo_link: "https://drive.google.com/uc?export=view&id=144Z5uoUTaigwPRSZtRP-AeibpmDOMuqt"
    },
    christopher: {
        name: "Christopher Alvarez",
        pronoun: "He",
        photo_link: "https://drive.google.com/uc?export=view&id=12Qmop01NvPP6HMIpZXnaDvj58qF_Y9_o"
    },
    cynthia: {
        name: "Cynthia Alvarez",
        pronoun: "She",
        photo_link: "https://drive.google.com/uc?export=view&id=1Vgg5agD9edCPYGI5r_-1pT8ja7WXGlgp"
    },
}

const party_to_ideology = {
    Democrat: {
        Moderate: "Moderate",
        Straight: "Liberal"
    },
    Republican: {
        Moderate: "Moderate",
        Straight: "Conservative"
    }
}

const ideology_to_justification = {
    Moderate: "are going too far",
    Straight: "aren't going far enough"
}

function get_candidate() {
    perm = get_permutation()

    return {
        name: name_to_info[perm.name].name,
        pronoun: name_to_info[perm.name].pronoun,
        photo_link: name_to_info[perm.name].photo_link,
        party: perm.party,
        ideology: party_to_ideology[perm.party][perm.ideology],
        obstructed: perm.obstructed,
        bill: perm.bill,
        justification: ideology_to_justification[perm.ideology]
    }
}

for (i = 1; i <= numChoice ; i ++) {
    const candidate = get_candidate()
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_name" , candidate.name) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_repparty" , candidate.party) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_obstructedparty" , candidate.obstructed) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_topic" , candidate.bill) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_ideology" , candidate.ideology) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_pronouns" , candidate.pronoun) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_justification" , candidate.justification) ;
Qualtrics.SurveyEngine.setEmbeddedData ("choice" +i+"_picture" , candidate.photo_link) ;
}
});