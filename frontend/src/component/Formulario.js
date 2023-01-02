import React, {Component} from 'react';
import './style/App.css'
import axios from 'axios'

const URL = 'http://localhost:3002/user/'

class Formulario extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          identificar:'',
          nombres: '',
          apellidos:'',
          rut:'',
          telefono:'',
          correo: '',
          password:'',
          pais:'',
          region:'',
          comuna:'',
          ciudad:'',
          situacion_laboral:'',
          lugar_trabajo:'',
          cargo:'',
          direccion:'',
          carreras:'',
          anio_egreso: 0,
          instagram:'', 
          twitter:'', 
          facebook:'', 
          linkedin:'', 
          acerca_de:''
          
        } 
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    onChange = e => {
        const{name, value} = e.target;
        this.setState({
            [name] : value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        console.log("Se envian los datos " + JSON.stringify(this.state));
        const data = {
            rut:this.state.rut, 
            nombres:this.state.nombres, 
            apellidos:this.state.apellidos,
            carrera:this.state.carreras, 
            telefono:this.state.telefono,
            mail:this.state.correo, 
            password:this.state.password, 
            pais:this.state.pais, 
            region:this.state.region, 
            comuna:this.state.comuna, 
            situacion_laboral:this.state.situacion_laboral, 
            empresa:this.state.lugar_trabajo, 
            cargo:this.state.cargo, 
            direccion:this.state.direccion, 
            anio_egreso:this.state.anio_egreso, 
            instagram:this.state.instagram, 
            twitter:this.state.twitter, 
            facebook:this.state.facebook, 
            linkedin:this.state.linkedin, 
            acerca_de:this.state.acerca_de}
        axios.post(URL, data).then(function(res){console.log(res)}).catch(function(err){console.log(err)})
    

        

    }

    render(){
        return(
            <div class = "form" onSubmit={this.enviarAlaBD}>
                <div id="seccion2">
                  <form>
                    <fieldset>
                      <p>
                        <label class="label" for="identificar"> Me identifico como:</label>
                        <select name="identificar" id="identificar">
                          <option value="egresado">Egresado</option>
                          <option value="admin">Administracion</option>
                        </select>
                        <label class="label"> Nombre/s:</label>
                        <input type="text" name="nombres" value={this.state.nombres} onChange={this.onChange} ></input>
                        <label class="label"> Apellidos:</label>
                        <input type="text" name = 'apellidos' value={this.state.apellidos} onChange={this.onChange}></input>
                        <label class="label" for="rut"> RUT:</label>
                        <input type="text" name='rut' value={this.state.rut} onChange={this.onChange}></input>
                        <label class="label" for="telefono"> Teléfono:</label>
                        <input type="text" name='telefono' value={this.state.telefono} onChange={this.onChange}></input>
                        <label class="label" for="mail">E-mail:</label>
                        <input type="text" name='correo' value={this.state.correo} onChange={this.onChange}></input>
                        <label class="label" for="password">Contraseña:</label>
                        <input type="password" name='password' value={this.state.password} onChange={this.onChange}></input>
                        <label class="label" for="pais">País:</label>
                        <input type="text" name='pais' value={this.state.pais} onChange={this.onChange}></input>
                        <label class="label" for="region">Región:</label>
                        <input type="text" name='region' value={this.state.region} onChange={this.onChange}></input>
                        <label class="label" for="comuna">Comuna:</label>
                        <input type="text" name='comuna' value={this.state.comuna} onChange={this.onChange}></input>
                        <label class="label" for="situacion">Situación laboral:</label>
                        <input type="text" name='situacion_laboral' value={this.state.situacion_laboral} onChange={this.onChange}></input>
                        <label class="label" for="trabajo">Lugar de trabajo:</label>
                        <input type="text" name='empresa' value={this.state.empresa} onChange={this.onChange}></input>
                        <label class="label" for="Cargo/s">Cargos:</label>
                        <input type="text" name='cargo' value={this.state.cargo} onChange={this.onChange}></input>
                      </p>
                    </fieldset>
                  </form>
                </div>
                <div id="seccion3">
                <fieldset>
                      <p><label class="label" for="direccion"> Dirección:</label>
                        <input type="text"  name='direccion' value={this.state.direccion} onChange={this.onChange}></input>
                        <label class="label" for="carreras"> Carrera:</label>
                        <select name="carreras" id="carreras" value={this.state.carreras} onChange={this.onChange}>
                          <option value="acustica">Ing. Civil Acustica</option>
                          <option value="electronica">Ing. Civil Electronica</option>
                          <option value="industrial">Ing. Civil Industrial</option>
                          <option value="informatica">Ing. Civil en Informática</option>
                          <option value="obras">Ing. Civil en Obras Civiles</option>
                          <option value="mecanica">Ing. Civil Mecanica</option>
                          <option value="construccion">Ing. Civil en Construccion</option>
                          <option value="naval">Ing. Naval</option>
                        </select>
                        <label class="label" for="egreso"> Año egreso:</label>
                        <input type="text" name='anio_egreso' value={this.state.anio_egreso} onChange={this.onChange}></input>
                        <label class="label" for="instagram"> Instagram:</label>
                        <input type="text" name='instagram' value={this.state.instagram} onChange={this.onChange}></input>
                        <label class="label" for="twitter"> Twitter:</label>
                        <input type="text"  name='twitter' value={this.state.twitter} onChange={this.onChange}></input>
                        <label class="label" for="facebook"> Facebook:</label>
                        <input type="text"  name='facebook' value={this.state.facebook} onChange={this.onChange}></input>
                        <label class="label" for="linkedin"> Linkedin:</label>
                        <input type="text"  name='linkedin' value={this.state.linkedin} onChange={this.onChange}></input>                        
                        <label class="label" for="sombremi"> Sobre mi:</label>
                        <textarea name="acerca_de" id="sobremi" cols="20" rows="4" maxlength="255"
                         value={this.state.acerca_de} onChange={this.onChange}>
                        </textarea>
                        <div onClick={this.handleSubmit}>
                         <button type="submit">Guardar datos</button>
                        </div>
                      </p>
                </fieldset>
                
                </div>
            </div>
            
          );

    };
    
};

export default Formulario;