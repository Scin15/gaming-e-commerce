
const items = [
    {
        id: 0,
        title: "Resident Evil Village",
        price: 50,
        platform_id: 1,
        platform_desc: "PlayStation",
        game_desc: `Resident Evil Village per PC è un gioco survival horror. Questa incarnazione è la decima versione principale del franchise e, sorprendentemente, la 26esima include tutti gli spin-off e i remake, rendendo Resident Evil uno dei giochi più prolifici in circolazione! Resident Evil Village è a volte chiamato Resident Evil 8: Village; gli sviluppatori infatti hanno notato che possono creare un puzzle nascosto all'interno del titolo, che è reso con numeri romani per otto (VIII) invece del Vill di Village. Figo!`,
        category_id: 1,
        category_desc: "sparatutto",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIwODA3MzEsInB1ciI6ImJsb2JfaWQifX0=--aabf7f6f6e7d13f2507eea1ed08698a46bf782a1/2000000000083734285",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE4MDMxNjMsInB1ciI6ImJsb2JfaWQifX0=--863a19b2a3251a630d5c985a399e847043a8b0f0/2000000000083733029",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE2MDUxMzAsInB1ciI6ImJsb2JfaWQifX0=--7ca28e1cc9a052e278f216c942a9840ef5e6a31e/2000000000083730732",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0OTQwMiwicHVyIjoiYmxvYl9pZCJ9fQ==--be5e874cb46583d8aedfe246228bfbd7d74fe23f/2000000000083729274",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE4NzkzMTMsInB1ciI6ImJsb2JfaWQifX0=--01162f300fa9da41d9f787fc816dddda93bcd51c/2000000000083733261",
        ],
    },
    {   id: 1,
        title: "Assassin's Creed Valhalla",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Assassin's Creed Valhalla per PC è il dodicesimo capitolo dei giochi di Assassin's Creed, si svolge nel IX secolo (a partire dall'873 d.C.) portandoti in tutta Europa mentre sposti il tuo clan da una Norvegia seriamente sovraffollata e dilaniata dalla guerra all'Inghilterra ad una terra verde di pace, piena di prosperità e di campi fertili ne quali coltivare i tuoi raccolti. Il Regno Unito potrebbe avere la reputazione di essere un luogo freddo e piovoso, ma rispetto alla vicina desolazione artica, non è poi così male! È un gioco di avventura e azione open world.`,
        category_id: 3,
        category_desc: "azione",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzODYxMSwicHVyIjoiYmxvYl9pZCJ9fQ==--5c1419d2c2bfa280a70dcdc4027fbc33c8f52ba7/2000000000060180533",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIwNTM1NDgsInB1ciI6ImJsb2JfaWQifX0=--f7e7db54493c45f567bc7c34177035c0b2cf6f4b/2000000000060090865",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzODc0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--762ccea933f01cacde028cc4f9ffcf3b0a4c69a6/2000000000060090745",
        ],
    },
    {   id: 2,
        title: "Control Ultimate Edition",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Una presenza invasiva ha occupato il Federal Bureau of Control... e solo tu puoi fermarla. Lo scenario circostante sarà la tua arma migliore in un epico scontro con un nemico minaccioso in una serie di ambientazioni profonde e imprevedibili. Il contenimento è stato violato e ora l’intera umanità è in pericolo. Riuscirai a riprendere il controllo?

Vincitore di oltre 80 riconoscimenti, Control è uno spettacolare gioco d’azione e avventura in terza persona che ti terrà col fiato sospeso. Combinando alcuni scenari aperti con la capacità di creare mondi e la narrazione del premiato sviluppatore Remedy Entertainment, Control offre una vasta esperienza di gioco davvero intensa e gratificante.`,
        category_id: 3,
        category_desc: "azione",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzNDA5MiwicHVyIjoiYmxvYl9pZCJ9fQ==--fcc37d363256f1b7399a66400ea69f0ab2effd23/2000000000069575620",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIwNTM1NDgsInB1ciI6ImJsb2JfaWQifX0=--f7e7db54493c45f567bc7c34177035c0b2cf6f4b/2000000000060090865",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzODc0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--762ccea933f01cacde028cc4f9ffcf3b0a4c69a6/2000000000060090745",
        ],
    },
    {   id: 3,
        title: "Battlefield V",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Battlefield 5 per PC si comporta probabilmente come una vera guerra, con morti orrende e sconvolgenti seguite da situazioni letali ridicole - qualcuno è morto con una mazza da cricket? Lo sparatutto in prima persona è ambientato nel mezzo della Seconda guerra mondiale, anche se con alcune (o meglio, molte) inesattezze storiche, non da ultima l'inclusione delle donne soldato.

Informazioni sul gioco

Il gioco base segue tre storie di base, tra cui il giocatore può scegliere quella che seguirà il suo personaggio. I miglioramenti estetici e le armi possono essere acquistati utilizzando la valuta di gioco che può essere guadagnata completando le missioni o acquistata se hai fretta di avanzare tra i livelli.`,
        category_id: 1,
        category_desc: "sparatutto",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0MTA5NywicHVyIjoiYmxvYl9pZCJ9fQ==--d364f872cb5dad08820c76fa818edb818f8964a3/2000000000075938885",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE5OTU5NDEsInB1ciI6ImJsb2JfaWQifX0=--dee5738e4acdde626bd901a4fca279699df3f9ea/2000000000087958751",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIwNTM1NDgsInB1ciI6ImJsb2JfaWQifX0=--f7e7db54493c45f567bc7c34177035c0b2cf6f4b/2000000000060090865",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzODc0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--762ccea933f01cacde028cc4f9ffcf3b0a4c69a6/2000000000060090745",
        ],
    },
    {   id: 4,
        title: "Red Dead Redemption 2",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Red Dead Redemption 2 per PC è un gioco d’azione ambientato in un open world in cui il giocatore può vagare liberamente con alcuni elementi che si svolgono in terza persona, altri in modalità di gioco in prima persona. Il giocatore può commettere crimini, ma dovrà però essere pronto a fronteggiare le forze dell'ordine che vorranno far valere l'intero peso della legge sul miscredente!`,
        category_id: 3,
        category_desc: "azione",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NTMwMCwicHVyIjoiYmxvYl9pZCJ9fQ==--1feaebbf3bf424748db07d8b11dd0a068c069fdb/2000000000037151423",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNTk2NTAsInB1ciI6ImJsb2JfaWQifX0=--382f47d80eb3257c0ee2483bbc6a70652be16618/2000000000037151380",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNjY1OTYsInB1ciI6ImJsb2JfaWQifX0=--63df7b1a9a96453e6e0e24ea6fe423edb1982133/2000000000037151389",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNTk4MTIsInB1ciI6ImJsb2JfaWQifX0=--b322edbfdd2081226e897427bd794808f8d07226/2000000000037151408",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA3OTEzNywicHVyIjoiYmxvYl9pZCJ9fQ==--d06426bf7e79eb4cc68a021b1e35cc7af43b4492/2000000000037151417",
        ],
    },
    {   id: 5,
        title: "The Elder Scrolls V: Skyrim",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Vincitore di oltre 200 premi Gioco dell’Anno, The Elder Scrolls V: Skyrim Special Edition porta sui vostri schermi il fantasy epico con dettagli mozzafiato. La Special Edition include l’acclamato gioco e gli add-on con nuove funzioni come grafica ed effetti rinnovati, raggi di luce volumetrici, campo visivo dinamico, superfici riflettenti e altro ancora.

Skyrim Special Edition introduce anche la potenza delle Creazioni di Bethesda Game Studios su PC e console. Nuove missioni, ambienti, personaggi, dialoghi, armature, armi e altro. Con le Creazioni, non esistono limiti alla fantasia.`,
        category_id: 2,
        category_desc: "gdr",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNDMxMTEsInB1ciI6ImJsb2JfaWQifX0=--3bf42101f9b084d9ee5318757030168d5c766d0e/3007398358156047914",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA2MzczNiwicHVyIjoiYmxvYl9pZCJ9fQ==--fd34dbe1719b23534eec60cc67465dff5238ad7e/2000000000040003369",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NjMzNCwicHVyIjoiYmxvYl9pZCJ9fQ==--682b5760fc61af8d50daab71414814fd19093fec/2000000000039995800",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNjI4MzgsInB1ciI6ImJsb2JfaWQifX0=--30d9b026e720f6a032fa42a9ae52071a7d3d9747/2000000000040003204",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjM1NTExLCJwdXIiOiJibG9iX2lkIn19--15e0586b883be915a6a24656d75cb46425999c51/capture1",
        ],
    },
    {   id: 6,
        title: "Elden Ring Nightreign",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `ELDEN RING NIGHTREIGN è un'avventura standalone ambientata nell'universo di ELDEN RING, creata per offrire una nuova esperienza di gioco reinventando il design originale.`,
        category_id: 2,
        category_desc: "action",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTU1NjU5NTIsInB1ciI6ImJsb2JfaWQifX0=--d594ea4d12ab852ebf4588bb626a77fa6690475e/3031391107757391298",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTU1NTIwMTMsInB1ciI6ImJsb2JfaWQifX0=--56ba007fd7fbe78f957f37857ee13aa725fba231/3024802360606772359",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTU1NjU5NjksInB1ciI6ImJsb2JfaWQifX0=--7d8c6e14dd9bdd5464d692dd5584d5714805631a/3023819045675036569",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTU1NjU5NzQsInB1ciI6ImJsb2JfaWQifX0=--42b426d904b30cf5dc0c6f56debf3697117f8a57/3020853388799623188",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTU1ODA1MjQsInB1ciI6ImJsb2JfaWQifX0=--c5d6aed41a1ff2a8e007fcd7bbc583053bcd2fcd/3060691653897692838",
        ],
    },
    {   id: 7,
        title: "Kingdom Come: Deliverance",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Il gioco:

Tu sei Henry, il figlio di un fabbro. Colpito da una violenta guerra civile, assisti impotente all’invasione del tuo villaggio e al massacro dei tuoi amici e della tua famiglia. Sfuggito a malapena a questo attacco brutale, raccogli la tua spada per combattere: vendica la morte dei tuoi genitori e aiuta a respingere gli invasori!
La storia:

La Boemia è una regione nel cuore dell’Europa, ricca di cultura, argento e castelli. Con la morte dell’amato sovrano, l’imperatore Carlo IV, il regno è piombato in un periodo di oscurità: guerra, corruzione e tensioni stanno facendo a pezzi questo gioiello del Sacro Romano Impero.
Nel mentre, la corona è stata ereditata da Venceslao, uno dei figli di Carlo. A differenza di suo padre, Venceslao è ingenuo, sprovveduto e senza alcuna ambizione. Il suo fratellastro e re dell’Ungheria, Sigismondo la Volpe Rossa, ha capito le debolezze di Venceslao e, fingendo buone intenzioni, si è recato in Boemia per rapire il suo fratellastro. Con la corona vacante, Sigismondo è ora libero di saccheggiare la Boemia e impadronirsi delle sue ricchezze.

Nel bel mezzo di questo caos ci sei tu, Henry, il figlio di un fabbro. La tua vita tranquilla è stata distrutta da un’incursione di mercenari ordinata da re Sigismondo in persona: del tuo villaggio rimane solo la cenere, ma il fato beffardo ha fatto di te l’unico superstite di questo massacro.

Senza una casa, una famiglia o un futuro, finisci al servizio di Radzig Kobyla, un signore feudale che si sta opponendo all’invasione. Finisci così all’interno di una sanguinosa guerra civile, dove lotterai per il futuro della Boemia.`,
        category_id: 2,
        category_desc: "gdr",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NzEwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--c53b9ab9b14ac10208771330dc4af2c30cb8dc8a/2000000000037830126",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTk3NjM4LCJwdXIiOiJibG9iX2lkIn19--65502e93aed50fdc453eb0da960ec35a697d20e8/capture0",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTk3NjQ0LCJwdXIiOiJibG9iX2lkIn19--a2b57bb4fcf1c032950f348d9d7da0133d3bd00a/capture3",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA2MDEyOSwicHVyIjoiYmxvYl9pZCJ9fQ==--aafa788b517df2268c99324e30fda838096fe2b9/2000000000037825656",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA2MTQxNiwicHVyIjoiYmxvYl9pZCJ9fQ==--00e74d5813ef95ec95b4f43be417cd12abf42e17/2000000000037825585",
        ],
    },
    
]

export default items;
