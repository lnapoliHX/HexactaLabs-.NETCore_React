import faker from 'faker'

const provider_factory = () => {
    var name = faker.name.findName();
    var email = faker.internet.email();
    var phone = "1234";
    var id = faker.random.uuid()
    return ({
        id, name, phone, email
    })
}

export default provider_factory