class App extends React.Component {
    constructor (props) {
        super(props)
        this.state ={
            baseURL: 'https://api.nal.usda.gov/fdc/v1/search/?',
            apikey: 'api_key=' + 'yOHdrAN9wGiCYXjdBpxK5kZqPTQfgdKBy2CwhnmQ',
            query: '&',
            generalSearchInput:'generalSearchInput=',
            food:'',
            searchURL:''
            
        }
    }
    //https://api.nal.usda.gov/fdc/v1/search/?api_key=yOHdrAN9wGiCYXjdBpxK5kZqPTQfgdKBy2CwhnmQ&generalSearchInput=cheese
    handleChange = (event)=>{
        this.setState({ [event.target.id]: event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.setState ({
            searchURL: this.state.baseURL + this.state.apikey +this.state.query +this.state.generalSearchInput + this.state.food
        })
    }
  render () {
      return (
          <React.Fragment>
            <form onSubmit= {this.handleSubmit}>
                <label htmlFor='food'>Food Youre looking for </label>
                    <input 
                        id='food'
                        type= 'text'
                        value = {this.state.plantName}
                        onChange = {this.handleChange}
                    />
                <input type='submit' value='find it' />
            </form>
            <a href={this.state.searchURL} > {this.state.searchURL}</a>
            

          </React.Fragment>
      )
  }
}
ReactDOM.render(
    < App />,
    document.querySelector('.container')
)