import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about.jpeg" alt="" />
        </div>
        <div>
        <h2 className="about-subtitle">A little bit about myself...</h2>
          <p className="about-text">  
            I've been working as a Java Backend Developer in the Netherlands. <br/>
            I have a bachelor's degree in computer engineering and master's degree in software engineering.  <br/><br/>
            I have 6+ years of experience as a software engineer with an Oracle Java SE 11 Developer Certification, involved in different kinds of projects in industries ranging from betting to fintech.   <br/><br/>
            I love solving problems, coding and developing!  <br/>
            I am eager to learn new fields and technologies and always open for changes and challenges!
          </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="assets/java.png" alt="java" />
            <img className='tech-image' src="assets/spring.png" alt="spring" />
            <img className='tech-image' src="assets/restful.png" alt="restful" />
            <img className='tech-image' src="assets/postgresql.png" alt="postgresql" />
            <img className='tech-image' src="assets/git.png" alt="git" />
            <img className='tech-image' src="assets/tomcat.png" alt="tomcat" />
            <img className='tech-image' src="assets/maven.png" alt="maven" />
            <img className='tech-image' src="assets/gradle.png" alt="gradle" />
            <img className='tech-image' src="assets/kotlin.png" alt="kotlin" />
            <img className='tech-image' src="assets/intellij.png" alt="intellij" />
          </p>
          <p>  
            <img className='tech-image' src="assets/junit.png" alt="junit" />
            <img className='tech-image' src="assets/jenkins.png" alt="jenkins" />
            <img className='tech-image' src="assets/redis.png" alt="redis" />
            <img className='tech-image' src="assets/hibernate.png" alt="hibernate" />
            <img className='tech-image' src="assets/docker.png" alt="docker" />
            <img className='tech-image' src="assets/elasticsearch.png" alt="elasticsearch" />
            <img className='tech-image' src="assets/mongodb.png" alt="mongodb" />
            <img className='tech-image' src="assets/rabbitmq.png" alt="rabbitmq" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
