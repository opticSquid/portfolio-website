import WorkCompany from "./WorkCompany";

function WorkHistory() {
  return (
    <div>
      <WorkCompany
        companyName="Cognizant"
        startTime="Sep, 2023"
        endTime="Present"
        jobRole="Jr. Software Engineer, Java FSE [GenC - Next]"
        jobDescription="In this job role I'm responsible for developing and maintaining different client software and services based on java technology while adhereing to industry best practices and design guidelines"
      />
      <WorkCompany
        companyName="Cognizant"
        startTime="Mar, 2023"
        endTime="Jun, 2023"
        jobRole="Flexi-Intern, Java FSE [Digital Nurture 2.0]"
        jobDescription="In this role I was extensively trained on java and react based technologies with hands on projects and rigorous technical interviews. This helped me gain in depth knowledge of the field and also gain confidence in my abilites to handle and manage large scale complex projects"
      />
      <WorkCompany
        companyName="Google Developer Student Club"
        startTime="Aug, 2022"
        endTime="July, 2023"
        jobRole="Lead Application Developer"
        jobDescription="In this role I was responsible for training and familiarising people with different google technologies like Firebase, Jetpack Compose, Google Cloud by organizing both in person and virtual code jam sessions and also build hands on projects to help guide the trainees."
      />
      <WorkCompany
        companyName="Oeson Technologies"
        startTime="Jan, 2022"
        endTime="Mar, 2022"
        jobRole="Fullstack Developer Intern - MERN"
        jobDescription="In this role I was doing hands on project for a forgein client from the health industry by building them an application that would help their end customers to better engage with them and also help the client keep a track fo their customers and their transactions."
      />
    </div>
  );
}

export default WorkHistory;
