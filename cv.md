# Sorokina Ekaterina

## Junior Frontend Developer

## Contacts
* **Location:** Voronezh, Russia
* **Phone:** +7 (960) 108-76-88
* **E-mail:** marchkatte@gmail.com
* **GitHub:** [https://github.com/Mormur]()

## About Me
Self-motivated and creative, having good communication skills I'm looking for a  Junior Frontend Developer position or a paid remote intership. After 7 years as a mediator with clients around the world, I want to start developing web apps that will be useful for users around the world. I will be happy to continue expanding my JavaScript knowelege and skills by joining a team with a strong culture of code rewiev.

## Skills
* Javascript ES6+
* HTML5
* CSS3
* Node.js
* Git + GitHub
* Travis CI (GitHub Action)
* Automate testing (Jest)
* Linux
* English Upper-Intermediate

## Code example
### Password Validator
```
const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options = {}) {
    if (options.minLength === 0) {
      this.minLength = 0;
    } else {
      this.minLength = options.minLength || 8;
    }
    if (options.containNumbers === undefined) {
      this.containNumbers = true;
    } else {
      this.containNumbers = options.containNumbers;
    }
  }

  validate(password) {
    const errors = {};
    if (this.minLength > password.length) {
      errors.minLength = 'too small';
    }
    if (this.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }
    return errors;
  }
}

export default PasswordValidator;
```

### Carousel
```
import $ from 'jquery';

export default () => {
  const carousels = $('[data-ride="carousel"]');
  carousels.each((_index, carousel) => {
    const root = $(carousel);
    const slides = root.find('.carousel-item');
    const maxIndex = slides.length - 1;

    const handlerGenerator = (next) => () => {
      const currentIndex = slides.filter('.active').index();
      const newCurrentIndex = next(currentIndex);
      slides.removeClass('active');
      slides.filter((id) => id === newCurrentIndex).addClass('active');
    };

    const prev = root.find('[data-slide="prev"]');
    prev.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
    const next = root.find('[data-slide="next"]');
    next.click(handlerGenerator((i) => (maxIndex === i ? 0 : i + 1)));
  });
};
```

## Experience
### Mind Games
* *Link:* [https://github.com/Mormur/frontend-project-lvl1]()
* *Description:* five math console games with responding to user input.
* *Technologies:* JavaScript (ES6), npm, ESLint (airbnb), Node.js, Git, GitHub, CodeClimate, Travis CI.

### Comparator
* *Link:* [https://github.com/Mormur/frontend-project-lvl2]()
* *Description:* the semantic JSON, YML, INI compare tool.
* *Technologies:* JavaScript (ES6), npm, ESLint (airbnb), Node.js, Git, GitHub, GitHub Actions (CI), CodeClimate, Jest.

## Education
**Voronezh State University**  
Law Faculty  
*Years:* 2011-2015  
*Specialization:* International Law, Bachelor's degree

## Courses
* **Hexlet** Course "Front-end Developer" (in progress)
* **RS Schools** Course "JavaScript/Front-end" (in progress)
* **HTML Academy** Course "Front-end Developer" (in progress)

...and other wonderful sources: CS50 lectures, Udemy, Well Paid Geek JS course, learnjavascript.ru, Free Code Camp, Codewars etc.

## Languages
* Russian - *Native*
* English - *Upper-Intermediate*
* French - *Pre-Intermediate*
* Ukrainian - *Basic*
* Dutch - *Basic*
