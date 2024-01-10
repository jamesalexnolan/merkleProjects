//DL - Page - Tags - Type 
try{
function getMetaContentValues(name) {

    const metaTags = document.getElementsByTagName('meta');

    for (let i = 0; i < metaTags.length; i++) {
        const tag = metaTags[i];
        const tagName = tag.getAttribute('name');
        const tagContent = tag.getAttribute('content');

        if (tagName === name) {
            const values = tagContent.split(',');
            return values.map(value => value.trim());
        }
    }
    return [];
}

const name = 'keywords';

const contentValues = getMetaContentValues(name);

if (contentValues.includes("Articles")){
    return 'Articles'
} else if (contentValues.includes("E-learning")){
    return 'E-learning'
} else if (contentValues.includes("Recorded webinars & presentations")){
    return 'Recorded webinars & presentations'
} else if (contentValues.includes("Recorded webinars & presentations") && ("Videos")){
    return 'Recorded webinars & presentations,Videos'
} else if (contentValues.includes("Videos")){
    return 'Videos'
} else if (contentValues.includes("Podcasts")){
    return 'Podcasts'
} else if (contentValues.includes("Downloads and Tools for Healthcare Professionals")){
    return 'Downloads and Tools for Healthcare Professionals'
} else if (contentValues.includes("Clinical Papers")){
    return 'Clinical Papers'
} else if (contentValues.includes("Case Study")){
    return 'Case Study'
}
} catch (err) {

}

//Rules 

function getMetaContentValues(name) {

    const metaTags = document.getElementsByTagName('meta');

    for (let i = 0; i < metaTags.length; i++) {
        const tag = metaTags[i];
        const tagName = tag.getAttribute('name');
        const tagContent = tag.getAttribute('content');

        if (tagName === name) {
            const values = tagContent.split(',');
            return values.map(value => value.trim());
        }
    }
    return [];
}

const name = 'keywords';

const contentValues = getMetaContentValues(name);

if (contentValues.includes('Meal type')){
    s.eVar105 = mealType;
    s.linkTracVars += ',eVar105';
} else if (contentValues.includes('Living with')) {
    s.eVar103 = livingWith;
    s.linkTrackVars += ',eVar103';
} else if (contentValues.includes('Life Stage')) {
    s.eVar107 = lifeStage;
    s.linkTrackVars += 'evar107';
}


var element = document.querySelector('.button.login-icon-button');

var styles = window.getComputedStyle(element);

if (styles.getPropertyValue('display') === 'none') {
  console.log('Logged In');
} else {
  console.log('Logged Out');
}