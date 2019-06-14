 describe("Calculator", function(){
     let calculator;
     beforeEach(function(){
         calculator = new Calculator();
     });
 
     it ("should add two numbers", function(){
        // let calculator = new Calculator();
         expect(calculator.add(1,2)).toBe(3);
     });
 
     it("should add negative numbers ", function(){
         expect(calculator.add(-1,-2)).toBe(-3);
      
      });
 
    it("should multiply two numbers", function(){
        expect(calculator.multiply(1,2)).toBe(2);
    });
    it("should remember the last result", function(){
        expect(calculator.multiply(1,2)).toBe(2);
        expect(calculator.last()).toBe(2);
    });

    it("should use last results in other calculator", function(){
        expect(calculator.add(2,2)).toBe(4);
        expect(calculator.add(calculator.last(),2)).toBe(6);
    });
    it("should use memory slot", function(){
        expect(calculator.add(10,20)).toBe(30);
        expect(calculator.set_slot(1)).toBe(30);
        expect(calculator.get_slot(1)).toBe(30);
    });
    it("should allow use of memory slots as arguments", function(){
        expect(calculator.add(10,20)).toBe(30);
        expect(calculator.set_slot(1)).toBe(30)
        expect(calculator.get_slot(1)).toBe(30);
        expect(calculator.add(calculator.get_slot(1),1)).toBe(31);
        expect(calculator.multiply(calculator.get_slot(1),2)).toBe(60);
            
    })
    })
