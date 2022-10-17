import React from 'react'
import { useState } from "react"


//PDF
import pdf from './PDF'

//Input Mask
import InputMask from 'react-input-mask'

//ICONS
import {FaCloudUploadAlt} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs'
import HeaderForm from './Headerform'

export const Form = () => {
    const corretores = ['ABDIAS','ALAN BRITO','ALICE DO CARMO','ALLAN VITORIO','ANTONIO ARGOLO','ARGEL','BRAYAN','CANANDA ','CARLOS CESAR','CAROLINE ','CLAUDIO ','GALEGA','CREMILDA','CRISTIANE','DANILO','DANY','EDNALDO ','EDVAN','ERICA',' A&A','EVELYN','FERNANDA','FERNANDA DE JESUS','FILIPE MAIA','FINEIA','GABRIELA','GEILSON ','GEOVANIO','GLEIDE','GUTEMBERG ','HUGO','JAMILY','JAQUELINE','JOÃO','JOAO ARAUJO','JOILTON ','JONTHAS','JOSÉ','JOSEVAL ','LEOLINDO ','LIDIANE ','LUANA','LUCIANO','LUIS ','MAILSON','MARIA','MATHEUS','MAURICIO ','MONALIZA','MUDANÇA DE TITULAR','NAWCKTON ','NERIVAN','PATRICIA','PAULO NEY','PONTO DE APOIO','RAMON CAIO ','REGINEY ','REINAN ','REMERSON ','RICARDO ','ROSINEIDE','RUBEM','SAMUEL ','SANDOVAL','SANTANA','SILVANIA ','SILVIO','UILSON','valdir','VICTOR','WELLIGTON']

    const estadoCivil = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espirito Santo","Goiás","Maranhão","Mato Grosso do Sul","Mato Grosso","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins",]

    const solteiro=['Casado(a)','Solteiro(a)','Separado(a)','Viúvo(a)']

    const empreendimento=['BELA VISTA','BEM VIVER','BOA ESPERANÇA','BOSQUE REAL','BOSQUE REAL 2','CAMPO VERDE','CARRO QUEBRADO','CARRO QUEBRADO 2','COLINAS','CORONÉ ANTÔNIO DIONÍSIO','ECO RESIDENCE','ECO RESIDENCE 2 CANDEAL','ELDORADO','FAZENDA CONCEIÇÃO','FAZENDA JUREMA','FAZENDA RUMO','FAZENDA SANTA RITA','JARDIM IMPERIAL','LAGOA SALGADA','LOTEAMENTO CRISPINIANO','LOTEAMENTO JOÃO ARAUJO','MATINHA','ONILDO SILVA','ONILDO SILVA 2','PE DE SERRA','RECANTO DO ALVORECER','SACO DO CAPITÃO','SAUÍPE COSTAMAR','VILA REAL','VILA SABIA']

    const pagamento=['à vista','Parcelado','Entrada maior, com parcelamento']
    const parcela = ['12x','24x','36x','48x','60x','80x','100x','120x','140x','200x']
 
    const [ficha,setFicha]=useState({
        corretor:'',
        //DADOS DO CLIENTE
        Email:'',
        Nome:'',
        Rg:'',
        Cpf:'',
        Emisor:'',
        Estado:'',
        Profisao:'',
        Civil:'',
        Tel1:'',
        Tel2:'',
        //ENDEREÇO DO CLIENTE
        Endereco:'',
        Bairro:'',
        Cidade:'',
        Cep:'',
        //  REFERENCIAS PESSOAS
        ReferNome:'',
        Parentesco:"",
        ReferTel1:'',
        ReferTel2:"",
        ReferNome2:"",
        Parentesco2:"",
        Refer2Tel1:'',
        Refer2Tel2:"",
        //////////
        metragem:"",
        quadra:"",
        Lote:"",
        //////
        frente:'',
        fundo:'',
        
        ladoE:'',
        ladoD:'',
        empreendimento:'',
        pagamento:'',
        parcela:'',
        valorp:'',
        valorTP:'',
        valorEntr:"",
        valorTC:'',
        vdata:'',
        img:'',
        img2:'',
        img3:'',
        img4:'',
    })
    const [images,setImagens]=useState("")
    // const [images_2,setImagens_2]=useState("")
    // const [images_3,setImagens_3]=useState("")
    // const [images_4,setImagens_4]=useState("")
    const styleinput = 'flex sm:flex-row flex-col mx-auto text-center w-full sm:text-left'

    function ConverterIMG(images){

        if(images.length==''){

        }else{
            var arquivoLer = new FileReader()
            arquivoLer.onload=(image1)=>{
               setFicha({...ficha,img:image1.target.result})
            }
            arquivoLer.readAsDataURL(images)
            
        }
        
        
       

        // arquivoLer.onload=(images_2)=>{
        //     console.log(images_2.target.result)
        // //    setFicha({...ficha,img:arquivo.target.result})
        // }
        // arquivoLer.readAsDataURL(images_2)

        // arquivoLer.onload=(images_3)=>{
        //     console.log(images_3.target.result)
        // //    setFicha({...ficha,img:arquivo.target.result})
        // }
        // arquivoLer.readAsDataURL(images_3)
        
        // arquivoLer.onload=(images_4)=>{
        //     console.log(images_4.target.result)
        // //    setFicha({...ficha,img:arquivo.target.result})
        // }
        // arquivoLer.readAsDataURL(images_4)

    }
    const handleOnChanhgeLogin=(event,key)=>{
        setFicha({...ficha, [key]:event.target.value})
    }

  return (
    <>
    <HeaderForm/>
    <form className='w-full sm:w-auto mx-auto font-bold mt-2  '>

        {/*==== CORRETOR ====*/}
         <div className="sm:flex  sm:items-center md:ml-[15rem]   ">
                <p className="sm:mr-10  font-bold sm:text-center text-sm md:text-xl" >(ANEXO 1)</p>
            
                {/*==== CORRETOR ====*/}
                <div className="flex  flex-col mx-auto text-[14px]  sm:flex-row md:ml-10 ">
                    <h1 className="text-white text-sm md:text-[14px] text-center bg-black sm:text-lg sm:py-1 md:py-0 px-7">Corretor(a):</h1>
                    <select value={ficha.corretor} onChange={(event)=>handleOnChanhgeLogin(event, "corretor")} className=" text-center uppercase text-[18px] border border-black appearance-none w-full bg-white outline-none font-medium px-10 sm:text-lg ">
                        <option value=""></option>
                        {
                            corretores.map((corretor,index)=>( 
                                <option value={corretor} key={index}>{corretor}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/*==== DADOS DO CLIENTE ====*/}
             <div className="w-full text-white bg-black text-center uppercase text-lg border md:text-lg md:py-0  border-black sm:text-lg sm:py-1  ">dados do(a) cliente</div>

            {/*==== EMAIL ====*/}
            <div className={styleinput}>
                    <label className="sm:w-[190px] border p-1 border-black "><p className="md:w-[190px] md:text-xl sm:text-lg text-lg">E-mail:</p></label>
                    <input value={ficha.Email} onChange={(event)=>handleOnChanhgeLogin(event, "Email")} className="font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center sm:text-lg md:text-[20px] md:text-left" id="email" type="email"/>
                </div>

            {/*==== NOME COMPLETO ====*/}
                <div className={styleinput}>
                    <label className='sm:w-[190px] p-1  border border-black '><p className=' md:w-[190px] md:text-xl text-lg sm:text-lg'> Nome Completo:</p></label>
                        <input value={ficha.Nome} onChange={(event) =>handleOnChanhgeLogin(event,"Nome")} type="text" className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center sm:text-lg md:text-[20px] md:text-left'  cols="1"  rows="2"  />
                </div>

            {/*==== RG + CPF ====*/}
                <div className='flex flex-col mx-auto text-center w-full sm:text-left md:flex-row'>
                    <div className=" flex md:w-auto flex-col sm:flex-row  ">
                        <label className=" p-1 sm:w-[190px] border border-black"><p className="md:w-[190px] md:text-xl sm:text-lg  text-lg">RG:</p></label>
                        <input value={ficha.Rg} onChange={(event) =>handleOnChanhgeLogin(event,"Rg")} className="font-medium outline-none  w-full md:w-[16rem] text-sm border border-black appearance-none text-center p-2 sm:text-base" type="text" placeholder="Ex.: 00.000.000-00"  />
                    </div>

                    <div className=" flex sm:flex-row flex-col">
                        <label className=" sm:w-[190px]  p-1 border border-black"><p className=" md:w-[130px] sm:text-lg text-lg">CPF:</p></label>
                        <input value={ficha.Cpf} onChange={(event) =>handleOnChanhgeLogin(event,'Cpf')} className="font-medium outline-none w-full border border-black text-sm text-center md:w-[17rem] p-2 appearance-none sm:text-base"  placeholder="Ex.: 000.000.000-00 " type="text"/>
                    </div>
                </div>
            
            {/*==== ÓRGÃO EMISSOR + NATURALIDADE ====*/}
                <div className='flex flex-col  md:flex-row mx-auto text-center w-full sm:text-left'>     
                    <div className=" flex sm:flex-row flex-col">
                        <label className="sm:w-[190px] sm:p-1 border border-black"><p className="md:w-[190px] md:text-xl  text-lg">Órgão Emissor:</p></label>
                        <input value={ficha.Emisor} onChange={(event)=>handleOnChanhgeLogin(event,"Emisor")} className="font-medium outline-none  w-full text-sm p-2 text-center  md:w-[16rem] border border-black appearance-none uppercase sm:text-base" type="text"/>
                    </div>
                    
                    <div className=" flex sm:flex-row flex-col ">
                        <label className="sm:w-[190px] md:w-[190px] border border-black sm:p-1 "><p className="text-lg md:text-xl md:pl-[2px] md:w-full">Naturalidade:</p></label>
                        <select value={ficha.Estado} onChange={(event)=>handleOnChanhgeLogin(event,"Estado")} className=" text-center w-full md:text-[20.5px] p-2  md:w-[17rem] mx-auto text-sm border border-black appearance-none bg-white outline-none font-medium  sm:text-base
                        
                        ">
                            <option value=""></option>
                            {
                                estadoCivil.map((item,index)=>(
                                    <option value={item} key={index} className=" text-center ">{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

            {/*==== PROFISSÃO + ESTADO CIVIL ====*/}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border border-black sm:w-[190px] p-1"><p className=" md:w-[190px] text-lg">Profissão:</p></label>
                        <input value={ficha.Profisao} onChange={(event)=>handleOnChanhgeLogin(event,"Profisao")} className="font-medium outline-none  md:w-[16rem] w-full text-sm text-center p-2 border border-black appearance-none uppercase md:text-[16px]" type="text"/>
                    </div>

                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border border-black sm:w-[190px] sm:p-1"><p className="md:w-[130px] text-lg">Estado Civil:</p></label>
                        <select value={ficha.Civil} onChange={(event)=>handleOnChanhgeLogin(event,"Civil")} className=" w-full text-sm  md:w-[17rem] border border-black appearance-none md:text-[19px] md:px-[44.5px] bg-white outline-none font-medium uppercase text-center p-2">
                            <option value=""></option>
                            {
                                solteiro.map((item,index)=>(
                                    <option value={item} key={index} class="text-center">{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

            {/*==== TELEFONE 1 + TELEFONE 2 ====*/}
                <div className='flex md:flex-row  flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex flex-col sm:flex-row">
                        <label className=" border border-black sm:w-[190px] sm:p-1"><p className="md:w-[190px] text-lg">Telefone 1:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.Tel1} onChange={(event)=>handleOnChanhgeLogin(event,"Tel1")} className="font-medium outline-none  w-full text-sm text-center md:pl-[32px] p-2  border  md:w-[16rem] border-black appearance-none"  placeholder="Ex.: (00) 00000-0000"  type="text" />
                    </div>

                    <div className=" flex flex-col sm:flex-row">
                        <label className=" border border-black sm:w-[190px] sm:p-1"><p className=" md:w-[130px]  text-lg">Telefone 2:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.Tel2} onChange={(event)=>handleOnChanhgeLogin(event,"Tel2")} className="font-medium outline-none w-full text-sm text-center  md:w-[17rem] p-2 border border-black appearance-none md:pl-[32px] " placeholder="Ex.: (00) 00000-0000" type="text"/>
                    </div>
                </div>

            {/*==== ENDEREÇO DO CLIENTE ====*/}
                <div className="w-full text-white bg-black text-center  text-lg border  border-black ">endereço do(a) cliente</div>

            
            {/*==== ENDEREÇO + BAIRRO ====*/}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border sm:w-[190px] sm:p-1 border-black"><p className="text-lg  md:w-[190px]">Endereço:</p></label>
                        <textarea value={ficha.Endereco} onChange={(event)=>handleOnChanhgeLogin(event,"Endereco")} className=" font-medium outline-none w-full  md:w-[16rem] text-sm text-center border border-black appearance-none" cols="1"  rows="2"></textarea>
                    </div>

                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border sm:w-[190px] sm:p-1 border-black"><p className="text-lg md:w-[130px]">Bairro:</p></label>
                        <input value={ficha.Bairro} onChange={(event)=>handleOnChanhgeLogin(event,"Bairro")} className="font-medium outline-none w-full text-sm text-center p-2 md:pl-[2.1rem] border  md:w-[17rem] border-black appearance-none uppercase" type="text"/>
                    </div>
                </div>

            {/*==== CIDADE + CEP ====*/}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" sm:w-[190px] sm:p-1  border border-black"><p className="text-lg md:w-[190px]">Cidade:</p></label>
                        <input value={ficha.Cidade} onChange={(event)=>handleOnChanhgeLogin(event,"Cidade")} className="font-medium outline-none  w-full text-sm text-center p-2 md:pl-[1.9rem] border  md:w-[16rem] border-black appearance-none uppercase" type="text"/>
                    </div>

                    <div className=" flex  sm:flex-row  flex-col">
                        <label className=" sm:w-[190px] sm:p-1  border border-black"><p className="text-lg md:w-[130px]">Cep:</p></label>
                        <InputMask mask='99999-999' value={ficha.Cep} onChange={(event)=>handleOnChanhgeLogin(event,"Cep")} className="font-medium pl text-center outline-none w-full  md:w-[17rem] text-sm p-2 border border-black appearance-none md:pl-[2rem]" placeholder="Ex.: 00000-000" type="text"/>
                    </div>
                </div>

            
            {/*==== REFERENCIAS PESSOAIS ====*/}
                <div className="w-full text-white bg-black text-center  text-lg border  border-black ">referências pessoais</div>

            {/*==== NOME COMPLETO + PARENTESCO ====*/}
                <div className='flex md:flex-row  flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border border-black sm:w-[190px] p-1"><p className="text-lg md:w-[190px] ">Nome Completo:</p></label>
                        <input value={ficha.ReferNome} onChange={(event)=>handleOnChanhgeLogin(event,"ReferNome")} className="font-medium outline-none  md:w-[16rem] w-full text-sm text-center md:pl-[2rem] p-2 border border-black appearance-none uppercase" type="text"/>
                    </div>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border sm:w-[190px] p-1 border-black"><p className="md:w-[15rem] text-lg">parentesco:</p></label>
                        <input value={ficha.Parentesco} onChange={(event)=>handleOnChanhgeLogin(event,"Parentesco")} className="font-medium outline-none w-full text-sm text-center md:pl-[2rem] p-2 border  md:w-[17rem] border-black appearance-none uppercase" type="text"/>
                    </div>
                </div>

            {/*==== TELEFONE 1 + TELEFONE 2 ====*/}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className=" border border-black sm:w-[190px] sm:p-1"><p className=" md:w-[190px] text-lg">Telefone 1:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.ReferTel1} onChange={(event)=> handleOnChanhgeLogin(event,"ReferTel1")} className="font-medium outline-none  md:w-[16rem] w-full text-sm text-center p-2 border border-black md:pl-[2rem]  appearance-none"  placeholder="Ex.: (00) 00000-0000" type="text"/>
                    </div>
                    <div className=" flex sm:flex-row  flex-col">
                        <label className=" border border-black sm:w-[190px] sm:p-1"><p className="text-lg md:w-[15rem]">Telefone 2:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.ReferTel2} onChange={(event)=>handleOnChanhgeLogin(event,"ReferTel2")} className=" font-medium outline-none w-full text-sm text-center p-2 border  md:w-[17rem] border-black appearance-none md:pl-[2rem] "   placeholder="Ex.: (00) 00000-0000" type="text"/>
                    </div>
                </div>

            {/*==== NOME COMPLETO + PARENTESCO ====*/}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                    <div className=" flex sm:flex-row flex-col">
                        <label className="sm:w-[190px] sm:p-1 border border-black"><p className="md:w-[190px] text-lg">Nome Completo:</p></label>
                        <input value={ficha.ReferNome2} onChange={(event)=>handleOnChanhgeLogin(event,"ReferNome2")} className=" font-medium outline-none  w-full  md:w-[16rem] text-sm text-center p-2 border border-black appearance-none uppercase md:pl-[2rem]" type="text"/>
                    </div>

                    <div className=" sm:flex-row flex flex-col">
                        <label className="sm:w-[190px] sm:p-1 border border-black"><p className="md:w-[130px] text-lg">parentesco:</p></label>
                        <input value={ficha.Parentesco2} onChange={(event)=> handleOnChanhgeLogin(event,'Parentesco2')} className="font-medium outline-none w-full text-sm text-center  md:w-[17rem] p-2 border border-black appearance-none  uppercase md:pl-[2rem]" type="text"/>
                    </div>
                </div>

            {/*==== TELEFONE 1 + TELEFONE 2 ====*/}
                <div className='flex md:flex-row  flex-col mx-auto text-center w-full sm:text-left'>
                    <div className="sm:flex-row flex flex-col ">
                        <label className="sm:w-[190px] sm:p-1  border border-black"><p className="md:w-[190px]  text-lg">Telefone 1:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.Refer2Tel1} onChange={(event)=>handleOnChanhgeLogin(event,'Refer2Tel1')} className="font-medium outline-none  md:w-[16rem] w-full text-sm text-center p-2 border border-black  appearance-none md:pl-[2rem] "  placeholder="Ex.: (00) 00000-0000" type="text"/>
                    </div>
                    <div className="sm:flex-row flex flex-col">
                        <label className="sm:w-[190px] sm:p-1  border border-black"><p className="md:w-[130px]  text-lg">Telefone 2:</p></label>
                        <InputMask mask='(99) 99999-9999' value={ficha.Refer2Tel2} onChange={(event)=>handleOnChanhgeLogin(event,'Refer2Tel2')}  className=" font-medium outline-none w-full text-sm text-center p-2 border  md:w-[17rem] border-black appearance-none md:pl-[2rem] "  placeholder="Ex.: (00) 00000-0000" type="text"/>
                    </div>
                </div>

                <div class="w-full p-3 bg-black border border-black "></div>

                {/* METRAGEM TOTAL + QUADRA + LOTE */}
                <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-left'>
                <div className=" flex sm:flex-row flex-col ">
                    <label className="border border-black"><p className="text-lg md:w-[190px]">Metragem Total:</p></label>

                    <div className=' flex justify-center border  sm:border-r-0 border-black'>
                        <input value={ficha.metragem} onChange={(event)=>handleOnChanhgeLogin(event,'metragem')}  className=" font-medium outline-none w-[65px] sm:w-[70px] text-sm appearance-none p-2 md:w-[50px]  text-center" type="number"/>
                        <p className=" pt-1 text-lg">M<sup>2</sup></p>
                    </div>
                    
                </div>

                 <div className='flex sm:flex-row flex-col mx-auto text-center w-full sm:text-left md:w-auto'>
                    <label className=" sm:w-[188px] md:w-[6.5rem]  border border-black"><p className=" text-lg md:text-xl">Quadra:</p></label>
                    <input value={ficha.quadra} onChange={(event)=>handleOnChanhgeLogin(event,'quadra')}   className=" font-medium outline-none w-full md:w-auto text-[20px] border border-black appearance-none text-center uppercase " maxlength={3} size={3} type="text"/>
                </div>
                <div className={styleinput}>
                    <label className=" border sm:w-[190px]  border-black"><p className="text-lg  md:w-[200px]">Lote:</p></label>
                    <input value={ficha.Lote} onChange={(event)=>handleOnChanhgeLogin(event,'Lote')}  className=" font-medium outline-none w-full text-sm p-2  border border-black appearance-none text-center"  type="text"/>
                </div>
            </div>

            {/* OBSERVAÇÃO + EMPREENDIMENTO*/}
            <div className='flex flex-col md:flex-row mx-auto text-center w-full  sm:text-left'>
                <div className=" flex md:flex-row flex-col">
                    <label className=" sm:p-1 sm:text-center md:text-left  border border-black"><p className=" md:w-[182px] text-lg md:text-xl">Observação:</p></label>

                    <div className=" grid grid-cols-4  pl-[2rem] sm:pl-[4rem] sm:pt-2 md:pl-[1.2rem]
                    pb-2 text-left border border-black font-medium text-xl ">
                        <label  >FR</label>
                        <input value={ficha.frente}  onChange={(event)=>handleOnChanhgeLogin(event,'frente')}  className="border-b-2 ml-[-10px]  text-center border-black w-10 outline-none" type="number"/>
                        <label >FD</label>
                        <input value={ficha.fundo}  onChange={(event)=>handleOnChanhgeLogin(event,'fundo')}  className="border-b-2 ml-[-10px]  text-center border-black w-10 outline-none" type="number"/>
                        <label className=" mr-5" >LD.E</label>
                        <input value={ficha.ladoE} onChange={(event)=>handleOnChanhgeLogin(event,'ladoE')}  className="border-b-2 ml-[-10px]  text-center border-black w-10 outline-none" type="number"/>
                        <label >LD.D</label>
                        <input value={ficha.ladoD} onChange={(event)=>handleOnChanhgeLogin(event,'ladoD')}   className="border-b-2 ml-[-10px]  text-center border-black w-10 outline-none" type="number"/>
                    </div>
                
                </div>

                <div className=" flex flex-col sm:flex-row  ">
                    <label className=" border border-black "><p className="text-lg md:break-words md:w-[11.75rem] md:leading-5 ">Empreendimento:</p></label>

                    <select value={ficha.empreendimento} onChange={(event)=>handleOnChanhgeLogin(event, "empreendimento")} className="outline-none w-full text-d text-sm p-2 text-center border md:w-[17rem] md:text-lg border-black appearance-none font-medium uppercase">
                        <option value=""></option>
                        {
                            empreendimento.map((empreendimento,index)=>( 
                                <option value={empreendimento} key={index}>{empreendimento}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            
            <div class="w-full p-3 bg-black border  border-black "></div>
            
            {/* FORMA DE PAGAMENTO*/}
            <div className='flex md:flex-row flex-col mx-auto text-center w-full sm:text-center'>
                <label className=" border border-black"><p className="text-lg  md:w-[190px]">Forma de Pagamento:</p></label>

                <div className=" md:w-full flex flex-col sm:flex-row border border-black"  value={ficha.pagamento} onChange={(event)=>handleOnChanhgeLogin(event, "pagamento")}>
                    {
                        pagamento.map((parcela)=>(
                            <div className='flex my-2 mx-auto text-center items-center justify-center w-full '>
                            <input type='radio' className=" w-4  h-4" name="pagamento" value={parcela} />
                            <label  className=" text-sm" >{parcela}</label>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* PARCELAMENTO */}
            <div className="  md:flex-row flex flex-col mx-auto text-center">
                <label className=" border border-black "><p className="  text-lg md:p-1 md:w-[190px] md:text-left ">Parcelamento:</p></label>

                <select value={ficha.parcela} onChange={(event)=>handleOnChanhgeLogin(event, "parcela")} className="outline-none md:text-lg py-2 w-full text-sm text-center font-medium appearance-none border border-black">
                    <option value=""></option>
                    {
                        parcela.map((parcela,index)=>(
                            <option className='text-center' value={parcela} key={index}>{parcela}</option>
                        ))
                    }

                </select>
                
            </div>

            {/* VALOR DAS PARCELAS*/}
            <div class='flex flex-col md:flex-row mx-auto border border-black'>
                <label class=" border border-black "><p class="text-lg  text-center md:w-[190px] md:text-left md:p-1">Valor das Parcelas:</p></label>

                <div className=' border w-full border-black items-center justify-center flex pl-[100px]  sm:pl-[0px]'> 
                    <div className='flex md:w-[600px] sm:p-1 md:p-0 '>
                    <p class="  text-center text-sm sm:text-xl font-medium">R$</p>
                    <input  value={ficha.valorp} onChange={(event)=>handleOnChanhgeLogin(event, "valorp")}  placeholder='0,00'  class="outline-none md:w-full  text-sm w-[8rem] md:text-lg md:py-0 font-medium appearance-none sm:py-2"  />
                    </div>
                </div>
            </div>

            {/* VALOR TOTAL DAS PARCELAS + VALOR DA ENTRADA*/}
            <div className="md:flex-row flex flex-col mx-auto border border-black ">
                <label className=" border border-black "><p className=" text-lg text-center md:w-[190px] ">Valor total parcelado:</p></label>

                <div className='border border-black items-center justify-center py-2 pl-[100px] flex sm:pl-[0px]'>
                    <div className='flex '>
                    <p className=" text-sm font-medium sm:text-xl ">R$</p>
    
                 <input  value={ficha.valorTP} onChange={(event)=>handleOnChanhgeLogin(event, "valorTP")} className=" outline-none  text-sm md:w-[11.4rem] w-[8rem] md font-medium appearance-none md:text-lg md:py-0   sm:py-2" type="text" placeholder='0,00' /> 
                    </div>
                </div>
                

                 <label className=" border border-black "><p className="md:w-[190px] text-lg text-center">Valor Da Entrada:</p></label>
                

                <div className='border border-black items-center justify-center py-2 pl-[100px] flex sm:pl-[0px]'>
                    <div className='flex items-center justify-center text-center'>
                    <p className="text-center text-sm sm:text-xl font-medium">R$</p>
                <input value={ficha.valorEntr} onChange={(event)=>handleOnChanhgeLogin(event, "valorEntr")}  className="
                outline-none sm:py-2 text-sm w-[8rem] font-medium appearance-none md:text-lg md:py-0  md:w-[11.5rem] " type="text"  placeholder='0,00' /> 
                    </div>
                </div>

                
            </div>


            <div className="md:flex-row flex flex-col mx-auto border border-black ">
                <label className=" border border-black "><p className="text-center md:w-[190px] text-lg ">Valor total do contrato:</p></label>
                <div className='border border-black items-center justify-center py-2 pl-[100px] flex sm:pl-[0px]'>
                    <div className='flex'>
                    <p className=" text-sm sm:text-xl font-medium ">R$</p>
                 <input  value={ficha.valorTC} onChange={(event)=>handleOnChanhgeLogin(event, "valorTC")} className="pl-1 outline-none w-[8rem] md:w-[11.4rem] md:text-lg md:py-0  text-sm font-medium sm:py-2 appearance-none " placeholder='0,00' type="text" /> 
                        
                    </div>
                </div>
                    <label className=" border border-black"><p className=" text-center md:w-[190px] text-lg">Dia de Vencimento Dos Boletos:</p></label>
            
                <input value={ficha.vdata} onChange={(event)=>handleOnChanhgeLogin(event, "vdata")} type='date' id='data' name='data' className="outline-none text-sm font-medium appearance-non text-center sm:text-lg py-2 w-full"/>
            </div> 
    </form>

    
    <div class="text-center mx-auto w-full py-4 bg-slate-200 rounded">
            <h1 class=" font-bold text-lg md:text-xl">Declaro está ciente e concordar com as informações descritas nesta proposta.</h1>
            <p class=" font-semibold text-sm md:text-lg">Obs.: Necessária cópia dos documentos anexado ao formulário (RG, CPF E comprovante de residência).</p>
        </div>

     {/*==== ENVIANDO IMG PARA O PDF ====*/}     
    <div class=" grid grid-cols-1 gap-4  justify-center items-center  mx-auto mt-4">
        <label for="dropzone-file" class="mx-auto max-w-sm rounded-lg  sm:w-[400px] sm:h-[300px] cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600">
            <div class="flex flex-col sm:mt-4 justify-center items-center pt-5 pb-6">
                <FaCloudUploadAlt className='mb-3 w-10 h-10 sm:w-20 sm:h-20 text-gray-400'/>
                <p class=" sm:text-2xl text-center mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Arraste e Solte</span> <br/> para fazer upload do arquivo</p>
                <p class="text-xs sm:text-2xl  text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
            </div> 
            <input type='file' multiple='multiple' accept='image/*'  class="hidden" id="dropzone-file" onChange={(event)=>setImagens(event.target.files[0])} />
        </label>      
    </div> 

    <div className='bg-slate-500 sm:w-[260px] sm:h-[80px] sm:text-2xl sm:w-[140px] md:w-[180px] h-[50px] mx-auto text-white text-lg rounded-md cursor-pointer flex items-center justify-center my-4' onClick={() =>pdf(ficha,ConverterIMG(images))} >
    <button type="button" className='mr-2'>Gerar pdf </button>
    <BsDownload/>
    </div>
    
    {/* <button type="button" onClick={() =>pdf(ficha,ConverterIMG())}>Gerar pdf</button> */}
    </>
  )
}



