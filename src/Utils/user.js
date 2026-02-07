
async function updateUser(user, data) {
    let result = null;
    try {
        result = await fetch("http://localhost:3000/user", {
            method: "PUT",
            credentials : "include",
            headers: {
            "content-type" : "application/json",
            authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify({
                _id: user.id,
                update: {
                    name: data.name,
                    surname: data.surname,
                    address: data.address,
                }
            })
        });
    } catch (err) {
        throw err
    }

    if (result.status !== 200) {
        throw new Error(result.statusText);
    }
    
    return result;
}

export {
    updateUser,
}