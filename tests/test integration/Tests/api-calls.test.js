const api_calls = require('../API-Calls/api-calls')

// GET TESTS
test('GET ALL USERS', async () => {
    const data = await api_calls.getAllUsers();
    expect(data.status).toBe(200);
});

test('GET ALL POSTS', async () => {
    const data = await api_calls.getAllPosts();
    expect(data.status).toBe(200);
});  

test('GET ALL CATEGORIES', async () => {
    const data = await api_calls.getCategories();
    expect(data.status).toBe(200);
});  

// POST TESTS
test('Login', async () => {
    const data = await api_calls.postLogin({
        email: "admin@shh.pt",
        password: "Esmad_2122"
    });
    expect(data.data.success).toBe(true);
});

test('CREATE A USER', async () => {
    const data = await api_calls.createUser({
        username: "rogerio11",
        firstname: "rogerio",
        lastname: "figueiredo",
        number: "40375486",
        course: "TCAV",
        course_year: "1",
        birthdate: "2001-04-01",
        email: "rogerio11@shh.pt",
        photo: "phototeste",
        password: "rogerio1",
        confirmPassword: "rogerio1",
    });
    expect(data.data.success).toBe(true);
});

  