/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


class DragonBalls{

   static instance:DragonBalls;

   private ballsCollected: number;

   private constructor(){
    this.ballsCollected = 0;
   }

   public static getInstance(): DragonBalls {
     if(!DragonBalls.instance){
        DragonBalls.instance = new DragonBalls()
        console.log('Las esferas han sido creadas');
     }
     return DragonBalls.instance;
   }

   collectBall():void{
    if(this.ballsCollected < 7){
        this.ballsCollected++;
        console.log(`Esfera recolectada. Total de esferas: ${this.ballsCollected}`);
        return;
    }
    console.log('Ya se han recolectado las 7 esferas del Dragon! Invoca a Shenglong');
      }

      summonShenlong(){
        if(this.ballsCollected == 7 ){
            console.log('Shenglong ha sido invocado, pide tu deseo!');
            this.ballsCollected = 0;
            return;
        }
        console.log(`Aún faltan ${7-this.ballsCollected} esferas para invocar a shenglong`);
      }
}



function main(){
const gokuDragonBalls =  DragonBalls.getInstance();

gokuDragonBalls.collectBall();
gokuDragonBalls.collectBall();
gokuDragonBalls.collectBall();
gokuDragonBalls.collectBall();



gokuDragonBalls.summonShenlong();

const vegetaDragonBalls =  DragonBalls.getInstance();


vegetaDragonBalls.collectBall();
vegetaDragonBalls.collectBall();
vegetaDragonBalls.collectBall();

gokuDragonBalls.summonShenlong();

vegetaDragonBalls.summonShenlong();


}

main();