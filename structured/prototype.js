const parent = {
  a: 1,
  b: 2,
};

const child = Object.create(parent); // child's prototype is set to the parent object

console.log(child.a); // Output: 1 (the value is obtained from the parent object)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// All instances created using the "new" keyword will have their prototype set to "Person.prototype"
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Adding a method to the "Person" prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I'm 25 years old.

/**
 * In this example, we create a `Person` constructor function that takes a `name` and an 
 * `age` as arguments. We then add a `greet` method to the `Person.prototype`. When we 
 * create new `Person` instances using the `new` keyword, their prototype is automatically 
 * set to `Person.prototype`, so they inherit the `greet` method.

3. **Prototypal inheritance**: Prototypal inheritance is the process by which an object 
   * inherits properties and methods from another object through the prototype chain. 
   * This is the primary method of inheritance in JavaScript and is a key concept in 
   * understanding how objects work in the language.

 */

//Prototype inheritance:
const animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };
  
  const dog = Object.create(animal);
  dog.name = 'Rex';
  dog.speak(); // Output: Rex makes a noise.
/**
 * In this example, we create an animal object with a speak method. Then, we create a dog 
 * object using Object.create(animal), which sets the dog's prototype to the animal object. 
 * The dog object inherits the speak method from its prototype. 
 * */  

const animal1 = {
    type: 'Animal',
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };
  
  const dog1 = Object.create(animal1);
  dog1.name = 'Rex';
  
  console.log(dog1.type); // Output: 'Animal' (inherited from the animal object)
  /**
   * In this example, the dog object doesn't have the type property itself, but its 
   * prototype (animal) has it. When we try to access the type property on the dog object, 
   * JavaScript looks for the property in the prototype chain and finds it in the animal object.
   */

  const animal2 = {
    type: 'Animal',
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };
  
  const dog2 = Object.create(animal);
  dog2.name = 'Rex';
  dog2.type = 'Dog';
  
  console.log(dog2.type); // Output: 'Dog' (property from the dog object)
  /**
   * In this example, the dog object has its own type property, which overrides the 
   * type property from its prototype. When we try to access the type property on the dog 
   * object, JavaScript finds it directly on the dog object and doesn't need to look up 
   * the prototype chain.
   */

  function Animal3(name) {
    this.name = name;
  }
  
  Animal3.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  const dog3 = new Animal3('Rex');
  dog3.speak(); // Output: Rex makes a noise.
/**
 * In this example, we create a constructor function Animal and define a speak method on 
 * its prototype. When we create a new Animal object with the new keyword, the object's 
 * prototype is set to Animal.prototype, so it inherits the speak method.
 */
  
function Animal4(name) {
    this.name = name;
  }
  
  Animal4.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  function Dog4(name) {
    Animal4.call(this, name);
  }
  
  Dog4.prototype = Object.create(Animal4.prototype);
  Dog4.prototype.constructor = Dog;
  
  Dog4.prototype.bark = function() {
    console.log(`${this.name} barks.`);
  };
  
  const dog4 = new Dog4('Rex');
  dog4.speak(); // Output: Rex makes a noise.
  dog4.bark(); // Output: Rex barks.
  /**
   * In this example, we create a `Dog` constructor function that inherits from the `Animal` constructor function. To achieve this, we first call the `Animal` constructor inside the `Dog` constructor using `Animal.call(this, name)`. This sets the `name` property on the newly created `Dog` object.
   * Next, we set the prototype of `Dog` to a new object created with `Object.create(Animal.prototype)`. This ensures that instances of `Dog` inherit the properties and methods of `Animal`. We also set the `constructor` property of `Dog.prototype` back to `Dog` to maintain the correct constructor reference.
   * Finally, we add a new `bark` method to the `Dog.prototype`. When we create a new `Dog` object using the `new` keyword, it inherits both the `speak` method from `Animal.prototype` and the `bark` method from `Dog.prototype`.
   * In summary, prototype inheritance in JavaScript allows objects to inherit properties and methods from other objects through their prototypes, forming a chain known as the prototype chain. This mechanism enables efficient memory usage and code reusability, as shared properties and methods only need to be defined once on the prototype, rather than being duplicated for each object instance.
   */
  