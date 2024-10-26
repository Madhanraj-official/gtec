import { Affilication } from './Affilication';
import { PartnerDetails } from '/public/Partner';
function PartnerRunner() {
    const images = PartnerDetails.map((image) => ({
        id: crypto.randomUUID(),
        image,
      }));
  return (
    <Affilication images={images} speed={15000} />
  )
}

export default PartnerRunner