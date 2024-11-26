import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logotipe from './logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import ubicacion from './ubication_campus.png'
import header_class from './header_clases.png'
import aula from './aula20_portada.png'
import aritmetica from './aritmetica.png'
import lenguaje from './lenguaje.png'
import fisica from './fisica.png'
import estadistica from './estadistica.png'
import algebra_geometria from './algebra_geometria.png'
import trigonometria from './trigonometria.png'
export const assets = {
    aula,
    header_class,
    logotipe,
    ubicacion,
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Aritmetica',
        image: aritmetica
    },
    {
        speciality: 'Lenguaje',
        image: lenguaje
    },
    {
        speciality: 'Trigonometria',
        image: trigonometria
    },
    {
        speciality: 'Algebra_geometria',
        image: algebra_geometria
    },
    {
        speciality: 'Fisica',
        image: fisica
    },
    {
        speciality: 'Estadistica',
        image: estadistica
    },
]

export const doctors = [
    {
        _id: 'teacher1',
        name: 'Profesor Andrés Castillo',
        image: aritmetica,
        speciality: 'Aritmetica',
        degree: 'Licenciatura en Matemáticas',
        experience: '5 Años',
        about: 'Profesor dedicado a enseñar fundamentos de aritmética, con enfoque en el aprendizaje práctico y la resolución de problemas. Se especializa en trabajar con estudiantes de todos los niveles para construir una base sólida en matemáticas.',
        fees: 25,
        address: {
            line1: 'Calle Primavera 123',
            line2: 'San José, Lima, Perú'
        }
    },
    {
        _id: 'teacher2',
        name: 'Profesora Daniela Rojas',
        image: lenguaje,
        speciality: 'Lenguaje',
        degree: 'Licenciatura en Literatura y Comunicación',
        experience: '4 Años',
        about: 'Apasionada por el lenguaje y la enseñanza del razonamiento verbal, busca ayudar a los estudiantes a mejorar sus habilidades de comprensión y expresión escrita. Clases dinámicas y adaptadas a las necesidades del estudiante.',
        fees: 30,
        address: {
            line1: 'Av. Los Olivos 456',
            line2: 'Miraflores, Lima, Perú'
        }
    },
    {
        _id: 'teacher3',
        name: 'Profesor Carlos Martínez',
        image: trigonometria,
        speciality: 'Trigonometría',
        degree: 'Ingeniería Matemática',
        experience: '6 Años',
        about: 'Especialista en trigonometría, enseña de manera clara y estructurada los conceptos clave, con énfasis en aplicaciones prácticas. Ideal para estudiantes que buscan mejorar en exámenes o competencias académicas.',
        fees: 35,
        address: {
            line1: 'Jirón Central 789',
            line2: 'Barranco, Lima, Perú'
        }
    },
    {
        _id: 'teacher4',
        name: 'Profesor Juan López',
        image: algebra_geometria,
        speciality: 'Algebra_geometria',
        degree: 'Licenciatura en Matemáticas Aplicadas',
        experience: '7 Años',
        about: 'Con experiencia en la enseñanza de álgebra y geometría, se enfoca en simplificar conceptos complejos para que los estudiantes puedan aplicarlos con confianza en tareas y exámenes.',
        fees: 40,
        address: {
            line1: 'Pasaje Las Flores 321',
            line2: 'Pueblo Libre, Lima, Perú'
        }
    },
    {
        _id: 'teacher5',
        name: 'Profesora Lucía Fernández',
        image: fisica,
        speciality: 'Física',
        degree: 'Física Teórica',
        experience: '3 Años',
        about: 'Profesora apasionada por la física, con un enfoque didáctico para enseñar temas desde lo básico hasta nivel avanzado. Especialista en preparar estudiantes para pruebas nacionales e internacionales.',
        fees: 30,
        address: {
            line1: 'Av. del Sol 987',
            line2: 'Surco, Lima, Perú'
        }
    },
    {
        _id: 'teacher6',
        name: 'Profesor Diego Sánchez',
        image: estadistica,
        speciality: 'Estadística',
        degree: 'Estadística y Ciencia de Datos',
        experience: '5 Años',
        about: 'Experto en estadística y análisis de datos, enseña desde lo básico hasta métodos avanzados, ideal para estudiantes universitarios o de secundaria que buscan una ventaja en esta área.',
        fees: 35,
        address: {
            line1: 'Calle La Luna 654',
            line2: 'San Isidro, Lima, Perú'
        }
    },
]


export const autoProfessors = [

    {
      food_id: 1,
      food_name: "Resort Cameron",
      food_image: algebra_geometria,
      food_price: 95,
      food_desc:
        "Ubicado en la playa más paradisíaca de Cancún, México – ¡un escape inolvidable!",
      food_category: "Mexico",
    },

]
