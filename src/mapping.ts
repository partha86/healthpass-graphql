import { BigInt } from "@graphprotocol/graph-ts"
import {
  HealthPass,
  Approval,
  ApprovalForAll,
  CertificateIssued,
  OwnershipTransferred,
  Transfer
} from "../generated/HealthPass/HealthPass"
import {Certificate } from "../generated/schema"


export function handleCertificateIssued(event: CertificateIssued): void {
    let entity =new  Certificate(event.params.id.toString(),event.params.vaccineDetails.region,
    event.params.vaccineDetails.country,
    event.params.vaccineDetails.category,
    event.params.vaccineDetails.vaccineVendor);
    entity.save();
}

