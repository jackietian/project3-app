const request = require('supertest')
const app = require('../../app')
const { UserModel } = require('../../models')

describe('POST /login', () => {
    beforeEach(() => {
        process.env = Object.assign(process.env, {
            JWT_SECRET: 'secret',
        })

        UserModel.findOne = async ({ email }) => {
            if (email === 'foo@gmail.com') {
                return {
                    _id: '616a90688884afdcbfeabfe8',
                    username: 'foo@gmail.com',
                    password:
                        '$2a$08$FNRgsStABcjPE2AWXGojIOviN7XKpFTxeSdREmwUDX2poDZMQDKAW',
                }
            }

            return null
        }
    })

    afterAll((done) => {
        done()
    })

    it('when user provides correct email and password', async () => {
        await request(app)
            .post('/api/login')
            .send({
                email: 'foo@gmail.com',
                password: '123',
            })
            .expect(200)
    })

    it('when user provides correct email but wrong password', async () => {
        await request(app)
            .post('/api/login')
            .send({
                email: 'foo@gmail.com',
                password: '',
            })
            .expect(400)
    })

    it('when user provides wrong email', async () => {
        await request(app)
            .post('/api/login')
            .send({
                email: 'wrongEmail@gmail.com',
                password: '',
            })
            .expect(404)
    })
})
