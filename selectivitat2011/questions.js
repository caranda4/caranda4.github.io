const questions = [
    //Serie 1 
    //Qüestio 1
    {
        type: "questions", 
        category: "organitzacio",
        text: `En el procés de fabricació d’un producte, s’estableixen quatre punts de control de qualitat, un dels quals és al final del procés, en què es retiren les peces defectuoses. D’un lot inicial de \\(800 \\, \\text{peces}\\), la taxa mitjana de rebuig de cada punt de control és 6, 15, 17 i 10, respectivament. La taxa de qualitat global expressada en percentatge de peces obtingudes sense defectes és del:`,
        options: [
            { text: "95,20 %", value: "a" },
            { text: "99,25 %", value: "b" },
            { text: "98,75 %", value: "c" },
            { text: "94,00 %", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{Total rebutjades} = 6 + 15 + 17 + 10 = 48 \\, \\text{peces}
            \\]
            \\[
            \\text{Peces bones} = 800 - 48 = 752 
            \\]
            \\[
            \\text{Percentatge de qualitat global} = \\frac{752}{800} \\cdot 100 = 94{,}00 \\, \\%
            \\]
            <br>`,
    },
    
    //Qüestio 2
    {
        type: "questions", 
        category: "electrics",
        text: `En un circuit elèctric, es connecten en paral·lel dues resistències de valors nominals \\(110 \\, \\text{Ω}\\) i \\(330 \\, \\text{Ω}\\) i tolerància \\(\\text{±} \\, 2 \\, \\text{%}\\). Quin valor té la resistència equivalent?`,
        options: [
            { text: "(440 ± 2 %)Ω", value: "a" },
            { text: "(440 ± 4 %)Ω", value: "b" },
            { text: "(82,5 ± 4 %)Ω", value: "c" },
            { text: "(82,5 ± 2 %)Ω", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{Resistències en paral·lel} = \\frac{1}{R_{eq}} = \\frac{1}{110\\,\\Omega} + \\frac{1}{330\\,\\Omega} \\] 
            \\[ 
            \\frac{1}{R_{eq}} = \\frac{3 + 1}{330} = \\frac{4}{330} 
            \\] 
            \\[ 
            R_{eq} = \\frac{330}{4} = 82{,}5\\,\\Omega 
            \\] 
            \\[ \\text{Tolerancia} = \\pm 2\\,\\% 
            \\] 
            \\[ 
            R_{eq} = (82{,}5 \\pm 2)\\,\\Omega 
            \\]
            <br>`,
    },
    
    //Qüestio 3
    {
        type: "questions", 
        category: "energia",
        text: `La llum que produeix una bombeta de baix consum de \\(8 \\, \\text{W}\\) equival, segons el fabricant, a la que fa una bombeta incandescent de \\(40 \\, \\text{W}\\). Si en una sala hi ha cinc bombetes de 40 W i se substitueixen per bombetes de baix consum de 8 W, quin estalvi energètic suposarà el canvi al cap de \\(100 \\, \\text{hores}\\) de funcionament?`,
        options: [
            { text: "3,2 kW h", value: "a" },
            { text: "160 kW h", value: "b" },
            { text: "32 kW h", value: "c" },
            { text: "16 kW h", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\Delta P = 40\\,\\text{W} - 8\\,\\text{W} = 32\\,\\text{W} 
            \\]
            \\[ 
            P_{total} = 32\\,\\text{W} \\times 5 = 160\\,\\text{W} 
            \\]
            \\[ 
            E = P \\times t 
            \\] 
            \\[ 
            E = 160\\,\\text{W} \\times 100\\,\\text{h} = 16000\\,\\text{Wh} 
            \\] 
            \\[ 
            E = 16\\,\\text{kWh} 
            \\]
            <br>`,  
    },
    
    //Qüestio 4
    {
        type: "questions", 
        category: "energia",
        text: `El nitinol, un aliatge amb memòria de forma que s’utilitza en aplicacions sanitàries, està compost per un \\(54,5 \\, \\text{%}\\) de níquel (Ni) i un \\(45,4 \\, \\text{%}\\) de titani (Ti). Quina quantitat d’aquests dos components, en kg, hi ha en \\(150 \\, \\text{Kg}\\) de nitinol?`,
        options: [
            { text: "Ni:83,10    Ti:66,75", value: "a" },
            { text: "Ni:54,5    Ti:45,4", value: "b" },
            { text: "Ni:81,75    Ti:68,10", value: "c" },
            { text: "Ni:82,60    Ti:69,25", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[ 
            \\text{total} = 150 \\, \\text{kg} 
            \\]
            \\[
            \\text{Ni} = 150 \\, \\text{kg} \\times 0{,}545 = 81{,}75 \\, \\text{kg} 
            \\]
            \\[ 
            \\text{Ti} = 150 \\, \\text{kg} \\times 0{,}455 = 68{,}25 \\, \\text{kg} \\approx 68{,}10 \\, \\text{kg} 
            \\]
            <br>`,  
    },
    
    //Qüestio 5
    {
        type: "questions", 
        category: "metrologia",
        text: `En l’ajust 110 N7/h6, la tolerància N7 del forat és \\(\\genfrac{}{}{0pt}{}{-10}{-45} \\, \\mu\\text{m}\\) i la tolerància h6 de l’eix és \\(\\genfrac{}{}{0pt}{}{0}{-19} \\, \\mu\\text{m}\\). Determineu-ne el joc màxim`,
        options: [
            { text: "26μm", value: "a" },
            { text: "19μm", value: "b" },
            { text: "10μm", value: "c" },
            { text: "9μm", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{Ajust: } 110\\,N7/h6 
            \\] 
            \\[ 
            \\text{Forat } N7 = (-10\\,\\mu\\text{m}, -45\\,\\mu\\text{m}) 
            \\] 
            \\[ 
            \\text{Eix } h6 = (0\\,\\mu\\text{m}, -16\\,\\mu\\text{m}) 
            \\] 
            \\[ 
            J_{\\max} = (-10) - (-19) 
            \\] 
            \\[ J_{\\max} = 9\\,\\mu\\text{m} 
            \\]
            <br>`,  
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `El sistema automàtic d’obertura d’un vehicle en desbloqueja les portes quan el comandament és fora del vehicle i a menys d’un metre de distància. Per això, el sistema
                automàtic incorpora un detector de proximitat i un detector de presència del comandament a l’interior. La porta del vehicle també es pot obrir manualment amb una clau
                per a emergències (si el comandament es queda sense bateria o hom se’l descuida a l’interior, entre altres causes). Utilitzant les variables d’estat següents:
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/Exercici2Serie1.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Taula de verita</strong>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>s</th>
                        <th>c</th>
                        <th>p</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            p \\, = \\, \\bar{x} \\cdot \\bar{s} \\cdot c + \\bar{x} \\cdot s \\cdot c + x \\cdot \\bar{s} \\cdot \\bar{c} + x \\cdot \\bar{s} \\cdot c + x \\cdot s \\cdot c \\, = \\, c + x \\cdot \\bar{s}
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://caranda4.github.io/selectivitat2011/fotos/Exercici2.2Serie1.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },
    
    //Exercici 3A
    {
        type: "exercicis",
        category: "energia",
        text: `Un vehicle de joguina porta una bateria de tensió \\(\\text{U} \\, = 6 \\, \\text{V}\\) amb un rendiment
               (quocient entre l’energia cedida i l’energia acumulada) \\(\\eta_\\text{bat} \\, = 0,75\\). El motor té un rendiment \\(\\eta \\, = 0,6\\) i proporciona una potència mecànica \\(P_\\text{m} \\, = 39 \\, \\text{W}\\) quan funciona a
               \\(\\text{n} \\, = 3000 \\, min^\\text{-1}\\). Determineu:
               <br><br><strong>a)</strong> El parell del motor, \\(\\Gamma_m\\). [0,5 punts]
               <br><br>Si la bateria es descarrega en \\(\\text{t} \\, = 30 \\, min\\) de funcionament del motor a \\(\\text{n} \\, = 3000 \\, min^\\text{-1}\\), determineu, per a aquest procés de descàrrega:
               <br><br><strong>b)</strong> L’energia que arriba al motor, \\(E_\\text{motor}\\), i l’energia dissipada al motor, \\(E_\\text{dis motor}\\), i a la bateria, \\(E_\\text{dis bat}\\). [1,5 punts]
               <br><strong>c)</strong> L’energia acumulada inicialment a la bateria, \\(E_\\text{bat}\\), i la capacitat de càrrega, \\(c\\), de la bateria en A h. (L’expressió per a calcular l’energia acumulada en una bateria és determinada per \\(E_\\text{bat} = c \\cdot U\\).) [0,5 punts]
               <br>`,
        correctAnswer: "", 
        steps: `
            <strong>a) Parell del motor</strong>
            <br>
            \\[
            \\omega = 2\\pi \\frac{n}{60} = 2\\pi \\frac{3000}{60} = 100\\pi \\,\\text{rad/s}
            \\]
            \\[
            P_m = T \\cdot \\omega
            \\]
            \\[
            T = \\frac{P_m}{\\omega} = \\frac{39}{100\\pi} \\approx 0{,}124 \\,\\text{N·m}
            \\]
            <br>
            
            <strong>b) Energia del motor, energia del motor dissipada i energia de la bateria  dissipada</strong>
            \\[
            E_m = P_m \\cdot t = 39 \\cdot \\frac{30}{60} = 19{,}5 \\, \\text{Wh} = 70{,}2 \\, \\text{kJ}
            \\]
            \\[
            E_{\\text{motor}} = \\frac{E_m}{\\eta} = \\frac{19,5}{0,6} = 32{,}5 \\, \\text{Wh} = 117 \\, \\text{kJ}
            \\]
            \\[
            E_{\\text{dis motor}} = E_{\\text{motor}} - E_{\\text{m}} = 13 \\text{Wh} = 46{,}8 \\text{kJ}
            \\]
            \\[
            E_{\\text{dis bat}} = E_{\\text{bat}} - E_{\\text{motor}} = \\frac{E_{\\text{motor}}}{\\eta_{\\text{bat}}} - E_{\\text{motor}}
            \\]
            \\[
            \\frac{32{,}5}{0,75} - 32{,}5 = 10{,}83 \\text{Wh} = 39 \\text{kJ}
            \\]
            <br>

            <strong>c) Energia de la bateria i capacitat de càrrega</strong>
            \\[
            E_{\\text{bat}}=\\frac{E_{\\text{motor}}}{\\eta_{\\text{bat}}} = \\frac{32{,}5}{0{,}75} = 43{,}33 \\text{Wh} = 156 \\text{kJ}
            \\]
            \\[
            c = \\frac{E_{\\text{bat}}}{U} = \\frac{43{,}33}{6} = 7{,}222 \\text{Ah}
            \\]
            <br>`,
    }, 

    //Exercici 4A
    {
        type: "exercicis",
        category: "maquines",
        text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/ExerciciA4Serie1.PNG" alt="Imatge relacionada amb la pregunta"><br>
               La barra cilíndrica d’acer de la figura està unida pels extrems amb uns topalls. En la
               unió hi ha unes juntes de dilatació que permeten un allargament de \\(0{,}05 \\text{mm}\\) a cada costat. El coeficient de dilatació tèrmica de l’acer és \\(\\alpha = 12\\cdot 10^{-6}\\frac{1}{°C}\\). Si n’augmentem la
               temperatura en \\(\\text{ΔT} = 30\\text{°C}\\), determineu:
               <br><strong>a)</strong>  L’increment de llargària, \\(\\text{Δl}\\), que tindria sense topalls. [1 punt]
               <br><strong>b)</strong> La tensió normal, \\(\\sigma\\), de compressió de la barra (tensió necessària per a disminuir l’increment de llargària no permès per les juntes). [0,5 punts]
               <br><strong>c)</strong> La força, \\(\\text{F}\\), que exerceixen els topalls. [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Increment de llargària</strong>
            <br>
            \\[
            \\text{Δl} = l \\cdot \\alpha \\cdot \\text{ΔT} = 1000 \\cdot 12 \\cdot 10^{-6} \\cdot 30 = 0{,}36 \\, \\text{mm}
            \\]
            <br>
            
            <strong>b) Tensió norma</strong>
            \\[
            \\sigma = \\frac{E\\cdot\\text{Δl'}}{l} = \\frac{203\\cdot1 10^9\\cdot(0,36-2\\cdot0,05)}{1000} = 52,78 \\cdot 10^6 \\, \\text{Pa} = 52,78 \\, \\text{MPa}
            \\]
            <br>

            <strong>c) Força</strong>
            \\[
            F = \\sigma \\cdot \\text{S} = 52{,}78 \\cdot \\pi \\cdot \\frac{60^2}{4} = 149{,}2 \\, \\text{kN}
            \\]
            <br><br>
            <br>`,
    },

    //Exercici 3B
    {
        type: "exercicis",
        category: "energia",
        text: `<br>Un habitatge disposa d’una bomba accionada per un motor elèctric que puja aigua
               a una altura \\(h = 3{,}5 \\text{m}\\). El grup motobomba té un rendiment \\(\\eta = 0{,}7\\). En \\(t = 8 \\text{hores}\\) de
               funcionament, el motor ha consumit \\(E_\\text{elèc} = 5{,}6 \\text{kWh}\\). Determineu:
               <br><strong>a)</strong> El treball fet per la bomba, \\(W_\\text{bomba}\\). [0,5 punts]
               <br><strong>b)</strong> L’energia dissipada, \\(E_\\text{dis}\\), i la potència hidràulica mitjana, \\(P_\\text{h}\\), desenvolupada per la bomba. [1 punt]
               <br><strong>c)</strong>  El cabal d’aigua mitjà consumit, \\(q\\), en L/s. [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) El treball</strong>
            <br>
            \\[
            \\eta = \\frac{W_\\text{bomba}}{E_\\text{elèc}}
            \\]
            \\[
            W_\\text{bomba} = \\eta \\cdot E_\\text{elèc} = 0{,}7 \\cdot 5{,}6 = 3{,}92 \\, \\text{kWh} = 14{,}11 \\, \\text{MJ}
            \\]
            <br>
            
            <strong>b) L’energia dissipada i la potència hidràulica</strong>
            \\[
            E_\\text{dis} = E_\\text{elèc} - W_\\text{bomba} = 5{,}6 - 3{,}92 = 1{,}68 \\text{kWh}
            \\]
            \\[
            P_\\text{h} = \\frac{W_\\text{bomba}}{t} = \\frac{3,92}{8} = 0{,}49 \\text{kW} = 490 \\text{W}
            \\]
            <br>

            <strong>c) El cabal</strong>
            \\[
            q = \\frac {P_\\text{h}}{\\rho \\cdot g \\cdot h} = \\frac {490}{1 \\cdot 9{,}807 \\cdot 3{,}5} = 14{,}28  \\, L/s
            \\]
            <br>`,
    },

    //Exercici 4B
    {
        type: "exercicis",
        category: "motors",
        text: `<br>Un motor dièsel marí de 12 cilindres proporciona una potència \\(P_\\text{m} = 6 \\text{MW}\\) per a una
               velocitat de rotació de l’eix \\(n = 750 min_\\text{-1}\\). El poder calorífic del gasoil és \\(P_\\text{c} = 41 \\text{MJ/Kg}\\). Si
               el consum específic de combustible en aquest règim de gir és \\(c_\\text{e} = 183 \\frac{g}{kWh}\\).
               Determineu:
               <br><br><strong>a)</strong> El parell motor, \\(\\Gamma_m\\). [0,5 punts]
               <br><strong>b)</strong>  El rendiment del motor, \\(\\eta_m\\). [0,5 punts]
               <br><br>Aquest motor fa avançar un vaixell. La resistència del vaixell a l’avanç es pot
               expressar com un parell resistent a l’eix del motor, \\(\\eta_res = (9 800 + 6 750 \\cdot v_\\text{vaixell})\\) N·m, amb
               \\(v_\\text{vaixell}\\) en m/s.
               <br><br><strong>c)</strong> Dibuixeu, indicant les escales, la corba del parell resistent en funció de la velocitat del vaixell per a velocitats del vaixell entre 0 m/s i 15 m/s.[0,5 punts]
               <br><strong>d)</strong> Determineu la velocitat del vaixell quan el motor gira a \\(750 \\, min_\\text{-1}\\). [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Parell motor</strong>
            <br>
            \\[
            \\omega = 750 \\cdot \\frac{2 \\pi}{60} = 25\\pi
            \\]
            \\[
            \\Gamma_\\text{m} = \\frac{P_\\text{m}}{\\omega} = \\frac{6 \\cdot 10^6}{25\\pi} = 76394 \\, \\text{Nm} = 76,394 \\, \\text{kNm}
            \\]
            <br>
            
            <strong>b) El rendiment</strong>
            \\[
            c_e = 183 \\frac{g}{kWh} = 0,183 \\frac{kg}{kWh} 
            \\]
            \\[
            E_\\text{combustible} = c_e \\cdot p_c = 0,183 \\cdot 41 = 7{,}503 \\, \\text{MJ}
            \\]
            \\[
            \\eta_m = \\frac{E_\\text{motor}}{E_\\text{combustible}} = \\frac{3{,}6}{7{,}503} = 0{,}4798 = 47{,}98 \\, \\%
            \\]
            \\[
            P_\\text{h} = \\frac{W_\\text{bomba}}{t} = \\frac{3,92}{8} = 0{,}49 \\text{kW} = 490 \\text{W}
            \\]
            <br>

            <strong>c) La corba del parell</strong>
            <img src="https://caranda4.github.io/selectivitat2011/fotos/ExerciciB4Serie1.PNG" alt="Imatge relacionada amb la pregunta">
            <br>

            <strong>d) La velocitat del vaixell</strong>
            \\[
            \\Gamma_m = \\Gamma_\\text{res}
            \\]
            \\[
            76394 = 9800 + 6750 \\cdot v_\\text{vaixell}
            \\]
            \\[
            v_\\text{vaixell} = \\frac{76394 - 9800}{6750} = 9,866 \\, \\text{m/s}
            \\]
            <br>`,
    },

    //Serie 4
    //Qüestio 1
    {
        type: "questions", 
        category: "electrics",
        text: `Un motor de corrent altern asíncron d’un parell de pols, que està connectat a la
               xarxa de tensió \\(U = 220 \\, \\text{V}\\) i freqüència \\(f = 50 \\, \\text{Hz}\\), gira a \\(n = 2820 \\, min_\\text{-1}\\). El lliscament relatiu del motor és:`,
        options: [
            { text: "0,06", value: "a" },
            { text: "0,05", value: "b" },
            { text: "0,22", value: "c" },
            { text: "0,25", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            n_s = \\frac{60 \\, f}{p} = \\frac{60 \\cdot 50}{1} = 3000 min^{-1}
            \\]
            \\[
            n = 2820 min^{-1}
            \\]
            \\[
            s = \\frac{n_s - n}{n_s} = \\frac{3000 - 2820}{3000} = \\frac{180}{3000} = 0{,}06
            \\]
            <br>`,
    },
    
    //Qüestio 2
    {
        type: "questions", 
        category: "metrologia",
        text: `Un sensor de temperatura disposa de quatre dígits per a fer la lectura en °C. Les
               característiques del sensor indiquen que la precisió és el valor més gran de ±1 °C o ±1 %
               de la lectura. L’error absolut màxim en una lectura de \\(130 \\, \\text{°C}\\) és:`,
            options: [
            { text: "±2 °C", value: "a" },
            { text: "±2,3 °C", value: "b" },
            { text: "±1,3 °C", value: "c" },
            { text: "±1,0 °C", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            1 \\% \\cdot 130 = 1{,}3 \\text{°C}
            \\]
            <br>`,
    },

    //Qüestio 3
    {
        type: "questions", 
        category: "organitzacio",
        text: `Per a fabricar un electrodomèstic petit cal una inversió inicial de \\(150 000 \\, \\text{€}\\). El preu
               de venda es fixa en \\(65 \\, \\text{€}\\) i el cost unitari de producció s’estima en \\(33 \\, \\text{€}\\). Quin benefici
               s’obtindrà quan s’hagin venut \\(5 000 \\, \\text{unitats}\\) del producte?`,
            options: [
            { text: "10 000€", value: "a" },
            { text: "160 000€", value: "b" },
            { text: "175 000€", value: "c" },
            { text: "16 500€", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            B_u = 65 - 33 = 32 \\, \\text{€}
            \\]
            \\[
            B = N \\cdot B_u - C_0 = 5000 \\cdot 32 - 150000 = 160000 - 150000 = 10000
            \\]
            <br>`,
    },

    //Qüestio 4
    {
        type: "questions", 
        category: "materials",
        text: `Una barra d’acer de resistència a la tracció \\(\\sigma_\\text{trac} = 890 \\, \\text{MPa}\\) ha d’aguantar una força
               de tracció de \\(17 \\, \\text{kN}\\). Quina secció mínima ha de tenir la barra?`,

            options: [
            { text: "\\(1,78 \\, mm^2\\)", value: "a" },
            { text: "\\(52,4 \\, mm^2\\)", value: "b" },
            { text: "\\(19,1 \\, mm^2\\)", value: "c" },
            { text: "\\(0,45 \\, mm^2\\)", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            \\sigma = \\frac{F}{A}
            \\]
            \\[
            A_\\text{min} = \\frac{F}{\\sigma_\\text{trac}} = \\frac{17000}{890} = 19{,}1 \\, mm^2
            \\]
            <br>`,
    },

    //Qüestio 5
    {
        type: "questions", 
        category: "energia",
        text: `La composició d’un gas natural és \\(91{,}8 \\, \\text{%}\\) de metà, \\(5 \\, \\text{%}\\) d’età, \\(1{,}5 \\, \\text{%}\\) de propà, \\(1,2 \\, \\text{%}\\)
               de butà i \\(0{,}5 \\, \\text{%}\\) d’altres components. La quantitat de butà que es pot obtenir amb 300 kg d’aquest gas és:`,
            options: [
            { text: "1,5 kg", value: "a" },
            { text: "3,6 kg", value: "b" },
            { text: "4,5 kg", value: "c" },
            { text: "15 kg", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            m_\\text{butà} = 300 \\cdot \\frac{1{,}2}{100} = 3{,}6 \\text{kg}
            \\]
            <br>`,
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `El menú d’un restaurant inclou primer plat, segon plat i postres. Es cobra un suplement si es demana un canvi en l’acompanyament del primer plat o del segon. Si el client
               no agafa postres i només demana un canvi en un dels dos plats, el suplement no es
               cobra. Utilitzant les variables d’estat següents:
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/Exercici2Serie4.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Taula de verita</strong>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>\\(p_\\text{1}\\)</th>
                        <th>\\(p_\\text{2}\\)</th>
                        <th>\\(p_\\text{3}\\)</th>
                        <th>\\(s\\)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            s = \\bar{p}_1 \\cdot p_2 \\cdot p_3 + p_1 \\cdot \\bar{p}_2 \\cdot p_3 + p_1 \\cdot p_2 \\cdot \\bar{p}_3 +\\; p_1 \\cdot p_2 \\cdot p_3 = p_1 \\cdot p_2 + p_2 \\cdot p_3 + p_1 \\cdot p_3
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://caranda4.github.io/selectivitat2011/fotos/Exercici2.2Serie4.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },

    //Exercici 3A
    {
        type: "exercicis",
        category: "electrics",
        text: `<br>Una planxa elèctrica de cuina té una potència \\(P = 2000 \\, \\text{W}\\) i s’alimenta a una tensió
               \\(U = 230\\,  \\text{V}\\). La resistència de la planxa està formada per un fil de constantà de longitud
               \\(L = 4{,}8 \\text{m}\\) i resistivitat \\(\\rho = 4{,}9 \\cdot 10^{-7} \\, \\Omega \\text{m}\\). L’energia elèctrica té un cost \\(c = 0{,}125 \\, \\frac{\\text{€}}{\\text{kWh}} \\).
               Determineu:
               <br><br><strong>a)</strong> El corrent, \\(I\\), que circula per la resistència. [0,5 punts]
               <br><strong>b)</strong> El diàmetre, \\(d\\), del fil de la resistència. [1 punt]
               <br><br>La planxa incorpora un termòstat que la desconnecta quan arriba a una temperatura de \\(90 \\, \\text{°C}\\). Si durant una cocció de \\(10 \\, \\text{min}\\) la planxa es desconnecta un \\(5 \\, \\text{%}\\) del temps,
               determineu:
               <br><br><strong>c)</strong> El consum, \\(E\\), en \\(kWh\\), i el cost econòmic, \\(c_e\\). [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) El corrent</strong>
            <br>
            \\[
            I = \\frac{P}{U} = \\frac{2000}{230} = 8{,}696 \\, A
            \\]
            <br>
            
            <strong>b) El diàmetre</strong>
            \\[
            R = \\frac{U^2}{P} = \\frac{230^2}{2000} \\approx 26{,}45 \\, \\Omega
            \\]
            \\[
            R = \\frac{\\rho \\cdot L}{S} 
            \\]
            \\[
            S = \\frac{\\rho \\cdot L}{R} = \\frac{4{,}9 \\cdot 10^{-7} \\cdot 4{,}8}{26{,}45} = 8{,}9\\cdot 10^{-8} \\, m^2
            \\]
            \\[
            d = \\sqrt{\\frac{4 \\cdot S}{\\pi}} = \\sqrt{\\frac{4 \\cdot 8{,}9\\cdot 10^{-8}}{\\pi}} = 3,37 \\cdot 10^{-4} \\, m  = 0{,}3365 \\, mm
            \\]
            <br>

            <strong>c) El consum i cost econòmic</strong>
            \\[
            10 \\, min = \\frac{1 \\, h}{60 \\, min} = 0,1666 \\, h
            \\]
            \\[
            E = P \\cdot t = 2000 \\cdot 0,1666 \\cdot 0,95 = 316,67 \\, Wh = 0,3167 \\, kWh
            \\]
            \\[
            c_e = E \\cdot c = 0,3167 \\cdot 0,125 = 0,0396 \\, \\text{€}
            \\]
            <br>`,
    },

    //Exercici 4A
    {
        type: "exercicis",
        category: "electrics",
        text: `<br>Un panell solar fotovoltaic consta de seixanta cel·les solars. La corba característica
               de la tensió en funció del corrent de cadascuna de les cel·les solars es pot aproximar mitjançant l’expressió següent:
               <img src="https://caranda4.github.io/selectivitat2011/fotos/ExerciciA4Serie4.PNG" alt="Imatge relacionada amb la resposta">
               Determineu, per a una única cel·la:
               <br><br><strong>a)</strong> La tensió de circuit obert, \\(U_\\text{oc}\\) (tensió entre els borns quan no hi circula corrent). [0,5 punts]
               <br><br>El panell subministra la màxima potència quan circula una intensitat \\(I_\\text{màx} = 7{,}79 \\, \\text{A}\\)
               per cadascuna de les cel·les. Si les seixanta cel·les estan connectades en sèrie, determineu:
               <br><br><strong>b)</strong> La tensió subministrada per tot el panell, \\(U_\\text{tot}\\), quan la potència és màxima [1 punt]
               <br><strong>c)</strong>La potència màxima, \\(P_\\text{màx}\\), que subministra el panell.
               <br><strong>d)</strong> Com es modifica la potència màxima del panell, si es connecten en paral·lel dos
               grups de trenta cel·les en sèrie? [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) La tensió de circuit obert</strong>
            <br>
            \\[
            U_\\text{oc} = 0,61 \\cdot (1+\\frac{1}{16{,}2}\\cdot ln (1)) = 0,61 \\cdot (1+\\frac{1}{16{,}2}\\cdot(0)) = 0{,}61 \\, \\text{V}
            \\]
            <br>
            
            <strong>b) La tensió subministrada per tot el panell</strong>
            \\[
            U_\\text{cel·La} = 0,61 \\cdot (1+\\frac{1}{16{,}2}\\cdot ln (\\frac{8{,}36 - 7{,}79}{8{,}36})) = 0{,}5089\\, \\text{V}
            \\]
            \\[
            U_\\text{tot} = 60 \\cdot U_\\text{cel·la} = 60 \\cdot 0{,}5089 = 30{,}534 \\text{V}
            \\]
            <br>

            <strong>c) La potència màxima</strong>
            \\[
            P_\\text{màx} = U_\\text{tot} \\cdot I_\\text{màx} = 30{,}534 \\cdot 7{,}79 = 237{,}8 \\text{W}
            \\]
            <br>
            
            <strong>c) Modificació de la potència màxima del panell</strong>
            \\[
            I' = 2 \\cdot I_\\text{màx}
            \\]
            \\[
            U' = 30 \\cdot U_\\text{cel·la}
            \\]
            \\[
            P' = 30 \\cdot U_\\text{cel·la} \\cdot 2 \\cdot I_\\text{màx} = 30 \\cdot 0{,}5089 \\cdot 2 \\cdot 7{,}79 = 237{,}8
            \\]
            La potència que subministra el panell no es modifica.
            <br>`,
    },
]
