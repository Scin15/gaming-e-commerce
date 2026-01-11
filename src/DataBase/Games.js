
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
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzNDY2MCwicHVyIjoiYmxvYl9pZCJ9fQ==--aa98d6d1b4df7656045bfceca5306f2e5e1d6f9e/2000000000069811868",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzNDg1OCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c5f50f70a482987426f2271749fe65bcd2b8d6f/2000000000069812050",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0Mjk3NCwicHVyIjoiYmxvYl9pZCJ9fQ==--be27bfee473b0bc8556596dfb3dfa3cd1f588017/2000000000069811867",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzNTUzMiwicHVyIjoiYmxvYl9pZCJ9fQ==--74a753f4d6b3380a4a827db3965608f4387902ba/2000000000069812191",
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
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNjY2OTMsInB1ciI6ImJsb2JfaWQifX0=--cd8719a7c0a02e1f38fb8d1b2210ca7320b87f0b/2000000000051821299",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0MTk0NSwicHVyIjoiYmxvYl9pZCJ9fQ==--bbaf652231e554b51c0b630844dd06f5d10ba636/2000000000075940414",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0MTczMiwicHVyIjoiYmxvYl9pZCJ9fQ==--04c8c6367f22792ebf6976693557c73fdbb2256f/2000000000075940383",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0MTM3OSwicHVyIjoiYmxvYl9pZCJ9fQ==--be1c9feb9808566fac4e8595de97afdec4e9bcfd/2000000000075939083",
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
    {   id: 8,
        title: "The Witcher 3",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `The Witcher: Wild Hunt è un gioco di ruolo di nuova generazione incentrato sulla trama e ambientato in un universo aperto, caratterizzato da un'ambientazione fantasy mozzafiato in cui ogni scelta comporta delle conseguenze. In The Witcher si indossano i panni di un esperto cacciatore di taglie, Geralt di Rivia, incaricato di trovare una ragazza oggetto di una profezia in un universo fantasy aperto ricco di città mercantili, isole abitate da pirati vichinghi, pericolosi valichi di montagna e caverne da esplorare.`,
        category_id: 2,
        category_desc: "gdr",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTIxNDI3NzYsInB1ciI6ImJsb2JfaWQifX0=--2206c7ba52330ee47205b0a5fdcbe33835755c4c/2000000000035410097",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NTYxMCwicHVyIjoiYmxvYl9pZCJ9fQ==--98243112602f421887293d3cde13a09377d19a34/2000000000035409798",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NTgyMywicHVyIjoiYmxvYl9pZCJ9fQ==--5cb6b915ce0b2e64185b4fbf3711dd63c05c3298/2000000000035409811",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NTcyNSwicHVyIjoiYmxvYl9pZCJ9fQ==--f8c9422db499285c1f397da33a7f5377b3783032/2000000000035410070",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA1NTc5NywicHVyIjoiYmxvYl9pZCJ9fQ==--d1608540a74ece39e461db70cc0538332a32e053/2000000000035410073",
        ],
    },
    {   id: 9,
        title: "Cyberpunk 2077",
        price: 60,
        platform_id: 0,
        platform_desc: "Steam",
        game_desc: `Cyberpunk 2077 per PC è un gioco sparatutto in prima persona, ma con una differenza. É ambientato in uno stato distopico della California, in cui le regole della nazione e dello stato non si applicano più. Invece, giocando come un mercenario di nome V, il giocatore deve muoversi per la città, raggiungere i propri obiettivi e nel frattempo combattere i nemici.`,
        category_id: 2,
        category_desc: "gdr",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTAzNjE3OSwicHVyIjoiYmxvYl9pZCJ9fQ==--255f14de005ba367beed526e0cbf6aafb811a13a/2000000000039665863",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODY5MzU2MywicHVyIjoiYmxvYl9pZCJ9fQ==--300b8537b52e1a181be1ff5b0934f35a0ce85b4e/3007470024422287707",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTY4NzkzOCwicHVyIjoiYmxvYl9pZCJ9fQ==--e0d3d933810e2788914303f3670b1f1d63f139cf/2000000000040401546",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTY4NzkyOSwicHVyIjoiYmxvYl9pZCJ9fQ==--05697656e01d3ece3f702b53561a46170620e8e7/2000000000040401591",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NTY4Nzg5OCwicHVyIjoiYmxvYl9pZCJ9fQ==--74188cd810da694537d5597f2e10c510409bbeec/2000000000040401287",
        ],
    },
    {   id: 10,
        title: "Death Stranding",
        price: 60,
        platform_id: 2,
        platform_desc: "SerieX",
        game_desc: `Dal leggendario Hideo Kojima arriva un’esperienza che definisce il genere, ora ampliata nell’edizione definitiva DIRECTOR’S CUT.

Nel futuro un evento misterioso noto come Death Stranding ha aperto una strada tra i vivi e i morti, generando creature dell’aldilà che vagano in un mondo decaduto e desolato.

Nei panni di Sam Bridges, dovrai dare speranza all’umanità mettendo in contatto gli ultimi sopravvissuti di un’America decimata.
Riuscirai a ricomporre un mondo in frantumi?`,
        category_id: 2,
        category_desc: "gdr",
        cover_image_url: "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzODU1OTQsInB1ciI6ImJsb2JfaWQifX0=--f81fae3a0c8616db037a8756f59c817656b67aa3/3007759126336783653",
        images_url: [
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzODU2MTcsInB1ciI6ImJsb2JfaWQifX0=--c1c66f91487b90bb1a1574c5ce2be93b100e9267/3042012657998374561",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzNzMzMTUsInB1ciI6ImJsb2JfaWQifX0=--ca547335770361d5c2b9681d29d3cae060b3de21/3036878733968443445",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzODU2MTAsInB1ciI6ImJsb2JfaWQifX0=--f24827c6a477f71f0e59c78852cd5edddcf6b060/3030186575442183701",
            "https://splash.games.directory/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzODU2MjUsInB1ciI6ImJsb2JfaWQifX0=--8fdb2ebf2b9473cfa2cf853627701a67a13a8dc0/3069620319313712926",
        ],
    },
    
]

export default items;
