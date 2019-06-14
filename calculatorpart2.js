class Calculator {
    constructor(){
         this.number = [];
    }
     add(){
         let result = 0;
         for(let i =0; i < arguments.length; i++){
            result += arguments[i];
            this.answer = result;
         }
         return result;
     }
     multiply(){
         let result = 1;
         for(let i = 0; i < arguments.length; i++){
            result *= arguments[i];
            this.answer = result;

         }
         return result;
     }
     last(){
         return this.answer;
     }

     set_slot(a){
         this.number.push(this.answer)

         return this.number[a-1];
     }

     get_slot(a){
         return this.number[a-1];
     }
    }
    



 


    
