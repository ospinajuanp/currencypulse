import './resetStyleDark.css'
function App() {

  return (
  <>
      <h1>CurrencyPulse</h1>

      <section>
        <h2>Encabezados</h2>
        <h1>H1 Encabezado</h1>
        <h2>H2 Encabezado</h2>
        <h3>H3 Encabezado</h3>
        <h4>H4 Encabezado</h4>
        <h5>H5 Encabezado</h5>
        <h6>H6 Encabezado</h6>
      </section>

      <section>
          <h2>Texto y Formato</h2>
          <p>Este es un párrafo de ejemplo.</p>
          <b>Texto en negrita</b><br />
          <i>Texto en cursiva</i><br />
          <u>Texto subrayado</u><br />
          <s>Texto tachado</s><br />
          <small>Texto pequeño</small>
      </section>
    
      <section>
          <h2>Listas</h2>
          <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
          </ul>
          <ol>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
          </ol>
      </section>

      <section>
          <h2>Tablas</h2>
          <table>
              <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
              </tr>
              <tr>
                  <td>Juan</td>
                  <td>30</td>
              </tr>
              <tr>
                  <td>María</td>
                  <td>25</td>
              </tr>
          </table>
      </section>
      
      <section>
          <h2>Formularios</h2>
          <form>
              <label >Nombre:</label>
              <input type="text" id="nombre" name="nombre"/><br /><br />
              
              <label >Email:</label>
              <input type="email" id="email" name="email"/><br /><br />
              
              <label >Mensaje:</label>
              <textarea id="mensaje" name="mensaje"></textarea><br /><br />
              
              <input type="submit" value="Enviar"/><br /><br />
          </form>
      </section>
      
      <section>
          <h2>Enlaces</h2>
          <a href="https://www.google.com" target="_blank">Ir a Google</a>
      </section>
    
      <section>
        <h2>Multimedia</h2>
        <img src="https://via.placeholder.com/150" alt="Imagen de prueba"/><br /><br />
        <audio controls>
            <source src="audio.mp3" type="audio/mp3"/>
            Tu navegador no soporta audio.
        </audio><br /><br />
        <video controls width="300">
            <source src="video.mp4" type="video/mp4"/>
            Tu navegador no soporta video.
        </video>
      </section>
  </>

  )
}

export default App
