/**
 * FUNCIONALIDADES DO MOCHA E CHAI
 */
var expect = require("chai").expect;

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
    // console.log("before");
  });

  /**
   * roda 1x depois do bloco
   */
  after(function(){
    // console.log("after");
  })

  /**
   * roda antes de cada bloco
   */
  beforeEach(function(){
    // console.log("beforeEach");
    arr=[1,2,3]
  })

  /**
   * roda depois de cada bloco
   */
  afterEach(function(){
    // console.log("afterEach");
  })


  it("deve ter o tipo array",function(){
    expect(arr).to.be.a("array")
  });

  it("deve ter 4  itens",function(){
    arr.push(4)
    expect(arr).to.have.lengthOf(4)
  });


  it("deve retornar que esta saindo o valor 3",function(){
    // console.log("it2")
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it("deve retornar o tamanho 2",function(){
    // console.log("it2")
    arr.pop()
    expect(arr).to.have.lengthOf(2)
  });

  it("deve retornar tru se o valor for 3",function(){
    expect(arr.pop() ===3).to.be.true;
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
