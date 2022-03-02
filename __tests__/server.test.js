'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const {db} = require('../src/models/index')
let id;
beforeAll( async () =>{
    await db.sync();
})
afterAll( async () =>{
    await db.drop();
})
describe('testing 404',()=>{
    it ('testing /person',async()=>{
        const response = await request.get('/wrongPath')
        expect(response.status).toEqual(404);
    })
    
    it ('testing bad method',async()=>{
         id =1;
        const response = await request.post('/')
        expect(response.status).toEqual(404);
    })
})

describe('testing food routes',()=>{
    it('testing get all food',async()=>{
        const response = await request.get('/food')
        expect(response.status).toEqual(200)
    })
    it ('post new food', async () => {
        const response = await request.post('/food').send({
            foodName: "test",
            ingredient
   : "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
        
    it ('testing food get by id method',async()=>{
       const response = await request.get(`/food/${id}`)
       expect(response.status).toEqual(200);
   })
  

   it ('update new food', async () => {
    const response = await request.put(`/food/${id}`).send({
        foodName: "test",
        ingredient : "test"
    })
    expect(response.status).toEqual(201);
});

it ('deleting food by id',async()=>{
    const response = await request.delete(`/food/${id}`)
    expect(response.status).toEqual(204);
})

})

describe('testing clothes routes',()=>{
    it('testing get all clothes',async()=>{
        const response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    })
    it ('post new clothes', async () => {
        const response = await request.post('/clothes').send({
            clothesType: "test",
            fabricType : "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
        
    it ('testing clothes get by id method',async()=>{
       const response = await request.get(`/clothes/${id}`)
       expect(response.status).toEqual(200);
   })
  

   it ('update new clothes', async () => {
    const response = await request.put(`/clothes/${id}`).send({
        clothesTy: "test",
        fabricType : "test"
    })
    expect(response.status).toEqual(201);
})
it ('deleting clothes by id',async()=>{
    const response = await request.delete(`/clothes/${id}`)
    expect(response.status).toEqual(204)

})
})