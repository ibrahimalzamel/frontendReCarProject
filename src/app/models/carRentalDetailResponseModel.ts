import { CarRentalDetail } from "./carRentalDetail";
import { ResponseModel } from "./responseModel";

export interface CarRentalDetailResponseModel extends ResponseModel{
    data : CarRentalDetail[];
    
}