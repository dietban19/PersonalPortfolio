import React from 'react';
import Button from '../components/Button';

function Hero() {
  return (
    <div className="flex justify-center flex-col items-center text-white  h-full">
      <div className="text-secondary-txt-dark font-sf-display">Hi, I'm</div>

      <h1 className="text-4xl  sm:text-5xl font-sf-display ">Dieter Banaag</h1>
      <h2 className="text-sf-text text-3xl font-light">Software Engineer</h2>

      <p className="mt-4 text-lg text-white font-thin sm:text-xl text-center">
        I'm a software engineer specializing in building exceptional digital
        experiences. Currently, I'm focused on building responsive web
        applications.
      </p>
      <div className="flex gap-2 p-8">
        <Button filled={'white'}>Learn More</Button>
        <Button filled>Get in Touch</Button>
      </div>
    </div>
  );
}

export default Hero;
