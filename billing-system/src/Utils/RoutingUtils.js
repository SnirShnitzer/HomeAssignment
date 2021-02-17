export default {
    Custom:{
        Home: '/'
    },
    Transaction: {        
      List: '/transactions',
      Create: '/transactions/create',      
      Details: (id) => `/transactions/${id}`,      
      Edit: (id) => `/transactions/${id}/edit`,      
      Routing_Details: '/transactions/:id',
      Routing_Edit: '/transactions/:id/edit' 
    },
    Customer: {
        List: '/customers',
        Create: '/customers/create',
        Details: (id) => `/customers/${id}`,      
        Edit: (id) => `/customers/${id}/edit`,      
        Routing_Details: '/customers/:id',
        Routing_Edit: '/customers/:id/edit'
      }
}