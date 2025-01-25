/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState{
    readonly content:string;
    readonly cursorPosition:number;
    readonly unSaveChanges:boolean;

    constructor(content:string,cursorPosition:number,unSaveChanges:boolean){
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unSaveChanges = unSaveChanges;
    }

    copyWith({content,cursorPosition,unSaveChanges}:Partial<CodeEditorState>):CodeEditorState{

        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unSaveChanges ?? this.unSaveChanges,
        )
    }

    displayState(){
        console.log('\n%cEstado del editor: ', COLORS.green);
        console.log(`
            contenido: ${this.content}
            cursor pos: ${this.cursorPosition}
            unsaved changes: ${this.unSaveChanges}
            `);
    }

}


class CodeEditorHistory{
    private history: CodeEditorState[] = [];
    private currenteIndex: number = -1;

    save(state:CodeEditorState):void{
 if(this.currenteIndex < this.history.length -1){
    this.history = this.history.splice(0,this.currenteIndex + 1)
 }

        this.history.push(state)
        this.currenteIndex++
    }


    undo():CodeEditorState | null {
    if(this.currenteIndex > 0){
        this.currenteIndex --
        return this.history[this.currenteIndex];
    }

return null;

    }

    reado(): CodeEditorState | null {
        if(this.currenteIndex < this.history.length -1){
            this.currenteIndex ++;
            return this.history[this.currenteIndex];
        }
        return null;
    }
}


function main(){
    const history = new CodeEditorHistory();
    let editorState= new CodeEditorState("console.log('Hola mundo')",2,false);

    history.save(editorState);

    console.log('%cEstado incial:',COLORS.blue);
    editorState.displayState();

    editorState = editorState.copyWith({
        content: "console.log('Nueva linea')",
        cursorPosition: 3,
        unSaveChanges:true
    })

    history.save(editorState)

    console.log('%cPrimer cambio:',COLORS.blue);
    editorState.displayState();


    editorState = editorState.copyWith({
        cursorPosition: 4,
    })


    history.save(editorState)

    console.log('%cSegundo cambio:',COLORS.blue);
    editorState.displayState();
    
    console.log('%cdespues del undo:',COLORS.blue);
    editorState = history.undo()!;
    editorState.displayState();
}

main();