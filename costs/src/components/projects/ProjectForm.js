function ProjectForm(){
return (
    <form>
        <div>
            <input type="text" placeholder="Insira o nome do projeto"/>
        </div>
        <div>
            <input type="number" placeholder="Insira o preço tota"/>
            </div>
        <div>
            <select name="category_id">
            <option >Selecione a Categoria</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
)
}

export default ProjectForm