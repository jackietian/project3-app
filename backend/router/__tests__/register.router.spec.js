const request = require('supertest')
const app = require('../../app')
const { UserModel } = require('../../models')

describe('POST /register', () => {
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

        UserModel.create = async (data) => data
    })

    afterAll((done) => {
        done()
    })

    it('when user provides new email and password', async () => {
        await request(app)
            .post('/api/register')
            .send({
                email: 'new@gmail.com',
                password: '123',
            })
            .expect(201)
    })

    it('when user provides existing email', async () => {
        await request(app)
            .post('/api/register')
            .send({
                email: 'foo@gmail.com',
                password: '',
            })
            .expect(400)
    })
})
