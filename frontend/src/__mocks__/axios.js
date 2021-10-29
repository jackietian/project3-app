export default {
    get: jest.fn().mockResolvedValue(),
    post: jest.fn().mockResolvedValue({
        data: {
            result: { email: 'mockuser@email.com' },
            token: '123',
        },
    }),
    create: jest.fn().mockResolvedValue({
        interceptors: {
            request: {
                use: jest.fn(),
            },
        },
    }),
}
