export type Combustivel = {
    bandeira: string;
    codInstalacao: number;
    dataColeta: string;
    id: number;
    municipio: string;
    produto: string;
    revendedora: string;
    siglaEstado: string;
    siglaRegiao: string;
    unidadeMedida: string;
    valorCompra: number;
    valorVenda: number;
    
}

export type Historico = {
    combustivel: string;
    data: string;
    id: number;
    preco: number;
}
export type Media = {
    atributo: string;
    mediaValorCompra: number;
    mediaValorVenda: number;
    }
export type Usuario = {
    admin:	boolean;
    email:	string;
    id:	number;
    login:	string;
    nome:	string;
    senha:	string;
}

export type UsuarioDTO = {
    email:	string;
    login:	string;
    nome:	string;
    senha:	string;
    }
    