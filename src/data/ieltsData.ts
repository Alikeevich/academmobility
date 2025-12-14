// src/data/ieltsData.ts

export const LISTENING_DATA = {
  title: "Part 1: University Accommodation Enquiry",
  duration: 1800, // 30 min
  audioLength: 300,
  questions: [
    { id: 1, type: 'gap_fill', question: "Student Name: Sarah ______", correct: "Parker" },
    { id: 2, type: 'multiple_choice', question: "Preferred location:", options: ["A. City center", "B. On campus", "C. Sports complex"], correct: "B" },
    { id: 3, type: 'gap_fill', question: "Max monthly budget: $______", correct: "600" },
    { id: 4, type: 'multiple_choice', question: "Dietary requirement:", options: ["A. Vegetarian", "B. Gluten-free", "C. None"], correct: "A" }
  ]
};

export const WRITING_DATA = {
  title: "Writing Task 2: Academic Essay",
  duration: 3600, // 60 min
  prompt: `
    <h3 class="font-bold text-lg mb-2">International Education</h3>
    <div class="bg-gray-100 p-4 border-l-4 border-uni-primary mb-4 italic">
      "Some people believe that studying at a university in a foreign country is the best way to learn about another culture. Others believe that it is better to learn about other cultures through the media and the internet."
    </div>
    <p class="mb-2">Discuss both these views and give your own opinion.</p>
    <p class="text-sm text-gray-500 mt-4">Write at least 250 words.</p>
  `
};

export const READING_DATA = {
  title: "IELTS Academic Reading",
  duration: 3600, // 60 min
  passages: [
    {
      id: 1,
      title: "Passage 1: The life and work of Marie Curie",
      text: `
        <p class="mb-3">Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry. She was the first woman to win a Nobel Prize.</p>
        <p class="mb-3">From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher. From her earnings she was able to finance her sister Bronia’s medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education.</p>
        <p class="mb-3">In 1891 this promise was fulfilled and Marie went to Paris and began to study at the Sorbonne (the University of Paris). She often worked far into the night and lived on little more than bread and butter and tea. She came first in the examination in the physical sciences in 1893, and in 1894 was placed second in the examination in mathematical sciences. It was not until the spring of that year that she was introduced to Pierre Curie.</p>
        <p class="mb-3">Their marriage in 1895 marked the start of a partnership that was soon to achieve results of world significance. Following Henri Becquerel’s discovery in 1896 of a new phenomenon, which Marie later called ‘radioactivity’, Marie Curie decided to find out if the radioactivity discovered in uranium was to be found in other elements. She discovered that this was true for thorium.</p>
        <p class="mb-3">Turning her attention to minerals, she found her interest drawn to pitchblende, a mineral whose radioactivity, superior to that of pure uranium, could be explained only by the presence in the ore of small quantities of an unknown substance of very high activity. Pierre Curie joined her in the work that she had undertaken to resolve this problem, and that led to the discovery of the new elements, polonium and radium. While Pierre Curie devoted himself chiefly to the physical study of the new radiations, Marie Curie struggled to obtain pure radium in the metallic state. This was achieved with the help of the chemist André-Louis Debierne, one of Pierre Curie’s pupils. Based on the results of this research, Marie Curie received her Doctorate of Science, and in 1903 Marie and Pierre shared with Becquerel the Nobel Prize for Physics for the discovery of radioactivity.</p>
        <p class="mb-3">The births of Marie’s two daughters, Irène and Eve, in 1897 and 1904 failed to interrupt her scientific work. She was appointed lecturer in physics at the École Normale Supérieure for girls in Sèvres, France (1900), and introduced a method of teaching based on experimental demonstrations. In December 1904 she was appointed chief assistant in the laboratory directed by Pierre Curie.</p>
        <p class="mb-3">The sudden death of her husband in 1906 was a bitter blow to Marie Curie, but was also a turning point in her career: henceforth she was to devote all her energy to completing alone the scientific work that they had undertaken. On May 13, 1906, she was appointed to the professorship that had been left vacant on her husband’s death, becoming the first woman to teach at the Sorbonne. In 1911 she was awarded the Nobel Prize for Chemistry for the isolation of a pure form of radium.</p>
        <p class="mb-3">During World War I, Marie Curie, with the help of her daughter Irène, devoted herself to the development of the use of X-radiography, including the mobile units which came to be known as ‘Little Curies’, used for the treatment of wounded soldiers. In 1918 the Radium Institute, whose staff Irène had joined, began to operate in earnest, and became a centre for nuclear physics and chemistry. Marie Curie, now at the highest point of her fame and, from 1922, a member of the Academy of Medicine, researched the chemistry of radioactive substances and their medical applications.</p>
        <p class="mb-3">In 1921, accompanied by her two daughters, Marie Curie made a triumphant journey to the United States to raise funds for research on radium. Women there presented her with a gram of radium for her campaign. Marie also gave lectures in Belgium, Brazil, Spain and Czechoslovakia and, in addition, had the satisfaction of seeing the development of the Curie Foundation in Paris, and the inauguration in 1932 in Warsaw of the Radium Institute, where her sister Bronia became director.</p>
        <p class="mb-3">One of Marie Curie’s outstanding achievements was to have understood the need to accumulate intense radioactive sources, not only to treat illness but also to maintain an abundant supply for research. The existence in Paris at the Radium Institute of a stock of 1.5 grams of radium made a decisive contribution to the success of the experiments undertaken in the years around 1930. This work prepared the way for the discovery of the neutron by Sir James Chadwick and, above all, for the discovery in 1934 by Irène and Frédéric Joliot-Curie of artificial radioactivity. A few months after this discovery, Marie Curie died as a result of leukaemia caused by exposure to radiation. She had often carried test tubes containing radioactive isotopes in her pocket, remarking on the pretty blue-green light they gave off.</p>
        <p class="mb-3">Her contribution to physics had been immense, not only in her own work, the importance of which had been demonstrated by her two Nobel Prizes, but because of her influence on subsequent generations of nuclear physicists and chemists.</p>
      `,
      questions: [
        { id: 1, type: 'true_false', question: "Marie Curie’s husband was a joint winner of both Marie’s Nobel Prizes.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE" },
        { id: 2, type: 'true_false', question: "Marie became interested in science when she was a child.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN" },
        { id: 3, type: 'true_false', question: "Marie was able to attend the Sorbonne because of her sister’s financial contribution.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE" },
        { id: 4, type: 'true_false', question: "Marie stopped doing research for several years when her children were born.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE" },
        { id: 5, type: 'true_false', question: "Marie took over the teaching position her husband had held.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE" },
        { id: 6, type: 'true_false', question: "Marie’s sister Bronia studied the medical uses of radioactivity.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN" },
        { id: 7, type: 'gap_fill', question: "When uranium was discovered to be radioactive, Marie Curie found that the element called ______ had the same property.", correct: "thorium" },
        { id: 8, type: 'gap_fill', question: "Marie and Pierre Curie’s research into the radioactivity of the mineral known as ______ led to the discovery of two new elements.", correct: "pitchblende" },
        { id: 9, type: 'gap_fill', question: "In 1911, Marie Curie received recognition for her work on the element ______.", correct: "radium" },
        { id: 10, type: 'gap_fill', question: "Marie and Irène Curie developed X-radiography which was used as a medical technique for ______.", correct: "soldiers" },
        { id: 11, type: 'gap_fill', question: "Marie Curie saw the importance of collecting radioactive material both for research and for cases of ______.", correct: "illness" },
        { id: 12, type: 'gap_fill', question: "The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the ______ and of what was known as artificial radioactivity.", correct: "neutron" },
        { id: 13, type: 'gap_fill', question: "During her research, Marie Curie was exposed to radiation and as a result she suffered from ______.", correct: "leukaemia" }
      ]
    },
    {
      id: 2,
      title: "Passage 2: The Physics of Traffic Behavior",
      text: `
        <p class="mb-3"><strong>Section 14</strong></p>
        <p class="mb-3">Some years ago, when several theoretical physicists, principally Dirk Helbing and Boris Kerner of Stuttgart, Germany, began publishing papers on traffic flow... They had noticed that if they simulated the movement of vehicles on a highway, using the equations that describe how the molecules of a gas move, some very strange results emerged. Of course, vehicles do not behave exactly like gas molecules: for example, drivers try to avoid collisions by slowing down when they get too near another vehicle, whereas gas molecules have no such concern. However, the physicists modified the equations to take the differences into account and the overall description of traffic as a flowing gas has proved to be a very good one; the moving-gas model of traffic reproduces many phenomena seen in real-world traffic.</p>
        <p class="mb-3">The strangest thing that came out of these equations, however, was the implication that congestion can arise completely spontaneously; no external causes are necessary. Vehicles can be flowing freely along, at a density still well below what the road can handle, and then suddenly gel into a slow-moving ooze. Under the right conditions a brief and local fluctuation in the speed or the distance between vehicles is all it takes to trigger a system-wide breakdown that persists for hours. In fact, the physicists’ analysis suggested such spontaneous breakdowns in traffic flow probably occur quite frequently on highways.</p>
        
        <p class="mb-3"><strong>Section 15 (Dramatic effects...)</strong></p>
        <p class="mb-3">Though a decidedly unsettling discovery, this showed striking similarities to the phenomena popularized as ‘chaos theory’. This theory has arisen from the understanding that in any complex interacting system which is made of many parts, each part affects the others. Consequently, tiny variations in one part of a complex system can grow in huge but unpredictable ways. This type of dramatic change from one state to another is similar to what happens when a chemical substance changes from a vapor to a liquid. It often happens that water in a cloud remains as a gas even after its temperature and density have reached the point where it could condense into water droplets. However if the vapor encounters a solid surface, even something as small as a speck of dust, condensation can take place and the transition from vapor to liquid finally occurs. Helbing and Kerner see traffic as a complex interacting system. They found that a small fluctuation in traffic density can act as the ‘speck of dust’ causing a sudden change from freely moving traffic to synchronized traffic, when vehicles in all lanes abruptly slow down and start moving at the same speed, making passing impossible.</p>

        <p class="mb-3"><strong>Section 16</strong></p>
        <p class="mb-3">The physicists have challenged proposals to set a maximum capacity for vehicles on highways. They argue that it may not be enough simply to limit the rate at which vehicles are allowed to enter a highway, rather, it may be necessary to time each vehicle’s entry onto a highway precisely to coincide with a temporary drop in the density of vehicles along the road. The aim of doing this would be to smooth out any possible fluctuations in the road conditions that can trigger a change in traffic behavior and result in congestion. They further suggest that preventing breakdowns in the flow of traffic could ultimately require implementing the radical idea that has been suggested from time to time: directly regulating the speed and spacing of individual cars along a highway with central computers and sensors that communicate with each car’s engine and brake controls.</p>

        <p class="mb-3"><strong>Section 17</strong></p>
        <p class="mb-3">However, research into traffic control is generally centered in civil engineering departments and here the theories of the physicists have been greeted with some skepticism. Civil engineers favor a practical approach to problems and believe traffic congestion is the result of poor road construction (two lanes becoming one lane or dangerous curves), which constricts the flow of traffic. Engineers questioned how well the physicists’ theoretical results relate to traffic in the real world. Indeed, some engineering researchers questioned whether elaborate chaos-theory interpretations are needed at all, since at least some of the traffic phenomena the physicists’ theories predicted seemed to be similar to observations that had been appearing in traffic engineering literature under other names for years; observations which had straightforward cause-and-effect explanations.</p>
      `,
      questions: [
        { id: 18, type: 'multiple_choice', question: "Which option describes what the writer is doing in section two?", options: ["A. explaining Helbing and Kerner’s attitude to chaos theory", "B. clarifying Helbing and Kerner’s conclusions about traffic behaviour", "C. drawing parallels between the behaviour of clouds and traffic", "D. giving examples of different potential causes of congestion"], correct: "C" },
        { id: 20, type: 'multiple_choice', question: "Which statement reflects civil engineers’ opinions of the physicists’ theories?", options: ["A. They fail to take into account road maintenance.", "B. They may have little to do with everyday traffic behaviour.", "C. They are inconsistent with chaos theory.", "D. They can easily be disproved."], correct: "B" },
        { id: 22, type: 'multiple_choice', question: "Which option expresses the purpose of the text?", options: ["A. to change the behaviour of vehicle drivers", "B. to discuss contrasting approaches to understanding congestion", "C. to recommend a practical rather than a theoretical approach", "D. to inform drivers of future changes"], correct: "B" },
        { id: 24, type: 'gap_fill', question: "Using simulations based on ______ more commonly used to illustrate the movement of molecules in a gas, physicists showed that there are similarities...", correct: "equations" },
        { id: 25, type: 'gap_fill', question: "Gas molecules randomly crash into one another but drivers prevent ______ from happening by altering their speed.", correct: "collisions" },
        { id: 26, type: 'gap_fill', question: "The physicists’ investigations seemed to show that congestion can occur even when traffic is moving without problem and when its ______ is within approved levels.", correct: "density" }
      ]
    },
    {
      id: 3,
      title: "Passage 3: Plain English",
      text: `
        <p class="mb-3">There is no theoretical limit to the number of special purposes to which language can be put. As society develops new facets, so language is devised to express them. However, the result is often that language becomes very specialised and complex, and complications arise as ordinary people struggle to make sense of it. Popular anxiety over special uses of language is most markedly seen in the campaigns to promote ‘plain’ speaking and writing – notably, the Plain English movements of Britain and the USA. The main aim of these campaigns is to attack the use of unnecessarily complicated language (‘gobbledegook’) by governments, businesses and other authorities whose role puts them in linguistic contact with the general public. The campaigners argue that such language, whether spoken or written, should be replaced by clearer forms of expression.</p>
        <p class="mb-3">The movements took shape only in the 1970s, so it is too soon to ascertain their long-term influence on the characteristics of language varieties. But they have certainly played a major part in promoting public awareness of the existence of communication problems, and have influenced many organisations to do something about it. In Britain, the campaign was launched in 1979, by a ritual shredding of government forms in Parliament Square, London. By 1982, the government had published a report telling departments to improve the design of forms, and to abolish those that were unnecessary. By 1985, around 15,700 forms had disappeared and 21,300 had been revised.</p>
        <p class="mb-3">Today the Plain English campaigns continue to grow, focusing especially on such everyday consumer literature as forms, official letters, licences, leases, contracts, insurance policies and guarantees. In Britain, annual publicity is given to the Plain English Awards competition, which gives trophies to organisations that have produced the clearest documents. In the USA, similar interest is shown in the annual Doublespeak Awards, awarded by the National Council of Teachers to ‘American public figures who have perpetrated language that is grossly unfactual, deceptive, evasive, euphemistic, confusing or self-contradictory.’</p>
        <p class="mb-3">In these cost-conscious days, it is stressed that clear language not only avoids anxiety on the part of the recipient, it also saves time and money. The campaigns have large dossiers of problem cases. In one case, an official government letter provoked so many complaints and questions that a second letter had to be sent to explain the first. In another, an application form was wrongly filled in by 50% of the applicants, which resulted in a considerable outlay of effort in returning and reprocessing the form. In contrast, there are cases of businesses revising their literature to avoid legal jargon, and benefiting from increased sales.</p>
        <p class="mb-3">Particular concern is expressed about the ambiguities and omissions found in medical labels. For example, in one pharmaceutical survey, the instruction to ‘use sparingly’ was misunderstood by 33% of patients. The instruction ‘take two tablets four hourly’ received a number of interpretations (e.g. to take eight tablets an hour). Related areas of concern include the use of warning labels on household goods (such as disinfectants) and on toys for children.</p>
        <p class="mb-3">Objections to material in plain English have come mainly from the legal profession. Lawyers point to the risk of ambiguity inherent in the use of everyday language for legal or official documents, and draw attention to the need for confidence in legal formulations, which can come only from using language that has been tested in courts over the course of centuries. The campaigners point out that there has been no sudden increase in litigation as a consequence of the increase in plain English materials.</p>
      `,
      questions: [
        { id: 27, type: 'true_false', question: "The Plain English campaigns are concerned with the language officials use when communicating with ordinary people.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE" },
        { id: 28, type: 'true_false', question: "Campaigners found it difficult to talk to government officials.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN" },
        { id: 29, type: 'true_false', question: "A change of president in the US meant that the effects of the campaign there were negligible.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE" },
        { id: 30, type: 'true_false', question: "In the UK, awards are given to people who have produced materials that are easy to understand.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE" },
        { id: 31, type: 'true_false', question: "Use of clear language on documents can be economically beneficial.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE" },
        { id: 32, type: 'true_false', question: "The tendency of doctors to use jargon when talking to patients often leads to confusion.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN" },
        { id: 33, type: 'true_false', question: "Regular checks are made on language used in the courts.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN" },
        { id: 34, type: 'gap_fill', question: "The benefits of plain language can be seen in the case of companies who remove ______ from their forms...", correct: "legal jargon" },
        { id: 35, type: 'gap_fill', question: "...and achieve ______ as a result.", correct: "increased sales" },
        { id: 36, type: 'gap_fill', question: "Consumers often complain that they experience a feeling of ______ when trying to put together do-it-yourself products...", correct: "frustration" },
        { id: 37, type: 'gap_fill', question: "...which have not been tested by companies on a ______.", correct: "first-time user" },
        { id: 38, type: 'gap_fill', question: "In situations where not keeping to the correct procedures could affect safety issues, it is especially important that ______ information is not left out...", correct: "essential" },
        { id: 39, type: 'gap_fill', question: "...and no assumptions are made about a stage being self-evident or the consumer having a certain amount of ______.", correct: "special knowledge" },
        { id: 40, type: 'gap_fill', question: "Lawyers feel that it would cause people to lose faith in ______, as it would mean departing from language that has been used in the courts...", correct: "legal formulations" }
      ]
    }
  ]
};