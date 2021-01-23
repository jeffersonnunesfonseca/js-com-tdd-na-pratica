/**
 * FUNCIONALIDADES DO MOCHA
 */

/**
 * describe
 * usado para separar métodos ou clasess
 */
describe("Main",function(){

  /**
   * roda 1x antes do bloco
   */
  before(function(){
    console.log("before");
  })

  /**
   * roda 1x depois do bloco
   */
  after(function(){
    console.log("after");
  })

  /**
   * roda antes de cada bloco
   */
  beforeEach(function(){
    console.log("beforeEach");
  })

  /**
   * roda depois de cada bloco
   */
  afterEach(function(){
    console.log("afterEach");
  })


  it("deve retornar 1",function(){
    console.log("it")
  });


  it("deve retornar 1",function(){
    console.log("it2")
  });


  // describe("Method A",function(){
  //   /**
  //    * context
  //    * serve para separar casos de testes
  //    */
  //   context("case 1",function(){
  //     /**
  //      * it
  //      * irá realizar o teste de fato
  //      */
  //     it("deve retornar 1",function(){
  //       return 1
  //     });

  //   });

  //   context("case 2",function(){
  //     /**
  //      * it
  //      * irá realizar o teste de fato
  //      */
  //     it("deve retornar 1",function(){
  //       throw new Error("error");
  //     });

  //   });

  //   /**
  //    * .only ira rodar somente esse teste
  //    */
  //   // context.only("case 3",function(){
  //   //   /**
  //   //    * it
  //   //    * irá realizar o teste de fato
  //   //    */
  //   //   it("deve retornar 1",function(){
  //   //     return 1;
  //   //   });

  //   // });

  //   /**
  //    * .skip
  //    * irá pular o teste desse caso
  //    */
  //   context.skip("case 4",function(){
  //     /**
  //      * it
  //      * irá realizar o teste de fato
  //      */
  //     it("deve retornar 1",function(){
  //       return 1;
  //     });

  //   });
  // })

});
