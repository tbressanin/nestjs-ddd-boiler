import { Injectable } from "@nestjs/common";

@Injectable()
export class ForecastIntegrationService {
    // TO-DO Implementar Axios  
    public testMethod = () => {
        return { xtpo: 'result' }
    }
}