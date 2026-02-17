
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

    // if (result.status !== 200) {
    //     throw new Error(result.error);
    // }
    
    return result;
}

export {
    updateUser,
}
