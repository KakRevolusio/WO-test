// import Button from "./komp/Button";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>Welcome</h1>
//         <p>p coba test</p>
//         {/* <button>SIMPAN</button>
//         <button>EDIT</button>
//         <button>DETAIL</button>
//         <button>HAPUS</button> */}
//       </div>
//       <div>
// {/* <button type="button" class="ms-2 btn btn-success">SIMPAN</button>
// <button type="button" class="ms-2 btn btn-danger">EDIT</button>
// <button type="button" class="ms-2 btn btn-warning">DETAIL</button>
// <button type="button" class="ms-2 btn btn-info">HAPUS</button> */}
// <Button title="Simpan" color="primary"/>
// <Button title="Edit"/>
// <Button title="Detail"/>
// <Button title="Hapus"/>
// </div>
//     </>
//   );
// }

// export default App;
// const App = () => {
//   return <>
// <Navbar></Navbar>
// <Gallery></Gallery>
//     <Container>
//       <Row>
//         <Col>
//           <CardComponent
//             title="YAE MIKO"
//             imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxNESwMouBNDdlcaZTailwWgQPOZknHnmmg&usqp=CAU"
//             description="Yae Miko di gim Genshin Impact digambarkan sebagai perempuan cantik berambut merah muda"
//           />
//         </Col>
//         <Col>
//           <CardComponent
//             title="Puan-chan"
//             imageUrl="data:image/jpeg;base64,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"
//             description="Seorang anak dari cucu pemimpin banteng merah."
//           />
//         </Col>
//         <Col>
//           <CardComponent
//             title="Mega-Chan"
//             imageUrl="data:image/jpeg;base64,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"
//             description="Cucu dari pemimpin bangsa generasi lama"
//           />
//         </Col>
//         <Col>
//           <CardComponent
//             title="Mega-NEKO"
//             imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgKAoE6-Ty-_1CMEoJYa4lwRzr1nkRajy3g&usqp=CAU"
//             description="Pawang dari banteng Merah"
//           />
//         </Col>
//         <Col>
//           <CardComponent
//             title="Lo ASIK"
//             imageUrl="data:image/jpeg;base64,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"
//             description="Seorang bpk yang memberikan komentar"
//           />
//         </Col>
//       </Row>
      
//     </Container>  
//   </>;
// };


import React from "react";
import CardComponent from "./komp/Card";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./komp/Navbar";
import Gallery from "./komp/Gallery";
import Login from "./komp/Login";
import Home from "./komp/Home";
import Contact from "./komp/Contact";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App(){
  return(
  <>
  <div className="container py-3">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  </>
  );
}
export default App;