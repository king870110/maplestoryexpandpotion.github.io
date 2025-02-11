// 每等級升級所需經驗值
const levelUpExp = {
	200: 2207026470,
	201: 2471869646,
	202: 2768494003,
	203: 3100713283,
	204: 3472798876,
	205: 3889534741,
	206: 4356278909,
	207: 4879032378,
	208: 5464516263,
	209: 6120258214,
	210: 7956335678,
	211: 8831532602,
	212: 9803001188,
	213: 10881331318,
	214: 12078277762,
	215: 15701761090,
	216: 17114919588,
	217: 18655262350,
	218: 20334235961,
	219: 22164317197,
	220: 28813612356,
	221: 30830565220,
	222: 32988704785,
	223: 35297914119,
	224: 37768768107,
	225: 49099398539,
	226: 52536356436,
	227: 56213901386,
	228: 60148874483,
	229: 64359295696,
	230: 83667084404,
	231: 86177096936,
	232: 88762409844,
	233: 91425282139,
	234: 94168040603,
	235: 122418452783,
	236: 126091006366,
	237: 129873736556,
	238: 133769948652,
	239: 137783047111,
	240: 179117961244,
	241: 184491500081,
	242: 190026245083,
	243: 195727032435,
	244: 201598843408,
	245: 262078496430,
	246: 269940851322,
	247: 278039076861,
	248: 286380249166,
	249: 294971656640,
	250: 442457484960,
	251: 455731209508,
	252: 469403145793,
	253: 483485240166,
	254: 497989797370,
	255: 512929491291,
	256: 528317376029,
	257: 544166897309,
	258: 560491904228,
	259: 577306661354,
	260: 1731919984062,
	261: 1749239183902,
	262: 1766731575741,
	263: 1784398891498,
	264: 1802242880412,
	265: 2342915744535,
	266: 2366344901980,
	267: 2390008350999,
	268: 2413908434508,
	269: 2438047518853,
	270: 5412465491851,
	271: 5466590146770,
	272: 5521256048237,
	273: 5576468608720,
	274: 5632233294807,
	275: 11377111255510,
	276: 12514822381061,
	277: 13766304619167,
	278: 15142935081084,
	279: 16657228589191,
	280: 33647601750165,
	281: 37012361925183,
	282: 40713598117701,
	283: 44784957929471,
	284: 49263453722418,
	285: 99512176519285,
	286: 109463394171214,
	287: 120409733588335,
	288: 132450706947169,
	289: 145695777641885,
	290: 294305470836608,
	291: 323736017920269,
	292: 356109619712296,
	293: 391720581683526,
	294: 430892639851879,
	295: 870403132500795,
	296: 957443445750874,
	297: 1053187790325960,
	298: 1158506569358560,
	299: 1737759854037840,
}

// 每等級經驗券可獲得的經驗值
const expPerTicket = {
	200: 7404000,
	201: 7605000,
	202: 7808000,
	203: 8035000,
	204: 8242000,
	205: 8450000,
	206: 8661000,
	207: 8895000,
	208: 9109000,
	209: 9325000,
	210: 18601000,
	211: 19026000,
	212: 19504000,
	213: 19936000,
	214: 20372000,
	215: 20861000,
	216: 21340000,
	217: 21801000,
	218: 22249000,
	219: 22755000,
	220: 23211000,
	221: 23724000,
	222: 24186000,
	223: 24707000,
	224: 25176000,
	225: 25704000,
	226: 26238000,
	227: 26717000,
	228: 27258000,
	229: 27802000,
	230: 29503000,
	231: 30080000,
	232: 30660000,
	233: 31178000,
	234: 31766000,
	235: 32360000,
	236: 32959000,
	237: 33488000,
	238: 34093000,
	239: 34701000,
	240: 35312000,
	241: 36422000,
	242: 37051000,
	243: 37610000,
	244: 38248000,
	245: 38889000,
	246: 39533000,
	247: 40182000,
	248: 40835000,
	249: 41492000,
	250: 43861000,
	251: 44553000,
	252: 45249000,
	253: 45949000,
	254: 46654000,
	255: 47360000,
	256: 48073000,
	257: 48788000,
	258: 49595000,
	259: 50321000,
	260: 76572000,
	261: 76572000,
	262: 76572000,
	263: 76572000,
	264: 76572000,
	265: 76572000,
	266: 76572000,
	267: 76572000,
	268: 76572000,
	269: 76572000,
	270: 76572000,
	271: 76572000,
	272: 76572000,
	273: 76572000,
	274: 76572000,
	275: 76572000,
	276: 76572000,
	277: 76572000,
	278: 76572000,
	279: 76572000,
	280: 76572000,
	281: 76572000,
	282: 76572000,
	283: 76572000,
	284: 76572000,
	285: 76572000,
	286: 76572000,
	287: 76572000,
	288: 76572000,
	289: 76572000,
	290: 76572000,
	291: 76572000,
	292: 76572000,
	293: 76572000,
	294: 76572000,
	295: 76572000,
	296: 76572000,
	297: 76572000,
	298: 76572000,
	299: 76572000,
}

const superExpPerTicket = {
	260: 388229000,
	261: 393816000,
	262: 399411000,
	263: 405046000,
	264: 411393000,
	265: 462820000,
	266: 469175000,
	267: 475554000,
	268: 482760000,
	269: 489212000,
	270: 511726000,
	271: 536006000,
	272: 542983000,
	273: 572884000,
	274: 581154000,
	275: 653181000,
	276: 661414000,
	277: 670728000,
	278: 679048000,
	279: 688437000,
	280: 773107000,
	281: 783656000,
	282: 793073000,
	283: 803703000,
	284: 813213000,
	285: 914168000,
	286: 924819000,
	287: 936844000,
	288: 948944000,
	289: 959736000,
	290: 959736000,
	291: 959736000,
	292: 959736000,
	293: 959736000,
	294: 959736000,
	295: 959736000,
	296: 959736000,
	297: 959736000,
	298: 959736000,
	299: 959736000,
}
