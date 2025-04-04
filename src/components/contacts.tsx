import Link from 'next/link';
import { Clock, Watch } from "lucide-react";

export function Contact() {
    return (
        <div id="contato" className="text-xl md:text-2xl 2xl:text-3xl px-6 pb-7 bg-black text-white">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Coluna Esquerda - Contato */}
                <div className="flex flex-col gap-2 justify-center w-full lg:w-1/2">
                    {/* Título */}
                    <h2 className="font-bold mb-2 text-center lg:text-left">Entre em contato!</h2>
                    <div className="w-full h-[2px] bg-gray-600 mb-6"></div>

                    {/* Horário de Funcionamento */}
                    <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                        <Clock className="text-white" />
                        <span>Horários de Funcionamento:</span>
                    </div>

                    <span className="flex items-center gap-2 text-gray-300 text-center lg:text-left mb-6">
                    <Watch/> Segunda à Sexta - 07:30 às 18:00 <br/>
                    </span>

                    <span className="flex items-center gap-2 text-gray-300 text-center lg:text-left mb-6">
                    <Watch/> Sábado - 7:30 às 13:00 <br/>
                    </span>

                    {/* Contatos - Redes Sociais */}
                    <div className="flex flex-col md:flex-row gap-4">

                        {/* WhatsApp */}
                        <div className="flex items-center gap-3 text-xl bg-white p-4 rounded-xl shadow-md border w-full max-w-md mx-auto">
                            <img src="/Carro_de_Kiko_LE_upscale_digital_art_x4-removebg-preview.png" alt="Logo Clínica" className="w-20 2xl:w-25 h-20" />
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-black font-semibold">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-green-500">
                                        <title>WhatsApp</title>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <span>Whatsapp</span>
                                </div>
                                <span className="text-lg font-bold text-black">(81) 99627-5018</span>
                                <a
                                    href="https://wa.me/+558196275018"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full max-w-xs mx-auto"
                                >
                                    <button className="font-heading text-lg bg-green-500 w-full 2xl:w-3/4 h-10 rounded-lg">
                                        ENTRAR EM CONTATO
                                    </button>
                                </a>
                            </div>
                        </div>
                                    
                        {/* Instagram */}
                        <div className="flex items-center gap-3 text-xl bg-white p-4 rounded-xl shadow-md border w-full min-h-[150px] mx-auto">
                            <img src="/Carro_de_Kiko_LE_upscale_digital_art_x4-removebg-preview.png" alt="Logo Clínica" className="w-20 2xl:w-25 h-20" />
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-black font-semibold">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-purple-500">
                                        <title>Instagram</title>
                                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814"/>
                                    </svg>
                                    <span>Instagram</span>
                                </div>
                                <span className="text-lg font-bold text-black">@clinicadoautomovel</span>
                                <a
                                    href="https://www.instagram.com/automovelclinica/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full max-w-xs mx-auto"
                                >
                                    <button className="font-heading text-lg bg-pink-500 w-full 2xl:w-3/4 h-10 rounded-lg">
                                        SEGUIR
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Localização */}
                <div className="w-full flex flex-col items-center mt-[2.5%] lg:w-1/2">
                <h2 className="text-xl mb-4 font-heading text-center lg:text-center">Localização da Mecânica</h2>
                <span className="text-lg w-full text-center lg:text-start">R. Dona Maria de Souza, 220 - Piedade, Jaboatão dos Guararapes - PE, 54400-260</span>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.515162073889!2d-34.9150242!3d-8.1507369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1005a017735%3A0x3ce5620924968be6!2sCl%C3%ADnica%20do%20Autom%C3%B3vel%20%7C%20Pe%C3%A7as%20e%20Servi%C3%A7os%20em%20Piedade%20Jaboat%C3%A3o%20dos%20Guararapes%20PE!5e0!3m2!1spt-BR!2sbr!4v1742833935960!5m2!1spt-BR!2sbr" 
                    style={{ border: 0 }}  
                    allowFullScreen 
                    loading="lazy">
                    </iframe>
                </div>
            </div>
            </div>

            <div className="w-full mt-10 h-[2px] bg-gray-600 mb-6"></div>
        </div>
    );
}
