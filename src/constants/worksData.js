import images from './images';

const worksData = [
    {
    title:"WorldTimes", 
    description:"Flask blog" , 
    projectLink:"", 
    codeLink:"" , 
    imgUrl: images.about04,
    tags:{
        0: "Flask",
        1: "All"
    }
    },
    {
        title:"Image sharing social app", 
        description:"Image Sharing Social Media App made in React and Sanity" , 
        projectLink:"https://shareimages.netlify.app/", 
        codeLink:"https://github.com/muminae100/image_sharing_social_app" , 
        imgUrl: images.image_app,
        tags: {
            0: "React",
            1: "All"
        }
    },
    {
        title:"Memories Mern app", 
        description:"A simple social media app that allows users to post interesting events that happened in their lives." , 
        projectLink:"https://ourmemories-app.netlify.app/", 
        codeLink:"https://github.com/muminae100/memories_mern_app" , 
        imgUrl: images.memories_app,
        tags: {
            0: "React",
            1: "Express",
            2: "All"
        }
    }
]

export default worksData;