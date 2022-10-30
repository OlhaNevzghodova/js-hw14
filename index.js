let store = {
    name: 'Virta',
    address: {
        country: 'Ukraine',
        city: 'Odesa',
        street: 'Shevchenko Avenue',
        houseNumber: '3a',
    },
};

store.clients = {};
store.clients['Olena Demchyk'] = {
    quantity: 41,
    bonuses: 545,
};
store.clients['Katerina Bohodaeva'] = {
    quantity: 33,
    bonuses: 246,
};
store.clients['Olexandra Horbenko'] = {
    quantity: 104,
    bonuses: 1016,
};
store.clients['Viktoriia Barankova'] = {
    quantity: 88,
    bonuses: 968,
};
store.clients['Viktoriia Chernyshova'] = {
    quantity: 16,
    bonuses: 104,
};
console.log(store);