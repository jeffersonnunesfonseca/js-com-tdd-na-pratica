/**
 * FUNCIONALIDADES DO MOCHA
 */

/**
 * describe
 * usado para separar métodos ou clasess
 */
describe("Main",function(){
  var arr;

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
    arr=[1,2,3]
  })

  /**
   * roda depois de cada bloco
   */
  afterEach(function(){
    console.log("afterEach");
  })


  it("deve ter 4  itens",function(){
    console.log("it")
    arr.push(4)
    console.log(arr.length)
  });


  it("deve retornar que esta saindo o valor 3",function(){
    console.log("it2")
    console.log(arr.pop() ===3)
  });

  it("deve retornar o tamanho 2",function(){
    console.log("it2")
    arr.pop()
    console.log(arr.length)
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
