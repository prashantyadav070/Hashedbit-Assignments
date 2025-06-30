function variableScopeDemo() {
  var a = 10;    // function-scoped
  let b = 20;    // block-scoped
  const c = 30;  // block-scoped and constant

  if (true) {
    var a = 100;     // re-declared, affects outer 'a'
    let b = 200;     // new 'b' scoped to this block
    const c = 300;   // new 'c' scoped to this block
    console.log("Inside Block:", a, b, c);
  }

  console.log("Outside Block:", a, b, c);
}

variableScopeDemo();
