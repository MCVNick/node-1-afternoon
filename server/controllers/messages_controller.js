let idCount = 0;
let messages = []

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        console.log(req.body)
        messages.push({
            text,
            time,
            id: idCount++
        })
        console.log(messages)
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        const updateID = +req.params.id
        const updateMessageID = messages.findIndex((msg) => msg.id === updateID)
        let updateMSG = messages[updateMessageID]

        messages[updateMessageID] = {
            text: text,
            time: updateMSG.time,
            id: updateMSG.id
        }

        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteID = req.params.id
        const deleteMessageID = messages.findIndex((msg) => msg.id === deleteID)

        messages.splice(deleteMessageID, 1)

        res.status(200).send(messages)
    }
}