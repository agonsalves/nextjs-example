import vCardsJS from 'vcards-js'

export default async (request, response) => {
    const httpMethod = request.method
    const {
        title,
        position,
        officeLocation,
        email,
        firmName,
        slug,
        siteUrl
    } = request.body

    switch (httpMethod) {
        case 'POST':
            var vCard = vCardsJS();

            vCard.firstName = title;
            vCard.title = position[0].term;
            vCard.email = email;
            vCard.organization = firmName;
            vCard.workUrl = `https://${siteUrl}/${slug}`
            vCard.workPhone = officeLocation[0].office_phone;
            vCard.workAddress.city = officeLocation[0].post_title ;
            vCard.workAddress.street = officeLocation[0].street_address + `, ${officeLocation[0].extended_address}` + `, ${officeLocation[0].address_locality}`;
            vCard.workAddress.postalCode = officeLocation[0].postal_code;


            response.setHeader('Content-Type', 'text/vcard; name="enesser.vcf"');
            response.setHeader('Content-Disposition', 'inline; filename="enesser.vcf"');

            response.status(200).send(vCard.getFormattedString());
            break;
        default:
            response.send(`The method ${httpMethod} is not supported`)
            break
    }
    
}