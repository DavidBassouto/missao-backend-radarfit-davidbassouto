interface IProductRequest {
  produto: string,
  valor: number,
  descricao: Text,
  created: Date,
  updated: Date,
}

interface IProductResponse extends IProductRequest{
    id:string
}

export {IProductRequest, IProductResponse}