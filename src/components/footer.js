import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {

    return(
        
    <section id="footer" className="bg-white w-screen h-fit aos-init aos-animate" data-aos="fade-up">
        
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/6 px-4 text-center">
                    <a href="https://www.westoque.com.br" rel="noreferrer">
                    <StaticImage
                    src= "../images/favicon.png"
                    alt="Icone do Sistema wEstoque - PDV online, financeiro e fiscal"
                    placeholder="blurred"
                    layout="fixed"
                    quality={100}
                    width={70}
                    className="h-12 mx-auto"
                    />
                    </a>
                    <br/>
                    <h2 className="text-xl text-gray-800">Não tem acesso ao sistema?<br/>Saiba mais:</h2>
                </div>
                <div className="w-full md:w-1/6 px-4 pt-5 md:pt-0">
                    <h1 className="text-xl text-bolder text-gray-800 pt-4"><a href="https://www.westoque.com.br/recursos/" rel="noreferrer">Recursos</a></h1>
                    <ul className="list-inside text-yellow-500 text-bold">
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.westoque.com.br/controle-de-vendas-e-pdv/" rel="noreferrer">Controle de Vendas & PDV</a></li>
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.westoque.com.br/gerencie-multi-empresas/" rel="noreferrer">Multi Empresas / Lojas</a></li>
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.westoque.com.br/controle-de-estoques/" rel="noreferrer">Controle de Estoques</a></li>
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.westoque.com.br/sistema-financeiro/" rel="noreferrer">Sistema Financeiro</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/6 px-4 pt-5 md:pt-0">
                    <h1 className="text-xl text-bolder text-gray-800 pt-4">Vendas</h1>
                    <ul className="list-inside text-yellow-500 text-bold">
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.westoque.com.br/usar/" rel="noreferrer">Usar Sistema</a></li>
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="mailto:vendas@westoque.com.br" rel="noreferrer">vendas@westoque.com.br</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/6 px-4 pt-5 md:pt-0">
                    
                    <h1 className="text-xl text-bolder text-gray-800 pt-4">Siga-nos</h1>
                    <ul className="list-inside text-yellow-500 text-bold">
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://www.facebook.com/westoque.com.br" rel="noreferrer" target="_blank">Facebook</a></li>
                        <li className="mt-2 mr-2 hover:underline cursor-pointer"><a href="https://instagram.com/sistemawestoque" rel="noreferrer" target="_blank">Instagram</a></li>
                    </ul>

                </div>
                
            </div>
        </div>
    </section>
    )
}

export default Footer