const babyUrls = [
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-symptom-checker.html',
    'https://www.aptaclub.co.uk/united-with-new-parents.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/signs-of-weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/introduction-to-weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/sterilising-baby-bottles.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/weaning-problems-solved.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/milk-during-weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/foods-to-avoid.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/tips-for-fussy-eating-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/importance-of-fibre-for-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/combination-feeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/how-much-how-often.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/preparing-a-bottlefeed.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/bottlefeeding-in-hospital.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/bottlefeeding-equipment.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-feeding-problems.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/guide-to-successful-breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/benefits-of-breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/common-breastfeeding-problems/mastitis.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/storing-and-expressing-breastmilk.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/guide-to-breastfeeding-positions0.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/your-healthy-breastfeeding-diet.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/faqs.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/common-breastfeeding-problems.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/common-breastfeeding-problems/increasing-milk-supply.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/guide-to-breastmilk-nutrition.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/making-baby-food.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/what-is-weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/importance-of-each-nutrient-for-baby.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/importance-of-food-textures.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/introducing-food-textures.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/variety-during-weaning.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/weaning-from-bottle-to-beaker.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/smoking-and-breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/alcohol-and-breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/caffeine-and-breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/foods-to-avoid.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/common-breastfeeding-problems/thrush.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-7-9-months.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/reflux-in-babies.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-6-months.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/constipation-in-babies.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-5-months.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-2-months.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-4-months.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/allergies-and-food-intolerance/milk-allergy-and-intolerance.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/colic-in-babies.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-3-months.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-still-hungry.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-weight.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-1-month.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/allergies-and-food-intolerance/lactose-intolerance-in-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-diarrhoea.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/feeding-premature-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/allergies-and-food-intolerance.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/tongue-tie-in-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/food-allergies-in-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/oral-thrush-in-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/feeding-problems/baby-vomiting.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/weaning/introducing-new-foods.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/allergies-and-food-intolerance/food-labelling.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/guide-to-winding-your-baby.html',
    'https://www.aptaclub.co.uk/baby.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/faqs.html',
    'https://www.aptaclub.co.uk/gift-of-future-health.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/recommendations.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/weaning-support.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/myths.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/stress.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/games-for-babies.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/common-combination-feeding-questions-and-concerns.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/breastfeeding/40-years-breastmilk.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition/bottlefeeding/how-to-combination-feed.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/managing-toddler-appetite-at-home.html',
    'https://www.aptaclub.co.uk/baby/months/babys-development-10-12-months.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners/helping-with-a-premature-baby.html',
    'https://www.aptaclub.co.uk/baby/breastfeeding.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners/feeding-choices.html',
    'https://www.aptaclub.co.uk/baby/feeding-problems.html',
    'https://www.aptaclub.co.uk/baby/baby-symptom-checker.html',
    'https://www.aptaclub.co.uk/baby/bottlefeeding.html',
    'https://www.aptaclub.co.uk/baby/weaning.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/bottle-feeding-faqs.html',
    'https://www.aptaclub.co.uk/united-with-new-parents/recommendations.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners.html',
    'https://www.aptaclub.co.uk/baby/months.html'
]

const bondingUrls = [
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/personalised-stories-for-your-bump.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/pregnancy-music-the-effect-on-unborn-babies.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/reasons-to-talk-to-your-baby-before-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/how-to-talk-to-your-baby-pre-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/learning-language-in-the-womb.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/interview-eino-partanen-talking-to-your-bump.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/talking-to-your-bump.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/interview-eino-partanen-how-hearing-develops.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/benefits-of-talking-to-your-bump.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development/tummy-time.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development/getting-to-know-your-baby.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development/babys-first-christmas.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/how-to-talk-to-your-baby-before-birth.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development/seven-reasons-to-treasure-your-first-cuddle.html',
    'https://www.aptaclub.co.uk/baby/bonding-and-development/first-fun.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/interview-nicola-lathey-building-bonds-before-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/bonding-with-your-bump-helps-your-baby-learn.html',
    'https://www.aptaclub.co.uk/pregnancy/bonding-and-development/when-can-a-baby-hear.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners/bonding-with-your-baby-at-0-3-months.html',
    'https://www.aptaclub.co.uk/baby/advice-for-partners/bonding-with-your-baby-at-0-3-months.html'
]

const carelineUrls = [
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/hyperemesis-gravidarum.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/morning-sickness.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/pregnancy-scans-overview.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/sleeping-aids.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/stress-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/20-week-scan.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/sleep-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/12-week-scan.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/allergies-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/pregnancy-health/allergies-in-pregnancy.html',
    'https://www.aptaclub.co.uk/conception/folic-acid-conception.html',
    'https://www.aptaclub.co.uk/conception.html',
    'https://www.aptaclub.co.uk/conception/what-to-eat-conception.html',
    'https://www.aptaclub.co.uk/contact-aptaclub.html',
    'https://www.aptaclub.co.uk/author-page/dr-sarah-jarvis.html',
    'https://www.aptaclub.co.uk/author-page.html',
    'https://www.aptaclub.co.uk/conception/foods-to-avoid-conception.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/preparing-and-planning-for-birth.html',
    'https://www.aptaclub.co.uk/conception/vitamins-and-supplements-conception.html',
    'https://www.aptaclub.co.uk/conception/home-pregnancy-test.html',
    'https://www.aptaclub.co.uk/author-page/pip-davies.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/antenatal-classes-for-partners.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/smoking-and-drinking-during-pregnancy.html',
    'https://www.aptaclub.co.uk/author-page/dr-shazia-malik.html',
    'https://www.aptaclub.co.uk/author-page/dr-thomas-ludwig.html',
    'https://www.aptaclub.co.uk/author-page/dr-caroline-childs.html',
    'https://www.aptaclub.co.uk/about-aptaclub/whatsapp-page.html',
    'https://www.aptaclub.co.uk/author-page/dr-punam-krishan.html',
    'https://www.aptaclub.co.uk/author-page/dr-bernd-stahl.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/helping-at-the-birth.html',
    'https://www.aptaclub.co.uk/about-aptaclub/live-chat-page.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/paternity-leave.html',
    'https://www.aptaclub.co.uk/author-page/oriana-hernandez-carrion.html',
    'https://www.aptaclub.co.uk/pregnancy/advice-for-partners/helping-after-the-birth.html'
]

const excersiseUrls = [
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/active-for-2.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/foods-to-avoid-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/superfoods-for-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/pregnancy-exercise-benefits.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/exercises-to-avoid-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/exercising-safely-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/pregnancy-strength-training.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/pelvic-floor-exercises-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/pregnancy-yoga.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/walking-and-running-while-pregnant.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise/pregnancy-swimming.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/exercise.html',
    'https://www.aptaclub.co.uk/pregnancy/pregnancy-exercise.html'
]

const labourUrls = [
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/what-to-eat-during-labour.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/pregnancy-massage-benefits-for-your-baby.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/labour-pain-relief.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/preparing-for-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/induction-of-labour.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/birth-partner.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/birthing-positions.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/c-section.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/post-pregnancy-body.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/water-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/home-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/giving-birth-alone.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/early-signs-of-labour.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing/labour-and-birth/braxton-hicks-contractions.html',
    'https://www.aptaclub.co.uk/labour-and-birth/early-signs-of-labour.html',
    'https://www.aptaclub.co.uk/pregnancy/hospital-bag-checklist.html',
    'https://www.aptaclub.co.uk/labour-and-birth/giving-birth-alone.html',
    'https://www.aptaclub.co.uk/labour-and-birth/home-birth.html',
    'https://www.aptaclub.co.uk/labour-and-birth.html',
    'https://www.aptaclub.co.uk/pregnancy/birth-plan.html',
    'https://www.aptaclub.co.uk/labour-and-birth/pregnancy-massage-benefits-for-your-baby.html'
]

const NMBUrls = [
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/stress-and-sleep/how-to-establish-good-baby-sleep-routine.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/vaccination-and-immunisation/vaccinations-everything-need-to-know.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/changing-and-bathing/washing-and-bathing.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/mind-and-body/taking-care-of-yourself.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/mind-and-body.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/stress-and-sleep.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/stress-and-sleep/what-does-it-mean-to-sleep-like-a-baby.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/stress-and-sleep/sleep-overview.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/changing-and-bathing.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/crying/why-do-babies-cry.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/vaccination-and-immunisation.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/changing-and-bathing/dressing-your-newborn.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/crying/crying-your-babys-first-form-of-communication.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/vaccination-and-immunisation/immunisation-schedule.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/changing-and-bathing/nappy-changing.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/stress-and-sleep/where-should-my-baby-sleep.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/mind-and-body/getting-out-and-about.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/crying.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/vaccination-and-immunisation/vaccinations-everything-need-to-know.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/vaccination-and-immunisation/immunisation-schedule.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/baby-symptom-diary.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/is-all-bacteria-harmful-for-babies.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/baby-poo-colour-smell-textures.html',
    'https://www.aptaclub.co.uk/baby/health-and-wellbeing/how-to-support-your-babys-immune-system.html'
]

const productUrls = [
    'https://www.aptaclub.co.uk/products.html',
    'https://www.aptaclub.co.uk/products/aptamil-organic.html',
    'https://www.aptaclub.co.uk/about-aptaclub/about-nutricia.html',
    'https://www.aptaclub.co.uk/products/aptamil-pre-measured-tabs.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-pepti-1.html',
    'https://www.aptaclub.co.uk/products/aptamil-organic-cereals.html',
    'https://www.aptaclub.co.uk/products/toddler-12-months.html',
    'https://www.aptaclub.co.uk/products/filter-results.html/selectedtag=eln-products:eln_gb/aptamil/productmealCategory/first-infant-milk-from-birth--stage-1?_ga=2.39676387.1742667930.1639668347-2102944132.1605114601&_gac=1.257390201.1638453811.Cj0KCQiA-qGNBhD3ARIsAO_o7ylZy9gheehcYLRQ7AN_QK3WAiZjbpq_IJU7B_bk2ua9wGYrzG7Sye8aAgUtEALw_wcB',
    'https://www.aptaclub.co.uk/products/aptamil/hungry-milks.html',
    'https://www.aptaclub.co.uk/products/aptamil/toddler-milk-2.html',
    'https://www.aptaclub.co.uk/products/aptamil/infant-formula.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-comfort.html',
    'https://www.aptaclub.co.uk/products/quality-affairs.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks.html',
    'https://www.aptaclub.co.uk/products/filter-results.html/selectedtag=eln-products:eln_gb/aptamil/productmealCategory/follow-on-milk-6-12-months-stage-2?_ga=2.69102289.1742667930.1639668347-2102944132.1605114601&_gac=1.91124200.1638453811.Cj0KCQiA-qGNBhD3ARIsAO_o7ylZy9gheehcYLRQ7AN_QK3WAiZjbpq_IJU7B_bk2ua9wGYrzG7Sye8aAgUtEALw_wcB',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-lactose-free.html',
    'https://www.aptaclub.co.uk/products/weaning-6-12-months.html',
    'https://www.aptaclub.co.uk/products/aptamil/toddler-milk.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals.html',
    'https://www.aptaclub.co.uk/products/readytogocomp.html',
    'https://www.aptaclub.co.uk/products/new-aptamil-baby-milks.html',
    'https://www.aptaclub.co.uk/products/aptamil/follow-on-milk.html',
    'https://www.aptaclub.co.uk/products/new-aptamil-advanced.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-pepti-2.html',
    'https://www.aptaclub.co.uk/products/baby-0-6-months.html',
    'https://www.aptaclub.co.uk/products/aptamil.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-anti-reflux.html',
    'https://www.aptaclub.co.uk/products/understanding-formula-milk.html',
    'https://www.aptaclub.co.uk/products/filter-results.html/selectedtag=eln-products:eln_gb/aptamil/productmealCategory/growing-up-milk-&-toddler-milk-1-year-stage-3-4?_ga=2.36046176.1742667930.1639668347-2102944132.1605114601&_gac=1.254768634.1638453811.Cj0KCQiA-qGNBhD3ARIsAO_o7ylZy9gheehcYLRQ7AN_QK3WAiZjbpq_IJU7B_bk2ua9wGYrzG7Sye8aAgUtEALw_wcB',
    'https://www.aptaclub.co.uk/faqs/products-faqs.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs.html',
    'https://www.aptaclub.co.uk/products/product-availability.html',
    'https://www.aptaclub.co.uk/products/is-aptamil-halal.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/toddler-milk.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/infant-formula-milk.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/follow-on-milk.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-creativity/how-to-help-your-toddler-discover-new-foods.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/toddler-milk/profutura-growing-up-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-friends/how-to-set-a-good-example.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/is-aptamil-sensavia-halal.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-creativity.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-pepti-2-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals/when-to-start-weaning.html',
    'https://www.aptaclub.co.uk/products/moving-on-to-a-new-baby-milk.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-anti-reflux-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-movement/why-active-play-is-so-important-for-toddlers.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-lactose-free-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/the-secrets-of-parents-whose-children-eat-everything.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/avocado-chocolate-pots.html',
    'https://www.aptaclub.co.uk/products/aptamil/toddler-milk/aptamil-growing-up-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-organic-cereals/aptamil-organic-seven-grain-cereal.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-creativity/seven-fun-creative-projects-for-little-crafters.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-movement/five-ways-to-manage-a-tantrum.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/why-is-my-babys-poo-green-and-runny-on-aptamil-sensavia.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/what-products-are-available-in-the-aptamil-sensavia-range.html',
    'https://www.aptaclub.co.uk/products/Componenttest/Componenttest/Componenttest0.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals/aptamil-multigrain-cereal-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-pre-measured-tabs/aptamil-follow-on-milk-pre-measured-tabs.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/is-aptamil-sensavia-suitable-for-vegans-and-vegetarians.html',
    'https://www.aptaclub.co.uk/products/aptamil-muesli-product-recall-january-2021.html',
    'https://www.aptaclub.co.uk/products/filter-results.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/supergrain-porridge.html',
    'https://www.aptaclub.co.uk/products/aptamil/toddler-milk-2/aptamil-growing-up-milk-2-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-creativity/ten-mess-free-sensory-activities-to-try-at-home.html',
    'https://www.aptaclub.co.uk/products/aptamil-organic-cereals/aptamil-organic-banana-and-strawberry-porridge.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/fish-pie-with-sweet-potato-mash.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals/aptamil-baby-rice-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/follow-on-milk/profutura-follow-on-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-friends.html',
    'https://www.aptaclub.co.uk/products/aptamil/porridge/aptamil-porridge-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-friends/lets-be-friends-six-essential-social-skills-for-toddlers.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-movement/how-to-ensure-your-toddler-is-getting-enough-iron-in-their-diet.html',
    'https://www.aptaclub.co.uk/products/aptamil/infant-formula/aptamil-first-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/can-you-reheat-aptamil-sensavia-formula.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/what-is-aptamil-sensavia-milk.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-voice/talking-to-your-toddler.html',
    'https://www.aptaclub.co.uk/products/changing-infant-formula.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-creativity/eight-ways-to-support-your-toddlers-creativity.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals/aptamil-baby-rice.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/what-is-the-difference-between-aptamil-sensavia-and-aptamil-comfort.html',
    'https://www.aptaclub.co.uk/products/science-of-play/toddler-portion-sizes-are-you-getting-it-right.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/how-do-i-move-my-baby-onto-aptamil-sensavia.html',
    'https://www.aptaclub.co.uk/products/aptamil/toddler-milk/discover-aptamil-growing-up-milks.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/what-should-i-expect-of-the-taste-of-aptamil-sensavia.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-movement/how-toddlers-learn-to-walk.html',
    'https://www.aptaclub.co.uk/products/science-of-play/two-to-three-your-toddlers-amazing-milestones.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/pasta-bolognese.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-voice.html',
    'https://www.aptaclub.co.uk/products/how-is-aptamil-made.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-comfort-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/can-you-freeze-aptamil-sensavia.html',
    'https://www.aptaclub.co.uk/products/science-of-play/science-of-play-articles.html',
    'https://www.aptaclub.co.uk/products/ready-to-drink.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/is-aptamil-sensavia-suitable-for-my-baby.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/does-the-range-of-aptamil-sensavia-milks-contain-lactose.html',
    'https://www.aptaclub.co.uk/products/share-the-moments-that-matter.html',
    'https://www.aptaclub.co.uk/products/aptamil/muesli/aptamil-muesli-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/polenta-fingers.html',
    'https://www.aptaclub.co.uk/products/ready-to-drink/hackvent.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-hungry-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/is-aptamil-sensavia-suitable-for-a-colicky-baby.html',
    'https://www.aptaclub.co.uk/products/science-of-play/why-your-toddler-might-need-more-vitamin-d.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/savoury-pancakes-avacado-smoked-salmon.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/how-many-scoops-of-aptamil-sensavia-are-there-for-every-oz-of-water.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/mango-pudding.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-pepti-junior.html',
    'https://www.aptaclub.co.uk/products/science-of-play/one-to-two-your-toddlers-amazing-milestones.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/hot-chicken-in-creamy-sauce.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-voice/how-to-train-your-toddlers-tastebuds.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/superfood-rice-pudding.html',
    'https://www.aptaclub.co.uk/products/aptamil-sensavia/aptamil-sensavia-faqs/how-do-i-prepare-and-store-aptamil-sensavia.html',
    'https://www.aptaclub.co.uk/products/quality-affairs/statement-aptamil-pronutra-advance.html',
    'https://www.aptaclub.co.uk/products/nutrition-for-every-stage.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-voice/late-talking-help-your-toddler-discover-their-voice.html',
    'https://www.aptaclub.co.uk/products/science-of-play.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-friends/what-you-need-to-know-about-your-toddlers-first-playdate.html',
    'https://www.aptaclub.co.uk/products/science-of-play/discover-movement.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/infant-formula-milk/profutura-first-infant-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/date-and-apricot-cereal-bars.html',
    'https://www.aptaclub.co.uk/products/aptamil/specialty-milks/aptamil-pepti-1-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/aptamil/follow-on-milk/aptamil-follow-on-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/quality-affairs/quality-assurance.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-pepti-800-grams.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-pepti-400-grams.html',
    'https://www.aptaclub.co.uk/shop/organic-cereals/aptamil-organic-seven-grain-cereal.html',
    'https://www.aptaclub.co.uk/shop/organic-cereals/aptamil-organic-banana-and-strawberry-porridge.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-lactose-free-400-grams.html',
    'https://www.aptaclub.co.uk/products/aptamil/cereals/aptamil-multigrain-cereal.html',
    'https://www.aptaclub.co.uk/products/aptamil-advanced/follow-on-milk/profutura-follow-on-milk-safe-preparation.html',
    'https://www.aptaclub.co.uk/products/filter-results.html/selectedtag=eln-products:eln_gb/aptamil/productSkuCategory/ready-to-use',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-pepti-2-400-grams.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-pepti-2-800-grams.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-pepti-junior-450g.html',
    'https://www.aptaclub.co.uk/shop/aptamil-organic/follow-on-milk.html',
    'https://www.aptaclub.co.uk/shop/aptamil-organic/infant-formula.html',
    'https://www.aptaclub.co.uk/shop/aptamil-organic/growing-up-milk.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-comfort-800-grams.html',
    'https://www.aptaclub.co.uk/shop/specialty-milks/aptamil-anti-reflux-800-grams.html',
    'https://www.aptaclub.co.uk/shop/cereals.html',
    'https://www.aptaclub.co.uk/shop/aptamil-organic/follow-on-milk/former-follow-on-milk.html'
]

const recipeUrls = [
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2/healthy-breakfast-recipes.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2/healthy-pregnancy-snacks.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2/healthy-lunch-recipes.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/why-are-carbohydrates-important.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-vitamins-and-supplements.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/the-role-of-sugar-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/what-is-protein.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/weight-gain-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/fluids-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/can-you-eat-seafood.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-nutrients-vitamin-c.html',
    'https://www.aptaclub.co.uk/baby/diet-and-nutrition.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/focus-on-folic-acid.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2/all-pregnancy-recipes.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/eating-for-2/healthy-dinner-recipes.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-nutrients-vitamin-e.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/healthy-pregnancy-diet.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/why-is-salt-important.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/vitamin-a-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/understanding-lcps.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/spiced-prawn-lunch-box.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/sweet-potato-fish-pie.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-nutrients-fibre.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/sesame-tuna-steaks.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-nutrients-iodine.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-nutrients-calcium.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/can-you-eat-cheese.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/feta-pistachio-aubergine-couscous.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/sensory-development-in-the-womb.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/roast-chickpea-almonds.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/corn-courgette-breakfast-fritters-poached-eggs.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/can-you-eat-fish.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/vitamin-d-in-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/sweet-potato-baked-beans.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/loaded-savoury-crisp-breads.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/raspberry-almond-butter-cocoa-bites.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/tomato-prawn-chorizo-fusilli.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/almond-apricot-vanilla-muesli.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/pregnancy-cravings.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/thai-peanut-prawn-noodles.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-vitamins-iron.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/what-meat-when-pregnant.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/beetroot-feta-mint-risotto.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/importance-of-vitamin-k.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/key-vitamins-and-nutrients/pregnancy-vitamins-zinc.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/panzanella-mozzarella-chicken-salad.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/pregnancy-recipes/blackberry-raspberry-ginger-yoghurt-pots.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/caffeine-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/spicy-food-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/alcohol-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/understanding-food-groups/eggs-during-pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/diet-and-nutrition/your-pregnancy-diet/smoking-during-pregnancy.html'
]

const toddlerUrls = [
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition.html',
    'https://www.aptaclub.co.uk/toddler.html',
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition/vitamin-d-for-toddlers.html',
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition/vitamins-and-minerals.html',
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition/toddler-iron-intake.html',
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition/supporting-their-immune-system.html',
    'https://www.aptaclub.co.uk/toddler/diet-and-nutrition/importance-of-each-nutrient.html',
    'https://www.aptaclub.co.uk/toddler/months/toddlers-development-24-36-months.html',
    'https://www.aptaclub.co.uk/toddler/practical-tools-and-tips/family-meals-with-toddlers.html',
    'https://www.aptaclub.co.uk/toddler/bonding-and-development.html',
    'https://www.aptaclub.co.uk/toddler/months/toddlers-development-12-24-months.html',
    'https://www.aptaclub.co.uk/toddler/practical-tools-and-tips/coping-with-picky-eaters.html',
    'https://www.aptaclub.co.uk/toddler/health-and-wellbeing/building-blocks-of-language.html',
    'https://www.aptaclub.co.uk/toddler/practical-tools-and-tips.html',
    'https://www.aptaclub.co.uk/toddler/health-and-wellbeing.html',
    'https://www.aptaclub.co.uk/toddler/bonding-and-development/supporting-your-toddlers-development-through-responsive-parentin.html',
    'https://www.aptaclub.co.uk/toddler/months.html',
    'https://www.aptaclub.co.uk/toddler/practical-tools-and-tips/family-meals-with-toddlers.html'
]

const toolUrls = [
    'https://www.aptaclub.co.uk/pregnancy/practical-tools-and-tips.html',
    'https://www.aptaclub.co.uk/pregnancy/practical-tools-and-tips/hospital-bag-checklist.html',
    'https://www.aptaclub.co.uk/pregnancy/practical-tools-and-tips/birth-plan.html',
    'https://www.aptaclub.co.uk/conception/ovulation-calculator.html',
    'https://www.aptaclub.co.uk/pregnancy/practical-tools-and-tips/due-date-calculator.html',
    'https://www.aptaclub.co.uk/pregnancy/practical-tools-and-tips/pregnancy-driving.html',
    'https://www.aptaclub.co.uk/pregnancy/due-date-calculator.html'
]

const weeklyEmailsUrls = [
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-12.html',
    'https://www.aptaclub.co.uk/pregnancy/tummy-timeline.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-14.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-36.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-13.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-27.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-weeks-1-4.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-19.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-30.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/39-weeks-pregnant.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-35.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-6.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-31.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-34.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-26.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-18.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-21.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-16.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-37.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-32.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-40.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-10.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-24.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-38.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-15.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-9.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-29.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-5.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-17.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-22.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-28.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-25.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-33.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-7.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-20.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-8.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-23.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks/pregnancy-week-11.html',
    'https://www.aptaclub.co.uk/pregnancy.html',
    'https://www.aptaclub.co.uk/pregnancy/health-and-wellbeing.html',
    'https://www.aptaclub.co.uk/pregnancy/pregnancy-health.html',
    'https://www.aptaclub.co.uk/pregnancy/weeks.html'
]

var babyaptabkgd = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/baby-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2.png" loading="lazy"></img>'

var babyaptabkgdCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">Discover more about your baby\'s development stages.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var hamper = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/gift-hamper-entry-icon-resized-2?fmt=png-alpha&amp;fit=wrap" alt="gift-hamper-entry-icon-resized-2.png" loading="lazy">'

var active = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/yoga-icon-resized?fmt=png-alpha&amp;fit=wrap" alt="yoga-icon-resized.png" loading="lazy">'

var activeCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE workouts tailored to your trimester.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var pregnancyicon = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/personal-pregnancy-journey-icon-circle.png" alt="gift-hamper-entry-icon-resized-2.png" loading="lazy"></img>'

var bondinganddev = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/bonding-and-dev-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var bondinganddevCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE tips on how to bond with your baby.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var careline = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/careline-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var carelineCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE access to personal and professional advice.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var recipebook = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/recipe-book-icon-circle.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var recipebookCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE \'Eating for 2\' recipe e-book.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var labourandbirth = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/labour-and-birth-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var labourandbirthCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE tips on how to best prepare yourself for labour and birth.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var newmumbook = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/new-mom-book-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var newmumbookCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">FREE access to our new Parent Manual.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var products = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/products-apta-bkgd.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var productsCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">Discover our wide range of products today.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var tools = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/free-tools-icon-circle.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var toolsCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">Discover a wealth of FREE tools at your fingertips.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var perantingicon = '<source type="image/webp" srcset="https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=webp-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<source type="image/png" srcset="https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=170&amp;fit=wrap 170w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=320&amp;fit=wrap 320w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=360&amp;fit=wrap 360w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=480&amp;fit=wrap 480w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=640&amp;fit=wrap 640w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=720&amp;fit=wrap 720w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=960&amp;fit=wrap 960w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=1280&amp;fit=wrap 1280w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=1440&amp;fit=wrap 1440w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=1920&amp;fit=wrap 1920w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=2560&amp;fit=wrap 2560w, https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1?fmt=png-alpha&amp;wid=3840&amp;fit=wrap 3840w" sizes="(min-width:51em) 100vw, 100vw">\
<img class="imageV2__image" src="https://smartmedia.digital4danone.com/is/image/danone/peranting-icon-circle-1.png" alt="gift-hamper-entry-icon-resized-2" loading="lazy"></img>'

var perantingiconCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">Discover your baby\'s development week-by-week</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

var toddlerUrlsCallOut = '<section class="container block  -background-white theme-1  " data-qa="component.column-grid" data-target-id="column-grid_1010820569">\
<div class="row grid-center-10-width-1-col  ">\
<div class="column theme-1   ">\
<div class="rte  theme-1">\
<div class="default">\
<p style="text-align: center;color: #6cdafe;font-weight: bold;">Discover everything you need to know about your toddler.</p>\
</div>\
</div>\
</div>\
</div>\
</section>'

const lastPage = localStorage.getItem('lastPage');

var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 50);

//polling function
function pxPollFunc() {
    pxFuncFired += 1;

    //if run for over 1 secs then don't
    if (pxFuncFired >= 5) {
        clearInterval(pxInterval);
    }

    if (babyUrls.some(url => lastPage.includes(url))) {
        //baby content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = babyaptabkgd
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "See what is the new 'normal', how to improve feeding times and help baby learn new things"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the babyaptabkgdCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = babyaptabkgdCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (bondingUrls.some(url => lastPage.includes(url))) {
        //bonding content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = bondinganddev
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Get tips and advice on how to bond with your baby"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the bondinganddevCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = bondinganddevCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (carelineUrls.some(url => lastPage.includes(url))) {
        //careline content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = careline
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "We're here to help. Whenever you need it."
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the carelineCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = carelineCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (excersiseUrls.some(url => lastPage.includes(url))) {
        //excersise content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Stay fit through pregnancy with coach-led workouts"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = recipebook
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Healthy tasty recipes by chef Lorraine Pascale and our team of nutritionists"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the activeCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = activeCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (labourUrls.some(url => lastPage.includes(url))) {
        //labour content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = labourandbirth
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Get tips onm how to best prepare yourself for the big day, everything from noticing the early signs of labour, to how to recover after the event."
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the labourandbirthCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = labourandbirthCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (NMBUrls.some(url => lastPage.includes(url))) {
        //new mum book content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = newmumbook
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Read up on the essentials for becoming a new parent with our New Parent Manual."
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the newmumbookCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = newmumbookCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (productUrls.some(url => lastPage.includes(url))) {
        //product content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = products
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Discover our wide range of products and convenient formats to help baby and you"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the productsCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = productsCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (recipeUrls.some(url => lastPage.includes(url))) {
        //recipe content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = recipebook
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Healthy tasty recipes by chef Lorraine Pascale and our team of nutritionists"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the recipebookCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = recipebookCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (toddlerUrls.some(url => lastPage.includes(url))) {
        //toddler content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = babyaptabkgd
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Advice on feeding, tantrums and potty training"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the toddlerUrlsCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = toddlerUrlsCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (toolUrls.some(url => lastPage.includes(url))) {
        //tools content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = tools
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Try our due date calculator, baby symptom checker and our 'don't leave home without it', hospital bag checklist."
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the toolsCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = toolsCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    if (weeklyEmailsUrls.some(url => lastPage.includes(url))) {
        //tools content
        //FIRST ITEM//
        //change image
        document.querySelectorAll('picture')[2].innerHTML = perantingicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[1].innerHTML = "Discover the science behind your baby's developments, week-by-week"
        //SECOND ITEM//
        //change image
        document.querySelectorAll('picture')[3].innerHTML = hamper
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[2].innerHTML = 'Get the chance to win Tommee Tippee goodies'
        //THIRD ITEM//
        //change image
        document.querySelectorAll('picture')[4].innerHTML = active
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = 'Stay fit through pregnancy with coach-led workouts'
        //FOURTH ITEM//
        //change image
        document.querySelectorAll('picture')[5].innerHTML = pregnancyicon
        //change text
        document.querySelectorAll('.rte.theme-1>div>p')[3].innerHTML = "Discover the science behind your baby's developments, week-by-week"

        if (document.querySelector('.mpx-container') === null) {
        // Find the element with data-target-id="column-grid_1743765335"
        var targetElement = document.querySelector('[data-target-id="column-grid_1743765335"]');

        // Create a new element from the perantingiconCallOut HTML
        var newElement = document.createElement('div');
        newElement.innerHTML = perantingiconCallOut;
        newElement.classList.add('container', 'block', 'theme-1', 'mpx-container');

        // Insert the new element after the target element
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
        }
    }
}