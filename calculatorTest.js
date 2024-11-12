
it('should calculate the monthly rate correctly', function () {
  // ...
  const values ={
    amount : 500000,
    years : 30, 
    rate :  3

  };
  expect(calculateMonthlyPayment(values)).toEqual('2108.02');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values ={
    amount : 5000,
    years : 3, 
    rate :  9

  };
  expect(calculateMonthlyPayment(values)).toEqual('159.00');
});

it("should handle low interest rates", function() {
  // ..
  const values ={
    amount : 1000,
    years : 3, 
    rate :  0.5

  };
  expect(calculateMonthlyPayment(values)).toEqual('27.99');
});

it("should handle high interest rates", function() {
  // ..
  const values ={
    amount : 125000,
    years : 30, 
    rate :  50

  };
  expect(calculateMonthlyPayment(values)).toEqual('5208.34');
});

/// etc
