import {useState} from 'react';
import './App.css';

function App() {


   const [formData, setFormData] = useState({
    firstName: "", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false, pushNotifications:""
   })


   function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
   }

   function submitHandler(event){
    event.preventDefault();
    
    console.log("Finally printing the value of Form Data:");
    console.log(formData)

   }
  return (
    <div className="App">
    
      <h1>App is running in Prot:3000</h1>
    <form onSubmit={submitHandler}                    
          className="form-container">
    <label htmlFor = "firstName">First name: </label>
    <br />
      {/* <div className="form-group"> */}
        <input
          type = "text"
          name = "firstName"
          id = "firstName"
          placeholder = "abc"
          value = {formData.firstName}
          onChange = {changeHandler}
          className = "outline"
        />

        <br/>
        <br/>
      

        <label htmlFor = "lastName">Last name: </label>
        <br />
        <input 
          type = "text"
          name = "lastName"
          id = "lastName"
          placeholder = "xyz"
          value = {formData.lastName}
          onChange = {changeHandler}
          className = "outline"
          />
      {/* </div>     */}
        
        <br/>
        <br/>

        {/* <div className="form-group">  */}
          <label htmlFor = "email">Email Adress: </label>
          <br />
          <input
          type = "email"
          placeholder = "xyz@gmail.com"
          name = "email"
          id = "email"
          value = {formData.email}
          onChange = {changeHandler}
          className = "outline"
          />
        {/* </div> */}


      <br/>
      <br/>



        {/* <div className="form-group">  */}
         <label htmlFor = "country"> Select preferred country: </label>
         <br />
         <select 
           id = "country" 
           name = "country"
           value = {formData.country}
           onChange = {changeHandler}
           className = "outlinde"
          >
          <option>India</option>
          <option>United States</option>
          <option>New Zealand</option>
          <option>UAE</option>
          <option>Germany</option>
         </select>
        {/* </div> */}

      <br/>
      <br/>
        
      


      {/* <div className="form-group"> */}
        <label htmlFor = "streetAddress">Street Address: </label>
        <br />
        <input 
          type = "text"
          placeholder = "B-25C"
          name = "streetAddress"
          id = "streetAddress"
          value = {formData.streetAddress}
          onChange = {changeHandler}
          className = "outline"
        />
      {/* </div> */}



      <br/>
      <br/>

        
    {/* <div className="form-group"> */}
      <label htmlFor = "city">City: </label>
      <br />
        <input 
          type = "text"
          placeholder = "Lucknow"
          name = "city"
          id = "city"
          value = {formData.city}
          onChange = {changeHandler}
          className = "outline"
        />
    {/* </div> 
       */}
      <br/>
      <br/>
{/* 
    <div className="form-group"> */}
      <label htmlFor = "state">State / Province: </label>  
      <br />
        <input 
          type = "text"
          placeholder = "Uttar Pradesh"
          name = "state"
          id = "state"
          value = {formData.value}
          onChange = {changeHandler}
          className = "outline"
        />
    {/* </div>  */}



      <br/>
      <br/>


    {/* <div className="form-group"> */}
      <label htmlFor = "postalCode">Postal Code: </label>     
      <br />

        <input 
          type = "text"
          placeholder = "87123"
          name = "postalCode"
          id = "postalCode"
          value = {formData.postalCode}
          onChange = {changeHandler}
          className = "outline"
        />
    {/* </div> */}

    
    <br />
    <br />

    <fieldset>
        <legend>By Email</legend>
  
        <div className = "notifications">
          <input 
            type = "checkbox"
            id = "comments"
            name = "comments"
            // value = {formData.comments}
            // className = "outline"
            checked = {formData.comments}
            onChange = {changeHandler}
          />
          <div>
          <label htmlFor = "comments">Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>

        <div className = "notifications">
          <input 
            id = "candidates"
            name = "candidates"
            type = "checkbox"
            checked = {formData.candidates}
            onChange = {changeHandler}
          />
          <div>
          <label htmlFor = "candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>
        

        <div className = "notifications">
          <input 
            id = "offers"
            name = "offers"
            type = "checkbox"
            checked = {formData.offers}
            onChange = {changeHandler}
            // onChange = {}
          />
          <div>
          <label htmlFor = "offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>

    </fieldset>
    
    <br/>
    <br/>

    <fieldset>
         <legend>Push Notifications</legend>
         <p>These are delivered via SMS to your mobile phone</p>
          
            <input 
            type = "radio"
            id = "pushEverything"
            name = "pushNotifications"
            value = "Everything"
            onChange={changeHandler}
            />
            <label htmlFor = "pushEverything">Everything</label>
  
          <br />

            
            <input 
              type = "radio"
              id = "pushEmail"
              name = "pushNotifications"
              value = "Same as email"
               onChange={changeHandler}
            />
            <label htmlFor = "pushEmail">Same as Email</label>
          
          <br />

            <input 
              type = "radio"
              id = "pushNothing"
              name = "pushNotifications"
              value = "No Push Notifications"
               onChange={changeHandler}
            />
            <label htmlFor = "pushNothing">No Push Notifications</label>
    </fieldset>

    <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


