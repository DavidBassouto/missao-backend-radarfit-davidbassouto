interface IProductRequest {
  produto: string;
  valor: number;
  descricao: string;
  created?: Date;
  updated?: Date;
}

interface IProductResponse extends IProductRequest {
  id: string;
}

interface IProductPatchRequest {
  produto?: string;
  valor?: number;
  descricao?: string;
  created?: Date;
  updated?: Date;
}
interface IProductPutRequest {
  produto: string;
  valor: number;
  descricao: string;
  created?: Date;
  updated?: Date;
}

export { IProductRequest, IProductResponse, IProductPatchRequest, IProductPutRequest };
