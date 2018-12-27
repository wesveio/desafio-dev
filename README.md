# desafio-dev

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### To run a build server
Is important to install **serve**
```
npm install -g serve
```
and then:
```
serve -s dist
```

### Lints and fixes files
```
npm run lint
```
# Structure

## views

#### Home.vue
The first page where the API run to get all restaurants and it passes the result as props **items** to **Card.vue** component to render the results.

#### Restaurant.vue
This page is responsible to get the menu of restaurant selected.

The ID of the restaurant is get by the params sent.
See it on data function:
```
this.$route.params.id
```

After that, I pass the ID with the URL to get the right menu. All this as a method call getMenu.
```
getMenu: function() {
  let vm = this
  axios
    .get(`https://challange.goomer.com.br/restaurants/${vm.id}/menu`)
    .then(response => {
      vm.restaurant = response.data
    })
    .catch(error => {
      console.log(error)
    })
}
```
The API response gives us some key values, and one of them is called **group**, responsible to identify which group every item belongs.

For a better User Experience, I create a method called **groupBy**. Responsible to reorganize and separate the items by the group.
```
groupBy: function(arr, key) {
  const result = {}
  arr.filter(function(el) {
    let objKeys = Object.keys(result)
    let lowerEl = el[key].toLowerCase().replace(/ /g, '_')
    if (objKeys.indexOf(lowerEl) === -1) {
      result[lowerEl] = []
    }
    result[lowerEl].push(el)
  })
  return result
```
This method is called on a **computed** function called **groupedItems**
```
groupedItems() {
  return this.groupBy(this.restaurant, 'group')
}
```

## components
#### Card.vue
This component is responsible to render all the API responses as User-Friendly interface.
It receives an array as a **props** called **items**.
And the only method is called **navigateToMenu**, responsible to redirect to the restaurant menu selected.
```
navigateToMenu(id) {
  if (id) {
    this.$router.push(`/restaurant/${id}`)
  }
}
```
#### Nav.vue
Responsible to show logo and back button navigation.


