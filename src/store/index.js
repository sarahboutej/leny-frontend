import { createStore } from "vuex"
import agents from '../data/agents'
import users from '../data/users'
import properties from '../data/properties'
import messages from '../data/messages'

export default createStore({

  state: {
    name: 'International Building',
    abbreviation: 'IB',
    logo: '',
    bio: 'Lorem ipsum dolor si amet',
    agents: agents,
    users: users,
    properties: properties,
    messages: messages
  },
  
  mutations: {},
  actions: {},
  getters: {},
});
