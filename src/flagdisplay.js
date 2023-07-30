import React, { Component } from 'react';
import { useRef } from 'react'

const f_list = [['001', 'アイスランド', 'Iceland'], ['002', 'アイルランド', 'Ireland'], ['003', 'アゼルバイジャン', 'Azerbaijan'], ['004', 'アフガニスタン', 'Afghanistan'], ['005', 'アメリカ合衆国', 'united states of america'], ['006', 'アラブ首長国連邦', 'United Arab Emirates'], ['007', 'アルジェリア', 'Algeria'], ['008', 'アルゼンチン', 'Argentina'], ['009', 'アルバニア', 'Albania'], ['010', 'アルメニア', 'Armenia'], ['011', 'アンゴラ', 'Angola'], ['012', 'アンティグア・バーブーダ', 'Antigua and Barbuda'], ['013', 'アンドラ', 'Andorra'], ['014', 'イエメン', 'Yemen'], ['015', 'イギリス', 'England'], ['016', 'イスラエル', 'Israel'], ['017', 'イタリア', 'Italy'], ['018', 'イラク', 'Iraq'], ['019', 'イラン', 'Iran'], ['020', 'インド', 'India'], ['021', 'インドネシア', 'Indonesia'], ['022', 'ウガンダ', 'Uganda'], ['023', 'ウクライナ', 'Ukraine'], ['024', 'ウズベキスタン', 'Uzbekistan'], ['025', 'ウルグアイ', 'Uruguay'], ['026', 'エクアドル', 'Ecuador'], ['027', 'エジプト', 'Egypt'], ['028', 'エストニア', 'Estonia'], ['029', 'エスワティニ', 'eswatini'], ['030', 'エチオピア', 'Ethiopia'], ['031', 'エリトリア', 'Eritrea'], ['032', 'エルサルバドル', 'El Salvador'], ['033', 'オーストラリア', 'Australia'], ['034', 'オーストリア', 'Austria'], ['035', 'オマーン', 'Oman'], ['036', 'オランダ', 'Netherlands'], ['037', 'ガーナ', 'Ghana'], ['038', 'カーボベルデ', 'Cape Verde'], ['039', 'ガイアナ', 'Guyana'], ['040', 'カザフスタン', 'Kazakhstan'], ['041', 'カタール', 'Qatar'], ['042', 'カナダ', 'Canada'], ['043', 'ガボン', 'Gabon'], ['044', 'カメルーン', 'Cameroon'], ['045', '韓国', 'Korea'], ['046', 'ガンビア', 'gambia'], ['047', 'カンボジア', 'Cambodia'], ['048', '北朝鮮', 'north korea'], ['049', '北マケドニア', 'north macedonia'], ['050', 'ギニア', 'Guinea'], ['051', 'ギニアビサウ', 'Guinea-Bissau'], ['052', 'キプロス', 'Cyprus'], ['053', 'キューバ', 'Cuba'], ['054', 'ギリシャ', 'Greece'], ['055', 'キリバス', 'Kiribati'], ['056', 'キルギス', 'Kyrgyzstan'], ['057', 'グアテマラ', 'Guatemala'], ['058', 'クウェート', 'Kuwait'], ['059', 'クック諸島', 'Cook Islands'], ['060', 'グレナダ', 'grenada'], ['061', 'クロアチア', 'Croatia'], ['062', 'ケニア', 'Kenya'], ['063', 'コートジボワール', 'Ivory Coast'], ['064', 'コスタリカ', 'Costa Rica'], ['065', 'コソボ', 'Kosovo'], ['066', 'コモロ', 'Comoros'], ['067', 'コロンビア', 'Columbia'], ['068', 'コンゴ共和国', 'Republic of the Congo'], ['069', 'コンゴ民主共和国', 'Democratic Republic of the Congo'], ['070', 'サウジアラビア', 'Saudi Arabia'], ['071', 'サモア', 'Samoa'], ['072', 'サントメ・プリンシペ', 'sao tome and principe'], ['073', 'ザンビア', 'Zambia'], ['074', 'サンマリノ', 'San Marino'], ['075', 'シエラレオネ', 'Sierra Leone'], ['076', 'ジブチ', 'Djibouti'], ['077', 'ジャマイカ', 'Jamaica'], ['078', 'ジョージア', 'Georgia'], ['079', 'シリア', 'Syria'], ['080', 'シンガポール', 'Singapore'], ['081', 'ジンバブエ', 'Zimbabwe'], ['082', 'スイス', 'Switzerland'], ['083', 'スウェーデン', 'Sweden'], ['084', 'スーダン', 'Sudan'], ['085', 'スペイン', 'Spain'], ['086', 'スリナム', 'Suriname'], ['087', 'スリランカ', 'Sri Lanka'], ['088', 'スロバキア', 'Slovakia'], ['089', 'スロベニア', 'Slovenia'], ['090', 'セーシェル', 'Seychelles'], ['091', '赤道ギニア', 'Equatorial Guinea'], ['092', 'セネガル', 'Senegal'], ['093', 'セルビア', 'Serbia'], ['094', 'セントクリストファー・ネイビス', 'st kitts and nevis'], ['095', 'セントビンセント・グレナディーン', 'Saint Vincent and the Grenadines'], ['096', 'セントルシア', 'Saint Lucia'], ['097', 'ソマリア', 'Somalia'], ['098', 'ソロモン諸島', 'solomon islands'], ['099', 'タイ', 'sea \u200b\u200bbream'], ['100', 'タジキスタン', 'Tajikistan'], ['101', 'タンザニア', 'Tanzania'], ['102', 'チェコ', 'Czech Republic'], ['103', 'チャド', 'Chad'], ['104', '中央アフリカ共和国', 'Central African Republic'], ['105', '中華人民共和国', "People's Republic of China"], ['106', '中華民国', 'Republic of China'], ['107', 'チュニジア', 'Tunisia'], ['108', 'チリ', 'Chile'], ['109', 'ツバル', 'Tuvalu'], ['110', 'デンマーク', 'Denmark'], ['111', 'ドイツ', 'Germany'], ['112', 'トーゴ', 'Togo'], ['113', 'ドミニカ共和国', 'dominican republic'], ['114', 'ドミニカ国', 'Dominica'], ['115', 'トリニダード・トバゴ', 'Republic of Trinidad and Tobago'], ['116', 'トルクメニスタン', 'Turkmenistan'], ['117', 'トルコ', 'Türkiye'], ['118', 'トンガ', 'Tonga'], ['119', 'ナイジェリア', 'Nigeria'], ['120', 'ナウル', 'Nauru'], ['121', 'ナミビア', 'Namibia'], ['122', 'ニウエ', 'Niue'], ['123', 'ニカラグア', 'Nicaragua'], ['124', 'ニジェール', 'Niger'], ['125', '西サハラ', 'Western Sahara'], ['126', '日本', 'Japan'], ['127', 'ニュージーランド', 'new zealand'], ['128', 'ネパール', 'Nepal'], ['129', 'ノルウェー', 'Norway'], ['130', 'バーレーン', 'bahrain'], ['131', 'ハイチ', 'Haiti'], ['132', 'パキスタン', 'Pakistan'], ['133', 'バチカン', 'Vatican'], ['134', 'パナマ', 'Panama'], ['135', 'バヌアツ', 'Vanuatu'], ['136', 'バハマ', 'Bahamas'], ['137', 'パプアニューギニア', 'Papua New Guinea'], ['138', 'パラオ', 'Palau'], ['139', 'パラグアイ', 'Paraguay'], ['140', 'バルバドス', 'barbados'], ['141', 'パレスチナ', 'Palestine'], ['142', 'ハンガリー', 'Hungary'], ['143', 'バングラデシュ', 'Bangladesh'], ['144', '東ティモール', 'East Timor'], ['145', 'フィジー', 'Fiji'], ['146', 'フィリピン', 'Philippines'], ['147', 'フィンランド', 'Finland'], ['148', 'ブータン', 'Bhutan'], ['149', 'ブラジル', 'Brazil'], ['150', 'フランス', 'France'], ['151', 'ブルガリア', 'Bulgaria'], ['152', 'ブルキナファソ', 'Burkina Faso'], ['153', 'ブルネイ', 'Brunei'], ['154', 'ブルンジ', 'Burundi'], ['155', 'ベトナム', 'Vietnam'], ['156', 'ベナン', 'Benin'], ['157', 'ベネズエラ', 'Venezuela'], ['158', 'ベラルーシ', 'Belarus'], ['159', 'ベリーズ', 'Belize'], ['160', 'ペルー', 'Peru'], ['161', 'ベルギー', 'Belgium'], ['162', 'ポーランド', 'Poland'], ['163', 'ボスニア・ヘルツェゴビナ', 'Bosnia-Herzegovina'], ['164', 'ボツワナ', 'Botswana'], ['165', 'ボリビア', 'Bolivia'], ['166', 'ポルトガル', 'Portugal'], ['167', 'ホンジュラス', 'Honduras'], ['168', 'マーシャル諸島', 'marshall islands'], ['169', 'マダガスカル', 'Madagascar'], ['170', 'マラウイ', 'Malawi'], ['171', 'マリ', 'Mali'], ['172', 'マルタ', 'Malta'], ['173', 'マレーシア', 'Malaysia'], ['174', 'ミクロネシア連邦', 'Federated States of Micronesia'], ['175', '南アフリカ共和国', 'Republic of South Africa'], ['176', '南スーダン', 'South Sudan'], ['177', 'ミャンマー', 'Myanmar'], ['178', 'メキシコ', 'Mexico'], ['179', 'モーリシャス', 'Mauritius'], ['180', 'モーリタニア', 'Mauritania'], ['181', 'モザンビーク', 'Mozambique'], ['182', 'モナコ', 'Monaco'], ['183', 'モルディブ', 'maldives'], ['184', 'モルドバ', 'moldova'], ['185', 'モロッコ', 'Morocco'], ['186', 'モンゴル', 'mongolia'], ['187', 'モンテネグロ', 'Montenegro'], ['188', 'ヨルダン', 'Jordan'], ['189', 'ラオス', 'Laos'], ['190', 'ラトビア', 'Latvia'], ['191', 'リトアニア', 'Lithuania'], ['192', 'リビア', 'Libya'], ['193', 'リヒテンシュタイン', 'Liechtenstein'], ['194', 'リベリア', 'Liberia'], ['195', 'ルーマニア', 'Romania'], ['196', 'ルクセンブルク', 'Luxembourg'], ['197', 'ルワンダ', 'Rwanda'], ['198', 'レソト', 'Lesotho'], ['199', 'レバノン', 'Lebanon'], ['200', 'ロシア', 'Russia']];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default class Flagsdisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            ans_stat : false,
            ans : '',
            uncorrect_notion : false
        };
    }
    changeFlag = () =>{
        var tmp_id = getRandomInt(200);
        this.setState({
            id : tmp_id,
            ans_stat : false,
            ans : '',
            uncorrect_notion : false
        });
    }
    onInput = (e) =>{
        this.setState({
            ans : e.target.value
        });
    }
    checkAnswer = () =>{
        var ans = this.state.ans;
        if(ans === f_list[this.state.id][1] || ans === f_list[this.state.id][2]){
            this.setState({
                ans_stat : 1
            });
        }else{
            this.setState({
                uncorrect_notion : 1
            });
        }
    }
    
    // clear = () =>{
    //     var inputRef = useRef();
    //     inputRef.current.value = '';
    // }
    render(){
        var tmp = ('000' + (this.state.id+1)).slice(-3);
        var path = './flags/num/'+ tmp +'.png';
        return(
            <div>
                <div>
                    <img src={path} width={400} alt={this.state.name_en}/>
                </div>
                <div>
                    <input type="text" onInput={this.onInput}></input>
                    <button onClick={this.checkAnswer}>Send</button>
                </div>
                <div>
                    {this.state.ans_stat && <button onClick={()=>
                        {
                            this.changeFlag();
                            // this.clear();
                        }}>Next</button>
                    }
                    {this.state.ans_stat && <p>Correct!</p>}
                    {this.state.uncorrect_notion && <p>Uncorrect!</p>}
                </div>
            </div>
        );
    }
}
