class TodosController < ApplicationController
  respond_to :json
  def index
    @todos = Todo.send(params[:scope] || 'incomplete')
    respond_with @todos
  end

  def create
    if id=todo_params.delete(:id)
      @todo = Todo.find(id)
      @todo.update_attributes(todo_params)
    else
      @todo = Todo.create(todo_params)
    end
    
    respond_with @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:id, :label, :content, :is_complete)
  end


end