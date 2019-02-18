function getMessage(req, res) {
    res.send(req.params)
}

function getMessages(req, res) {
    res.send('hey')

}

function createMessage(req, res) {

}

function deleteMessage(req, res) {

}

function updateMessage(req, res) {

}

module.exports = {
    getMessage,

    getMessages,

    createMessage,

    deleteMessage,

    updateMessage
};
