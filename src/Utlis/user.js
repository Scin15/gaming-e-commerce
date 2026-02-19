
async function updateUser(user, data) {
    const result = await fetch(`${import.meta.env.VITE_END_POINT}/user`, {
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

    if (result.status !== 200) {
        const response = await result.json();
        const err = new Error(response.error);
        err.status = result.status;
        throw err;
    }
    
    return result;
}

export {
    updateUser,
}
