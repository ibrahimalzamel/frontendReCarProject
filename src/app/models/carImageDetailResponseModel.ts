import { CarImageDetail } from "./carImageDetail";
import { ResponseModel } from "./responseModel";

export interface CarImageDetailResponseModel extends ResponseModel{

    data : CarImageDetail[];
}