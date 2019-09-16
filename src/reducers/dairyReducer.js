//  All reducers have 2 params: Current statement (usually provide a default) and the action object

const seedData = [
    {
        food: 'cheese',
        quantity: 1
    },
    {
        food: 'milk',
        quantity: 37
    },
    {
        food: 'yogurt',
        quantity: 75
    },
    {
        food: 'kefir',
        quantity: 3
    }
]






export default(state = seedData, action) => {
    console.log('Dairy Reducer is running!');
    return state;
}