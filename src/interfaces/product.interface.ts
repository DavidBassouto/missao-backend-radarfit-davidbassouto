interface IProductRequest {
  produto: string,
  valor: number,
  descricao: string,
  created?: Date,
  updated?: Date,
}

interface IProductResponse extends IProductRequest{
    id:string
}

export {IProductRequest, IProductResponse}