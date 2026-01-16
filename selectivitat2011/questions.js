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
            P_{total} = 32\\,\\text{W} \\cdot 5 = 160\\,\\text{W} 
            \\]
            \\[ 
            E = P \\cdot t 
            \\] 
            \\[ 
            E = 160\\,\\text{W} \\cdot 100\\,\\text{h} = 16000\\,\\text{Wh} 
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
            \\text{Ni} = 150 \\, \\text{kg} \\cdot 0{,}545 = 81{,}75 \\, \\text{kg} 
            \\]
            \\[ 
            \\text{Ti} = 150 \\, \\text{kg} \\cdot 0{,}455 = 68{,}25 \\, \\text{kg} \\approx 68{,}10 \\, \\text{kg} 
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
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2Serie1.PNG" alt="Imatge relacionada amb la pregunta"><br>
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
            <img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2.2Serie1.PNG" alt="Imatge relacionada amb la resposta">
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
            
            <strong>b) Energia del motor, energia del motor dissipada i energia de la bateria dissipada</strong>
            \\[
            E_m = P_m \\cdot t = 39 \\cdot \\frac{30}{60} = 19{,}5 \\, \\text{Wh} = 70{,}2 \\, \\text{kJ}
            \\]
            - Energia del motor
            \\[
            E_{\\text{motor}} = \\frac{E_m}{\\eta} = \\frac{19,5}{0,6} = 32{,}5 \\, \\text{Wh} = 117 \\, \\text{kJ}
            \\]
            - Energia del motor dissipada
            \\[
            E_{\\text{dis motor}} = E_{\\text{motor}} - E_{\\text{m}} = 13 \\text{Wh} = 46{,}8 \\text{kJ}
            \\]
            - Energia de la bateria dissipada
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
        text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011ExerciciA4Serie1.PNG" alt="Imatge relacionada amb la pregunta"><br>
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
            <br>

            <strong>c) La corba del parell</strong>
            <br>
            <img src="https://caranda4.github.io/selectivitat2011/fotos/2011ExerciciB4Serie1.PNG" alt="Imatge relacionada amb la pregunta">
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
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2Serie4.PNG" alt="Imatge relacionada amb la pregunta"><br>
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
            <img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2.2Serie4.PNG" alt="Imatge relacionada amb la resposta">
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
               <br>
               <img src="https://caranda4.github.io/selectivitat2011/fotos/2011ExerciciA4Serie4.PNG" alt="Imatge relacionada amb la resposta">
               <br>
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

    //Exercici 3B
    {
        type: "exercicis",
        category: "maquines",
        text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici3Serie4.PNG" alt="Imatge relacionada amb la pregunta"><br>
               Per a elevar una torre d’alçària \\(L_1= 10 \\text{m}\\) d’un petit aerogenerador es fa servir una
               barra auxiliar de longitud \\(L_2= 2 \\text{m}\\) i massa negligible unida a la torre per mitjà del
               cable PR i articulada al punt O, tal com es mostra en la figura. La torre també està
               articu lada al punt O i quan està en posició horitzontal s’aguanta per mitjà de la força,
               F, del cable PQ. Determineu:
               <br><strong>a)</strong> L’angle \\(\\alpha\\) que forma la força, F, respecte de l’horitzontal. [0,5 punts]
               <br><strong>b)</strong> El valor de la força, F. [1 punt]
               <br><strong>c)</strong> La força horitzontal, \\(F_H\\), i la força vertical, \\(F_V\\), en l’articulació O. [1 punt]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong> Angle \\(\\alpha\\) que forma la força F respecte de l'horitzontal</strong>
            <br>
            - Calcular mitjançant la trigonometria del triangle
            \\[
            \\tan(\\alpha) = \\frac{L_2}{L_3} 
            \\] 
            \\[ 
            \\alpha = \\arctan\\left(\\frac{2 \\, \\text{m}}{5 \\, \\text{m}}\\right) = \\arctan(0,4) 
            \\] 
            \\[ 
            \\alpha = 21,801^\\circ
            \\]
            <br>

            <strong>b) Valor de la força F</strong>
            <br>
            - Càlcul del pes de la torre:
            \\[
            P_g = m \\cdot g = 135 \\, \\text{kg} \\cdot 9,81 \\, \\text{m/s}^2 = 1324,35 \\, \\text{N}
            \\]
            - Càlcul de la distància al centre de masses
            \\[
            d_G = \\frac{L_1}{2} = 5 \\, \\text{m}
            \\]
            - Equació de moments en O
            \\[
            P_g \\cdot d_G = F_x \\cdot L_2
            \\]
            \\[
            1324,35 \\, \\text{N} \\cdot 5 \\, \\text{m} = (F \\cdot \\cos(21,801^\\circ)) \\cdot 2 \\, \\text{m}
            \\]
            \\[
            6621,75 = F \\cdot 0,9285 \\cdot 2 
            \\] 
            \\[ 
            F = \\frac{6621,75}{1,857} = 3565,83 \\, \\text{N}
            \\]
            <br>

            <strong>c) Força horitzontal \\(F_H\\) i força vertical \\(F_V\\) en l'articulació O</strong>
            <br>
            - Equilibri de forces horitzontals
            \\[
            F_H - F \\cdot \\cos(\\alpha) = 0 
            \\] 
            \\[ 
            F_H = 3565,83 \\, \\text{N} \\cdot \\cos(21,801^\\circ) 
            \\] 
            \\[ 
            F_H = 3310,87 \\, \\text{N} \\to \\text{(positiva cap a l'esquerra)}
            \\]
            - Equilibri de forces verticals
            \\[
            F_V - P_g - F \\cdot \\sin(\\alpha) = 0 
            \\] 
            \\[ 
            F_V = 1324,35 \\, \\text{N} + (3565,83 \\, \\text{N} \\cdot \\sin(21,801^\\circ)) 
            \\] 
            \\[ 
            F_V = 1324,35 \\, \\text{N} + 1324,35 \\, \\text{N} 
            \\] 
            \\[ 
            F_V = 2648,7 \\, \\text{N} \\to \\text{(positiva cap amunt)}
            \\]
            <br>`,
    },

    //Exercici 4B
    {
        type: "exercicis",
        category: "energia",
        text: `Es dissenya un sistema de producció d’aigua calenta per a obtenir un cabal d’aigua
               \\(q = 10 \\, \\text{L/s}\\) a \\(75 \\, \\text{°C}\\). L’aigua que entra al sistema té una temperatura de \\(15 \\, \\text{°C}\\) i el rendiment
               de la instal·lació és \\(\\eta= 0,63\\). El sistema pot funcionar mitjançant la combustió de
               carbó de poder calorífic \\(p_c= 23,6 \\, \\text{MJ/kg}\\) o de gas butà de poder calorífic \\(p_b= 49,5 \\, \\text{MJ/kg}\\).
               La calor específica de l’aigua és \\(c_e= 4,18 \\, \\frac{\\text{J}}{\\text{g °C}}\\). Si el sistema funciona sense interrupcions durant tot el dia, determineu:
               <br><strong>a)</strong> La massa d’aigua, \\(m_a\\), diària escalfada i l’energia necessària,\\(E_\\text{dia}\\) , per a escalfar-la,en kW h. [1 punt]
               <br><strong>b)</strong> La massa de carbó, \\(m_c\\), diària necessària, si només s’utilitza carbó. [0,5 punts] 
               <br><strong>c)</strong> La massa de gas butà, \\(m_b\\), diària necessària, si només es fa servir gas butà. [0,5 punts
               <br>
               <br>La combustió de carbó produeix una emissió de \\(2,30 \\, \\text{kg de CO2/kg}\\) i la combustió
               de gas butà produeix una emissió de \\(2,96 \\, \\text{kg de CO2/kg}\\). 
               <br>
               <br><strong>d)</strong> Quin combustible és més recomanable fer servir des del punt de vista de les emissions de CO2?
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Massa d'aigua diària i energia necessària</strong>
            <br>
            - Massa d'aigua diària
            \\[
            t_{dia} = 24 \\, \\text{h} \\cdot 3600 \\, \\text{s/h} = 86400 \\, \\text{s} 
            \\] 
            \\[ 
            m_a = q \\cdot t_{dia} = 10 \\, \\text{L/s} \\cdot 86400 \\, \\text{s} = 864000 \\, \\text{L} = 864000 \\, \\text{kg} = 864 \\cdot 10^3 \\, \\text{kg}
            \\] 
            - Energia necessària
            \\[ 
            \\Delta T = 75 \\, ^\\circ\\text{C} - 15 \\, ^\\circ\\text{C} = 60 \\, ^\\circ\\text{C} 
            \\] 
            \\[ 
            Q_{util} = m_a \\cdot c_e \\cdot \\Delta T 
            \\] 
            \\[ 
            Q_{util} = 864000000 \\, \\text{g} \\cdot 4,18 \\, \\frac{\\text{J}}{\\text{g} \\cdot ^\\circ\\text{C}} \\cdot 60 \\, ^\\circ\\text{C} = 2,1669 \\cdot 10^{11} \\, \\text{J} 
            \\] 
            \\[ 
            E_{dia} = \\frac{2,1669 \\cdot 10^{11} \\, \\text{J}}{3,6 \\cdot 10^6 \\, \\text{J/kWh}} = 60192 \\, \\text{kWh}
            \\]
            <br>

            <strong>b) Massa de carbó diària</strong>
            <br>
            \\[
            Q_{total} = \\frac{Q_{util}}{\\eta} = \\frac{2,1669 \\cdot 10^{11} \\, \\text{J}}{0,63} = 3,4395 \\cdot 10^{11} \\, \\text{J} 
            \\] 
            \\[ 
            m_c = \\frac{Q_{total}}{p_c} = \\frac{3,4395 \\cdot 10^{11} \\, \\text{J}}{23,6 \\cdot 10^6 \\, \\text{J/kg}} = 14574,25 \\, \\text{kg}
            \\]
            <br>

            <strong>c) Massa de gas butà diària</strong>
            <br>
            \\[
            m_b = \\frac{Q_{total}}{p_b} = \\frac{3,4395 \\cdot 10^{11} \\, \\text{J}}{49,5 \\cdot 10^6 \\, \\text{J/kg}} = 6948,53 \\, \\text{kg}
            \\]
            <br>

            <strong>d) Comparativa d'emissions de \\(CO_2\\)</strong>
            <br>
            - Emissions amb carbó
            \\[ 
            Emissió_c = 14574,25 \\, \\text{kg}_{carbó} \\cdot 2,30 \\, \\text{kg } CO_2/\\text{kg} = 33520,77 \\, \\text{kg } CO_2
            \\]
            - Emissions amb butà
            \\[ 
            Emissió_b = 6948,53 \\, \\text{kg}_{butà} \\cdot 2,96 \\, \\text{kg } CO_2/\\text{kg} = 20567,65 \\, \\text{kg } CO_2
            \\]
            Conclusió: El combustible més recomanable és el gas butà, ja que genera una emissió total de \\(CO_2\\) significativament menor \\(20567,65 \\, \\text{kg}\\) comparada amb la del carbó \\(33520,77 \\, \\text{kg}\\) per a la mateixa producció d'aigua calenta.
            <br>`,
    }, 

    //Serie 2
    //Qüestio 1
    {
        type: "questions", 
        category: "metrologia",
        text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Questio1Serie2.PNG" alt="Imatge relacionada amb la pregunta"><br>
               En un plànol d’una peça s’han acotat \\(L_1\\) i R tal com
               s’indica en la figura. La distància \\(L_2\\) és:`,

            options: [
            { text: "\\((30 \\pm 0,4) \\, \\text{mm}\\)", value: "a" },
            { text: "\\(\\left( 30_{-0}^{+0,2} \\right) \\, \\text{mm}\\)", value: "b" },
            { text: "\\(\\left( 30_{-0,3}^{+0,5} \\right) \\, \\text{mm}\\)", value: "c" },
            { text: "\\(\\left( 30_{-0,5}^{+0,3} \\right) \\, \\text{mm}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            - Valor nominal
            \\[
            L_{2(nom)} = 40 \\, \\text{mm} - 10 \\, \\text{mm} = 30 \\, \\text{mm}
            \\]
            - Desviació superior
            \\[
            ds_{L2} = ds_{L1} - di_{R} = (+0,1) - (-0,2) = +0,3 \\, \\text{mm}
            \\]
            - Desviació inferior
            \\[
            di_{L2} = di_{L1} - ds_{R} = (-0,2) - (+0,3) = -0,5 \\, \\text{mm}
            \\]
            \\[
            L_2 = (30_{-0,5}^{+0,3}) \\, \\text{mm}
            \\]
            <br>`,
    },

    //Questio 2
    {
        type: "questions", 
        category: "maquines",
        text: `Un volant de moment d’inèrcia \\(I = 120 \\, \\text{kg m}^2\\) s’ha d’accelerar de \\(0 \\, a  \\, 300 \\, \\text{min}^{-1}\\) en 5 s.
               La potència mitjana que ha de proporcionar el motor que acciona aquest volant és:`,

            options: [
            { text: "11,84 kW", value: "a" },
            { text: "3,770 kW", value: "b" },
            { text: "118,4 kW", value: "c" },
            { text: "37,70 kW", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            - Conversió d'unitats de la velocitat angular
            \\[
            \\omega = 300 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi \\, \\text{rad}}{1 \\, \\text{rev}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{s}} = 10\\pi \\, \\text{rad/s} \\approx 31,416 \\, \\text{rad/s}
            \\]
            - Càlcul de l'energia cinètica de rotació
            \\[
            E_c = \\frac{1}{2} \\cdot I \\cdot \\omega^2 
            \\] 
            \\[ 
            E_c = \\frac{1}{2} \\cdot 120 \\, \\text{kg} \\cdot \\text{m}^2 \\cdot (31,416 \\, \\text{rad/s})^2 
            \\] 
            \\[ 
            E_c = 60 \\cdot 986,96 = 59217,6 \\, \\text{J}
            \\]
            - Càlcul de la potència mitjana
            \\[ P_m = \\frac{\\Delta E_c}{t} 
            \\] \\[ 
            P_m = \\frac{59217,6 \\, \\text{J}}{5 \\, \\text{s}} = 11843,52 \\, \\text{W} = 11,843 \\, \\text{kW}
            \\]
            <br>`,
    },

    //Questio 3
    {
        type: "questions", 
        category: "motors",
        text: `El pistó d’un motor tèrmic, de 85 mm de diàmetre, desplaça un volum de \\(500 \\, \\text{cm}^3\\).
               La cursa del pistó és:`,

            options: [
            { text: "42,5 mm", value: "a" },
            { text: "69,2 mm", value: "b" },
            { text: "22,0 mm", value: "c" },
            { text: "88,1 mm", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            - Càlcul de la secció del pistó
            \\[
            A = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (8,5 \\, \\text{cm})^2}{4} 
            \\] 
            \\[ 
            A = \\frac{\\pi \\cdot 72,25}{4} \\approx 56,745 \\, \\text{cm}^2
            \\]
            - Càlcul de la cursa
            \\[
            s = \\frac{V}{A} = \\frac{500 \\, \\text{cm}^3}{56,745 \\, \\text{cm}^2} \\approx 8,811 \\, \\text{cm}
            \\]
            - Conversió a mil·límetres
            \\[
            s = 8,811 \\, \\text{cm} \\cdot 10 \\, \\text{mm/cm} = 88,11 \\, \\text{mm}
            \\]
            <br>`,
    },

    //Questio 4
    {
        type: "questions", 
        category: "materials",
        text: `Una proveta cilíndrica, de 5 mm de diàmetre, és feta de PVC amb un mòdul d’elasticitat \\(E = 2,6 \\, \\text{GPa}\\) i una tensió de ruptura \\(\\sigma_r = 48 \\, \\text{MPa}\\). La força de tracció que cal fer per
               a trencar-la és:`,

            options: [
            { text: "1,885 kN", value: "a" },
            { text: "0,9425 kN", value: "b" },
            { text: "Els plàstics no es poden trencar amb una força de tracció", value: "c" },
            { text: "51,05 kN", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            - Càlcul de la secció de la proveta
            \\[
            A = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (0,005 \\, \\text{m})^2}{4} 
            \\] 
            \\[ 
            A = 1,9635 \\cdot 10^{-5} \\, \\text{m}^2
            \\]
            - Càlcul de la força de ruptura
            \\[
            F_r = \\sigma_r \\cdot A 
            \\] 
            \\[ 
            F_r = 48 \\cdot 10^6 \\, \\text{Pa} \\cdot 1,9635 \\cdot 10^{-5} \\, \\text{m}^2 
            \\] 
            \\[ 
            F_r = 942,48 \\, \\text{N}
            \\]
            - Conversió a quilonewtons
            \\[
            F_r = \\frac{942,48}{1000} = 0,94248 \\, \\text{kN}
            \\]
            <br>`,
    },

    //Questio 5
    {
        type: "questions", 
        category: "organitzacio",
        text: `El muntatge d’una peça s’organitza en tres fases que requereixen 10 s, 20 s i 15 s, respectivament. 
               En la primera fase hi ha una única estació de treball, en la segona n’hi ha
               dues en paral·lel i en la tercera també n’hi ha dues en paral·lel. En règim estacionari i
               amb la línia funcionant a màxim rendiment, cada quants segons surt una unitat de la
               línia de muntatge?`,

            options: [
            { text: "7,5 s", value: "a" },
            { text: "45 s", value: "b" },
            { text: "10 s", value: "c" },
            { text: "40 s", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            - Fase 1:
            \\[
            t_1 = 10 \\, \\text{s} 
            \\] 
            \\[ 
            n_1 = 1 \\, \\text{estació} 
            \\] 
            \\[ 
            T_{efectiu,1} = \\frac{10 \\, \\text{s}}{1} = 10 \\, \\text{s/unitat}
            \\]
            - Fase 2:
            \\[
            t_2 = 20 \\, \\text{s} 
            \\] 
            \\[ 
            n_2 = 2 , \\text{estacions en paral·lel} 
            \\] 
            \\[ 
            T_{efectiu,2} = \\frac{20 \\, \\text{s}}{2} = 10 \\, \\text{s/unitat}
            \\]
            - Fase 3:
            \\[
            t_3 = 15 \, \\text{s} 
            \\] 
            \\[ 
            n_3 = 2 \\, \\text{estacions en paral·lel} 
            \\] 
            \\[ 
            T_{efectiu,3} = \\frac{15 \\, \\text{s}}{2} = 7,5 \\, \\text{s/unitat}
            \\]
            - Conclusió 
            <br>En una línia de producció en sèrie, el temps de sortida d'unitats ve determinat per la fase més lenta (el coll d'ampolla). Comparem els temps efectius:
            <br>Fase 1: 10 s
            <br>Fase 2: 10 s
            <br>Fase 3: 7,5 s
            <br>El temps de cicle de la línia és el valor màxim d'aquests temps, que és <strong>10 s</strong>. Per tant, en règim estacionari, surt una unitat cada 10 segons.
            <br>`,
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `Una finestra domòtica es tanca automàticament quan el programador horari indica horari nocturn o quan un sensor exterior detecta una radiació solar elevada. També
               es pot tancar manualment amb un polsador. Utilitzant les variables d’estat següents:
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2Serie2.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
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
                    <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            f = \\overline{m} \\cdot \\overline{s} \\cdot \\overline{h} + \\overline{m} \\cdot s \\cdot \\overline{h} + \\overline{m} \\cdot s \\cdot h + m \\cdot \\overline{s} \\cdot \\overline{h} + m \\cdot \\overline{s} \\cdot h + m \\cdot s \\cdot \\overline{h} + m \\cdot s \\cdot h = \\overline{\\overline{m} \\cdot \\overline{s} \\cdot h} = m + s + \\overline{h}
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici2.2Serie2.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },
    
    //Exercici 3A
    {
        type: "exercicis",
        category: " ... ",
        text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici3Serie2.PNG" alt="Imatge relacionada amb la resposta"><br>
               La placa de metacrilat de la figura té un gruix
               \\(e = 8 \\,\\text{mm}\\) i està penjada per l’articulació O. Per a mantenir-la tal com s’indica en la figura s’estira per Q
               amb una força vertical F. Determineu:
               <br><strong>a)</strong> La massa m de la placa. Preneu la densitat del metacrilat \\(\\rho = 1 200 \\, \\text{kg/m}^3\\). [1 punt]
               <br><strong>b)</strong> La força vertical F i la força que exerceix l’articulació O. [1 punt}
               <br><br>Per a mantenir la placa tal com s’indica en la figura, es proposa una alternativa que consisteix a aplicar una força horitzontal a P.<br>
               <br><strong>c)</strong> Expliqueu, de manera raonada, si la força que cal aplicar és més gran o més petita que en la solució anterior. [0,5 punts]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Massa de la placa</strong>
            <br>
            - La placa és un triangle rectangle
            \\[
            Area = \\frac{a \\cdot b}{2} = \\frac{0,5 \\, \\text{m} \\cdot 0,9 \\, \\text{m}}{2} = 0,225 \\, \\text{m}^2 
            \\] 
            \\[ 
            Volum = Area \\cdot e = 0,225 \\, \\text{m}^2 \\cdot 0,008 \\, \\text{m} = 1,8 \\cdot 10^{-3} \\, \\text{m}^3 
            \\] 
            \\[ 
            m = \\rho \\cdot Volum = 1200 \\, \\text{kg/m}^3 \\cdot 1,8 \\cdot 10^{-3} \\, \\text{m}^3 = 2,16 \\, \\text{kg}
            \\]
            <br>

            <strong>b) Força vertical i la força que exerceix l’articulació O</strong>
            <br>
            - Força vertical
            \\[
            F_\\text{OV} = 0
            \\]
            - Força hortizontal
            \\[
            F_\\text{OH} = m \\cdot g - F = 14,12 \\, \\text{N (positiva cap amunt)} 
            \\]
            - Fem moments respecte a O per mantenir l'equilibri
            \\[
            P = m \\cdot g = 2,16 \\, \\text{kg} \\cdot 9,81 , \\text{m/s}^2 = 21,19 \\, \\text{N} \\] \\[ \\sum M_O = 0 \\rightarrow P \\cdot \\frac{a}{3} = F \\cdot a 
            \\] 
            \\[ 
            F = \\frac{P}{3} = \\frac{21,19 \\, \\text{N}}{3} = 7,063 \\, \\text{N}
            \\]
            <br>

            <strong>c) Força horitzontal a P</strong>
            <br>
            Si apliquem una força horitzontal \\(F_h\\) al punt P, el seu braç de palanca respecte a O és la distància vertical b (900 mm), mentre que la força F anterior tenia un braç a (500 mm).
            \\[
            P \\cdot \\frac{a}{3} = F_h \\cdot b \\rightarrow F_h = \\frac{P \\cdot a}{3b}
            \\]
            Com que \\(b \\, > \\, a\\), la força \\(F_h\\) necessària serà <strong>més petita</strong> que la força vertical F de l'apartat anterior.
            <br>`,
    },

    //Exercici 4A
    {
        type: "exercicis",
        category: "energia",
        text: `Es fa servir una placa solar tèrmica per a escalfar diàriament \\(V_a = 60 \\, \\text{L d’aigua}\\) que
               entren a la placa a \\(T_e= 13 \\, \\text{°C}\\) i en surten a \\(T_s= 60 \\, \\text{°C}\\). Les condicions de localització de la
               instal·lació fan que la placa disposi de \\(t = 9,5 \\text{h diàries}\\) de sol amb una radiació solar mitjana \\(I = 476 \\, \\text{W/m2}\\) i d’una temperatura ambient \\(T_a= 17 \\, \\text{°C}\\). La calor específica de l’aigua
               és \\(c_e = 4,18 \\, \\text{kJ / (kg °C)}\\) i el rendiment de la placa és determinat per l’expressió següent:
               <br><br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici4Serie2.PNG" alt="Imatge relacionada amb la pregunta"><br>
               Determineu:
               <br><strong>a)</strong> L’energia necessària, \\(E_\\text{dia}\\), per a escalfar l’aigua. [0,5 punts]
               <br><strong>b)</strong> L’energia solar diària, \\(E_\\text{solar}\\), disponible per \\(m^2\\). [0,5 punts]
               <br><strong>c)</strong> El rendiment, \\(\\eta\\), de la placa. [0,5 punts]
               <br><strong>d)</strong> La superfície, S, de la placa. [1 punt]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Energia necessària \\(E_\\text{dia}\\)</strong>
            <br>
            \\[
            E_{dia} = m_a \\cdot c_e \\cdot (T_s - T_e) 
            \\] 
            \\[ 
            E_{dia} = 60 \\, \\text{kg} \\cdot 4,18 \\, \\text{kJ/(kg}^\\circ\\text{C)} \\cdot (60 - 13) \\, ^\\circ\\text{C} = 11787,6 \\, \\text{kJ} = 11,49 \\, \\text{MJ} = 3,274 \\, \\text{kWh}
            \\]
            <br>

            <strong>b) Energia solar diària disponible \\(E_\\text{solar}\\) per \\(m^2\\)</strong>
            <br>
            \\[
            E_{solar} = I \\cdot t = 476 \\, \\text{W/m}^2 \\cdot (9,5 \\cdot 3600 \\, \\text{s}) = 16,279 \\cdot 10^6 \\, \\text{J/m}^2 = 16,279 \\, \\text{MJ/m}^2 = 4,522\\, \\text{kWh/m}^2
            \\]
            <br>

            <strong>c) Rendiment de la placa</strong>
            <br>
            - ...
            \\[
            \\eta = 0,78 - 3,6 \\cdot \\frac{50 - 17}{476} = 0,78 - 0,249 = 0,5304 \\, = 53,04 \\, \\%
            \\]
            <br>

            <strong>d) Superfície de la placa</strong>
            <br>
            \\[ 
            Q = S \\cdot E_{solar} \\cdot \\eta \\rightarrow S = \\frac{E_{dia}}{E_{solar} \\cdot \\eta} 
            \\] 
            \\[ 
            S = \\frac{11787,6 , \\text{kJ}}{16279,2 \\, \\text{kJ/m}^2 \\cdot 0,5304} = 1,365 \\, \\text{m}^2
            \\]
            <br>`,
    },

    //Exercici 3B
    {
        type: "exercicis",
        category: "electrics",
        text: `Un forn de microones consisteix esquemàticament en un transformador d’alta tensió 
               que alimenta un dispositiu anomenat magnetró, el qual genera les microones i 
               consumeix sempre una potència \\(P_\\text{mag} = 920 \\, \\text{W}\\). Per a aconseguir les diferents potències de
               cocció es controla el temps de funcionament del magnetró. Les característiques del
               microones són, entre d’altres, les següents:
               <br>— Tensió d’alimentació \\(U_\\text{elèc} = 220 \\, \\text{V}\\).
               <br>— Potència de consum \\(P_\\text{consum} = 1250 \\, \\text{W}\\) (quan el magnetró està en funcionament).
               <br>— Potències de cocció \\(P_1 = 800 \\, \\text{W}\\), \\(P_2 = 650 \\, \\text{W}\\), \\(P_3 = 450 \\, \\text{W}\\), \\(P_4 = 160 \\, \\text{W}\\), \\(P_5 = 90 \\, \\text{W}\\).
               Si per a la potència de cocció de 800 W el magnetró funciona el 100 % del temps,
               determineu:
               <br><strong>a)</strong> El rendiment, \\(\\eta\\), del magnetró. [0,5 punts
               <br><strong>b)</strong> El percentatge de temps que funciona el magnetró per a les altres potències de sortida. [1 punt]
               <br><strong>c)</strong> L’energia elèctrica consumida, \\(E_\\text{elèc}\\), quan es cou un aliment a una potència \\(P_2\\) durant \\(t = 6 \\, \\text{min}\\). (Cal tenir en compte que els elements auxiliars diferents del magnetró funcionen sense interrupció durant la cocció.) [1 punt]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Rendiment del magnetró</strong>
            <br>
            \\[
            \\eta = \\frac{P_1}{P_{mag}} = \\frac{800}{920} = 0,8696 = 86,96 \\, \\%
            \\]
            <br>

            <strong>b) Percentatge de temps de funcionament</strong>
            <br>
            \\[
            \\frac{P_x}{P_1} \\cdot 100
            \\]
            - \\(P_2\\)
            \\[
            \\frac{650}{800} \\cdot 100 = 81,25 \\, %
            \\]
            - \\(P_3\\)
            \\[
            \\frac{450}{800} \\cdot 100 = 56,25 \\, %
            \\]
            - \\(P_4\\)
            \\[
            \\frac{160}{800} \\cdot 100 = 20 \\, %
            \\]
            - \\(P_5\\)
            \\[
            \\frac{90}{800} \\cdot 100 = 11,25 \\, %
            \\]
            
            <br>

            <strong>c)  Energia elèctrica consumida \\(E_{elèc}\\) a \\(P_2\\) durant \\(6 \\, \\text{min}\\)</strong>
            <br>
            - La potència d'auxiliars és constant
            \\[
            P_\\text{aux} = P_{aux} = 1250 - 920 = 330 \\, \\text{W}
            \\]
            \\[
            E_{aux} = 330 \\, \\text{W} \\cdot 360 \\, \\text{s} = 118800 \\, \\text{J} 
            \\] 
            \\[ 
            E_{mag} = 920 \\, \\text{W} \\cdot (360 \\, \\text{s} \\cdot 0,8125) = 269100 \\, \\text{J} 
            \\] 
            \\[ 
            E_{total} = 118800 + 269100 = 387900 \\, \\text{J} = 107,75 \\, \\text{Wh}
            \\]
            <br>`,
    },

        //Exercici 4B
        {
            type: "exercicis",
            category: "electrics",
            text: `<br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici4.2Serie2.PNG" alt="Imatge relacionada amb la pregunta"><br>
                   <br>La gràfica representada mostra la corba de potència d’un motor de corrent continu alimentat a tensió constant. Es calcula mitjançant l’expressió següent:<br>
                   <br><img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici4.3Serie2.PNG" alt="Imatge relacionada amb la pregunta"><br>
                   <br><strong>a)</strong> Determineu l’expressió del parell motor en funció de \\(n\\), i el valor del parell motor per a \\(n = 0 \\, \\text{min}^{-1}\\). [1 punt]
                   <br><strong>b)</strong> Dibuixeu, de manera esquemàtica i indicant les escales, la corba de parell del motor en funció de \\(n\\). [0,5 punts]
                   <br><strong>c)</strong> Determineu la freqüència de gir \\(n\\) n, en \\(min^{-1}\\), a la qual fa moure una màquina que requereix un parell constant \\(\\Gamma_\\text{màq} = 6 \\, \\text{Nm}\\). [1 punt]
                   <br>`,
                   
            correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
            steps: `
                <strong>a) Expressió del parell motor en funció de n</strong>
                <br>
                - Utilitzem les relacions
                \\[
                P = \\Gamma \\cdot \\omega
                \\]
                \\[
                \\omega = \\frac{2\\pi \\cdot n}{60}
                \\]
                - Fem els calculs
                \\[
                \\Gamma = \\frac{P}{\\omega} = \\frac{0,84n - 0,0003n^2}{\\frac{2\\pi \\cdot n}{60}} = \\frac{60}{2\\pi} \\cdot (0,84 - 0,0003n) = 8,022 - 0,00286n \\, \\text{Nm} 8,022 - 0,00286 \\cdot 0 \\, \\text{Nm} = 8,022 \\, \\text{Nm}
                \\]
                <br>
    
                <strong>b) Dibuix de la corba de parell del motor</strong>
                <br><br>
                <img src="https://caranda4.github.io/selectivitat2011/fotos/2011Exercici4.4Serie2.PNG" alt="Imatge relacionada amb la pregunta">
                <br><br>
    
                <strong>c) Freqüència de gir n per a un parell constant</strong>
                <br>
                \\[
                \\Gamma = \\Gamma_\\text{màq}
                \\]
                \\[
                (0,84 - 0,0003n) \\cdot \\frac{30}{\\pi} = 6 \\, \\text{Nm} \\to n = 750,6 \\, \\text{min}^{-1}
                \\]
                <br>`,
        },
]
