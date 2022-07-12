pragma circom 2.0.0;

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;

   signal inter;

   inter <== a * b;

   // Constraints.  
   d <== inter * c;  
}

component main = Multiplier3();