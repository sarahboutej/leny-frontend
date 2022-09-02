import { createStore } from "vuex"
import agents from '../data/agents'
import users from '../data/users'
import properties from '../data/properties'
import messages from '../data/messages'

export default createStore({

  state: {
    agencyName: 'International Building',
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
  getters: {
    getCompanyAbbreviation(state) {
      return state.agencyName.split(' ').map(name => name[0]).join('').toUpperCase().slice(0,2); 
    }
  },
});
