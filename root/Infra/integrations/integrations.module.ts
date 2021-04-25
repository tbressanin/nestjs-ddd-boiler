import { Module } from "@nestjs/common";
import { FlightIntegrationService } from "./flight.integration.service";

@Module({
    providers: [FlightIntegrationService],
    exports: [FlightIntegrationService]
})
export class IntegrationsModule {}