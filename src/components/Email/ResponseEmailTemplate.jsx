// import {
//     Body,
//     Column,
//     Container,
//     Head,
//     Heading,
//     Html,
//     Preview,
//     Row,
//     Section,
//     Text
// } from "@react-email/components";

// import PropTypes from "prop-types";

// export default function ResponseEmailTemplate({ name, email, phone, message }) {
//   return (
//     <Html>
//       <Head />
//       <Preview>
//         <Text>Response Recived</Text>
//       </Preview>
//       <Body>
//         <Container>
//           <Section>
//             <Row>
//               <Column>
//                 <Heading
//                   as="h2"
//                   style={{
//                     fontSize: 26,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   Hi,{name} Submited Response on your website
//                 </Heading>

//                 <Text>
//                   <b>Emaol Address: </b>
//                   {email}
//                 </Text>
//                 <Text>
//                   <b>Phone Number: </b>
//                   {phone}
//                 </Text>
//                 <Text>
//                   <b>Message: </b>
//                   {message}
//                 </Text>
//                 <Text>
//                   <b>Date and Time: </b>
//                   {new Date().toLocaleString()}
//                 </Text>
//               </Column>
//             </Row>
//           </Section>
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: 12,
//               color: "rgb(0,0,0, 0.7)",
//             }}
//           >
//             {`© ${new Date().getFullYear()}  CRESCENT EXPORTS,`}
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }

// ResponseEmailTemplate.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
//   phone: PropTypes.string,
//   message: PropTypes.string,
// };
