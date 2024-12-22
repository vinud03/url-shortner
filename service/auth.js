const sessionIdToUserMap = new Map();

function setUserSessionId(id, user) {
    sessionIdToUserMap.set(id,user);
}

function getUserSessionId(id) {
    return sessionIdToUserMap.get(id);
}

module.exports = { setUserSessionId, getUserSessionId };