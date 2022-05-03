fetch('https://dummyjson.com/users').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data);

    const container = document.querySelector('.container');
    const table = document.querySelector('.users-table');
    let titles = `
    <tr class="title">
        <th class="title-items">First Name</th>
        <th class="title-items">Last Name</th>
        <th class="title-items">Phone</th>
        <th class="title-items">e-mail</th>
        <th class="title-items">Age</th>
        <th class="title-items">Username</th>
        <th class="title-items">Password</th>
    </tr>`;
    table.insertAdjacentHTML('beforeend', titles);

    data.users.map((item) => {
        console.log(item);

        const userInfo = `
        <tr class="user-info">
            <td class="info-item">${item.firstName}</td>
            <td class="info-item">${item.lastName}</td>
            <td class="info-item">${item.phone}</td>
            <td class="info-item">${item.email}</td>
            <td class="info-item">${item.age}</td>
            <td class="info-item">${item.username}</td>
            <td class="info-item">${item.password}</td>
        </tr>`;

        table.insertAdjacentHTML('beforeend', userInfo);
    })
});

