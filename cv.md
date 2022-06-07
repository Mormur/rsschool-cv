# Sorokina Ekaterina

## Junior Frontend Developer

## Contacts
* **Location:** Voronezh, Russia
* **Phone:** +7 (960) 108-76-88
* **E-mail:** marchkatte@gmail.com
* **GitHub:** [https://github.com/Mormur]()

## About Me
Self-motivated and creative, with good communication skills I'm looking for a  Junior Frontend Developer position or a paid remote intership. I will be happy to continue expanding my JavaScript knowelege and skills by joining a team with a strong culture of code rewiev.

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
