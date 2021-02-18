export default {
    Custom:{
        Home: '/'
    },
    Transaction: {        
      List: '/transactions',
      Create: '/transactions/create',      
      Details: (id) => `/transactions/${id}`,      
      Edit: (id) => `/transactions/edit/${id}`,      
      Routing_Details: '/transactions/:id',
      Routing_Edit: '/transactions/edit/:id' 
    },
    Customer: {
        List: '/customers',
        Create: '/customers/create',
        Details: (id) => `/customers/${id}`,      
        Edit: (id) => `/customers/edit/${id}`,      
        Routing_Details: '/customers/:id',
        Routing_Edit: '/customers/edit/:id'
      }
}