import { Injectable } from "@nestjs/common";

@Injectable()
export class FlightIntegrationService {
    // TO-DO Implementar Axios  
    public testMethod = () => {
        return { xtpo: 'result' }
    }
}